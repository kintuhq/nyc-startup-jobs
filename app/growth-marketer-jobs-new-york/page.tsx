import type { Metadata } from "next"
import RolePage from "@/components/RolePage"

export const metadata: Metadata = {
  title: "Growth Marketer Jobs in NYC - Growth Hacker Positions",
  description: "Find the latest Growth Marketer and Growth Hacker job opportunities in New York City. Drive user acquisition and growth at NYC startups.",
  openGraph: {
    title: "Growth Marketer Jobs in NYC - Growth Hacker Positions",
    description: "Find the latest Growth Marketer and Growth Hacker job opportunities in New York City. Drive user acquisition and growth at NYC startups.",
  },
}

export default function GrowthMarketerPage() {
  return (
    <RolePage
      role="Growth Marketer / Growth Hacker"
      roleDisplayName="Growth Marketer"
      description="Drive explosive user growth and acquisition at NYC's hottest startup companies"
      metaTitle="Growth Marketer Jobs in NYC"
    />
  )
}