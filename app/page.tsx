import type { Metadata } from "next"
import HomePage from "./HomePage"

export const metadata: Metadata = {
  title: "NYC Startup Jobs - Find Your Next Opportunity at NYC Startups",
  description: "Browse the latest job opportunities at NYC startups. Free job board connecting talented professionals with the city's most promising startup companies.",
  openGraph: {
    title: "NYC Startup Jobs - Find Your Next Opportunity at NYC Startups",
    description: "Browse the latest job opportunities at NYC startups. Free job board connecting talented professionals with the city's most promising startup companies.",
  },
}

export default function Page() {
  return <HomePage />
}