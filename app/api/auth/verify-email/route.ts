import { NextRequest, NextResponse } from 'next/server'
import { verifyEmailToken } from '@/lib/auth'
import { sendWelcomeEmail } from '@/lib/email'
import { z } from 'zod'

const verifySchema = z.object({
  token: z.string().min(1),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { token } = verifySchema.parse(body)

    const email = await verifyEmailToken(token)
    if (!email) {
      return NextResponse.json({ error: 'Invalid or expired verification token' }, { status: 400 })
    }

    // Schedule welcome email to be sent 1 hour after successful verification
    try {
      const protocol = request.headers.get('x-forwarded-proto') || 'https'
      const host = request.headers.get('host') || 'nycstartupjobs.com'
      const baseUrl = `${protocol}://${host}`

      setTimeout(async () => {
        try {
          await sendWelcomeEmail(email, email, baseUrl)
        } catch (error) {
          console.error('Failed to send delayed welcome email:', error)
        }
      }, 60 * 60 * 1000) // 1 hour delay
    } catch (error) {
      console.error('Failed to schedule welcome email:', error)
    }

    return NextResponse.json({
      success: true,
      message: 'Email verified successfully! You can now post jobs.'
    })
  } catch (error) {
    console.error('Email verification error:', error)

    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid token format' }, { status: 400 })
    }

    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}