import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { jobs, companies } from '@/lib/db/schema'
import { requireAuth } from '@/lib/auth'
import { eq, and, or } from 'drizzle-orm'
import { z } from 'zod'
import { isValidShortId } from '@/lib/short-id'

const jobUpdateSchema = z.object({
  title: z.string().min(1).optional(),
  location: z.string().min(1).optional(),
  type: z.enum(['full-time', 'part-time', 'contractor', 'internship']).optional(),
  role: z.string().optional(),
  shortBio: z.string().min(1).optional(),
  jobSpec: z.string().min(1).optional(),
  aboutCompany: z.string().min(1).optional(),
  howToApply: z.string().min(1).optional(),
  companyName: z.string().min(1).optional(),
  companyUrl: z.string().url().optional(),
  companyLogo: z.string().url().optional(),
  published: z.boolean().optional(),
})

// GET /api/jobs/[id] - Get a specific job
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Determine if the ID is a short ID or UUID
    const isShortId = isValidShortId(params.id)

    const [job] = await db
      .select({
        id: jobs.id,
        shortId: jobs.shortId,
        title: jobs.title,
        location: jobs.location,
        type: jobs.type,
        role: jobs.role,
        shortBio: jobs.shortBio,
        jobSpec: jobs.jobSpec,
        aboutCompany: jobs.aboutCompany,
        howToApply: jobs.howToApply,
        published: jobs.published,
        createdAt: jobs.createdAt,
        updatedAt: jobs.updatedAt,
        company: {
          id: companies.id,
          name: jobs.companyName,
          logo: jobs.companyLogo,
          url: jobs.companyUrl,
        },
      })
      .from(jobs)
      .innerJoin(companies, eq(jobs.companyId, companies.id))
      .where(isShortId ? eq(jobs.shortId, params.id) : eq(jobs.id, params.id))
      .limit(1)

    if (!job) {
      return NextResponse.json({ error: 'Job not found' }, { status: 404 })
    }

    return NextResponse.json(job)
  } catch (error) {
    console.error('Error fetching job:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// PUT /api/jobs/[id] - Update a job
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await requireAuth()
    const body = await request.json()
    const updateData = jobUpdateSchema.parse(body)

    // Determine if the ID is a short ID or UUID
    const isShortId = isValidShortId(params.id)

    const [updatedJob] = await db
      .update(jobs)
      .set({
        ...updateData,
        updatedAt: new Date(),
      })
      .where(
        and(
          isShortId ? eq(jobs.shortId, params.id) : eq(jobs.id, params.id),
          eq(jobs.companyId, session.companyId)
        )
      )
      .returning()

    if (!updatedJob) {
      return NextResponse.json({ error: 'Job not found or not authorized' }, { status: 404 })
    }

    return NextResponse.json(updatedJob)
  } catch (error) {
    console.error('Error updating job:', error)

    if (error instanceof z.ZodError) {
      console.error('Validation error:', error.errors)
      return NextResponse.json({
        error: 'Invalid input data',
        details: error.errors
      }, { status: 400 })
    }

    if (error instanceof Error && error.message === 'Authentication required') {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 })
    }

    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// DELETE /api/jobs/[id] - Delete a job
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await requireAuth()

    // Determine if the ID is a short ID or UUID
    const isShortId = isValidShortId(params.id)

    const [deletedJob] = await db
      .delete(jobs)
      .where(
        and(
          isShortId ? eq(jobs.shortId, params.id) : eq(jobs.id, params.id),
          eq(jobs.companyId, session.companyId)
        )
      )
      .returning()

    if (!deletedJob) {
      return NextResponse.json({ error: 'Job not found or not authorized' }, { status: 404 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting job:', error)

    if (error instanceof Error && error.message === 'Authentication required') {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 })
    }

    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}