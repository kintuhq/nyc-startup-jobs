import type { Metadata } from "next"
import BoroughPage from "@/components/BoroughPage"

export const metadata: Metadata = {
  title: "Manhattan Startup Jobs - Tech Jobs in Manhattan NYC",
  description: "Find the latest startup job opportunities in Manhattan, NYC. Browse tech positions at Manhattan's most innovative startup companies.",
  openGraph: {
    title: "Manhattan Startup Jobs - Tech Jobs in Manhattan NYC",
    description: "Find the latest startup job opportunities in Manhattan, NYC. Browse tech positions at Manhattan's most innovative startup companies.",
  },
}

export default function ManhattanPage() {
  return (
    <BoroughPage
      borough="manhattan"
      boroughDisplayName="Manhattan"
      description="Discover exciting startup opportunities in the heart of NYC's financial and tech hub"
    />
  )
}