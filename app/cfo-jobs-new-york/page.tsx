import type { Metadata } from "next"
import RolePage from "@/components/RolePage"

export const metadata: Metadata = {
  title: "CFO Jobs in NYC - Chief Financial Officer, Finance Director",
  description: "Find the latest CFO job opportunities in New York City. Browse chief financial officer and finance director positions at NYC startups.",
  openGraph: {
    title: "CFO Jobs in NYC - Chief Financial Officer, Finance Director",
    description: "Find the latest CFO job opportunities in New York City. Browse chief financial officer and finance director positions at NYC startups.",
  },
}

export default function CFOPage() {
  return (
    <RolePage
      role="CFO (Chief Financial Officer, Finance Director)"
      roleDisplayName="CFO"
      description="Discover exciting CFO opportunities at NYC's most innovative startups"
      metaTitle="CFO Jobs in NYC"
    />
  )
}