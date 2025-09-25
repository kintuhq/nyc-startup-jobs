import type { Metadata } from "next"
import RolePage from "@/components/RolePage"

export const metadata: Metadata = {
  title: "Machine Learning Engineer Jobs in New York City - AI/ML Roles",
  description: "Find the latest Machine Learning Engineer job opportunities in New York City. Build AI-powered products at NYC's cutting-edge startups.",
  openGraph: {
    title: "Machine Learning Engineer Jobs in New York City - AI/ML Roles",
    description: "Find the latest Machine Learning Engineer job opportunities in New York City. Build AI-powered products at NYC's cutting-edge startups.",
  },
}

export default function MachineLearningEngineerPage() {
  return (
    <RolePage
      role="Machine Learning Engineer"
      roleDisplayName="Machine Learning Engineer"
      description="Build AI-powered solutions and machine learning systems at NYC's most innovative startups"
      metaTitle="Machine Learning Engineer Jobs in New York City"
    />
  )
}