import type { Metadata } from "next"
import RolePage from "@/components/RolePage"

export const metadata: Metadata = {
  title: "Finance Jobs in NYC - Financial Analyst, Accountant, Controller",
  description: "Find the latest Finance job opportunities in New York City. Browse financial analyst, accountant, and controller positions at NYC startups.",
  openGraph: {
    title: "Finance Jobs in NYC - Financial Analyst, Accountant, Controller",
    description: "Find the latest Finance job opportunities in New York City. Browse financial analyst, accountant, and controller positions at NYC startups.",
  },
}

export default function FinancePage() {
  return (
    <RolePage
      role="Finance (Financial Analyst, Accountant, Controller)"
      roleDisplayName="Finance"
      description="Discover exciting finance opportunities at NYC's most innovative startups"
      metaTitle="Finance Jobs in NYC"
    />
  )
}