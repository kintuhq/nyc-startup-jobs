import type { Metadata } from "next"
import RolePage from "@/components/RolePage"

export const metadata: Metadata = {
  title: "Product Manager Jobs in NYC - Startup Product Roles",
  description: "Find the latest Product Manager job opportunities in New York City. Browse product management positions at NYC's fastest-growing startups.",
  openGraph: {
    title: "Product Manager Jobs in NYC - Startup Product Roles",
    description: "Find the latest Product Manager job opportunities in New York City. Browse product management positions at NYC's fastest-growing startups.",
  },
}

export default function ProductManagerPage() {
  return (
    <RolePage
      role="Product Manager"
      roleDisplayName="Product Manager"
      description="Lead product strategy and development at NYC's most promising startup companies"
      metaTitle="Product Manager Jobs in NYC"
    />
  )
}