"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import JobPostingForm from "@/components/job-posting-form"

export default function AddJobComponent() {
  const router = useRouter()

  const handleJobSubmit = async (jobData: any) => {
    try {
      const response = await fetch("/api/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(jobData),
      })

      if (response.ok) {
        router.push("/dashboard")
      } else {
        const errorData = await response.json()
        alert(errorData.error || "Failed to submit job")
      }
    } catch (error) {
      console.error("Error submitting job:", error)
      alert("An error occurred while submitting the job")
    }
  }

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" })
      router.push("/")
    } catch (error) {
      console.error("Error logging out:", error)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="/logo.png"
                alt="NYC Startup Jobs logo"
                className="h-14 w-14 mr-2"
              />
              <div>
                <a href="/" className="cursor-pointer">
                  <h1 className="text-2xl font-bold">
                    <span className="text-black">NYC Startup</span> <span className="text-primary">Jobs</span>
                  </h1>
                </a>
                <p className="text-muted-foreground -mt-1 text-sm">Building NYC startups</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={handleLogout}
                className="hidden md:block text-gray-700 cursor-pointer"
              >
                Logout
              </button>
              <Button
                onClick={() => router.push("/dashboard")}
                variant="outline"
                className="cursor-pointer hover:bg-primary hover:text-white hover:border-primary"
              >
                Back to Dashboard
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-[800px] mx-auto px-6 py-12">

        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Post a Job</h2>
          <p className="text-gray-600 mt-2">
            Share your opportunity with talented professionals - completely free!
          </p>
        </div>

        <JobPostingForm onSubmit={handleJobSubmit} />
      </div>
    </div>
  )
}