import { NextRequest, NextResponse } from 'next/server'
import { requireAuth } from '@/lib/auth'
import { uploadLogo } from '@/lib/storage'
import { rateLimit, rateLimitConfigs } from '@/lib/rate-limit'

export async function POST(request: NextRequest) {
  try {
    console.log('=== UPLOAD API STARTED ===')

    // Apply rate limiting
    const limiter = rateLimit(rateLimitConfigs.api)
    const { allowed, remaining, resetTime } = limiter(request)

    if (!allowed) {
      console.log('Rate limit exceeded')
      return NextResponse.json(
        { error: 'Too many upload requests. Please try again later.' },
        {
          status: 429,
          headers: {
            'X-RateLimit-Remaining': remaining.toString(),
            'X-RateLimit-Reset': resetTime.toString(),
          }
        }
      )
    }

    console.log('Checking authentication...')
    const session = await requireAuth()
    console.log('Session:', { companyId: session.companyId, email: session.email })

    console.log('Parsing form data...')
    const formData = await request.formData()
    const file = formData.get('file') as File

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 })
    }

    console.log('File details:', {
      name: file.name,
      size: file.size,
      type: file.type
    })

    // Validate file
    if (!file.type.startsWith('image/')) {
      return NextResponse.json({ error: 'File must be an image' }, { status: 400 })
    }

    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json({ error: 'File size must be less than 5MB' }, { status: 400 })
    }

    console.log('Uploading file to R2...')
    const fileUrl = await uploadLogo(file, session.companyId)
    console.log('Upload successful, file URL:', fileUrl)

    console.log('=== UPLOAD API SUCCESS ===')
    return NextResponse.json({
      fileUrl,
    })
  } catch (error) {
    console.error('=== UPLOAD API ERROR ===')
    console.error('Error uploading file:', error)
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace')

    if (error instanceof Error && error.message === 'Authentication required') {
      console.error('Authentication error')
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 })
    }

    console.error('Unknown error type:', typeof error)
    return NextResponse.json({
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}