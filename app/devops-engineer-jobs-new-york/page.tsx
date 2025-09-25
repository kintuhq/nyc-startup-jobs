import type { Metadata } from "next"
import RolePage from "@/components/RolePage"

export const metadata: Metadata = {
  title: "DevOps Engineer Jobs in New York City - Infrastructure Engineering",
  description: "Find the latest DevOps and Infrastructure Engineer job opportunities in New York City. Build scalable systems at NYC's fastest-growing startups.",
  openGraph: {
    title: "DevOps Engineer Jobs in New York City - Infrastructure Engineering",
    description: "Find the latest DevOps and Infrastructure Engineer job opportunities in New York City. Build scalable systems at NYC's fastest-growing startups.",
  },
}

export default function DevOpsEngineerPage() {
  return (
    <RolePage
      role="DevOps / Infrastructure Engineer"
      roleDisplayName="DevOps Engineer"
      description="Build and scale infrastructure at NYC's most innovative tech startups"
      metaTitle="DevOps Engineer Jobs in New York City"
    />
  )
}