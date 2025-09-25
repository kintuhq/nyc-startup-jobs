import type { Metadata } from "next"
import ResetPasswordComponent from "./ResetPasswordComponent"

export const metadata: Metadata = {
  title: "Set New Password - NYC Startup Jobs",
  description: "Set a new password for your NYC Startup Jobs account using your password reset token.",
  openGraph: {
    title: "Set New Password - NYC Startup Jobs",
    description: "Set a new password for your NYC Startup Jobs account using your password reset token.",
  },
}

export default function ResetPasswordPage() {
  return <ResetPasswordComponent />
}