import type { Metadata } from "next"
import RoleBoroughPage from "@/components/RoleBoroughPage"

export const metadata: Metadata = {
  title: "Product Designer Jobs in Manhattan - UX/UI Design Roles",
  description: "Find the latest Product Designer and UX/UI job opportunities in Manhattan, NYC. Shape user experiences at Manhattan's most innovative startups.",
  openGraph: {
    title: "Product Designer Jobs in Manhattan - UX/UI Design Roles",
    description: "Find the latest Product Designer and UX/UI job opportunities in Manhattan, NYC. Shape user experiences at Manhattan's most innovative startups.",
  },
}

export default function ProductDesignerManhattanPage() {
  return (
    <RoleBoroughPage
      role="Product Designer (UX/UI)"
      roleDisplayName="Product Designer"
      borough="manhattan"
      boroughDisplayName="Manhattan"
      description="Design exceptional user experiences at Manhattan's most design-focused startup companies"
      metaTitle="Product Designer Jobs in Manhattan"
    />
  )
}