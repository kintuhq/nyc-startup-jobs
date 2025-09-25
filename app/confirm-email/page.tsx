import type { Metadata } from "next"
import ConfirmEmailComponent from "./ConfirmEmailComponent"

export const metadata: Metadata = {
  title: "Confirm Your Email - NYC Startup Jobs",
  description: "Check your email to complete your NYC Startup Jobs account registration and start posting job opportunities.",
  openGraph: {
    title: "Confirm Your Email - NYC Startup Jobs",
    description: "Check your email to complete your NYC Startup Jobs account registration and start posting job opportunities.",
  },
}

export default function ConfirmEmailPage() {
  return <ConfirmEmailComponent />
}