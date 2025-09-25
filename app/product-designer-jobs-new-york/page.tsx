import type { Metadata } from "next"
import RolePage from "@/components/RolePage"

export const metadata: Metadata = {
  title: "Product Designer Jobs in NYC - UX/UI Design Roles",
  description: "Find the latest Product Designer and UX/UI job opportunities in New York City. Shape user experiences at NYC's most innovative startups.",
  openGraph: {
    title: "Product Designer Jobs in NYC - UX/UI Design Roles",
    description: "Find the latest Product Designer and UX/UI job opportunities in New York City. Shape user experiences at NYC's most innovative startups.",
  },
}

export default function ProductDesignerPage() {
  return (
    <RolePage
      role="Product Designer (UX/UI)"
      roleDisplayName="Product Designer"
      description="Design beautiful and intuitive user experiences at NYC's fastest-growing startups"
      metaTitle="Product Designer Jobs in NYC"
    />
  )
}