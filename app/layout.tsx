import type React from "react"
import type { Metadata } from "next"
// Custom font configuration removed - using CSS font stack
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "NYC Startup Jobs - Building NYC startups",
  description: "Find your perfect professional position at NYC startups. Free job board for professionals and companies.",
  generator: "v0.app",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "NYC Startup Jobs - Building NYC startups",
    description: "Find your perfect professional position at NYC startups. Free job board for professionals and companies.",
    url: "https://nycstartupjobs.com",
    siteName: "NYC Startup Jobs",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "NYC Startup Jobs - Building NYC startups",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NYC Startup Jobs - Building NYC startups",
    description: "Find your perfect professional position at NYC startups. Free job board for professionals and companies.",
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
