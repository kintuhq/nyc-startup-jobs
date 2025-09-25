import type { Metadata } from "next"
import RoleBoroughPage from "@/components/RoleBoroughPage"

export const metadata: Metadata = {
  title: "Software Engineer Jobs in Brooklyn - Frontend, Backend, Full Stack",
  description: "Find the latest Software Engineer job opportunities in Brooklyn, NYC. Browse frontend, backend, and full stack engineering positions at Brooklyn startups.",
  openGraph: {
    title: "Software Engineer Jobs in Brooklyn - Frontend, Backend, Full Stack",
    description: "Find the latest Software Engineer job opportunities in Brooklyn, NYC. Browse frontend, backend, and full stack engineering positions at Brooklyn startups.",
  },
}

export default function SoftwareEngineerBrooklynPage() {
  return (
    <RoleBoroughPage
      role="Software Engineer (Frontend, Backend, Full Stack)"
      roleDisplayName="Software Engineer"
      borough="brooklyn"
      boroughDisplayName="Brooklyn"
      description="Join Brooklyn's thriving tech scene as a software engineer at innovative startup companies"
      metaTitle="Software Engineer Jobs in Brooklyn"
    />
  )
}