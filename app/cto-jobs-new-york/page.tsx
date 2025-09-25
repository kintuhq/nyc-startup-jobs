import type { Metadata } from "next"
import RolePage from "@/components/RolePage"

export const metadata: Metadata = {
  title: "CTO Jobs in NYC - Chief Technology Officer, Tech Director",
  description: "Find the latest CTO job opportunities in New York City. Browse chief technology officer and tech director positions at NYC startups.",
  openGraph: {
    title: "CTO Jobs in NYC - Chief Technology Officer, Tech Director",
    description: "Find the latest CTO job opportunities in New York City. Browse chief technology officer and tech director positions at NYC startups.",
  },
}

export default function CTOPage() {
  return (
    <RolePage
      role="CTO (Chief Technology Officer, Tech Director)"
      roleDisplayName="CTO"
      description="Discover exciting CTO opportunities at NYC's most innovative startups"
      metaTitle="CTO Jobs in NYC"
    />
  )
}