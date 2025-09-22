import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { jobs, companies, newsletterSubscribers } from '@/lib/db/schema'
import { requireAuth, requireVerifiedAuth } from '@/lib/auth'
import { sendJobNotificationEmail } from '@/lib/email'
import { eq, desc } from 'drizzle-orm'
import { z } from 'zod'
import { generateShortId } from '@/lib/short-id'

const jobSchema = z.object({
  title: z.string().min(1),
  location: z.enum(['Manhattan', 'Brooklyn', 'Queens', 'The Bronx', 'Staten Island']),
  type: z.enum(['full-time', 'part-time', 'contractor', 'internship']),
  role: z.string().optional(),
  shortBio: z.string().min(1),
  jobSpec: z.string().min(1),
  aboutCompany: z.string().min(1),
  howToApply: z.string().min(1),
  companyName: z.string().min(1).optional(),
  companyUrl: z.string().url().optional(),
  companyLogo: z.string().url().optional(),
})

// GET /api/jobs - Get all published jobs
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const limit = parseInt(searchParams.get('limit') || '20')
    const offset = parseInt(searchParams.get('offset') || '0')

    // Optimized query - only select what we need for the home page cards
    const allJobs = await db
      .select({
        id: jobs.id,
        shortId: jobs.shortId,
        title: jobs.title,
        location: jobs.location,
        type: jobs.type,
        role: jobs.role,
        createdAt: jobs.createdAt,
        company: {
          id: jobs.companyId,
          name: jobs.companyName,
          logo: jobs.companyLogo,
          url: jobs.companyUrl,
        },
      })
      .from(jobs)
      .where(eq(jobs.published, true))
      .orderBy(desc(jobs.createdAt))
      .limit(limit)
      .offset(offset)


    const response = NextResponse.json(allJobs)
    // Add efficient caching - cache for 1 minute
    response.headers.set('Cache-Control', 'public, max-age=60, stale-while-revalidate=30')
    return response
  } catch (error) {
    console.error('Error fetching jobs:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// POST /api/jobs - Create a new job
export async function POST(request: NextRequest) {
  try {
    const session = await requireVerifiedAuth()
    const body = await request.json()
    console.log('Received job data:', body)
    const jobData = jobSchema.parse(body)
    console.log('Parsed job data:', jobData)

    // Generate a unique short ID
    let shortId: string
    let isUnique = false
    let attempts = 0
    const maxAttempts = 10

    do {
      shortId = generateShortId()
      const existing = await db
        .select({ id: jobs.id })
        .from(jobs)
        .where(eq(jobs.shortId, shortId))
        .limit(1)

      isUnique = existing.length === 0
      attempts++
    } while (!isUnique && attempts < maxAttempts)

    if (!isUnique) {
      throw new Error('Unable to generate unique short ID')
    }

    const [job] = await db.insert(jobs).values({
      ...jobData,
      shortId,
      companyId: session.companyId,
    }).returning()

    // Get company info for email notifications
    const [company] = await db
      .select({
        id: companies.id,
        name: companies.name,
        logo: companies.logo,
      })
      .from(companies)
      .where(eq(companies.id, session.companyId))
      .limit(1)

    // Send notifications to newsletter subscribers (async, non-blocking)
    if (company) {
      const jobWithCompany = {
        ...job,
        company: company
      }

      // Get all active newsletter subscribers
      const subscribers = await db
        .select({
          email: newsletterSubscribers.email,
          name: newsletterSubscribers.name,
        })
        .from(newsletterSubscribers)
        .where(eq(newsletterSubscribers.active, true))

      // Send emails asynchronously without blocking the response
      Promise.all(
        subscribers.map(subscriber =>
          sendJobNotificationEmail(subscriber.email, subscriber.name, jobWithCompany)
            .catch(error => console.error(`Failed to send notification to ${subscriber.email}:`, error))
        )
      ).catch(error => console.error('Error sending job notifications:', error))
    }

    return NextResponse.json(job, { status: 201 })
  } catch (error) {
    console.error('Error creating job:', error)

    if (error instanceof z.ZodError) {
      console.log('Zod validation errors:', error.errors)
      return NextResponse.json({
        error: 'Invalid input data',
        details: error.errors
      }, { status: 400 })
    }

    if (error instanceof Error && error.message === 'Authentication required') {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 })
    }

    if (error instanceof Error && error.message === 'Email verification required') {
      return NextResponse.json({ error: 'Email verification required. Please check your email and verify your account.' }, { status: 403 })
    }

    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}