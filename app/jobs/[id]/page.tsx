import type { Metadata } from "next"
import JobDetailComponent from "./JobDetailComponent"

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/jobs/${params.id}`, {
      cache: 'force-cache'
    })

    if (response.ok) {
      const job = await response.json()
      return {
        title: `${job.title} at ${job.company.name} - NYC Startup Jobs`,
        description: job.shortBio || `${job.title} position at ${job.company.name} in ${job.location}. Apply now for this ${job.type} opportunity at a NYC startup.`,
        openGraph: {
          title: `${job.title} at ${job.company.name} - NYC Startup Jobs`,
          description: job.shortBio || `${job.title} position at ${job.company.name} in ${job.location}. Apply now for this ${job.type} opportunity at a NYC startup.`,
        },
      }
    }
  } catch (error) {
    console.error('Error generating metadata:', error)
  }

  return {
    title: "Job Details - NYC Startup Jobs",
    description: "View job details and apply for startup opportunities in New York City.",
  }
}

export default function JobDetailPage() {
  return <JobDetailComponent />
}