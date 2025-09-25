import type { Metadata } from "next"
import RoleBoroughPage from "@/components/RoleBoroughPage"

export const metadata: Metadata = {
  title: "Software Engineer Jobs in Manhattan - Frontend, Backend, Full Stack",
  description: "Find the latest Software Engineer job opportunities in Manhattan, NYC. Browse frontend, backend, and full stack engineering positions at Manhattan startups.",
  openGraph: {
    title: "Software Engineer Jobs in Manhattan - Frontend, Backend, Full Stack",
    description: "Find the latest Software Engineer job opportunities in Manhattan, NYC. Browse frontend, backend, and full stack engineering positions at Manhattan startups.",
  },
}

export default function SoftwareEngineerManhattanPage() {
  return (
    <RoleBoroughPage
      role="Software Engineer (Frontend, Backend, Full Stack)"
      roleDisplayName="Software Engineer"
      borough="manhattan"
      boroughDisplayName="Manhattan"
      description="Build cutting-edge software solutions at Manhattan's most innovative tech startups"
      metaTitle="Software Engineer Jobs in Manhattan"
    />
  )
}