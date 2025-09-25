import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl

  // Borough redirects
  const boroughRedirects: Record<string, string> = {
    '/manhattan': '/manhattan-jobs-new-york',
    '/brooklyn': '/brooklyn-jobs-new-york',
    '/queens': '/queens-jobs-new-york',
    '/bronx': '/bronx-jobs-new-york',
    '/staten-island': '/staten-island-jobs-new-york',
  }

  // Role redirects
  const roleRedirects: Record<string, string> = {
    '/roles/software-engineer': '/software-engineer-jobs-new-york',
    '/roles/product-manager': '/product-manager-jobs-new-york',
    '/roles/data-scientist': '/data-scientist-jobs-new-york',
    '/roles/mobile-engineer': '/mobile-engineer-jobs-new-york',
    '/roles/product-designer': '/product-designer-jobs-new-york',
    '/roles/growth-marketer': '/growth-marketer-jobs-new-york',
  }

  // Check for borough redirects
  if (boroughRedirects[url.pathname]) {
    return NextResponse.redirect(new URL(boroughRedirects[url.pathname], request.url))
  }

  // Check for role redirects
  if (roleRedirects[url.pathname]) {
    return NextResponse.redirect(new URL(roleRedirects[url.pathname], request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/manhattan',
    '/brooklyn',
    '/queens',
    '/bronx',
    '/staten-island',
    '/roles/:path*'
  ]
}