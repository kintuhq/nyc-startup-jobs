"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft } from "lucide-react"

export default function ContactComponent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSuccess(true)
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        const data = await response.json()
        setError(data.error || "Failed to send message")
      }
    } catch (error) {
      setError("An error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  if (isSuccess) {
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
              <Button
                onClick={() => router.push("/")}
                variant="outline"
                className="cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </div>
          </div>
        </header>

        <div className="max-w-2xl mx-auto px-6 py-12">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Message Sent!</CardTitle>
              <CardDescription>
                Thank you for contacting us. We'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center space-y-4">
                <p className="text-sm text-muted-foreground">
                  In the meantime, feel free to browse our current job opportunities.
                </p>
                <Button
                  onClick={() => router.push("/")}
                  className="bg-primary hover:bg-primary/90 cursor-pointer"
                >
                  Browse Jobs
                </Button>
              </div>
            </CardContent>
          </Card>
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
                alt="NYC Startup Jobs logo"
                className="h-14 w-14 mr-2"
              />
              <div>
                <h1 className="text-2xl font-bold">
                  <span className="text-black">NYC Startup</span> <span className="text-primary">Jobs</span>
                </h1>
                <p className="text-muted-foreground -mt-1 text-sm">Building NYC startups</p>
              </div>
            </div>
            <Button
              onClick={() => router.push("/")}
              variant="outline"
              className="cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-6 py-12">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Contact Us</CardTitle>
            <CardDescription className="pb-8">
              Have a question or need help? Send us a message and we'll get back to you soon.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    required
                    disabled={isLoading}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject *</Label>
                <Input
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => handleChange("subject", e.target.value)}
                  required
                  disabled={isLoading}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  rows={6}
                  required
                  disabled={isLoading}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 cursor-pointer"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </CardContent>
        </Card>
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
                  alt="NYC StartupJobs Logo"
                  className="h-8 w-8 mr-2"
                />
                <h3 className="text-2xl font-bold text-foreground">
                  NYC Startup <span className="text-primary">Jobs</span>
                </h3>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                Helping NYC's startup ecosystem thrive by connecting skilled professionals with the city's most promising startups.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-3">For Job Seekers</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Browse Jobs
                  </a>
                </li>
                <li>
                  <a href="/career-resources" className="hover:text-primary transition-colors">
                    Career Resources
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Career Tips
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