import { NextRequest } from 'next/server'

interface RateLimitEntry {
  count: number
  resetTime: number
}

// In-memory store for rate limiting
const rateLimitStore = new Map<string, RateLimitEntry>()

export interface RateLimitConfig {
  windowMs: number // Time window in milliseconds
  maxRequests: number // Max requests per window
}

/**
 * Simple in-memory rate limiter
 * In production, consider using Redis or external rate limiting service
 */
export function rateLimit(config: RateLimitConfig) {
  return (request: NextRequest): { allowed: boolean; remaining: number; resetTime: number } => {
    const clientId = getClientId(request)
    const now = Date.now()
    const windowStart = now - config.windowMs

    // Clean up old entries
    cleanupExpiredEntries(windowStart)

    const entry = rateLimitStore.get(clientId) || { count: 0, resetTime: now + config.windowMs }

    // Reset if window has passed
    if (entry.resetTime <= now) {
      entry.count = 0
      entry.resetTime = now + config.windowMs
    }

    entry.count++
    rateLimitStore.set(clientId, entry)

    const allowed = entry.count <= config.maxRequests
    const remaining = Math.max(0, config.maxRequests - entry.count)

    return {
      allowed,
      remaining,
      resetTime: entry.resetTime
    }
  }
}

function getClientId(request: NextRequest): string {
  // Get IP address from various headers (for proxy/CDN support)
  const forwardedFor = request.headers.get('x-forwarded-for')
  const realIp = request.headers.get('x-real-ip')
  const cfConnectingIp = request.headers.get('cf-connecting-ip')

  const ip = forwardedFor?.split(',')[0]?.trim() ||
             realIp ||
             cfConnectingIp ||
             request.ip ||
             'unknown'

  return ip
}

function cleanupExpiredEntries(cutoffTime: number): void {
  for (const [key, entry] of rateLimitStore.entries()) {
    if (entry.resetTime <= cutoffTime) {
      rateLimitStore.delete(key)
    }
  }
}

// Predefined rate limit configurations
export const rateLimitConfigs = {
  // Very strict for auth endpoints
  auth: { windowMs: 15 * 60 * 1000, maxRequests: 5 }, // 5 attempts per 15 minutes

  // Moderate for contact forms
  contact: { windowMs: 60 * 1000, maxRequests: 3 }, // 3 per minute

  // Generous for newsletter signups
  newsletter: { windowMs: 60 * 1000, maxRequests: 5 }, // 5 per minute

  // Standard for general API usage
  api: { windowMs: 60 * 1000, maxRequests: 100 }, // 100 per minute
}