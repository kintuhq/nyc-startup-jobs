import type { Metadata } from "next"
import BoroughPage from "@/components/BoroughPage"

export const metadata: Metadata = {
  title: "Staten Island Startup Jobs - Tech Jobs in Staten Island NYC",
  description: "Find the latest startup job opportunities in Staten Island, NYC. Browse tech positions at Staten Island's startup companies.",
  openGraph: {
    title: "Staten Island Startup Jobs - Tech Jobs in Staten Island NYC",
    description: "Find the latest startup job opportunities in Staten Island, NYC. Browse tech positions at Staten Island's startup companies.",
  },
}

export default function StatenIslandPage() {
  return (
    <BoroughPage
      borough="staten-island"
      boroughDisplayName="Staten Island"
      description="Explore startup opportunities in Staten Island's developing tech community"
    />
  )
}