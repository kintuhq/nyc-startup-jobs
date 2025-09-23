import type { Metadata } from "next"
import HiringComponent from "./HiringComponent"

export const metadata: Metadata = {
  title: "Hiring Guide for NYC Startups - NYC Startup Jobs",
  description: "Complete hiring guide for NYC startups. Learn how to find, evaluate, and hire top talent in New York City's competitive startup ecosystem.",
  openGraph: {
    title: "Hiring Guide for NYC Startups - NYC Startup Jobs",
    description: "Complete hiring guide for NYC startups. Learn how to find, evaluate, and hire top talent in New York City's competitive startup ecosystem.",
  },
}

export default function HiringPage() {
  return <HiringComponent />
}