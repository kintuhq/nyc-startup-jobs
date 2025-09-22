import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { companies } from '@/lib/db/schema'
import { hashPassword, createToken, createEmailVerificationToken } from '@/lib/auth'
import { sendEmailVerificationEmail } from '@/lib/email'
import { rateLimit, rateLimitConfigs } from '@/lib/rate-limit'
import { eq } from 'drizzle-orm'
import { z } from 'zod'

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

export async function POST(request: NextRequest) {
  try {
    // Apply rate limiting
    const limiter = rateLimit(rateLimitConfigs.auth)
    const { allowed, remaining, resetTime } = limiter(request)

    if (!allowed) {
      return NextResponse.json(
        { error: 'Too many registration attempts. Please try again later.' },
        {
          status: 429,
          headers: {
            'X-RateLimit-Remaining': remaining.toString(),
            'X-RateLimit-Reset': resetTime.toString(),
          }
        }
      )
    }

    const body = await request.json()
    const { email, password } = registerSchema.parse(body)

    // Check if company already exists
    const existingCompany = await db.select().from(companies).where(eq(companies.email, email)).limit(1)
    if (existingCompany.length > 0) {
      return NextResponse.json({ error: 'Company already exists' }, { status: 400 })
    }

    // Create company
    const hashedPassword = await hashPassword(password)
    const [company] = await db.insert(companies).values({
      email,
      password: hashedPassword,
    }).returning()

    // Send email verification
    try {
      const verificationToken = await createEmailVerificationToken(email)
      const protocol = request.headers.get('x-forwarded-proto') || 'https'
      const host = request.headers.get('host') || 'datahire.co'
      const baseUrl = `${protocol}://${host}`
      await sendEmailVerificationEmail(email, verificationToken, baseUrl)
    } catch (error) {
      console.error('Failed to send verification email:', error)
    }

    // Create session token
    const token = createToken({ companyId: company.id, email: company.email })

    const response = NextResponse.json({
      success: true,
      company: { id: company.id, email: company.email, name: company.name }
    })

    response.cookies.set('auth-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    })

    return response
  } catch (error) {
    console.error('Registration error:', error)

    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid input data' }, { status: 400 })
    }

    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}