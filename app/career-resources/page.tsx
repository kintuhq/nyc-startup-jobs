import type { Metadata } from "next"
import CareerResourcesComponent from "./CareerResourcesComponent"

export const metadata: Metadata = {
  title: "Career Resources - NYC Startup Jobs",
  description: "Career development resources, tips, and guides for professionals seeking opportunities in New York City's startup ecosystem.",
  openGraph: {
    title: "Career Resources - NYC Startup Jobs",
    description: "Career development resources, tips, and guides for professionals seeking opportunities in New York City's startup ecosystem.",
  },
}

export default function CareerResourcesPage() {
  return <CareerResourcesComponent />
}