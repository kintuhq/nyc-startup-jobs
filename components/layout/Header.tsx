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
              alt="NYC Startup Jobs logo"
              width={72}
              height={72}
              className="h-[72px] w-[72px] mr-2"
              priority
            />
            <div>
              <h1 className="text-2xl font-bold">
                <span className="text-primary">NYC Startup Jobs</span>
              </h1>
              <p className="text-muted-foreground -mt-1 text-sm">Building NYC startups</p>
            </div>
          </div>
          <Button
            onClick={() => router.push("/register")}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-semibold text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 px-6 py-3 h-11 cursor-pointer"
            style={{ backgroundColor: '#14B8A6' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0F9488'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#14B8A6'}
          >
            Post a Job
          </Button>
        </div>
      </div>
    </header>
  )
}