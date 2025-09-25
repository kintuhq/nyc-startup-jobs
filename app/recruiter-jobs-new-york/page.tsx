import type { Metadata } from "next"
import RolePage from "@/components/RolePage"

export const metadata: Metadata = {
  title: "Recruiting Jobs in NYC - Recruiter, Talent Acquisition, Sourcer",
  description: "Find the latest Recruiting job opportunities in New York City. Browse recruiter, talent acquisition, and sourcer positions at NYC startups.",
  openGraph: {
    title: "Recruiting Jobs in NYC - Recruiter, Talent Acquisition, Sourcer",
    description: "Find the latest Recruiting job opportunities in New York City. Browse recruiter, talent acquisition, and sourcer positions at NYC startups.",
  },
}

export default function RecruiterPage() {
  return (
    <RolePage
      role="Recruiting (Recruiter, Talent Acquisition, Sourcer)"
      roleDisplayName="Recruiting"
      description="Discover exciting recruiting opportunities at NYC's most innovative startups"
      metaTitle="Recruiting Jobs in NYC"
    />
  )
}