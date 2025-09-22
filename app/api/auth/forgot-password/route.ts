import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { companies } from '@/lib/db/schema'
import { createPasswordResetToken } from '@/lib/auth'
import { sendPasswordResetEmail } from '@/lib/email'
import { eq } from 'drizzle-orm'
import { z } from 'zod'

const forgotPasswordSchema = z.object({
  email: z.string().email(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = forgotPasswordSchema.parse(body)

    // Check if company exists
    const existingCompany = await db.select().from(companies).where(eq(companies.email, email)).limit(1)

    // Always return success to prevent email enumeration attacks
    // But only send email if the account actually exists
    if (existingCompany.length > 0) {
      try {
        const resetToken = await createPasswordResetToken(email)
        await sendPasswordResetEmail(email, resetToken)
      } catch (error) {
        console.error('Failed to send password reset email:', error)
        // Don't fail the request even if email sending fails
      }
    }

    return NextResponse.json({
      success: true,
      message: 'If an account with that email exists, a password reset link has been sent.'
    })
  } catch (error) {
    console.error('Forgot password error:', error)

    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }

    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}