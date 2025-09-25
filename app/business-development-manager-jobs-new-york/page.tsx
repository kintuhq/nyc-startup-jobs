import type { Metadata } from "next"
import RolePage from "@/components/RolePage"

export const metadata: Metadata = {
  title: "Business Development Manager Jobs in New York City - BD Roles",
  description: "Find the latest Business Development Manager job opportunities in New York City. Drive partnerships and growth at NYC's emerging startups.",
  openGraph: {
    title: "Business Development Manager Jobs in New York City - BD Roles",
    description: "Find the latest Business Development Manager job opportunities in New York City. Drive partnerships and growth at NYC's emerging startups.",
  },
}

export default function BusinessDevelopmentManagerPage() {
  return (
    <RolePage
      role="Business Development Manager"
      roleDisplayName="Business Development Manager"
      description="Drive strategic partnerships and business growth at NYC's most promising startups"
      metaTitle="Business Development Manager Jobs in New York City"
    />
  )
}