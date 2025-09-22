import type { Config } from 'drizzle-kit'

export default {
  schema: './lib/db/schema.ts',
  out: './lib/db/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL || 'postgresql://neondb_owner:npg_PD0MaH5zhvSp@ep-super-queen-adhqxkwi-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require',
  },
} satisfies Config