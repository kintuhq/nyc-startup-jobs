import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { companies } from '@/lib/db/schema'
import { consumePasswordResetToken, hashPassword } from '@/lib/auth'
import { eq } from 'drizzle-orm'
import { z } from 'zod'

const resetPasswordSchema = z.object({
  token: z.string(),
  password: z.string().min(8),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { token, password } = resetPasswordSchema.parse(body)

    // Verify and consume the token
    const email = await consumePasswordResetToken(token)

    if (!email) {
      return NextResponse.json({ error: 'Invalid or expired token' }, { status: 400 })
    }

    // Update the password
    const hashedPassword = await hashPassword(password)
    await db.update(companies)
      .set({
        password: hashedPassword,
        updatedAt: new Date()
      })
      .where(eq(companies.email, email))

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Password reset error:', error)

    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid input data' }, { status: 400 })
    }

    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}