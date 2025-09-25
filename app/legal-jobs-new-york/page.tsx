import type { Metadata } from "next"
import RolePage from "@/components/RolePage"

export const metadata: Metadata = {
  title: "Legal Jobs in NYC - Attorney, Paralegal, Legal Counsel",
  description: "Find the latest Legal job opportunities in New York City. Browse attorney, paralegal, and legal counsel positions at NYC startups.",
  openGraph: {
    title: "Legal Jobs in NYC - Attorney, Paralegal, Legal Counsel",
    description: "Find the latest Legal job opportunities in New York City. Browse attorney, paralegal, and legal counsel positions at NYC startups.",
  },
}

export default function LegalPage() {
  return (
    <RolePage
      role="Legal (Attorney, Paralegal, Legal Counsel)"
      roleDisplayName="Legal"
      description="Discover exciting legal opportunities at NYC's most innovative startups"
      metaTitle="Legal Jobs in NYC"
    />
  )
}