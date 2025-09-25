import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nycstartupjobs.com'
  const currentDate = new Date()

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/login`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/register`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/hiring`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/career-resources`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    },
  ]

  // Borough pages
  const boroughs = [
    'manhattan-jobs-new-york',
    'brooklyn-jobs-new-york',
    'queens-jobs-new-york',
    'bronx-jobs-new-york',
    'staten-island-jobs-new-york'
  ]

  const boroughPages = boroughs.map(borough => ({
    url: `${baseUrl}/${borough}`,
    lastModified: currentDate,
    changeFrequency: 'daily' as const,
    priority: 0.8,
  }))

  // Role pages
  const roles = [
    'software-engineer-jobs-new-york',
    'product-manager-jobs-new-york',
    'data-scientist-jobs-new-york',
    'mobile-engineer-jobs-new-york',
    'product-designer-jobs-new-york',
    'growth-marketer-jobs-new-york',
    'devops-engineer-jobs-new-york',
    'machine-learning-engineer-jobs-new-york',
    'business-development-manager-jobs-new-york',
    'customer-success-manager-jobs-new-york',
    'sales-manager-jobs-new-york',
    'ux-researcher-jobs-new-york'
  ]

  const rolePages = roles.map(role => ({
    url: `${baseUrl}/${role}`,
    lastModified: currentDate,
    changeFrequency: 'daily' as const,
    priority: 0.8,
  }))

  // Role-Borough combination pages
  const roleBoroughCombinations = [
    // Software Engineer combinations
    'software-engineer-jobs-manhattan',
    'software-engineer-jobs-brooklyn',
    'software-engineer-jobs-queens',
    'software-engineer-jobs-bronx',
    'software-engineer-jobs-staten-island',

    // Product Manager combinations
    'product-manager-jobs-manhattan',
    'product-manager-jobs-brooklyn',
    'product-manager-jobs-queens',

    // Data Scientist combinations
    'data-scientist-jobs-manhattan',

    // Product Designer combinations
    'product-designer-jobs-manhattan',
  ]

  const roleBoroughPages = roleBoroughCombinations.map(combination => ({
    url: `${baseUrl}/${combination}`,
    lastModified: currentDate,
    changeFrequency: 'daily' as const,
    priority: 0.7,
  }))

  // Combine all pages
  return [
    ...staticPages,
    ...boroughPages,
    ...rolePages,
    ...roleBoroughPages,
  ]
}