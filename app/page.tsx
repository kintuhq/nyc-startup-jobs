"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Mail, Bell } from "lucide-react"
import { Input } from "@/components/ui/input"

interface Job {
  id: string
  shortId: string
  title: string
  location: string
  type: string
  createdAt: string
  company: {
    id: string
    name: string
    logo?: string
  }
}

export default function HomePage() {
  const [jobs, setJobs] = useState<Job[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [email, setEmail] = useState("")
  const [isSubscribing, setIsSubscribing] = useState(false)
  const [subscriptionMessage, setSubscriptionMessage] = useState("")
  const [showEmailInput, setShowEmailInput] = useState(false)
  const router = useRouter()

  useEffect(() => {
    fetchJobs()
  }, [])

  const fetchJobs = async () => {
    try {
      // Add cache-friendly fetch with stale-while-revalidate
      const response = await fetch("/api/jobs?limit=20", {
        next: { revalidate: 60 } // Revalidate every 1 minute
      })
      if (response.ok) {
        const jobsData = await response.json()
        setJobs(jobsData)
      }
    } catch (error) {
      console.error("Error fetching jobs:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubscribing(true)
    setSubscriptionMessage("")

    try {
      const response = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setSubscriptionMessage("Thanks! You'll receive notifications about new professional positions.")
        setEmail("")
        setShowEmailInput(false)
      } else {
        const data = await response.json()
        setSubscriptionMessage(data.error || "Something went wrong. Please try again.")
      }
    } catch (error) {
      setSubscriptionMessage("Something went wrong. Please try again.")
    } finally {
      setIsSubscribing(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="NYC Startup Jobs logo"
                width={56}
                height={56}
                className="h-14 w-14 mr-2"
                priority
              />
              <div>
                <h1 className="text-2xl font-bold">
                  <span className="text-black">NYC Startup</span> <span className="text-blue-600">Jobs</span>
                </h1>
                <p className="text-muted-foreground -mt-1 text-sm">Building NYC startups</p>
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

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="mx-auto text-center" style={{ maxWidth: "1240px" }}>
          <h2 className="text-5xl font-bold text-foreground mb-4 text-balance">
            Free Job Board For <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">NYC Startups</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty">
            Connect with NYC startups through NYC Startup Jobs. Free job postings for companies, free
            applications for professionals.
          </p>

          {/* Newsletter Signup */}
          <div className="flex justify-center px-4">
            <div
              style={{
                borderRadius: '5px',
                height: '60px',
                width: '100%',
                maxWidth: '400px',
                border: '3px solid transparent',
                backgroundImage: 'linear-gradient(white, white), linear-gradient(45deg, #2563eb, #3b82f6)',
                backgroundOrigin: 'border-box',
                backgroundClip: 'content-box, border-box',
                display: 'flex',
                alignItems: 'stretch'
              }}
            >
              {!showEmailInput ? (
                <>
                  {/* Promotional Content */}
                  <div
                    onClick={() => setShowEmailInput(true)}
                    style={{
                      flex: '1',
                      height: '100%',
                      background: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      paddingLeft: '16px',
                      cursor: 'pointer'
                    }}
                  >
                    <Mail className="w-4 h-4 text-gray-500 mr-3" />
                    <span className="text-gray-500 text-xs sm:text-sm font-medium">
                      Get weekly professional job alerts
                    </span>
                  </div>

                  <div
                    onClick={() => setShowEmailInput(true)}
                    style={{
                      width: '96px',
                      height: '100%',
                      background: 'linear-gradient(45deg, #2563eb, #3b82f6)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      color: 'white',
                      fontSize: '12px',
                      fontWeight: 'bold',
                      textTransform: 'uppercase',
                      letterSpacing: '0.025em'
                    }}
                  >
                    SIGN UP →
                  </div>
                </>
              ) : (
                <>
                  {/* Email Input */}
                  <div
                    style={{
                      flex: '1',
                      height: '100%',
                      background: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      paddingLeft: '16px'
                    }}
                  >
                    <Mail className="w-4 h-4 text-gray-500 mr-3" />
                    <input
                      type="email"
                      placeholder="Weekly job alerts"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && email && !isSubscribing) {
                          handleEmailSubmit({ preventDefault: () => {} });
                        }
                      }}
                      className="placeholder-gray-400"
                      style={{
                        flex: '1',
                        height: '100%',
                        border: 'none',
                        outline: 'none',
                        background: 'transparent',
                        fontSize: '14px',
                        color: '#9ca3af',
                        marginRight: '16px'
                      }}
                      disabled={isSubscribing}
                      autoFocus
                    />
                  </div>

                  <div
                    onClick={() => {
                      if (email && !isSubscribing) {
                        handleEmailSubmit({ preventDefault: () => {} });
                      }
                    }}
                    style={{
                      width: '96px',
                      height: '100%',
                      background: 'linear-gradient(45deg, #2563eb, #3b82f6)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      color: 'white',
                      fontSize: '12px',
                      fontWeight: 'bold',
                      textTransform: 'uppercase',
                      letterSpacing: '0.025em'
                    }}
                  >
                    {isSubscribing ? 'SIGNING UP...' : 'SIGN UP →'}
                  </div>
                </>
              )}
            </div>
          </div>

          {subscriptionMessage && (
            <div className={`text-center p-4 rounded-xl mt-4 ${
              subscriptionMessage.includes("Thanks")
                ? "bg-green-50 text-green-700 border border-green-200"
                : "bg-red-50 text-red-700 border border-red-200"
            }`}>
              {subscriptionMessage}
            </div>
          )}


        </div>
      </section>

      {/* Job Listings */}
      <section className="py-8 px-4">
        <div className="mx-auto" style={{ maxWidth: "1240px" }}>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-foreground">Latest Opportunities</h3>
            <p className="text-muted-foreground">{jobs.length} positions available</p>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              {Array.from({ length: 6 }).map((_, i) => (
                <Card key={i} className="border-border animate-pulse">
                  <CardHeader className="pb-2">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 rounded-lg bg-gray-200"></div>
                      <div className="flex-1 min-w-0">
                        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 -mt-1">
                    <div className="space-y-3">
                      <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                      <div className="h-6 bg-gray-200 rounded w-20"></div>
                      <div className="h-8 bg-gray-200 rounded w-full"></div>
                      <div className="h-8 bg-gray-200 rounded w-full"></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              {jobs.map((job) => (
                <Card key={job.id} className="hover:shadow-lg transition-shadow duration-200 border-border">
                  <CardHeader className="pb-2">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                        <Image
                          src={job.company.logo || "/placeholder.svg"}
                          alt={`${job.company.name} logo`}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          unoptimized={job.company.logo?.startsWith('http')}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-lg font-bold text-card-foreground line-clamp-2">{job.title}</CardTitle>
                        <CardDescription className="text-muted-foreground">{job.company.name}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0 -mt-1">
                    <div className="space-y-3">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4 mr-1" />
                        {job.location}
                      </div>

                      <div className="flex items-center gap-2">
                        <Badge
                          variant="outline"
                          className="bg-white hover:bg-blue-50"
                          style={{ borderColor: 'var(--primary)', color: 'var(--primary)' }}
                        >
                          {job.type === "full-time" ? "Full-time" : "Part-time"}
                        </Badge>
                      </div>

                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {job.company.name} is hiring a {job.title} in {job.location}.
                      </p>

                      <Button
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"
                        size="sm"
                        onClick={() => router.push(`/jobs/${job.shortId}`)}
                      >
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {!isLoading && jobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No job opportunities available yet.</p>
              <p className="text-muted-foreground">Subscribe above to get notified when new professional positions are posted!</p>
            </div>
          )}
        </div>
      </section>

      {/* Professional Footer */}
      <footer className="bg-card border-t border-border mt-16">
        <div className="mx-auto px-4 py-12" style={{ maxWidth: "1240px" }}>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <div className="flex items-center mb-3">
                <Image
                  src="/logo.png"
                  alt="NYC Startup Jobs Logo"
                  width={32}
                  height={32}
                  className="h-8 w-8 mr-2"
                  loading="lazy"
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
                  <a href="#" className="hover:text-primary transition-colors">
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

            {/* For Schools */}
            <div>
              <h4 className="font-semibold text-foreground mb-3">For Companies</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="/login" className="hover:text-primary transition-colors">
                    Login
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
              © 2025 NYC Startup Jobs.
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}