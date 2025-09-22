"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Header() {
  const router = useRouter()

  return (
    <header className="border-b border-border bg-card">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="DataHire logo"
              width={56}
              height={56}
              className="h-14 w-14 mr-2"
              priority
            />
            <div>
              <h1 className="text-2xl font-bold">
                <span className="text-black">Data</span> <span className="text-blue-600">Hire</span>
              </h1>
              <p className="text-muted-foreground -mt-1 text-sm">Data Analyst Jobs</p>
            </div>
          </div>
          <Button
            onClick={() => router.push("/register")}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-md hover:shadow-lg hover:brightness-110 transition-all duration-300 px-6 py-3 h-11 cursor-pointer"
          >
            Post a Job
          </Button>
        </div>
      </div>
    </header>
  )
}