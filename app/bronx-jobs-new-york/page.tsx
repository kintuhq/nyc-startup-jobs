import type { Metadata } from "next"
import BoroughPage from "@/components/BoroughPage"

export const metadata: Metadata = {
  title: "Bronx Startup Jobs - Tech Jobs in The Bronx NYC",
  description: "Find the latest startup job opportunities in The Bronx, NYC. Browse tech positions at The Bronx's innovative startup companies.",
  openGraph: {
    title: "Bronx Startup Jobs - Tech Jobs in The Bronx NYC",
    description: "Find the latest startup job opportunities in The Bronx, NYC. Browse tech positions at The Bronx's innovative startup companies.",
  },
}

export default function BronxPage() {
  return (
    <BoroughPage
      borough="bronx"
      boroughDisplayName="The Bronx"
      description="Discover startup opportunities in The Bronx's emerging innovation ecosystem"
    />
  )
}