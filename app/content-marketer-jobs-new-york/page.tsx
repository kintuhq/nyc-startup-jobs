import type { Metadata } from "next"
import RolePage from "@/components/RolePage"

export const metadata: Metadata = {
  title: "Content Marketing Jobs in NYC - Content Marketer, Content Strategist",
  description: "Find the latest Content Marketing job opportunities in New York City. Browse content marketer and content strategist positions at NYC startups.",
  openGraph: {
    title: "Content Marketing Jobs in NYC - Content Marketer, Content Strategist",
    description: "Find the latest Content Marketing job opportunities in New York City. Browse content marketer and content strategist positions at NYC startups.",
  },
}

export default function ContentMarketerPage() {
  return (
    <RolePage
      role="Content Marketing (Content Marketer, Content Strategist)"
      roleDisplayName="Content Marketing"
      description="Discover exciting content marketing opportunities at NYC's most innovative startups"
      metaTitle="Content Marketing Jobs in NYC"
    />
  )
}