"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { X, Upload, Check } from "lucide-react"

interface Job {
  id: string
  title: string
  location: string
  type: string
  jobSpec: string
  aboutCompany: string
  howToApply: string
  company: {
    id: string
    name: string
    logo: string
  }
}

interface JobPostingFormProps {
  onSubmit: (job: any) => void
  onClose: () => void
  editingJob?: Job | null
  isModal?: boolean
}

export default function JobPostingForm({ onSubmit, onClose, editingJob, isModal = true }: JobPostingFormProps) {
  const [formData, setFormData] = useState({
    title: "",
    country: "",
    city: "",
    type: "",
    jobSpec: "",
    aboutCompany: "",
    applicationEmail: "",
    applicationFormUrl: "",
  })

  const [companyData, setCompanyData] = useState({
    name: "",
    url: "",
  })

  const [logoState, setLogoState] = useState({
    currentLogo: "",
    isUploading: false,
    error: "",
    success: false
  })

  const [isLoadingCompany, setIsLoadingCompany] = useState(true)
  const [isFormDataLoaded, setIsFormDataLoaded] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    // Only fetch global company data when creating a new job, not when editing
    if (!editingJob) {
      fetchCompanyData()
      setIsFormDataLoaded(true)
    } else {
      setIsLoadingCompany(false)
      // Form data will be loaded in the editingJob useEffect
    }
  }, [editingJob])


  const fetchCompanyData = async () => {
    try {
      const response = await fetch("/api/company/profile")
      if (response.ok) {
        const company = await response.json()
        setCompanyData({
          name: company.name || "",
          url: company.url || "",
        })
      }
    } catch (error) {
      console.error("Error fetching company data:", error)
    } finally {
      setIsLoadingCompany(false)
    }
  }

  useEffect(() => {
    if (editingJob) {
      // Parse existing location
      // Handle formats like "Berlin, Germany" or just "Berlin"
      const locationParts = editingJob.location.split(', ')
      let country = ""
      let city = ""

      if (locationParts.length > 1) {
        // Format: "City, Country" or "City, State, Country"
        country = locationParts[locationParts.length - 1]
        city = locationParts.slice(0, -1).join(', ')
      } else {
        // Format: just "City" - put it in city field, leave country empty
        city = locationParts[0] || ""
        country = ""
      }

      // Parse howToApply field to extract email and form URL
      let applicationEmail = ""
      let applicationFormUrl = ""

      if (editingJob.howToApply) {
        const lines = editingJob.howToApply.split('\n')
        lines.forEach(line => {
          if (line.startsWith('Email: ')) {
            applicationEmail = line.replace('Email: ', '')
          } else if (line.startsWith('Form: ')) {
            applicationFormUrl = line.replace('Form: ', '')
          } else if (line.includes('@') && !applicationEmail) {
            // If it's just an email without prefix
            applicationEmail = line
          } else if (line.startsWith('http') && !applicationFormUrl) {
            // If it's just a URL without prefix
            applicationFormUrl = line
          }
        })
      }

      const newFormData = {
        title: editingJob.title,
        country: country,
        city: city,
        type: editingJob.type,
        jobSpec: editingJob.jobSpec,
        aboutCompany: editingJob.aboutCompany,
        applicationEmail: applicationEmail,
        applicationFormUrl: applicationFormUrl,
      }

      console.log('Loading job data for editing:', {
        originalLocation: editingJob.location,
        parsedCity: city,
        parsedCountry: country,
        type: editingJob.type,
        formData: newFormData
      })

      setFormData(newFormData)
      setIsFormDataLoaded(true)

      // Set company data from job record when editing
      setCompanyData({
        name: editingJob.company?.name || "",
        url: editingJob.company?.url || "",
      })

      // Set the company logo if available
      if (editingJob.company?.logo) {
        setLogoState(prev => ({
          ...prev,
          currentLogo: editingJob.company.logo
        }))
      }
    }
  }, [editingJob])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const location = formData.city && formData.country ? `${formData.city}, ${formData.country}` : formData.city || formData.country

    // Require at least one application method
    const hasApplicationMethod = formData.applicationEmail || formData.applicationFormUrl

    // Debug validation
    console.log('Form validation check:', {
      title: !!formData.title,
      location: !!location,
      jobSpec: !!formData.jobSpec,
      hasApplicationMethod,
      hasLogo: !!logoState.currentLogo,
      companyName: !!companyData.name,
      formData,
      logoState
    })

    if (formData.title && location && formData.jobSpec && hasApplicationMethod && logoState.currentLogo && companyData.name) {
      // Prepare data to match API schema
      const howToApply = formData.applicationEmail && formData.applicationFormUrl
        ? `Email: ${formData.applicationEmail}\nForm: ${formData.applicationFormUrl}`
        : formData.applicationEmail
          ? `Email: ${formData.applicationEmail}`
          : `Form: ${formData.applicationFormUrl}`

      const submitData: any = {
        title: formData.title,
        location,
        shortBio: formData.aboutCompany.length > 200 ? formData.aboutCompany.substring(0, 200) : formData.aboutCompany, // Use first 200 chars of aboutCompany as shortBio
        jobSpec: formData.jobSpec,
        aboutCompany: formData.aboutCompany,
        howToApply: howToApply,
        companyName: companyData.name,
        companyUrl: companyData.url,
        companyLogo: logoState.currentLogo,
      }

      // Only include type if it's not empty
      if (formData.type) {
        submitData.type = formData.type
      }

      console.log('Submitting job data:', submitData)
      onSubmit(submitData)

      if (!editingJob) {
        setFormData({
          title: "",
          country: "",
          city: "",
          type: "",
          jobSpec: "",
          aboutCompany: "",
          applicationEmail: "",
          applicationFormUrl: "",
        })
      }
    } else {
      // Show validation error
      const missingFields = []
      if (!formData.title) missingFields.push('Job Title')
      if (!location) missingFields.push('Location (Country/City)')
      if (!formData.jobSpec) missingFields.push('Job Specification')
      if (!hasApplicationMethod) missingFields.push('Application Method (Email or Form URL)')
      if (!logoState.currentLogo) missingFields.push('Company Logo')
      if (!companyData.name) missingFields.push('Company Name')

      alert(`Please fill in the following required fields:\n• ${missingFields.join('\n• ')}`)
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleCompanyChange = (field: string, value: string) => {
    setCompanyData((prev) => ({ ...prev, [field]: value }))
  }


  const handleLogoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) {
      console.log('No file selected')
      return
    }

    console.log('Mobile upload started:', { fileName: file.name, fileSize: file.size, fileType: file.type })

    // Clear any previous errors
    setLogoState(prev => ({ ...prev, error: "", success: false }))

    // Validate file type
    if (!file.type.startsWith("image/")) {
      console.error('Invalid file type:', file.type)
      const errorMsg = "Please select an image file (PNG, JPG, GIF)"
      setLogoState(prev => ({ ...prev, error: errorMsg, success: false }))
      alert(errorMsg) // Make error more visible on mobile
      return
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      console.error('File too large:', file.size)
      const errorMsg = "File size must be less than 5MB"
      setLogoState(prev => ({ ...prev, error: errorMsg, success: false }))
      alert(errorMsg) // Make error more visible on mobile
      return
    }

    // Show upload starting feedback
    console.log('Starting upload process...')

    setLogoState(prev => ({ ...prev, isUploading: true, error: "", success: false }))
    console.log('Starting upload process...')

    try {
      // Upload file directly to our server
      const formData = new FormData()
      formData.append('file', file)

      console.log('Uploading file to server...')

      const uploadResponse = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      })

      console.log('Upload response status:', uploadResponse.status)

      if (!uploadResponse.ok) {
        const errorData = await uploadResponse.json().catch(() => ({}))
        console.error('Upload failed:', {
          status: uploadResponse.status,
          statusText: uploadResponse.statusText,
          response: errorData
        })

        // Always reset upload state on failure
        setLogoState(prev => ({ ...prev, isUploading: false }))

        if (uploadResponse.status === 401) {
          // Set clear error message for authentication failure
          const errorMsg = "Session expired. Please log out and log in again to upload images."
          setLogoState(prev => ({ ...prev, error: errorMsg, isUploading: false }))
          alert(errorMsg)
          return
        }

        const errorMsg = errorData.error || "Upload failed. Please try again."
        setLogoState(prev => ({ ...prev, error: errorMsg, isUploading: false }))
        alert(errorMsg)
        return
      }

      const { fileUrl } = await uploadResponse.json()
      console.log('Upload successful, file URL:', fileUrl)

      // For editing jobs, we don't need to update the global company logo
      // The logo will be saved with the job when the form is submitted
      // For new jobs, we still update the global company logo as a fallback
      if (!editingJob) {
        const updateResponse = await fetch("/api/company/logo", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ logoUrl: fileUrl }),
        })

        if (!updateResponse.ok) {
          const errorData = await updateResponse.json().catch(() => ({}))
          if (updateResponse.status === 401) {
            throw new Error("Please log in to update the logo")
          }
          throw new Error(errorData.error || "Failed to update company logo")
        }
      }

      // Add cache-busting parameter to force browser to reload the image
      const cacheBustedUrl = `${fileUrl}?t=${Date.now()}`

      console.log('Upload successful, setting logo state:', cacheBustedUrl)

      setLogoState(prev => ({
        ...prev,
        currentLogo: cacheBustedUrl,
        success: true,
        isUploading: false,
        error: ""
      }))

      console.log('Logo state updated, currentLogo should be:', cacheBustedUrl)

      // Reset the file input
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }

      setTimeout(() => {
        setLogoState(prev => ({ ...prev, success: false }))
      }, 3000)

    } catch (error) {
      console.error("Error uploading logo:", error)

      // Always reset upload state on error
      const errorMessage = error instanceof Error ? error.message : "Upload failed. Please check your connection and try again."

      setLogoState(prev => ({
        ...prev,
        error: errorMessage,
        isUploading: false,
        success: false
      }))

      // Show alert for mobile users who might not see the error text
      alert(`Upload Error: ${errorMessage}`)
    }
  }

  const cardContent = (
    <Card className={isModal ? "w-full max-w-2xl max-h-[90vh] overflow-y-auto" : "w-full max-w-4xl border-0 shadow-none"} style={!isModal ? { backgroundColor: 'white' } : undefined}>
      {isModal && (
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl">
                {editingJob ? "Edit Job Posting" : "Post a Job"}
              </CardTitle>
              <CardDescription>
                {editingJob
                  ? "Update your job posting details"
                  : "Share your opportunity with talented professionals - completely free!"
                }
              </CardDescription>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose} className="h-8 w-8 p-0">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
      )}

        <CardContent className={isModal ? "" : "px-0"}>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <form onSubmit={handleSubmit} className="space-y-10">
            <div className="space-y-2">
              <Label htmlFor="title" className="text-xl font-semibold">Job Title *</Label>
              <p className="text-sm text-gray-400 -mt-1 mb-2">e.g. Senior Software Engineer</p>
              <div className="w-full md:w-1/2">
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => handleChange("title", e.target.value)}
                  required
                  className="bg-white border-gray-300 text-gray-900"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="type" className="text-xl font-semibold">Employment Type *</Label>
              <p className="text-sm text-gray-400 -mt-1 mb-2">Choose full-time or part-time position</p>
              <Select key={`type-${formData.type}-${isFormDataLoaded}`} value={formData.type} onValueChange={(value) => handleChange("type", value)}>
                <SelectTrigger className="bg-white border-gray-300 text-gray-900">
                  <SelectValue placeholder="Select employment type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="full-time">Full-time</SelectItem>
                  <SelectItem value="part-time">Part-time</SelectItem>
                  <SelectItem value="contractor">Contractor</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="country" className="text-xl font-semibold">Country *</Label>
              <p className="text-sm text-gray-400 -mt-1 mb-2">Select the country where the position is located</p>
              <Select key={`country-${formData.country}-${isFormDataLoaded}`} value={formData.country} onValueChange={(value) => handleChange("country", value)}>
                <SelectTrigger className="bg-white border-gray-300 text-gray-900">
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Afghanistan">Afghanistan</SelectItem>
                  <SelectItem value="Albania">Albania</SelectItem>
                  <SelectItem value="Algeria">Algeria</SelectItem>
                  <SelectItem value="Argentina">Argentina</SelectItem>
                  <SelectItem value="Armenia">Armenia</SelectItem>
                  <SelectItem value="Australia">Australia</SelectItem>
                  <SelectItem value="Austria">Austria</SelectItem>
                  <SelectItem value="Azerbaijan">Azerbaijan</SelectItem>
                  <SelectItem value="Bahrain">Bahrain</SelectItem>
                  <SelectItem value="Bangladesh">Bangladesh</SelectItem>
                  <SelectItem value="Belarus">Belarus</SelectItem>
                  <SelectItem value="Belgium">Belgium</SelectItem>
                  <SelectItem value="Bolivia">Bolivia</SelectItem>
                  <SelectItem value="Bosnia and Herzegovina">Bosnia and Herzegovina</SelectItem>
                  <SelectItem value="Brazil">Brazil</SelectItem>
                  <SelectItem value="Bulgaria">Bulgaria</SelectItem>
                  <SelectItem value="Cambodia">Cambodia</SelectItem>
                  <SelectItem value="Canada">Canada</SelectItem>
                  <SelectItem value="Chile">Chile</SelectItem>
                  <SelectItem value="China">China</SelectItem>
                  <SelectItem value="Colombia">Colombia</SelectItem>
                  <SelectItem value="Costa Rica">Costa Rica</SelectItem>
                  <SelectItem value="Croatia">Croatia</SelectItem>
                  <SelectItem value="Czech Republic">Czech Republic</SelectItem>
                  <SelectItem value="Denmark">Denmark</SelectItem>
                  <SelectItem value="Ecuador">Ecuador</SelectItem>
                  <SelectItem value="Egypt">Egypt</SelectItem>
                  <SelectItem value="Estonia">Estonia</SelectItem>
                  <SelectItem value="Finland">Finland</SelectItem>
                  <SelectItem value="France">France</SelectItem>
                  <SelectItem value="Georgia">Georgia</SelectItem>
                  <SelectItem value="Germany">Germany</SelectItem>
                  <SelectItem value="Greece">Greece</SelectItem>
                  <SelectItem value="Hungary">Hungary</SelectItem>
                  <SelectItem value="Iceland">Iceland</SelectItem>
                  <SelectItem value="India">India</SelectItem>
                  <SelectItem value="Indonesia">Indonesia</SelectItem>
                  <SelectItem value="Iran">Iran</SelectItem>
                  <SelectItem value="Iraq">Iraq</SelectItem>
                  <SelectItem value="Ireland">Ireland</SelectItem>
                  <SelectItem value="Israel">Israel</SelectItem>
                  <SelectItem value="Italy">Italy</SelectItem>
                  <SelectItem value="Japan">Japan</SelectItem>
                  <SelectItem value="Jordan">Jordan</SelectItem>
                  <SelectItem value="Kazakhstan">Kazakhstan</SelectItem>
                  <SelectItem value="Kenya">Kenya</SelectItem>
                  <SelectItem value="Kuwait">Kuwait</SelectItem>
                  <SelectItem value="Latvia">Latvia</SelectItem>
                  <SelectItem value="Lebanon">Lebanon</SelectItem>
                  <SelectItem value="Lithuania">Lithuania</SelectItem>
                  <SelectItem value="Luxembourg">Luxembourg</SelectItem>
                  <SelectItem value="Malaysia">Malaysia</SelectItem>
                  <SelectItem value="Mexico">Mexico</SelectItem>
                  <SelectItem value="Morocco">Morocco</SelectItem>
                  <SelectItem value="Netherlands">Netherlands</SelectItem>
                  <SelectItem value="New Zealand">New Zealand</SelectItem>
                  <SelectItem value="Nigeria">Nigeria</SelectItem>
                  <SelectItem value="Norway">Norway</SelectItem>
                  <SelectItem value="Pakistan">Pakistan</SelectItem>
                  <SelectItem value="Peru">Peru</SelectItem>
                  <SelectItem value="Philippines">Philippines</SelectItem>
                  <SelectItem value="Poland">Poland</SelectItem>
                  <SelectItem value="Portugal">Portugal</SelectItem>
                  <SelectItem value="Qatar">Qatar</SelectItem>
                  <SelectItem value="Romania">Romania</SelectItem>
                  <SelectItem value="Russia">Russia</SelectItem>
                  <SelectItem value="Saudi Arabia">Saudi Arabia</SelectItem>
                  <SelectItem value="Serbia">Serbia</SelectItem>
                  <SelectItem value="Singapore">Singapore</SelectItem>
                  <SelectItem value="Slovakia">Slovakia</SelectItem>
                  <SelectItem value="Slovenia">Slovenia</SelectItem>
                  <SelectItem value="South Africa">South Africa</SelectItem>
                  <SelectItem value="South Korea">South Korea</SelectItem>
                  <SelectItem value="Spain">Spain</SelectItem>
                  <SelectItem value="Sri Lanka">Sri Lanka</SelectItem>
                  <SelectItem value="Sweden">Sweden</SelectItem>
                  <SelectItem value="Switzerland">Switzerland</SelectItem>
                  <SelectItem value="Thailand">Thailand</SelectItem>
                  <SelectItem value="Turkey">Turkey</SelectItem>
                  <SelectItem value="Ukraine">Ukraine</SelectItem>
                  <SelectItem value="United Arab Emirates">United Arab Emirates</SelectItem>
                  <SelectItem value="United Kingdom">United Kingdom</SelectItem>
                  <SelectItem value="United States">United States</SelectItem>
                  <SelectItem value="Uruguay">Uruguay</SelectItem>
                  <SelectItem value="Venezuela">Venezuela</SelectItem>
                  <SelectItem value="Vietnam">Vietnam</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="city" className="text-xl font-semibold">City/State *</Label>
              <p className="text-sm text-gray-400 -mt-1 mb-2">e.g. New York, NY</p>
              <div className="w-full md:w-1/2">
                <Input
                  id="city"
                  value={formData.city}
                  onChange={(e) => handleChange("city", e.target.value)}
                  required
                  className="bg-white border-gray-300 text-gray-900"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="jobSpec" className="text-xl font-semibold">Job Specification *</Label>
              <p className="text-sm text-gray-400 -mt-1 mb-2">Detailed job requirements, qualifications, responsibilities</p>
              <Textarea
                id="jobSpec"
                value={formData.jobSpec}
                onChange={(e) => handleChange("jobSpec", e.target.value)}
                rows={6}
                required
                className="bg-white border-gray-300 text-gray-900 min-h-[300px]"
              />
            </div>

            {/* Company Information Section */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Company Information</h3>
                <p className="text-sm text-gray-600">Tell candidates about your company</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="companyName" className="text-xl font-semibold">Company Name *</Label>
                <p className="text-sm text-gray-400 -mt-1 mb-2">e.g. TechCorp Analytics</p>
                <div className="w-full md:w-1/2">
                  <Input
                    id="companyName"
                    value={companyData.name}
                    onChange={(e) => handleCompanyChange("name", e.target.value)}
                    required
                    className="bg-white border-gray-300 text-gray-900"
                    disabled={isLoadingCompany}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="companyUrl" className="text-xl font-semibold">Company Website</Label>
                <p className="text-sm text-gray-400 -mt-1 mb-2">e.g. https://www.techcorp.com</p>
                <div className="w-full md:w-1/2">
                  <Input
                    id="companyUrl"
                    type="url"
                    value={companyData.url}
                    onChange={(e) => handleCompanyChange("url", e.target.value)}
                    placeholder="https://"
                    className="bg-white border-gray-300 text-gray-900"
                    disabled={isLoadingCompany}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="aboutCompany" className="text-xl font-semibold">About the Company *</Label>
                <p className="text-sm text-gray-400 -mt-1 mb-2">Tell candidates about your company, culture, mission, values</p>
                <Textarea
                  id="aboutCompany"
                  value={formData.aboutCompany}
                  onChange={(e) => handleChange("aboutCompany", e.target.value)}
                  rows={10}
                  required
                  className="bg-white border-gray-300 text-gray-900 min-h-[240px]"
                />
              </div>

              {/* Company Logo Upload */}
              <div className="space-y-2">
                <Label className="text-xl font-semibold">Company Logo *</Label>
                <p className="text-sm text-gray-400 -mt-1 mb-2">Upload your company's logo to make job postings more recognizable. Square images work best.</p>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 bg-white">
                  {logoState.currentLogo ? (
                    <div className="text-center">
                      <img
                        key={logoState.currentLogo}
                        src={logoState.currentLogo}
                        alt="Company logo"
                        className="w-20 h-20 rounded-lg object-cover mx-auto mb-3"
                        onLoad={() => console.log('Image loaded successfully:', logoState.currentLogo)}
                        onError={(e) => console.error('Image failed to load:', logoState.currentLogo, e)}
                      />
                      <p className="text-sm text-gray-600 mb-2">Logo uploaded successfully!</p>
                      <label htmlFor="logo-upload-input" className="inline-block">
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          disabled={logoState.isUploading}
                          className="cursor-pointer"
                          asChild
                        >
                          <span>Change Logo</span>
                        </Button>
                      </label>
                    </div>
                  ) : (
                    <label
                      htmlFor="logo-upload-input"
                      className="block text-center cursor-pointer"
                    >
                      {logoState.success ? (
                        <div className="text-green-600">
                          <Check className="w-8 h-8 mx-auto mb-2" />
                          <p className="font-medium">Logo uploaded successfully!</p>
                        </div>
                      ) : (
                        <div>
                          <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                          <p className="text-sm font-medium text-gray-700 mb-1">
                            {logoState.isUploading ? "Uploading..." : "Click to upload company logo"}
                          </p>
                          <p className="text-xs text-gray-500">
                            PNG, JPG, GIF up to 5MB • Square images recommended
                          </p>
                        </div>
                      )}
                    </label>
                  )}

                  <input
                    id="logo-upload-input"
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleLogoUpload}
                    className="hidden"
                    disabled={logoState.isUploading}
                  />

                  {logoState.error && (
                    <div className="mt-3 p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md">
                      {logoState.error}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <Label className="text-xl font-semibold">Application Method *</Label>
              <p className="text-sm text-gray-400 -mt-1 mb-4">Provide at least one way for candidates to apply (email or application form URL, or both)</p>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="applicationEmail" className="text-lg font-medium">Email Address</Label>
                  <Input
                    id="applicationEmail"
                    type="email"
                    value={formData.applicationEmail}
                    onChange={(e) => handleChange("applicationEmail", e.target.value)}
                    placeholder="hr@company.com"
                    className="bg-white border-gray-300 text-gray-900"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="applicationFormUrl" className="text-lg font-medium">Application Form URL</Label>
                  <Input
                    id="applicationFormUrl"
                    type="url"
                    value={formData.applicationFormUrl}
                    onChange={(e) => handleChange("applicationFormUrl", e.target.value)}
                    placeholder="https://company.com/apply"
                    className="bg-white border-gray-300 text-gray-900"
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <Button type="submit" className="flex-1 h-12 cursor-pointer bg-blue-600 hover:bg-blue-700 hover:shadow-lg transition-all duration-200 text-white">
                {editingJob ? "Update Job Posting" : "Post Job for Free"}
              </Button>
              {isModal && (
                <Button type="button" variant="outline" onClick={onClose} className="px-6 cursor-pointer">
                  Cancel
                </Button>
              )}
            </div>

            <div className="text-center mt-4">
              <p className="text-sm text-gray-600">
                Need any help? <a href="/contact" className="text-blue-600 hover:text-blue-700 underline">Contact us</a>
              </p>
            </div>
          </form>
          </div>
        </CardContent>
    </Card>
  )

  return isModal ? (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      {cardContent}
    </div>
  ) : (
    cardContent
  )
}
