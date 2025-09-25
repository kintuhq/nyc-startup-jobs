import type { Metadata } from "next"
import RolePage from "@/components/RolePage"

export const metadata: Metadata = {
  title: "Customer Support Jobs in NYC - Support Specialist, Help Desk",
  description: "Find the latest Customer Support job opportunities in New York City. Browse support specialist and help desk positions at NYC startups.",
  openGraph: {
    title: "Customer Support Jobs in NYC - Support Specialist, Help Desk",
    description: "Find the latest Customer Support job opportunities in New York City. Browse support specialist and help desk positions at NYC startups.",
  },
}

export default function CustomerSupportPage() {
  return (
    <RolePage
      role="Customer Support (Support Specialist, Help Desk)"
      roleDisplayName="Customer Support"
      description="Discover exciting customer support opportunities at NYC's most innovative startups"
      metaTitle="Customer Support Jobs in NYC"
    />
  )
}