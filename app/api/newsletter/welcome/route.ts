import { NextRequest, NextResponse } from 'next/server'
import { sendNewsletterWelcomeEmail } from '@/lib/email'
import { z } from 'zod'

const welcomeSchema = z.object({
  name: z.string().optional(),
  email: z.string().email(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email } = welcomeSchema.parse(body)

    await sendNewsletterWelcomeEmail(email, name || 'Math Educator')

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Welcome email error:', error)
    return NextResponse.json(
      { error: 'Failed to send welcome email' },
      { status: 500 }
    )
  }
}