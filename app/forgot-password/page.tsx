import type { Metadata } from "next"
import ForgotPasswordComponent from "./ForgotPasswordComponent"

export const metadata: Metadata = {
  title: "Reset Password - NYC Startup Jobs",
  description: "Reset your NYC Startup Jobs account password. Enter your email to receive password reset instructions.",
  openGraph: {
    title: "Reset Password - NYC Startup Jobs",
    description: "Reset your NYC Startup Jobs account password. Enter your email to receive password reset instructions.",
  },
}

export default function ForgotPasswordPage() {
  return <ForgotPasswordComponent />
}