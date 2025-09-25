import type { Metadata } from "next"
import DashboardComponent from "./DashboardComponent"

export const metadata: Metadata = {
  title: "Company Dashboard - NYC Startup Jobs",
  description: "Manage your job postings, edit your company profile, and track applications on your NYC Startup Jobs dashboard.",
  openGraph: {
    title: "Company Dashboard - NYC Startup Jobs",
    description: "Manage your job postings, edit your company profile, and track applications on your NYC Startup Jobs dashboard.",
  },
}

export default function DashboardPage() {
  return <DashboardComponent />
}