import type { Metadata } from "next"
import RoleBoroughPage from "@/components/RoleBoroughPage"

export const metadata: Metadata = {
  title: "Software Engineer Jobs in Queens - Frontend, Backend, Full Stack",
  description: "Find the latest Software Engineer job opportunities in Queens, NYC. Browse frontend, backend, and full stack engineering positions at Queens startups.",
  openGraph: {
    title: "Software Engineer Jobs in Queens - Frontend, Backend, Full Stack",
    description: "Find the latest Software Engineer job opportunities in Queens, NYC. Browse frontend, backend, and full stack engineering positions at Queens startups.",
  },
}

export default function SoftwareEngineerQueensPage() {
  return (
    <RoleBoroughPage
      role="Software Engineer (Frontend, Backend, Full Stack)"
      roleDisplayName="Software Engineer"
      borough="queens"
      boroughDisplayName="Queens"
      description="Develop innovative software solutions at Queens' emerging startup ecosystem"
      metaTitle="Software Engineer Jobs in Queens"
    />
  )
}