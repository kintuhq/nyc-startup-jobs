import type React from "react"
import type { Metadata } from "next"
// Custom font configuration removed - using CSS font stack
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "DataHire - Data Analyst Jobs",
  description: "Find your perfect data analyst position. Free job board for data analysts and companies.",
  generator: "v0.app",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "DataHire - Data Analyst Jobs",
    description: "Find your perfect data analyst position. Free job board for data analysts and companies.",
    url: "https://datahire.co",
    siteName: "DataHire",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "DataHire - Data Analyst Jobs",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DataHire - Data Analyst Jobs",
    description: "Find your perfect data analyst position. Free job board for data analysts and companies.",
    images: ["/og.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Suspense
          fallback={<div className="min-h-screen bg-background flex items-center justify-center">Loading...</div>}
        >
          {children}
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
