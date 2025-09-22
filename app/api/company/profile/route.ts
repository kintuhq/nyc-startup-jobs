import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { companies } from '@/lib/db/schema'
import { requireAuth } from '@/lib/auth'
import { eq } from 'drizzle-orm'
import { z } from 'zod'

const companyUpdateSchema = z.object({
  name: z.string().min(1).optional(),
  url: z.string().url().optional().or(z.literal("")),
})

// GET /api/company/profile - Get company profile
export async function GET(request: NextRequest) {
  try {
    const session = await requireAuth()

    const [company] = await db
      .select({
        id: companies.id,
        name: companies.name,
        url: companies.url,
        bio: companies.bio,
        logo: companies.logo,
      })
      .from(companies)
      .where(eq(companies.id, session.companyId))
      .limit(1)

    if (!company) {
      return NextResponse.json({ error: 'Company not found' }, { status: 404 })
    }

    return NextResponse.json(company)
  } catch (error) {
    console.error('Error fetching company profile:', error)

    if (error instanceof Error && error.message === 'Authentication required') {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 })
    }

    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// PUT /api/company/profile - Update company profile
export async function PUT(request: NextRequest) {
  try {
    const session = await requireAuth()
    const body = await request.json()
    const updateData = companyUpdateSchema.parse(body)

    // Remove empty strings for optional fields
    const cleanedData = Object.fromEntries(
      Object.entries(updateData).filter(([_, value]) => value !== "")
    )

    const [updatedCompany] = await db
      .update(companies)
      .set({
        ...cleanedData,
        updatedAt: new Date(),
      })
      .where(eq(companies.id, session.companyId))
      .returning()

    if (!updatedCompany) {
      return NextResponse.json({ error: 'Company not found' }, { status: 404 })
    }

    return NextResponse.json(updatedCompany)
  } catch (error) {
    console.error('Error updating company profile:', error)

    if (error instanceof z.ZodError) {
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