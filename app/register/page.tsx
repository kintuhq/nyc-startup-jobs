import type { Metadata } from "next"
import RegisterComponent from "./RegisterComponent"

export const metadata: Metadata = {
  title: "Create Account - NYC Startup Jobs",
  description: "Join NYC Startup Jobs to post free job listings and connect with talented professionals in New York City's startup ecosystem.",
  openGraph: {
    title: "Create Account - NYC Startup Jobs",
    description: "Join NYC Startup Jobs to post free job listings and connect with talented professionals in New York City's startup ecosystem.",
  },
}

export default function RegisterPage() {
  return <RegisterComponent />
}