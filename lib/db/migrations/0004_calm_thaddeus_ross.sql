-- Add short_id column to jobs table
ALTER TABLE "jobs" ADD COLUMN "short_id" text;

-- Update existing jobs with generated short IDs using a simpler approach
UPDATE "jobs" SET "short_id" =
  substr(replace(replace(replace(gen_random_uuid()::text, '-', ''), '0', 'A'), '1', 'B'), 1, 6)
WHERE "short_id" IS NULL;

-- Make short_id NOT NULL and add unique constraint
ALTER TABLE "jobs" ALTER COLUMN "short_id" SET NOT NULL;
ALTER TABLE "jobs" ADD CONSTRAINT "jobs_short_id_unique" UNIQUE("short_id");