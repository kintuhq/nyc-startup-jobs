import type { Metadata } from "next"
import RolePage from "@/components/RolePage"

export const metadata: Metadata = {
  title: "HR Jobs in NYC - Human Resources Manager, Recruiter, People Ops",
  description: "Find the latest HR job opportunities in New York City. Browse human resources manager, recruiter, and people operations positions at NYC startups.",
  openGraph: {
    title: "HR Jobs in NYC - Human Resources Manager, Recruiter, People Ops",
    description: "Find the latest HR job opportunities in New York City. Browse human resources manager, recruiter, and people operations positions at NYC startups.",
  },
}

export default function HRPage() {
  return (
    <RolePage
      role="HR (Human Resources Manager, Recruiter, People Ops)"
      roleDisplayName="HR"
      description="Discover exciting HR opportunities at NYC's most innovative startups"
      metaTitle="HR Jobs in NYC"
    />
  )
}