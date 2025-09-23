import type { Metadata } from "next"
import ResetPasswordComponent from "./ResetPasswordComponent"

export const metadata: Metadata = {
  title: "Set New Password - NYC Startup Jobs",
  description: "Set a new password for your NYC Startup Jobs account using your password reset token.",
  openGraph: {
    title: "Set New Password - NYC Startup Jobs",
    description: "Set a new password for your NYC Startup Jobs account using your password reset token.",
  },
}

export default function ResetPasswordPage() {
  return <ResetPasswordComponent />
}

"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft } from "lucide-react"

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [isSuccess, setIsSuccess] = useState(false)
  const [isValidatingToken, setIsValidatingToken] = useState(true)
  const [isValidToken, setIsValidToken] = useState(false)

  const router = useRouter()
  const searchParams = useSearchParams()
  const token = searchParams.get('token')

  useEffect(() => {
    if (!token) {
      setError("Invalid reset link")
      setIsValidatingToken(false)
      return
    }

    // Validate token on page load
    const validateToken = async () => {
      try {
        const response = await fetch("/api/auth/validate-reset-token", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token }),
        })

        if (response.ok) {
          setIsValidToken(true)
        } else {
          setError("This reset link is invalid or has expired")
        }
      } catch (error) {
        setError("Failed to validate reset link")
      } finally {
        setIsValidatingToken(false)
      }
    }

    validateToken()
  }, [token])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    if (password !== confirmPassword) {
      setError("Passwords don't match")
      setIsLoading(false)
      return
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long")
      setIsLoading(false)
      return
    }

    try {
      const response = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password }),
      })

      if (response.ok) {
        setIsSuccess(true)
      } else {
        const data = await response.json()
        setError(data.error || "Failed to reset password")
      }
    } catch (error) {
      setError("An error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  if (isValidatingToken) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Validating reset link...</CardTitle>
            </CardHeader>
          </Card>
        </div>
      </div>
    )
  }

  if (!isValidToken) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="mb-6">
            <Link href="/forgot-password" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Request new reset link
            </Link>
          </div>

          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Invalid Reset Link</CardTitle>
              <CardDescription>
                {error || "This password reset link is invalid or has expired"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center space-y-4">
                <p className="text-sm text-muted-foreground">
                  Password reset links expire after 1 hour for security reasons.
                </p>
                <Link href="/forgot-password">
                  <Button
                    className="w-full cursor-pointer text-white"
                    style={{ backgroundColor: '#14B8A6' }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0F9488'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#14B8A6'}
                  >
                    Request New Reset Link
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="mb-6">
            <Link href="/login" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Sign in with new password
            </Link>
          </div>

          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Password Reset Successful</CardTitle>
              <CardDescription>
                Your password has been successfully updated
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center space-y-4">
                <p className="text-sm text-muted-foreground">
                  You can now sign in with your new password.
                </p>
                <Link href="/login">
                  <Button
                    className="w-full cursor-pointer text-white"
                    style={{ backgroundColor: '#14B8A6' }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0F9488'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#14B8A6'}
                  >
                    Sign In
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="mb-6">
          <Link href="/login" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to sign in
          </Link>
        </div>

        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Reset your password</CardTitle>
            <CardDescription>
              Enter your new password below
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md">
                  {error}
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="password">New Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={isLoading}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm New Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  disabled={isLoading}
                />
              </div>

              <Button
                type="submit"
                className="w-full cursor-pointer text-white"
                style={{ backgroundColor: '#14B8A6' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0F9488'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#14B8A6'}
                disabled={isLoading}
              >
                {isLoading ? "Resetting password..." : "Reset password"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}