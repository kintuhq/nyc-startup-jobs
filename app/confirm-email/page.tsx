"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Mail } from "lucide-react"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

export default function ConfirmEmailPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="flex items-center justify-center p-4 py-16">
        <div className="w-full max-w-md">
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to homepage
          </Link>
        </div>

        <Card>
          <CardHeader className="text-center">
            <div className="mb-4">
              <Mail className="w-16 h-16 mx-auto text-primary" />
            </div>
            <CardTitle className="text-2xl">Check your email</CardTitle>
            <CardDescription>
              We've sent you a verification link to confirm your email
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <div className="py-2">
              <p className="text-muted-foreground mb-2">
                Please check your email and click the verification link to activate your account.
                You'll need to verify your email before you can sign in to your dashboard.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <Button
                asChild
                variant="outline"
                className="w-full cursor-pointer hover:[color:oklch(0.65_0.15_45)]"
              >
                <Link href="/login">
                  Sign In
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}