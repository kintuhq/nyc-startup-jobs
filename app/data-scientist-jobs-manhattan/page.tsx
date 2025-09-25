import type { Metadata } from "next"
import RoleBoroughPage from "@/components/RoleBoroughPage"

export const metadata: Metadata = {
  title: "Data Scientist Jobs in Manhattan - Data Engineering Roles",
  description: "Find the latest Data Scientist and Data Engineer job opportunities in Manhattan, NYC. Build data-driven solutions at Manhattan's innovative startups.",
  openGraph: {
    title: "Data Scientist Jobs in Manhattan - Data Engineering Roles",
    description: "Find the latest Data Scientist and Data Engineer job opportunities in Manhattan, NYC. Build data-driven solutions at Manhattan's innovative startups.",
  },
}

export default function DataScientistManhattanPage() {
  return (
    <RoleBoroughPage
      role="Data Scientist / Data Engineer"
      roleDisplayName="Data Scientist"
      borough="manhattan"
      boroughDisplayName="Manhattan"
      description="Unlock insights from data at Manhattan's most data-driven startup companies"
      metaTitle="Data Scientist Jobs in Manhattan"
    />
  )
}