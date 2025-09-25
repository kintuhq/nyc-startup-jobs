import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="mx-auto px-4 py-12" style={{ maxWidth: "1240px" }}>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-3">
              <Image
                src="/logo.png"
                alt="NYC Startup Jobs Logo"
                width={38}
                height={38}
                className="h-8 w-8 mr-2"
                loading="lazy"
              />
              <h3 className="text-2xl font-bold">
                <span className="text-primary">NYC</span> <span className="text-foreground">Startup Jobs</span>
              </h3>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Helping NYC's startup ecosystem thrive by connecting skilled professionals with the city's most promising startups.
            </p>
          </div>

          {/* Jobs by Borough */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">Jobs by Location</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/manhattan-jobs-new-york" className="hover:text-primary transition-colors">
                  Manhattan Jobs
                </a>
              </li>
              <li>
                <a href="/brooklyn-jobs-new-york" className="hover:text-primary transition-colors">
                  Brooklyn Jobs
                </a>
              </li>
              <li>
                <a href="/queens-jobs-new-york" className="hover:text-primary transition-colors">
                  Queens Jobs
                </a>
              </li>
              <li>
                <a href="/bronx-jobs-new-york" className="hover:text-primary transition-colors">
                  Bronx Jobs
                </a>
              </li>
              <li>
                <a href="/staten-island-jobs-new-york" className="hover:text-primary transition-colors">
                  Staten Island Jobs
                </a>
              </li>
            </ul>
          </div>

          {/* Jobs by Role */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">Popular Roles</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/software-engineer-jobs-new-york" className="hover:text-primary transition-colors">
                  Software Engineer
                </a>
              </li>
              <li>
                <a href="/product-manager-jobs-new-york" className="hover:text-primary transition-colors">
                  Product Manager
                </a>
              </li>
              <li>
                <a href="/data-scientist-jobs-new-york" className="hover:text-primary transition-colors">
                  Data Scientist
                </a>
              </li>
              <li>
                <a href="/product-designer-jobs-new-york" className="hover:text-primary transition-colors">
                  Product Designer
                </a>
              </li>
              <li>
                <a href="/growth-marketer-jobs-new-york" className="hover:text-primary transition-colors">
                  Growth Marketer
                </a>
              </li>
            </ul>
          </div>

          {/* For Startups */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">For Startups</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/login" className="hover:text-primary transition-colors">
                  Post Jobs
                </a>
              </li>
              <li>
                <a href="/register" className="hover:text-primary transition-colors">
                  Sign Up
                </a>
              </li>
              <li>
                <a href="/hiring" className="hover:text-primary transition-colors">
                  Hiring Guide
                </a>
              </li>
              <li>
                <a href="/career-resources" className="hover:text-primary transition-colors">
                  Resources
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">Connect</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/contact" className="hover:text-primary transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="/sitemap.xml" className="hover:text-primary transition-colors">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Featured Job Categories */}
        <div className="mt-8 pt-8 border-t border-border">
          <h4 className="font-semibold text-foreground mb-4">Featured Job Categories</h4>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
            {/* NYC-wide roles */}
            <div>
              <h5 className="font-medium text-foreground mb-3">Jobs in NYC</h5>
              <div className="space-y-1">
                <a href="/software-engineer-jobs-new-york" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Software Engineer Jobs in NYC</a>
                <a href="/mobile-engineer-jobs-new-york" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Mobile Engineer Jobs in NYC</a>
                <a href="/devops-engineer-jobs-new-york" className="block text-sm text-muted-foreground hover:text-primary transition-colors">DevOps Engineer Jobs in NYC</a>
                <a href="/data-scientist-jobs-new-york" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Data Scientist Jobs in NYC</a>
                <a href="/machine-learning-engineer-jobs-new-york" className="block text-sm text-muted-foreground hover:text-primary transition-colors">ML Engineer Jobs in NYC</a>
                <a href="/qa-engineer-jobs-new-york" className="block text-sm text-muted-foreground hover:text-primary transition-colors">QA Engineer Jobs in NYC</a>
                <a href="/security-engineer-jobs-new-york" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Security Engineer Jobs in NYC</a>
                <a href="/product-manager-jobs-new-york" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Product Manager Jobs in NYC</a>
                <a href="/product-designer-jobs-new-york" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Product Designer Jobs in NYC</a>
                <a href="/ux-researcher-jobs-new-york" className="block text-sm text-muted-foreground hover:text-primary transition-colors">UX Researcher Jobs in NYC</a>
                <a href="/graphic-designer-jobs-new-york" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Graphic Designer Jobs in NYC</a>
                <a href="/brand-designer-jobs-new-york" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Brand Designer Jobs in NYC</a>
                <a href="/founder-jobs-new-york" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Founder Jobs in NYC</a>
                <a href="/coo-jobs-new-york" className="block text-sm text-muted-foreground hover:text-primary transition-colors">COO Jobs in NYC</a>
                <a href="/cfo-jobs-new-york" className="block text-sm text-muted-foreground hover:text-primary transition-colors">CFO Jobs in NYC</a>
                <a href="/cto-jobs-new-york" className="block text-sm text-muted-foreground hover:text-primary transition-colors">CTO Jobs in NYC</a>
                <a href="/head-of-product-jobs-new-york" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Head of Product Jobs in NYC</a>
                <a href="/head-of-design-jobs-new-york" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Head of Design Jobs in NYC</a>
                <a href="/growth-marketer-jobs-new-york" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Growth Marketer Jobs in NYC</a>
                <a href="/content-marketer-jobs-new-york" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Content Marketer Jobs in NYC</a>
                <a href="/seo-marketer-jobs-new-york" className="block text-sm text-muted-foreground hover:text-primary transition-colors">SEO Marketer Jobs in NYC</a>
                <a href="/social-media-manager-jobs-new-york" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Social Media Manager Jobs in NYC</a>
                <a href="/community-manager-jobs-new-york" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Community Manager Jobs in NYC</a>
                <a href="/business-development-manager-jobs-new-york" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Business Development Jobs in NYC</a>
                <a href="/sales-manager-jobs-new-york" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Sales Manager Jobs in NYC</a>
                <a href="/partnerships-manager-jobs-new-york" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Partnerships Manager Jobs in NYC</a>
                <a href="/account-manager-jobs-new-york" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Account Manager Jobs in NYC</a>
                <a href="/customer-success-manager-jobs-new-york" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Customer Success Jobs in NYC</a>
                <a href="/customer-support-jobs-new-york" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Customer Support Jobs in NYC</a>
                <a href="/hr-manager-jobs-new-york" className="block text-sm text-muted-foreground hover:text-primary transition-colors">HR Manager Jobs in NYC</a>
                <a href="/recruiter-jobs-new-york" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Recruiter Jobs in NYC</a>
                <a href="/legal-jobs-new-york" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Legal Jobs in NYC</a>
                <a href="/finance-jobs-new-york" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Finance Jobs in NYC</a>
                <a href="/operations-associate-jobs-new-york" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Operations Associate Jobs in NYC</a>
                <a href="/executive-assistant-jobs-new-york" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Executive Assistant Jobs in NYC</a>
              </div>
            </div>

            {/* Manhattan */}
            <div>
              <h5 className="font-medium text-foreground mb-3">Jobs in Manhattan</h5>
              <div className="space-y-1">
                <a href="/software-engineer-jobs-manhattan" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Software Engineer Jobs in Manhattan</a>
                <a href="/mobile-engineer-jobs-manhattan" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Mobile Engineer Jobs in Manhattan</a>
                <a href="/devops-engineer-jobs-manhattan" className="block text-sm text-muted-foreground hover:text-primary transition-colors">DevOps Engineer Jobs in Manhattan</a>
                <a href="/data-scientist-jobs-manhattan" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Data Scientist Jobs in Manhattan</a>
                <a href="/machine-learning-engineer-jobs-manhattan" className="block text-sm text-muted-foreground hover:text-primary transition-colors">ML Engineer Jobs in Manhattan</a>
                <a href="/qa-engineer-jobs-manhattan" className="block text-sm text-muted-foreground hover:text-primary transition-colors">QA Engineer Jobs in Manhattan</a>
                <a href="/security-engineer-jobs-manhattan" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Security Engineer Jobs in Manhattan</a>
                <a href="/product-manager-jobs-manhattan" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Product Manager Jobs in Manhattan</a>
                <a href="/product-designer-jobs-manhattan" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Product Designer Jobs in Manhattan</a>
                <a href="/ux-researcher-jobs-manhattan" className="block text-sm text-muted-foreground hover:text-primary transition-colors">UX Researcher Jobs in Manhattan</a>
                <a href="/graphic-designer-jobs-manhattan" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Graphic Designer Jobs in Manhattan</a>
                <a href="/brand-designer-jobs-manhattan" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Brand Designer Jobs in Manhattan</a>
                <a href="/founder-jobs-manhattan" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Founder Jobs in Manhattan</a>
                <a href="/coo-jobs-manhattan" className="block text-sm text-muted-foreground hover:text-primary transition-colors">COO Jobs in Manhattan</a>
                <a href="/cfo-jobs-manhattan" className="block text-sm text-muted-foreground hover:text-primary transition-colors">CFO Jobs in Manhattan</a>
                <a href="/cto-jobs-manhattan" className="block text-sm text-muted-foreground hover:text-primary transition-colors">CTO Jobs in Manhattan</a>
                <a href="/head-of-product-jobs-manhattan" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Head of Product Jobs in Manhattan</a>
                <a href="/head-of-design-jobs-manhattan" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Head of Design Jobs in Manhattan</a>
                <a href="/growth-marketer-jobs-manhattan" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Growth Marketer Jobs in Manhattan</a>
                <a href="/content-marketer-jobs-manhattan" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Content Marketer Jobs in Manhattan</a>
                <a href="/seo-marketer-jobs-manhattan" className="block text-sm text-muted-foreground hover:text-primary transition-colors">SEO Marketer Jobs in Manhattan</a>
                <a href="/social-media-manager-jobs-manhattan" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Social Media Manager Jobs in Manhattan</a>
                <a href="/community-manager-jobs-manhattan" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Community Manager Jobs in Manhattan</a>
                <a href="/business-development-manager-jobs-manhattan" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Business Development Jobs in Manhattan</a>
                <a href="/sales-manager-jobs-manhattan" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Sales Manager Jobs in Manhattan</a>
                <a href="/partnerships-manager-jobs-manhattan" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Partnerships Manager Jobs in Manhattan</a>
                <a href="/account-manager-jobs-manhattan" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Account Manager Jobs in Manhattan</a>
                <a href="/customer-success-manager-jobs-manhattan" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Customer Success Jobs in Manhattan</a>
                <a href="/customer-support-jobs-manhattan" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Customer Support Jobs in Manhattan</a>
                <a href="/hr-manager-jobs-manhattan" className="block text-sm text-muted-foreground hover:text-primary transition-colors">HR Manager Jobs in Manhattan</a>
                <a href="/recruiter-jobs-manhattan" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Recruiter Jobs in Manhattan</a>
                <a href="/legal-jobs-manhattan" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Legal Jobs in Manhattan</a>
                <a href="/finance-jobs-manhattan" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Finance Jobs in Manhattan</a>
                <a href="/operations-associate-jobs-manhattan" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Operations Associate Jobs in Manhattan</a>
                <a href="/executive-assistant-jobs-manhattan" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Executive Assistant Jobs in Manhattan</a>
              </div>
            </div>

            {/* Brooklyn */}
            <div>
              <h5 className="font-medium text-foreground mb-3">Jobs in Brooklyn</h5>
              <div className="space-y-1">
                <a href="/software-engineer-jobs-brooklyn" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Software Engineer Jobs in Brooklyn</a>
                <a href="/mobile-engineer-jobs-brooklyn" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Mobile Engineer Jobs in Brooklyn</a>
                <a href="/devops-engineer-jobs-brooklyn" className="block text-sm text-muted-foreground hover:text-primary transition-colors">DevOps Engineer Jobs in Brooklyn</a>
                <a href="/data-scientist-jobs-brooklyn" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Data Scientist Jobs in Brooklyn</a>
                <a href="/machine-learning-engineer-jobs-brooklyn" className="block text-sm text-muted-foreground hover:text-primary transition-colors">ML Engineer Jobs in Brooklyn</a>
                <a href="/qa-engineer-jobs-brooklyn" className="block text-sm text-muted-foreground hover:text-primary transition-colors">QA Engineer Jobs in Brooklyn</a>
                <a href="/security-engineer-jobs-brooklyn" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Security Engineer Jobs in Brooklyn</a>
                <a href="/product-manager-jobs-brooklyn" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Product Manager Jobs in Brooklyn</a>
                <a href="/product-designer-jobs-brooklyn" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Product Designer Jobs in Brooklyn</a>
                <a href="/ux-researcher-jobs-brooklyn" className="block text-sm text-muted-foreground hover:text-primary transition-colors">UX Researcher Jobs in Brooklyn</a>
                <a href="/graphic-designer-jobs-brooklyn" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Graphic Designer Jobs in Brooklyn</a>
                <a href="/brand-designer-jobs-brooklyn" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Brand Designer Jobs in Brooklyn</a>
                <a href="/founder-jobs-brooklyn" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Founder Jobs in Brooklyn</a>
                <a href="/coo-jobs-brooklyn" className="block text-sm text-muted-foreground hover:text-primary transition-colors">COO Jobs in Brooklyn</a>
                <a href="/cfo-jobs-brooklyn" className="block text-sm text-muted-foreground hover:text-primary transition-colors">CFO Jobs in Brooklyn</a>
                <a href="/cto-jobs-brooklyn" className="block text-sm text-muted-foreground hover:text-primary transition-colors">CTO Jobs in Brooklyn</a>
                <a href="/head-of-product-jobs-brooklyn" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Head of Product Jobs in Brooklyn</a>
                <a href="/head-of-design-jobs-brooklyn" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Head of Design Jobs in Brooklyn</a>
                <a href="/growth-marketer-jobs-brooklyn" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Growth Marketer Jobs in Brooklyn</a>
                <a href="/content-marketer-jobs-brooklyn" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Content Marketer Jobs in Brooklyn</a>
                <a href="/seo-marketer-jobs-brooklyn" className="block text-sm text-muted-foreground hover:text-primary transition-colors">SEO Marketer Jobs in Brooklyn</a>
                <a href="/social-media-manager-jobs-brooklyn" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Social Media Manager Jobs in Brooklyn</a>
                <a href="/community-manager-jobs-brooklyn" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Community Manager Jobs in Brooklyn</a>
                <a href="/business-development-manager-jobs-brooklyn" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Business Development Jobs in Brooklyn</a>
                <a href="/sales-manager-jobs-brooklyn" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Sales Manager Jobs in Brooklyn</a>
                <a href="/partnerships-manager-jobs-brooklyn" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Partnerships Manager Jobs in Brooklyn</a>
                <a href="/account-manager-jobs-brooklyn" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Account Manager Jobs in Brooklyn</a>
                <a href="/customer-success-manager-jobs-brooklyn" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Customer Success Jobs in Brooklyn</a>
                <a href="/customer-support-jobs-brooklyn" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Customer Support Jobs in Brooklyn</a>
                <a href="/hr-manager-jobs-brooklyn" className="block text-sm text-muted-foreground hover:text-primary transition-colors">HR Manager Jobs in Brooklyn</a>
                <a href="/recruiter-jobs-brooklyn" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Recruiter Jobs in Brooklyn</a>
                <a href="/legal-jobs-brooklyn" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Legal Jobs in Brooklyn</a>
                <a href="/finance-jobs-brooklyn" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Finance Jobs in Brooklyn</a>
                <a href="/operations-associate-jobs-brooklyn" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Operations Associate Jobs in Brooklyn</a>
                <a href="/executive-assistant-jobs-brooklyn" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Executive Assistant Jobs in Brooklyn</a>
              </div>
            </div>

            {/* Queens */}
            <div>
              <h5 className="font-medium text-foreground mb-3">Jobs in Queens</h5>
              <div className="space-y-1">
                <a href="/software-engineer-jobs-queens" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Software Engineer Jobs in Queens</a>
                <a href="/mobile-engineer-jobs-queens" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Mobile Engineer Jobs in Queens</a>
                <a href="/devops-engineer-jobs-queens" className="block text-sm text-muted-foreground hover:text-primary transition-colors">DevOps Engineer Jobs in Queens</a>
                <a href="/data-scientist-jobs-queens" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Data Scientist Jobs in Queens</a>
                <a href="/machine-learning-engineer-jobs-queens" className="block text-sm text-muted-foreground hover:text-primary transition-colors">ML Engineer Jobs in Queens</a>
                <a href="/qa-engineer-jobs-queens" className="block text-sm text-muted-foreground hover:text-primary transition-colors">QA Engineer Jobs in Queens</a>
                <a href="/security-engineer-jobs-queens" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Security Engineer Jobs in Queens</a>
                <a href="/product-manager-jobs-queens" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Product Manager Jobs in Queens</a>
                <a href="/product-designer-jobs-queens" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Product Designer Jobs in Queens</a>
                <a href="/ux-researcher-jobs-queens" className="block text-sm text-muted-foreground hover:text-primary transition-colors">UX Researcher Jobs in Queens</a>
                <a href="/graphic-designer-jobs-queens" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Graphic Designer Jobs in Queens</a>
                <a href="/brand-designer-jobs-queens" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Brand Designer Jobs in Queens</a>
                <a href="/founder-jobs-queens" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Founder Jobs in Queens</a>
                <a href="/coo-jobs-queens" className="block text-sm text-muted-foreground hover:text-primary transition-colors">COO Jobs in Queens</a>
                <a href="/cfo-jobs-queens" className="block text-sm text-muted-foreground hover:text-primary transition-colors">CFO Jobs in Queens</a>
                <a href="/cto-jobs-queens" className="block text-sm text-muted-foreground hover:text-primary transition-colors">CTO Jobs in Queens</a>
                <a href="/head-of-product-jobs-queens" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Head of Product Jobs in Queens</a>
                <a href="/head-of-design-jobs-queens" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Head of Design Jobs in Queens</a>
                <a href="/growth-marketer-jobs-queens" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Growth Marketer Jobs in Queens</a>
                <a href="/content-marketer-jobs-queens" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Content Marketer Jobs in Queens</a>
                <a href="/seo-marketer-jobs-queens" className="block text-sm text-muted-foreground hover:text-primary transition-colors">SEO Marketer Jobs in Queens</a>
                <a href="/social-media-manager-jobs-queens" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Social Media Manager Jobs in Queens</a>
                <a href="/community-manager-jobs-queens" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Community Manager Jobs in Queens</a>
                <a href="/business-development-manager-jobs-queens" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Business Development Jobs in Queens</a>
                <a href="/sales-manager-jobs-queens" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Sales Manager Jobs in Queens</a>
                <a href="/partnerships-manager-jobs-queens" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Partnerships Manager Jobs in Queens</a>
                <a href="/account-manager-jobs-queens" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Account Manager Jobs in Queens</a>
                <a href="/customer-success-manager-jobs-queens" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Customer Success Jobs in Queens</a>
                <a href="/customer-support-jobs-queens" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Customer Support Jobs in Queens</a>
                <a href="/hr-manager-jobs-queens" className="block text-sm text-muted-foreground hover:text-primary transition-colors">HR Manager Jobs in Queens</a>
                <a href="/recruiter-jobs-queens" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Recruiter Jobs in Queens</a>
                <a href="/legal-jobs-queens" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Legal Jobs in Queens</a>
                <a href="/finance-jobs-queens" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Finance Jobs in Queens</a>
                <a href="/operations-associate-jobs-queens" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Operations Associate Jobs in Queens</a>
                <a href="/executive-assistant-jobs-queens" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Executive Assistant Jobs in Queens</a>
              </div>
            </div>

            {/* Bronx */}
            <div>
              <h5 className="font-medium text-foreground mb-3">Jobs in Bronx</h5>
              <div className="space-y-1">
                <a href="/software-engineer-jobs-bronx" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Software Engineer Jobs in Bronx</a>
                <a href="/mobile-engineer-jobs-bronx" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Mobile Engineer Jobs in Bronx</a>
                <a href="/devops-engineer-jobs-bronx" className="block text-sm text-muted-foreground hover:text-primary transition-colors">DevOps Engineer Jobs in Bronx</a>
                <a href="/data-scientist-jobs-bronx" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Data Scientist Jobs in Bronx</a>
                <a href="/machine-learning-engineer-jobs-bronx" className="block text-sm text-muted-foreground hover:text-primary transition-colors">ML Engineer Jobs in Bronx</a>
                <a href="/qa-engineer-jobs-bronx" className="block text-sm text-muted-foreground hover:text-primary transition-colors">QA Engineer Jobs in Bronx</a>
                <a href="/security-engineer-jobs-bronx" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Security Engineer Jobs in Bronx</a>
                <a href="/product-manager-jobs-bronx" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Product Manager Jobs in Bronx</a>
                <a href="/product-designer-jobs-bronx" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Product Designer Jobs in Bronx</a>
                <a href="/ux-researcher-jobs-bronx" className="block text-sm text-muted-foreground hover:text-primary transition-colors">UX Researcher Jobs in Bronx</a>
                <a href="/graphic-designer-jobs-bronx" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Graphic Designer Jobs in Bronx</a>
                <a href="/brand-designer-jobs-bronx" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Brand Designer Jobs in Bronx</a>
                <a href="/founder-jobs-bronx" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Founder Jobs in Bronx</a>
                <a href="/coo-jobs-bronx" className="block text-sm text-muted-foreground hover:text-primary transition-colors">COO Jobs in Bronx</a>
                <a href="/cfo-jobs-bronx" className="block text-sm text-muted-foreground hover:text-primary transition-colors">CFO Jobs in Bronx</a>
                <a href="/cto-jobs-bronx" className="block text-sm text-muted-foreground hover:text-primary transition-colors">CTO Jobs in Bronx</a>
                <a href="/head-of-product-jobs-bronx" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Head of Product Jobs in Bronx</a>
                <a href="/head-of-design-jobs-bronx" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Head of Design Jobs in Bronx</a>
                <a href="/growth-marketer-jobs-bronx" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Growth Marketer Jobs in Bronx</a>
                <a href="/content-marketer-jobs-bronx" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Content Marketer Jobs in Bronx</a>
                <a href="/seo-marketer-jobs-bronx" className="block text-sm text-muted-foreground hover:text-primary transition-colors">SEO Marketer Jobs in Bronx</a>
                <a href="/social-media-manager-jobs-bronx" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Social Media Manager Jobs in Bronx</a>
                <a href="/community-manager-jobs-bronx" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Community Manager Jobs in Bronx</a>
                <a href="/business-development-manager-jobs-bronx" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Business Development Jobs in Bronx</a>
                <a href="/sales-manager-jobs-bronx" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Sales Manager Jobs in Bronx</a>
                <a href="/partnerships-manager-jobs-bronx" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Partnerships Manager Jobs in Bronx</a>
                <a href="/account-manager-jobs-bronx" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Account Manager Jobs in Bronx</a>
                <a href="/customer-success-manager-jobs-bronx" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Customer Success Jobs in Bronx</a>
                <a href="/customer-support-jobs-bronx" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Customer Support Jobs in Bronx</a>
                <a href="/hr-manager-jobs-bronx" className="block text-sm text-muted-foreground hover:text-primary transition-colors">HR Manager Jobs in Bronx</a>
                <a href="/recruiter-jobs-bronx" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Recruiter Jobs in Bronx</a>
                <a href="/legal-jobs-bronx" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Legal Jobs in Bronx</a>
                <a href="/finance-jobs-bronx" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Finance Jobs in Bronx</a>
                <a href="/operations-associate-jobs-bronx" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Operations Associate Jobs in Bronx</a>
                <a href="/executive-assistant-jobs-bronx" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Executive Assistant Jobs in Bronx</a>
              </div>
            </div>

            {/* Staten Island */}
            <div>
              <h5 className="font-medium text-foreground mb-3">Jobs in Staten Island</h5>
              <div className="space-y-1">
                <a href="/software-engineer-jobs-staten-island" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Software Engineer Jobs in Staten Island</a>
                <a href="/mobile-engineer-jobs-staten-island" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Mobile Engineer Jobs in Staten Island</a>
                <a href="/devops-engineer-jobs-staten-island" className="block text-sm text-muted-foreground hover:text-primary transition-colors">DevOps Engineer Jobs in Staten Island</a>
                <a href="/data-scientist-jobs-staten-island" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Data Scientist Jobs in Staten Island</a>
                <a href="/machine-learning-engineer-jobs-staten-island" className="block text-sm text-muted-foreground hover:text-primary transition-colors">ML Engineer Jobs in Staten Island</a>
                <a href="/qa-engineer-jobs-staten-island" className="block text-sm text-muted-foreground hover:text-primary transition-colors">QA Engineer Jobs in Staten Island</a>
                <a href="/security-engineer-jobs-staten-island" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Security Engineer Jobs in Staten Island</a>
                <a href="/product-manager-jobs-staten-island" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Product Manager Jobs in Staten Island</a>
                <a href="/product-designer-jobs-staten-island" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Product Designer Jobs in Staten Island</a>
                <a href="/ux-researcher-jobs-staten-island" className="block text-sm text-muted-foreground hover:text-primary transition-colors">UX Researcher Jobs in Staten Island</a>
                <a href="/graphic-designer-jobs-staten-island" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Graphic Designer Jobs in Staten Island</a>
                <a href="/brand-designer-jobs-staten-island" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Brand Designer Jobs in Staten Island</a>
                <a href="/founder-jobs-staten-island" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Founder Jobs in Staten Island</a>
                <a href="/coo-jobs-staten-island" className="block text-sm text-muted-foreground hover:text-primary transition-colors">COO Jobs in Staten Island</a>
                <a href="/cfo-jobs-staten-island" className="block text-sm text-muted-foreground hover:text-primary transition-colors">CFO Jobs in Staten Island</a>
                <a href="/cto-jobs-staten-island" className="block text-sm text-muted-foreground hover:text-primary transition-colors">CTO Jobs in Staten Island</a>
                <a href="/head-of-product-jobs-staten-island" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Head of Product Jobs in Staten Island</a>
                <a href="/head-of-design-jobs-staten-island" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Head of Design Jobs in Staten Island</a>
                <a href="/growth-marketer-jobs-staten-island" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Growth Marketer Jobs in Staten Island</a>
                <a href="/content-marketer-jobs-staten-island" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Content Marketer Jobs in Staten Island</a>
                <a href="/seo-marketer-jobs-staten-island" className="block text-sm text-muted-foreground hover:text-primary transition-colors">SEO Marketer Jobs in Staten Island</a>
                <a href="/social-media-manager-jobs-staten-island" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Social Media Manager Jobs in Staten Island</a>
                <a href="/community-manager-jobs-staten-island" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Community Manager Jobs in Staten Island</a>
                <a href="/business-development-manager-jobs-staten-island" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Business Development Jobs in Staten Island</a>
                <a href="/sales-manager-jobs-staten-island" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Sales Manager Jobs in Staten Island</a>
                <a href="/partnerships-manager-jobs-staten-island" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Partnerships Manager Jobs in Staten Island</a>
                <a href="/account-manager-jobs-staten-island" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Account Manager Jobs in Staten Island</a>
                <a href="/customer-success-manager-jobs-staten-island" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Customer Success Jobs in Staten Island</a>
                <a href="/customer-support-jobs-staten-island" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Customer Support Jobs in Staten Island</a>
                <a href="/hr-manager-jobs-staten-island" className="block text-sm text-muted-foreground hover:text-primary transition-colors">HR Manager Jobs in Staten Island</a>
                <a href="/recruiter-jobs-staten-island" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Recruiter Jobs in Staten Island</a>
                <a href="/legal-jobs-staten-island" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Legal Jobs in Staten Island</a>
                <a href="/finance-jobs-staten-island" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Finance Jobs in Staten Island</a>
                <a href="/operations-associate-jobs-staten-island" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Operations Associate Jobs in Staten Island</a>
                <a href="/executive-assistant-jobs-staten-island" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Executive Assistant Jobs in Staten Island</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2025 <span className="text-primary">NYC</span> <span className="text-foreground">Startup Jobs</span>.
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
  )
}