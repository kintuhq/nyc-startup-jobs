import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { jobs, companies } from '@/lib/db/schema'
import { requireAuth } from '@/lib/auth'
import { eq, desc } from 'drizzle-orm'

export async function GET() {
  try {
    const session = await requireAuth()

    // Get company info
    const [company] = await db
      .select({
        id: companies.id,
        name: companies.name,
        email: companies.email,
        bio: companies.bio,
        logo: companies.logo,
        verified: companies.verified,
      })
      .from(companies)
      .where(eq(companies.id, session.companyId))
      .limit(1)

    // Get company's jobs
    const companyJobs = await db
      .select()
      .from(jobs)
      .where(eq(jobs.companyId, session.companyId))
      .orderBy(desc(jobs.createdAt))

    return NextResponse.json({
      company,
      jobs: companyJobs,
    })
  } catch (error) {
    console.error('Error fetching dashboard data:', error)

    if (error instanceof Error && error.message === 'Authentication required') {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 })
    }

    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}