import { NextRequest, NextResponse } from 'next/server'
import { verifyPasswordResetToken } from '@/lib/auth'
import { z } from 'zod'

const validateTokenSchema = z.object({
  token: z.string(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { token } = validateTokenSchema.parse(body)

    const email = await verifyPasswordResetToken(token)

    if (!email) {
      return NextResponse.json({ error: 'Invalid or expired token' }, { status: 400 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Token validation error:', error)

    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 400 })
    }

    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}