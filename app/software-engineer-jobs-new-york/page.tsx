import type { Metadata } from "next"
import RolePage from "@/components/RolePage"

export const metadata: Metadata = {
  title: "Software Engineer Jobs in NYC - Frontend, Backend, Full Stack",
  description: "Find the latest Software Engineer job opportunities in New York City. Browse frontend, backend, and full stack engineering positions at NYC startups.",
  openGraph: {
    title: "Software Engineer Jobs in NYC - Frontend, Backend, Full Stack",
    description: "Find the latest Software Engineer job opportunities in New York City. Browse frontend, backend, and full stack engineering positions at NYC startups.",
  },
}

export default function SoftwareEngineerPage() {
  return (
    <RolePage
      role="Software Engineer (Frontend, Backend, Full Stack)"
      roleDisplayName="Software Engineer"
      description="Discover exciting software engineering opportunities at NYC's most innovative startups"
      metaTitle="Software Engineer Jobs in NYC"
    />
  )
}