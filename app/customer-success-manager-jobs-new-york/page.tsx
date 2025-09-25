import type { Metadata } from "next"
import RolePage from "@/components/RolePage"

export const metadata: Metadata = {
  title: "Customer Success Manager Jobs in New York City - CSM Roles",
  description: "Find the latest Customer Success Manager job opportunities in New York City. Help customers achieve success at NYC's fast-growing startups.",
  openGraph: {
    title: "Customer Success Manager Jobs in New York City - CSM Roles",
    description: "Find the latest Customer Success Manager job opportunities in New York City. Help customers achieve success at NYC's fast-growing startups.",
  },
}

export default function CustomerSuccessManagerPage() {
  return (
    <RolePage
      role="Customer Success Manager"
      roleDisplayName="Customer Success Manager"
      description="Drive customer satisfaction and retention at NYC's most customer-focused startups"
      metaTitle="Customer Success Manager Jobs in New York City"
    />
  )
}