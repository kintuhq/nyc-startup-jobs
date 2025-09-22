import DOMPurify from 'dompurify'
import { JSDOM } from 'jsdom'

// Create a JSDOM window for server-side DOMPurify
const window = new JSDOM('').window
const purify = DOMPurify(window)

/**
 * Sanitizes HTML content to prevent XSS attacks
 * Safe for use in email templates and other HTML contexts
 */
export function sanitizeHtml(dirty: string): string {
  return purify.sanitize(dirty, {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'p', 'br', 'ul', 'ol', 'li'],
    ALLOWED_ATTR: []
  })
}

/**
 * Escapes HTML entities for safe display in HTML contexts
 * Use this for plain text that should be displayed as-is
 */
export function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
}