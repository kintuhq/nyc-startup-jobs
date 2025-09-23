import type { Metadata } from "next"
import LoginComponent from "./LoginComponent"

export const metadata: Metadata = {
  title: "Sign In - NYC Startup Jobs",
  description: "Sign in to your NYC Startup Jobs account to manage your job postings and company profile. Access your hiring dashboard.",
  openGraph: {
    title: "Sign In - NYC Startup Jobs",
    description: "Sign in to your NYC Startup Jobs account to manage your job postings and company profile. Access your hiring dashboard.",
  },
}

export default function LoginPage() {
  return <LoginComponent />
}