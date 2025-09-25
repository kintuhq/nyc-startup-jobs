import type { Metadata } from "next"
import RolePage from "@/components/RolePage"

export const metadata: Metadata = {
  title: "Data Scientist Jobs in NYC - Data Engineering Roles",
  description: "Find the latest Data Scientist and Data Engineer job opportunities in New York City. Join NYC startups building data-driven products.",
  openGraph: {
    title: "Data Scientist Jobs in NYC - Data Engineering Roles",
    description: "Find the latest Data Scientist and Data Engineer job opportunities in New York City. Join NYC startups building data-driven products.",
  },
}

export default function DataScientistPage() {
  return (
    <RolePage
      role="Data Scientist / Data Engineer"
      roleDisplayName="Data Scientist"
      description="Build data-driven solutions and insights at NYC's most innovative tech startups"
      metaTitle="Data Scientist Jobs in NYC"
    />
  )
}