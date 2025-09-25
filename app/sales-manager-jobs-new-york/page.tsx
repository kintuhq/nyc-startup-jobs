import type { Metadata } from "next"
import RolePage from "@/components/RolePage"

export const metadata: Metadata = {
  title: "Sales Manager Jobs in New York City - Account Executive Roles",
  description: "Find the latest Sales Manager and Account Executive job opportunities in New York City. Drive revenue growth at NYC's hottest startups.",
  openGraph: {
    title: "Sales Manager Jobs in New York City - Account Executive Roles",
    description: "Find the latest Sales Manager and Account Executive job opportunities in New York City. Drive revenue growth at NYC's hottest startups.",
  },
}

export default function SalesManagerPage() {
  return (
    <RolePage
      role="Sales Lead / Account Executive"
      roleDisplayName="Sales Manager"
      description="Drive revenue growth and close deals at NYC's fastest-scaling startup companies"
      metaTitle="Sales Manager Jobs in New York City"
    />
  )
}