"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import JobPostingForm from "@/components/job-posting-form"

export default function NewJobPage() {
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
                    <span className="text-black">NYC Startup</span> <span className="text-blue-600">Jobs</span>
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
                className="cursor-pointer hover:bg-blue-600 hover:text-white hover:border-blue-600"
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

        <JobPostingForm
          onSubmit={handleJobSubmit}
          onClose={() => router.push("/dashboard")}
          editingJob={null}
          isModal={false}
        />
      </div>

      {/* Professional Footer */}
      <footer className="bg-card border-t border-border mt-16">
        <div className="mx-auto px-4 py-12" style={{ maxWidth: "1240px" }}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <div className="flex items-center mb-3">
                <img
                  src="/logo.png"
                  alt="NYC Startup Jobs Logo"
                  className="h-8 w-8 mr-2"
                />
                <h3 className="text-2xl font-bold text-foreground">
                  NYC Startup <span className="text-primary">Jobs</span>
                </h3>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                The platform connecting talented professionals with NYC startups.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-3">For Analysts</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="/" className="hover:text-primary transition-colors">
                    Browse Jobs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Career Resources
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Data Analysis Tips
                  </a>
                </li>
              </ul>
            </div>

            {/* For Companies */}
            <div>
              <h4 className="font-semibold text-foreground mb-3">For Companies</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="/dashboard" className="hover:text-primary transition-colors">
                    Dashboard
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Hiring Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Success Stories
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-muted-foreground mb-4 md:mb-0">
              © 2025 NYC Startup Jobs.
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="/contact" className="hover:text-primary transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}