import type { Metadata } from "next"
import AddJobComponent from "./AddJobComponent"

export const metadata: Metadata = {
  title: "Post New Job - NYC Startup Jobs",
  description: "Create a new job posting for your NYC startup. Post free job listings and connect with talented professionals.",
  openGraph: {
    title: "Post New Job - NYC Startup Jobs",
    description: "Create a new job posting for your NYC startup. Post free job listings and connect with talented professionals.",
  },
}

export default function NewJobPage() {
  return <AddJobComponent />
}