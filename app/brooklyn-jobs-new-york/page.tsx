import type { Metadata } from "next"
import BoroughPage from "@/components/BoroughPage"

export const metadata: Metadata = {
  title: "Brooklyn Startup Jobs - Tech Jobs in Brooklyn NYC",
  description: "Find the latest startup job opportunities in Brooklyn, NYC. Browse tech positions at Brooklyn's growing startup ecosystem.",
  openGraph: {
    title: "Brooklyn Startup Jobs - Tech Jobs in Brooklyn NYC",
    description: "Find the latest startup job opportunities in Brooklyn, NYC. Browse tech positions at Brooklyn's growing startup ecosystem.",
  },
}

export default function BrooklynPage() {
  return (
    <BoroughPage
      borough="brooklyn"
      boroughDisplayName="Brooklyn"
      description="Explore innovative startup opportunities in Brooklyn's thriving creative and tech scene"
    />
  )
}