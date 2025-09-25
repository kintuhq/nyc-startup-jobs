import type { Metadata } from "next"
import RolePage from "@/components/RolePage"

export const metadata: Metadata = {
  title: "Brand Designer Jobs in NYC - Visual Design, Brand Identity",
  description: "Find the latest Brand Designer job opportunities in New York City. Browse visual design and brand identity positions at NYC startups.",
  openGraph: {
    title: "Brand Designer Jobs in NYC - Visual Design, Brand Identity",
    description: "Find the latest Brand Designer job opportunities in New York City. Browse visual design and brand identity positions at NYC startups.",
  },
}

export default function BrandDesignerPage() {
  return (
    <RolePage
      role="Brand Designer (Visual Design, Brand Identity)"
      roleDisplayName="Brand Designer"
      description="Discover exciting brand design opportunities at NYC's most innovative startups"
      metaTitle="Brand Designer Jobs in NYC"
    />
  )
}