import type { Metadata } from "next"
import RolePage from "@/components/RolePage"

export const metadata: Metadata = {
  title: "Executive Assistant Jobs in NYC - Executive Support, Admin Assistant",
  description: "Find the latest Executive Assistant job opportunities in New York City. Browse executive support and admin assistant positions at NYC startups.",
  openGraph: {
    title: "Executive Assistant Jobs in NYC - Executive Support, Admin Assistant",
    description: "Find the latest Executive Assistant job opportunities in New York City. Browse executive support and admin assistant positions at NYC startups.",
  },
}

export default function ExecutiveAssistantPage() {
  return (
    <RolePage
      role="Executive Assistant (Executive Support, Admin Assistant)"
      roleDisplayName="Executive Assistant"
      description="Discover exciting executive assistant opportunities at NYC's most innovative startups"
      metaTitle="Executive Assistant Jobs in NYC"
    />
  )
}