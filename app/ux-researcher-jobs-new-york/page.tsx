import type { Metadata } from "next"
import RolePage from "@/components/RolePage"

export const metadata: Metadata = {
  title: "UX Researcher Jobs in New York City - User Experience Research",
  description: "Find the latest UX Researcher job opportunities in New York City. Drive user-centered design decisions at NYC's most innovative startups.",
  openGraph: {
    title: "UX Researcher Jobs in New York City - User Experience Research",
    description: "Find the latest UX Researcher job opportunities in New York City. Drive user-centered design decisions at NYC's most innovative startups.",
  },
}

export default function UXResearcherPage() {
  return (
    <RolePage
      role="UX Researcher"
      roleDisplayName="UX Researcher"
      description="Uncover user insights and drive product decisions at NYC's most user-focused startups"
      metaTitle="UX Researcher Jobs in New York City"
    />
  )
}