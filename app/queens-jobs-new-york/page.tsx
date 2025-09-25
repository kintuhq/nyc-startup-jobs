import type { Metadata } from "next"
import BoroughPage from "@/components/BoroughPage"

export const metadata: Metadata = {
  title: "Queens Startup Jobs - Tech Jobs in Queens NYC",
  description: "Find the latest startup job opportunities in Queens, NYC. Browse tech positions at Queens' emerging startup companies.",
  openGraph: {
    title: "Queens Startup Jobs - Tech Jobs in Queens NYC",
    description: "Find the latest startup job opportunities in Queens, NYC. Browse tech positions at Queens' emerging startup companies.",
  },
}

export default function QueensPage() {
  return (
    <BoroughPage
      borough="queens"
      boroughDisplayName="Queens"
      description="Join the growing startup community in Queens, NYC's most diverse borough"
    />
  )
}