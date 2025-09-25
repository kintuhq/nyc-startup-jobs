import type { Metadata } from "next"
import RolePage from "@/components/RolePage"

export const metadata: Metadata = {
  title: "Designer Jobs in NYC - Head of Design, Design Director, Creative Director",
  description: "Find the latest Designer job opportunities in New York City. Browse head of design, design director, and creative director positions at NYC startups.",
  openGraph: {
    title: "Designer Jobs in NYC - Head of Design, Design Director, Creative Director",
    description: "Find the latest Designer job opportunities in New York City. Browse head of design, design director, and creative director positions at NYC startups.",
  },
}

export default function DesignerPage() {
  return (
    <RolePage
      role="Designer (Head of Design, Design Director, Creative Director)"
      roleDisplayName="Designer"
      description="Discover exciting design leadership opportunities at NYC's most innovative startups"
      metaTitle="Designer Jobs in NYC"
    />
  )
}