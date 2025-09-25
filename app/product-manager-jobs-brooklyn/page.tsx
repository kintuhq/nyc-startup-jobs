import type { Metadata } from "next"
import RoleBoroughPage from "@/components/RoleBoroughPage"

export const metadata: Metadata = {
  title: "Product Manager Jobs in Brooklyn - Startup Product Roles",
  description: "Find the latest Product Manager job opportunities in Brooklyn, NYC. Lead product strategy and development at Brooklyn's fastest-growing startups.",
  openGraph: {
    title: "Product Manager Jobs in Brooklyn - Startup Product Roles",
    description: "Find the latest Product Manager job opportunities in Brooklyn, NYC. Lead product strategy and development at Brooklyn's fastest-growing startups.",
  },
}

export default function ProductManagerBrooklynPage() {
  return (
    <RoleBoroughPage
      role="Product Manager"
      roleDisplayName="Product Manager"
      borough="brooklyn"
      boroughDisplayName="Brooklyn"
      description="Shape innovative products at Brooklyn's creative and tech-forward startup ecosystem"
      metaTitle="Product Manager Jobs in Brooklyn"
    />
  )
}