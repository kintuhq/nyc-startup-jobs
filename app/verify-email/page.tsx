import type { Metadata } from "next"
import VerifyEmailComponent from "./VerifyEmailComponent"

export const metadata: Metadata = {
  title: "Verify Your Email - NYC Startup Jobs",
  description: "Verify your email address to activate your NYC Startup Jobs account and access the company dashboard.",
  openGraph: {
    title: "Verify Your Email - NYC Startup Jobs",
    description: "Verify your email address to activate your NYC Startup Jobs account and access the company dashboard.",
  },
}

export default function VerifyEmailPage() {
  return <VerifyEmailComponent />
}