import type { Metadata } from "next"
import EditJobComponent from "./EditJobComponent"

export const metadata: Metadata = {
  title: "Edit Job Posting - NYC Startup Jobs",
  description: "Edit your job posting details, requirements, and company information on NYC Startup Jobs.",
  openGraph: {
    title: "Edit Job Posting - NYC Startup Jobs",
    description: "Edit your job posting details, requirements, and company information on NYC Startup Jobs.",
  },
}

export default function EditJobPage() {
  return <EditJobComponent />
}
import { useRouter, useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Loader2, LogOut } from "lucide-react"
import JobPostingForm from "@/components/job-posting-form"

interface Job {
  id: string
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
    logo: string
  }
}

export default function EditJobPage() {
  const router = useRouter()
  const params = useParams()
  const [job, setJob] = useState<Job | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (params.id) {
      fetchJob(params.id as string)
    }
  }, [params.id])

  const fetchJob = async (jobId: string) => {
    try {
      const response = await fetch(`/api/jobs/${jobId}`)
      if (response.ok) {
        const jobData = await response.json()
        setJob(jobData)
      } else if (response.status === 401) {
        router.push("/login")
      } else {
        router.push("/dashboard")
      }
    } catch (error) {
      console.error("Error fetching job:", error)
      router.push("/dashboard")
    } finally {
      setIsLoading(false)
    }
  }

  const handleJobSubmit = async (jobData: any) => {
    try {
      const response = await fetch(`/api/jobs/${params.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(jobData),
      })

      if (response.ok) {
        router.push("/dashboard")
      } else {
        const errorData = await response.json()
        console.error('Update job error:', errorData)
        const errorMessage = errorData.details
          ? `${errorData.error}: ${errorData.details.map((d: any) => d.message).join(', ')}`
          : errorData.error || "Failed to update job"
        alert(errorMessage)
      }
    } catch (error) {
      console.error("Error updating job:", error)
      alert("An error occurred while updating the job")
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

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Loading job...</p>
        </div>
      </div>
    )
  }

  if (!job) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Job not found</p>
          <Button onClick={() => router.push("/dashboard")} className="cursor-pointer">
            Back to Dashboard
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
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLogout}
                className="hidden md:flex text-gray-700 hover:text-gray-900 cursor-pointer"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
              <Button
                onClick={() => router.push("/dashboard")}
                variant="outline"
                className="cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-[800px] mx-auto px-6 py-12">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Edit Job</h1>
          <p className="text-muted-foreground mt-2">
            Update your job posting details
          </p>
        </div>

        <JobPostingForm
          onSubmit={handleJobSubmit}
          onClose={() => router.push("/dashboard")}
          editingJob={job}
          isModal={false}
        />
      </div>
    </div>
  )
}