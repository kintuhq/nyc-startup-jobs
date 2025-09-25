import type { Metadata } from "next"
import RolePage from "@/components/RolePage"

export const metadata: Metadata = {
  title: "Social Media Jobs in NYC - Social Media Manager, Content Creator",
  description: "Find the latest Social Media job opportunities in New York City. Browse social media manager and content creator positions at NYC startups.",
  openGraph: {
    title: "Social Media Jobs in NYC - Social Media Manager, Content Creator",
    description: "Find the latest Social Media job opportunities in New York City. Browse social media manager and content creator positions at NYC startups.",
  },
}

export default function SocialMediaPage() {
  return (
    <RolePage
      role="Social Media (Social Media Manager, Content Creator)"
      roleDisplayName="Social Media"
      description="Discover exciting social media opportunities at NYC's most innovative startups"
      metaTitle="Social Media Jobs in NYC"
    />
  )
}