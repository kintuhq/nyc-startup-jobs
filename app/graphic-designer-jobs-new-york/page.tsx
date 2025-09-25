import type { Metadata } from "next"
import RolePage from "@/components/RolePage"

export const metadata: Metadata = {
  title: "Graphic Designer Jobs in NYC - Visual Designer, Creative Designer",
  description: "Find the latest Graphic Designer job opportunities in New York City. Browse visual designer and creative designer positions at NYC startups.",
  openGraph: {
    title: "Graphic Designer Jobs in NYC - Visual Designer, Creative Designer",
    description: "Find the latest Graphic Designer job opportunities in New York City. Browse visual designer and creative designer positions at NYC startups.",
  },
}

export default function GraphicDesignerPage() {
  return (
    <RolePage
      role="Graphic Designer (Visual Designer, Creative Designer)"
      roleDisplayName="Graphic Designer"
      description="Discover exciting graphic design opportunities at NYC's most innovative startups"
      metaTitle="Graphic Designer Jobs in NYC"
    />
  )
}