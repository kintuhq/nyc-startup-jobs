import type { Metadata } from "next"
import RolePage from "@/components/RolePage"

export const metadata: Metadata = {
  title: "Account Manager Jobs in NYC - Client Success, Account Executive",
  description: "Find the latest Account Manager job opportunities in New York City. Browse client success and account executive positions at NYC startups.",
  openGraph: {
    title: "Account Manager Jobs in NYC - Client Success, Account Executive",
    description: "Find the latest Account Manager job opportunities in New York City. Browse client success and account executive positions at NYC startups.",
  },
}

export default function AccountManagerPage() {
  return (
    <RolePage
      role="Account Manager (Client Success, Account Executive)"
      roleDisplayName="Account Manager"
      description="Discover exciting account management opportunities at NYC's most innovative startups"
      metaTitle="Account Manager Jobs in NYC"
    />
  )
}