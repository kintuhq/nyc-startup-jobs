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
                <a href="/" className="text-primary hover:text-primary/90 transition-colors cursor-pointer">
                  <span className="hidden sm:inline">NYC Startup Jobs</span>
                  <span className="sm:hidden">NYC Jobs</span>
                </a>
              </h1>
              <p className="text-muted-foreground -mt-1 text-sm">Building NYC startups</p>
            </div>
          </div>
          <Button
            onClick={() => router.push("/register")}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg shadow-md hover:shadow-lg transition-all duration-300 px-6 py-3 h-11 cursor-pointer"
          >
            Post a Job
          </Button>
        </div>
      </div>
    </header>
  )
}