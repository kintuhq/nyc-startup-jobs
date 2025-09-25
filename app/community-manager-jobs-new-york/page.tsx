import type { Metadata } from "next"
import RolePage from "@/components/RolePage"

export const metadata: Metadata = {
  title: "Community Jobs in NYC - Community Manager, Community Specialist",
  description: "Find the latest Community job opportunities in New York City. Browse community manager and community specialist positions at NYC startups.",
  openGraph: {
    title: "Community Jobs in NYC - Community Manager, Community Specialist",
    description: "Find the latest Community job opportunities in New York City. Browse community manager and community specialist positions at NYC startups.",
  },
}

export default function CommunityManagerPage() {
  return (
    <RolePage
      role="Community (Community Manager, Community Specialist)"
      roleDisplayName="Community"
      description="Discover exciting community opportunities at NYC's most innovative startups"
      metaTitle="Community Jobs in NYC"
    />
  )
}