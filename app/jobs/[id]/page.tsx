"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, MapPin, Calendar, Building2, FileText, Info, Mail, ExternalLink } from "lucide-react"

interface Job {
  id: string
  shortId: string
  title: string
  location: string
  type: string
  shortBio: string
  jobSpec: string
  aboutCompany: string
  howToApply: string
  published: boolean
  createdAt: string
  updatedAt: string
  company: {
    id: string
    name: string
    logo?: string
    url?: string
  }
}

export default function JobDetailPage() {
  const [job, setJob] = useState<Job | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")
  const params = useParams()
  const router = useRouter()

  useEffect(() => {
    fetchJob()
  }, [params.id])

  const fetchJob = async () => {
    try {
      const response = await fetch(`/api/jobs/${params.id}`)
      if (response.ok) {
        const jobData = await response.json()
        setJob(jobData)

        // Update page title and meta description
        document.title = `${jobData.title} at ${jobData.company.name} - DataHire`
        const metaDescription = document.querySelector('meta[name="description"]')
        if (metaDescription) {
          metaDescription.setAttribute('content', jobData.shortBio)
        }
      } else if (response.status === 404) {
        setError("Job not found")
      } else {
        setError("Failed to load job details")
      }
    } catch (error) {
      console.error("Error fetching job:", error)
      setError("Failed to load job details")
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading job details...</p>
        </div>
      </div>
    )
  }

  if (error || !job) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Job Not Found</h1>
          <p className="text-muted-foreground mb-6">{error || "This job posting doesn't exist or has been removed."}</p>
          <Button onClick={() => router.push("/")} className="bg-orange-500 hover:bg-orange-600 text-white cursor-pointer">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Jobs
          </Button>
        </div>
      </div>
    )
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
                alt="DataHire logo"
                className="h-14 w-14 mr-2"
              />
              <div>
                <a href="/" className="cursor-pointer">
                  <h1 className="text-2xl font-bold">
                    <span className="text-black">Data</span> <span className="text-blue-600">Hire</span>
                  </h1>
                </a>
                <p className="text-muted-foreground -mt-1 text-sm">Data Analyst Jobs</p>
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

      <div className="max-w-[800px] mx-auto px-6 py-12">
        {/* Single unified container */}
        <div className="bg-white border border-gray-200 rounded-lg p-8 space-y-8">
          {/* Job header - now inside container */}
          <div className="pb-6 border-b border-gray-200">
            <div className="flex items-start gap-6 mb-6">
              <div className="flex flex-col items-center">
                {job.company.logo && (
                  <img
                    src={job.company.logo}
                    alt={`${job.company.name} logo`}
                    className="w-20 h-20 rounded-xl object-cover border border-border mb-3"
                  />
                )}
                <Badge
                  variant={job.type === "full-time" ? "default" : "secondary"}
                  className={job.type === "full-time" ? "bg-orange-500 hover:bg-orange-600 text-white" : ""}
                >
                  {job.type.charAt(0).toUpperCase() + job.type.slice(1)}
                </Badge>
              </div>
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-foreground mb-2">{job.title}</h1>
                {job.company.url ? (
                  <a
                    href={job.company.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl text-orange-600 hover:text-orange-700 hover:underline mb-4 inline-flex items-center gap-1"
                  >
                    {job.company.name}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <h2 className="text-xl text-muted-foreground mb-4">{job.company.name}</h2>
                )}
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    Posted {new Date(job.createdAt).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </div>

          </div>
          {/* Job Specification */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FileText className="w-5 h-5 text-orange-600" />
              <h3 className="text-xl font-semibold">Job Specification</h3>
            </div>
            <div className="prose prose-sm max-w-none">
              <p className="whitespace-pre-wrap text-foreground leading-relaxed">{job.jobSpec}</p>
            </div>
          </div>

          {/* About the Company */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="w-5 h-5 text-orange-600" />
              <h3 className="text-xl font-semibold">About</h3>
            </div>
            <div className="prose prose-sm max-w-none">
              <p className="whitespace-pre-wrap text-foreground leading-relaxed">{job.aboutCompany}</p>
            </div>
          </div>

          {/* How to Apply - After About section */}
          <div className="border-l-4 border-orange-200 bg-orange-50 p-6 rounded-r-lg">
            <div className="flex items-center gap-2 mb-4">
              <Mail className="w-5 h-5 text-orange-600" />
              <h3 className="text-xl font-semibold text-orange-700">How to Apply</h3>
            </div>
            <div className="prose prose-sm max-w-none">
              <div className="whitespace-pre-wrap text-foreground leading-relaxed">
                {job.howToApply.split('\n').map((line, index) => {
                  // Check if line contains a URL (either as "Form: URL" or standalone URL)
                  const urlMatch = line.match(/(https?:\/\/[^\s]+|www\.[^\s]+)/);
                  if (urlMatch) {
                    const url = urlMatch[0].startsWith('www') ? `https://${urlMatch[0]}` : urlMatch[0];
                    if (line.startsWith('Form: ')) {
                      return (
                        <div key={index}>
                          Form: <a href={url} target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 underline">{url}</a>
                        </div>
                      );
                    } else {
                      return (
                        <div key={index}>
                          <a href={url} target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 underline">{line}</a>
                        </div>
                      );
                    }
                  }
                  return <div key={index}>{line}</div>;
                })}
              </div>
            </div>
          </div>


          {/* Share */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Share this job</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Help spread the word about this opportunity
            </p>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="cursor-pointer"
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href)
                }}
              >
                Copy Link
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="cursor-pointer"
                onClick={() => {
                  const text = `${job.title} at ${job.company.name} - ${window.location.href}`
                  window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, '_blank')
                }}
              >
                Tweet
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Footer */}
      <footer className="bg-card border-t border-border mt-16">
        <div className="mx-auto px-4 py-12" style={{ maxWidth: "1240px" }}>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <div className="flex items-center mb-3">
                <img
                  src="/logo.png"
                  alt="DataHire Logo"
                  className="h-8 w-8 mr-2"
                />
                <h3 className="text-2xl font-bold text-foreground">
                  Data <span className="text-primary">Hire</span>
                </h3>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                The global platform connecting talented data analysts with companies worldwide.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-3">For Teachers</h4>
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
                    Teaching Tips
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

            {/* Connect With Us */}
            <div>
              <h4 className="font-semibold text-foreground mb-3">Connect With Us</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-primary transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-muted-foreground mb-4 md:mb-0">
              © 2025 Data Hire.
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