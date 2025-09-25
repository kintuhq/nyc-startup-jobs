import type { Metadata } from "next"
import RoleBoroughPage from "@/components/RoleBoroughPage"

export const metadata: Metadata = {
  title: "Product Manager Jobs in Manhattan - Startup Product Roles",
  description: "Find the latest Product Manager job opportunities in Manhattan, NYC. Lead product strategy and development at Manhattan's fastest-growing startups.",
  openGraph: {
    title: "Product Manager Jobs in Manhattan - Startup Product Roles",
    description: "Find the latest Product Manager job opportunities in Manhattan, NYC. Lead product strategy and development at Manhattan's fastest-growing startups.",
  },
}

export default function ProductManagerManhattanPage() {
  return (
    <RoleBoroughPage
      role="Product Manager"
      roleDisplayName="Product Manager"
      borough="manhattan"
      boroughDisplayName="Manhattan"
      description="Drive product strategy and innovation at Manhattan's most promising startup companies"
      metaTitle="Product Manager Jobs in Manhattan"
    />
  )
}