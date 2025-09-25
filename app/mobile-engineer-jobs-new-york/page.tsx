import type { Metadata } from "next"
import RolePage from "@/components/RolePage"

export const metadata: Metadata = {
  title: "Mobile Engineer Jobs in NYC - iOS & Android Development",
  description: "Find the latest Mobile Engineer job opportunities in New York City. Browse iOS and Android development positions at NYC startups.",
  openGraph: {
    title: "Mobile Engineer Jobs in NYC - iOS & Android Development",
    description: "Find the latest Mobile Engineer job opportunities in New York City. Browse iOS and Android development positions at NYC startups.",
  },
}

export default function MobileEngineerPage() {
  return (
    <RolePage
      role="Mobile Engineer (iOS, Android)"
      roleDisplayName="Mobile Engineer"
      description="Build the next generation of mobile apps at NYC's cutting-edge startups"
      metaTitle="Mobile Engineer Jobs in NYC"
    />
  )
}