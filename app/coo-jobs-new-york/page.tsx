import type { Metadata } from "next"
import RolePage from "@/components/RolePage"

export const metadata: Metadata = {
  title: "COO Jobs in NYC - Chief Operating Officer, Operations Director",
  description: "Find the latest COO job opportunities in New York City. Browse chief operating officer and operations director positions at NYC startups.",
  openGraph: {
    title: "COO Jobs in NYC - Chief Operating Officer, Operations Director",
    description: "Find the latest COO job opportunities in New York City. Browse chief operating officer and operations director positions at NYC startups.",
  },
}

export default function COOPage() {
  return (
    <RolePage
      role="COO (Chief Operating Officer, Operations Director)"
      roleDisplayName="COO"
      description="Discover exciting COO opportunities at NYC's most innovative startups"
      metaTitle="COO Jobs in NYC"
    />
  )
}