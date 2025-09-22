import { customAlphabet } from 'nanoid'

// Create a custom alphabet excluding confusing characters (0, O, I, l, 1)
const alphabet = '23456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz'
const nanoid = customAlphabet(alphabet, 6)

export function generateShortId(): string {
  return nanoid()
}

export function isValidShortId(id: string): boolean {
  return /^[23456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz]{6}$/.test(id)
}