import type { Metadata } from "next"
import ContactComponent from "./ContactComponent"

export const metadata: Metadata = {
  title: "Contact Us - NYC Startup Jobs",
  description: "Get in touch with NYC Startup Jobs. Send us your questions, feedback, or suggestions to help improve our platform for NYC's startup ecosystem.",
  openGraph: {
    title: "Contact Us - NYC Startup Jobs",
    description: "Get in touch with NYC Startup Jobs. Send us your questions, feedback, or suggestions to help improve our platform for NYC's startup ecosystem.",
  },
}

export default function ContactPage() {
  return <ContactComponent />
}