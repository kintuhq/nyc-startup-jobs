import type { Metadata } from "next"
import EditJobComponent from "./EditJobComponent"

export const metadata: Metadata = {
  title: "Edit Job Posting - NYC Startup Jobs",
  description: "Edit your job posting details, requirements, and company information on NYC Startup Jobs.",
  openGraph: {
    title: "Edit Job Posting - NYC Startup Jobs",
    description: "Edit your job posting details, requirements, and company information on NYC Startup Jobs.",
  },
}

export default function EditJobPage() {
  return <EditJobComponent />
}