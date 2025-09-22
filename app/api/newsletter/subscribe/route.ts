import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { newsletterSubscribers } from '@/lib/db/schema'
import { rateLimit, rateLimitConfigs } from '@/lib/rate-limit'
import { eq } from 'drizzle-orm'
import { z } from 'zod'

const subscribeSchema = z.object({
  name: z.string().optional(),
  email: z.string().email('Please enter a valid email address'),
})

export async function POST(request: NextRequest) {
  try {
    // Apply rate limiting
    const limiter = rateLimit(rateLimitConfigs.newsletter)
    const { allowed, remaining, resetTime } = limiter(request)

    if (!allowed) {
      return NextResponse.json(
        { error: 'Too many newsletter subscription attempts. Please try again later.' },
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
    const { name, email } = subscribeSchema.parse(body)

    // Check if email already exists
    const existingSubscriber = await db
      .select()
      .from(newsletterSubscribers)
      .where(eq(newsletterSubscribers.email, email))
      .limit(1)

    if (existingSubscriber.length > 0) {
      // If exists but inactive, reactivate
      if (!existingSubscriber[0].active) {
        const updateData = {
          active: true,
          updatedAt: new Date(),
          ...(name && { name })
        }

        await db
          .update(newsletterSubscribers)
          .set(updateData)
          .where(eq(newsletterSubscribers.email, email))

        return NextResponse.json({
          success: true,
          message: 'Welcome back! Your subscription has been reactivated.'
        })
      }

      return NextResponse.json({
        error: 'You are already subscribed to our newsletter!'
      }, { status: 400 })
    }

    // Create new subscriber
    const insertData = {
      email,
      ...(name && { name })
    }

    const [subscriber] = await db.insert(newsletterSubscribers).values(insertData).returning()

    // Send welcome email (optional - you can implement this later)
    try {
      const welcomeData = { email, ...(name && { name }) }
      await fetch('/api/newsletter/welcome', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(welcomeData),
      })
    } catch (error) {
      console.log('Welcome email failed (non-critical):', error)
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you for subscribing! You will receive notifications about new math teaching positions.',
      subscriber: {
        id: subscriber.id,
        name: subscriber.name,
        email: subscriber.email,
      }
    })

  } catch (error) {
    console.error('Newsletter subscription error:', error)

    if (error instanceof z.ZodError) {
      return NextResponse.json({
        error: error.errors[0]?.message || 'Invalid input data'
      }, { status: 400 })
    }

    return NextResponse.json({
      error: 'Something went wrong. Please try again.'
    }, { status: 500 })
  }
}