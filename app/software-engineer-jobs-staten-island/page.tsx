import type { Metadata } from "next"
import RoleBoroughPage from "@/components/RoleBoroughPage"

export const metadata: Metadata = {
  title: "Software Engineer Jobs in Staten Island - Frontend, Backend, Full Stack",
  description: "Find the latest Software Engineer job opportunities in Staten Island, NYC. Browse frontend, backend, and full stack engineering positions at Staten Island startups.",
  openGraph: {
    title: "Software Engineer Jobs in Staten Island - Frontend, Backend, Full Stack",
    description: "Find the latest Software Engineer job opportunities in Staten Island, NYC. Browse frontend, backend, and full stack engineering positions at Staten Island startups.",
  },
}

export default function SoftwareEngineerStatenIslandPage() {
  return (
    <RoleBoroughPage
      role="Software Engineer (Frontend, Backend, Full Stack)"
      roleDisplayName="Software Engineer"
      borough="staten-island"
      boroughDisplayName="Staten Island"
      description="Join Staten Island's developing tech scene as a software engineer at innovative startups"
      metaTitle="Software Engineer Jobs in Staten Island"
    />
  )
}