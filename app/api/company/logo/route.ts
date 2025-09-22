import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { companies } from '@/lib/db/schema'
import { requireAuth } from '@/lib/auth'
import { eq } from 'drizzle-orm'
import { z } from 'zod'

const logoUpdateSchema = z.object({
  logoUrl: z.string().url(),
})

export async function PUT(request: NextRequest) {
  try {
    const session = await requireAuth()
    const body = await request.json()
    const { logoUrl } = logoUpdateSchema.parse(body)

    const [updatedCompany] = await db
      .update(companies)
      .set({
        logo: logoUrl,
        updatedAt: new Date(),
      })
      .where(eq(companies.id, session.companyId))
      .returning()

    if (!updatedCompany) {
      return NextResponse.json({ error: 'Company not found' }, { status: 404 })
    }

    return NextResponse.json({
      success: true,
      logoUrl: updatedCompany.logo,
    })
  } catch (error) {
    console.error('Error updating company logo:', error)

    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid logo URL' }, { status: 400 })
    }

    if (error instanceof Error && error.message === 'Authentication required') {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 })
    }

    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}