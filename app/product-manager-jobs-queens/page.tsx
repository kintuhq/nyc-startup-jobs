import type { Metadata } from "next"
import RoleBoroughPage from "@/components/RoleBoroughPage"

export const metadata: Metadata = {
  title: "Product Manager Jobs in Queens - Startup Product Roles",
  description: "Find the latest Product Manager job opportunities in Queens, NYC. Lead product strategy and development at Queens' emerging startups.",
  openGraph: {
    title: "Product Manager Jobs in Queens - Startup Product Roles",
    description: "Find the latest Product Manager job opportunities in Queens, NYC. Lead product strategy and development at Queens' emerging startups.",
  },
}

export default function ProductManagerQueensPage() {
  return (
    <RoleBoroughPage
      role="Product Manager"
      roleDisplayName="Product Manager"
      borough="queens"
      boroughDisplayName="Queens"
      description="Lead product development in Queens' diverse and growing startup community"
      metaTitle="Product Manager Jobs in Queens"
    />
  )
}