"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Mail } from "lucide-react"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

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

interface BoroughPageProps {
  borough: string
  boroughDisplayName: string
  description: string
}

export default function BoroughPage({ borough, boroughDisplayName, description }: BoroughPageProps) {
  const [jobs, setJobs] = useState<Job[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [email, setEmail] = useState("")
  const [isSubscribing, setIsSubscribing] = useState(false)
  const [subscriptionMessage, setSubscriptionMessage] = useState("")
  const [showEmailInput, setShowEmailInput] = useState(false)

  useEffect(() => {
    fetchJobs()
  }, [borough])

  const fetchJobs = async () => {
    try {
      const response = await fetch(`/api/jobs?borough=${borough}&limit=20`, {
        next: {
          revalidate: 60,
          tags: ['jobs', `jobs-${borough}`]
        },
        cache: 'force-cache'
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
        setSubscriptionMessage(`Thanks! You'll receive notifications about new ${boroughDisplayName} positions.`)
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
      <Header />

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="mx-auto text-center" style={{ maxWidth: "1240px" }}>
          <h1 className="text-5xl font-bold text-foreground mb-4 text-balance">
            Startup Jobs in <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">{boroughDisplayName}</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty">
            {description}
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
                backgroundImage: 'linear-gradient(white, white), linear-gradient(45deg, #6b46a3, #4c1d95)',
                backgroundOrigin: 'border-box',
                backgroundClip: 'content-box, border-box',
                display: 'flex',
                alignItems: 'stretch'
              }}
            >
              {!showEmailInput ? (
                <>
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
                      Get {boroughDisplayName} job alerts
                    </span>
                  </div>

                  <div
                    onClick={() => setShowEmailInput(true)}
                    style={{
                      width: '96px',
                      height: '100%',
                      background: 'linear-gradient(45deg, #4c1d95, #6b46a3)',
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
                      placeholder={`${boroughDisplayName} job alerts`}
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
                      background: 'linear-gradient(45deg, #4c1d95, #6b46a3)',
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
            <h3 className="text-2xl font-bold text-foreground">{boroughDisplayName} Opportunities</h3>
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
                          placeholder="blur"
                          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyatceZQa+ttom+rQBOREiKWv8AtZhg5Wx8U8XyR2sQ0MXgp4KjQ0sF9vZFZn0IDMCEByWa6hm7fmUHZl1ht2pHPLRpq8n/2Q=="
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
                          className="bg-white hover:bg-primary/5"
                          style={{ borderColor: 'var(--primary)', color: 'var(--primary)' }}
                        >
                          {job.type === "full-time" ? "Full-time" : "Part-time"}
                        </Badge>
                      </div>

                      <p className="text-sm text-muted-foreground">
                        {job.company.name} in {job.location} is hiring a {job.type === "full-time" ? "full-time" : "part-time"} {job.title.toLowerCase()}.
                      </p>

                      <Button
                        className="w-full cursor-pointer text-white"
                        style={{ backgroundColor: '#14B8A6' }}
                        size="sm"
                        onClick={() => window.open(`/jobs/${job.shortId}`, '_blank')}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0F9488'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#14B8A6'}
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
              <p className="text-muted-foreground text-lg">No job opportunities in {boroughDisplayName} yet.</p>
              <p className="text-muted-foreground">Subscribe above to get notified when new professional positions are posted!</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}