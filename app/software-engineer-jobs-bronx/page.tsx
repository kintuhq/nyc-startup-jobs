import type { Metadata } from "next"
import RoleBoroughPage from "@/components/RoleBoroughPage"

export const metadata: Metadata = {
  title: "Software Engineer Jobs in The Bronx - Frontend, Backend, Full Stack",
  description: "Find the latest Software Engineer job opportunities in The Bronx, NYC. Browse frontend, backend, and full stack engineering positions at Bronx startups.",
  openGraph: {
    title: "Software Engineer Jobs in The Bronx - Frontend, Backend, Full Stack",
    description: "Find the latest Software Engineer job opportunities in The Bronx, NYC. Browse frontend, backend, and full stack engineering positions at Bronx startups.",
  },
}

export default function SoftwareEngineerBronxPage() {
  return (
    <RoleBoroughPage
      role="Software Engineer (Frontend, Backend, Full Stack)"
      roleDisplayName="Software Engineer"
      borough="bronx"
      boroughDisplayName="The Bronx"
      description="Build the future of technology at The Bronx's growing startup community"
      metaTitle="Software Engineer Jobs in The Bronx"
    />
  )
}