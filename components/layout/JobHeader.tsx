"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export default function JobHeader() {
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
              <Link href="/" className="cursor-pointer">
                <h1 className="text-2xl font-bold">
                  <span className="text-black">NYC Startup</span> <span className="text-primary">Jobs</span>
                </h1>
              </Link>
              <p className="text-muted-foreground -mt-1 text-sm">Building NYC startups</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-orange-400 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Jobs
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}