import type { Metadata } from "next"
import RolePage from "@/components/RolePage"

export const metadata: Metadata = {
  title: "SEO Jobs in NYC - SEO Specialist, SEO Manager, Digital Marketing",
  description: "Find the latest SEO job opportunities in New York City. Browse SEO specialist, SEO manager, and digital marketing positions at NYC startups.",
  openGraph: {
    title: "SEO Jobs in NYC - SEO Specialist, SEO Manager, Digital Marketing",
    description: "Find the latest SEO job opportunities in New York City. Browse SEO specialist, SEO manager, and digital marketing positions at NYC startups.",
  },
}

export default function SEOPage() {
  return (
    <RolePage
      role="SEO (SEO Specialist, SEO Manager, Digital Marketing)"
      roleDisplayName="SEO"
      description="Discover exciting SEO opportunities at NYC's most innovative startups"
      metaTitle="SEO Jobs in NYC"
    />
  )
}
