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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 text-xs">
            {/* NYC-wide roles */}
            <a href="/software-engineer-jobs-new-york" className="text-muted-foreground hover:text-primary transition-colors">Software Engineer NYC</a>
            <a href="/mobile-engineer-jobs-new-york" className="text-muted-foreground hover:text-primary transition-colors">Mobile Engineer NYC</a>
            <a href="/devops-engineer-jobs-new-york" className="text-muted-foreground hover:text-primary transition-colors">DevOps Engineer NYC</a>
            <a href="/data-scientist-jobs-new-york" className="text-muted-foreground hover:text-primary transition-colors">Data Scientist NYC</a>
            <a href="/machine-learning-engineer-jobs-new-york" className="text-muted-foreground hover:text-primary transition-colors">ML Engineer NYC</a>
            <a href="/qa-engineer-jobs-new-york" className="text-muted-foreground hover:text-primary transition-colors">QA Engineer NYC</a>
            <a href="/security-engineer-jobs-new-york" className="text-muted-foreground hover:text-primary transition-colors">Security Engineer NYC</a>
            <a href="/product-manager-jobs-new-york" className="text-muted-foreground hover:text-primary transition-colors">Product Manager NYC</a>
            <a href="/product-designer-jobs-new-york" className="text-muted-foreground hover:text-primary transition-colors">Product Designer NYC</a>
            <a href="/ux-researcher-jobs-new-york" className="text-muted-foreground hover:text-primary transition-colors">UX Researcher NYC</a>
            <a href="/graphic-designer-jobs-new-york" className="text-muted-foreground hover:text-primary transition-colors">Graphic Designer NYC</a>
            <a href="/brand-designer-jobs-new-york" className="text-muted-foreground hover:text-primary transition-colors">Brand Designer NYC</a>
            <a href="/founder-jobs-new-york" className="text-muted-foreground hover:text-primary transition-colors">Founder NYC</a>
            <a href="/coo-jobs-new-york" className="text-muted-foreground hover:text-primary transition-colors">COO NYC</a>
            <a href="/cfo-jobs-new-york" className="text-muted-foreground hover:text-primary transition-colors">CFO NYC</a>
            <a href="/cto-jobs-new-york" className="text-muted-foreground hover:text-primary transition-colors">CTO NYC</a>
            <a href="/head-of-product-jobs-new-york" className="text-muted-foreground hover:text-primary transition-colors">Head of Product NYC</a>
            <a href="/head-of-design-jobs-new-york" className="text-muted-foreground hover:text-primary transition-colors">Head of Design NYC</a>
            <a href="/growth-marketer-jobs-new-york" className="text-muted-foreground hover:text-primary transition-colors">Growth Marketer NYC</a>
            <a href="/content-marketer-jobs-new-york" className="text-muted-foreground hover:text-primary transition-colors">Content Marketer NYC</a>
            <a href="/seo-marketer-jobs-new-york" className="text-muted-foreground hover:text-primary transition-colors">SEO Marketer NYC</a>
            <a href="/social-media-manager-jobs-new-york" className="text-muted-foreground hover:text-primary transition-colors">Social Media Manager NYC</a>
            <a href="/community-manager-jobs-new-york" className="text-muted-foreground hover:text-primary transition-colors">Community Manager NYC</a>
            <a href="/business-development-manager-jobs-new-york" className="text-muted-foreground hover:text-primary transition-colors">Business Development NYC</a>
            <a href="/sales-manager-jobs-new-york" className="text-muted-foreground hover:text-primary transition-colors">Sales Manager NYC</a>
            <a href="/partnerships-manager-jobs-new-york" className="text-muted-foreground hover:text-primary transition-colors">Partnerships Manager NYC</a>
            <a href="/account-manager-jobs-new-york" className="text-muted-foreground hover:text-primary transition-colors">Account Manager NYC</a>
            <a href="/customer-success-manager-jobs-new-york" className="text-muted-foreground hover:text-primary transition-colors">Customer Success NYC</a>
            <a href="/customer-support-jobs-new-york" className="text-muted-foreground hover:text-primary transition-colors">Customer Support NYC</a>
            <a href="/hr-manager-jobs-new-york" className="text-muted-foreground hover:text-primary transition-colors">HR Manager NYC</a>
            <a href="/recruiter-jobs-new-york" className="text-muted-foreground hover:text-primary transition-colors">Recruiter NYC</a>
            <a href="/legal-jobs-new-york" className="text-muted-foreground hover:text-primary transition-colors">Legal NYC</a>
            <a href="/finance-jobs-new-york" className="text-muted-foreground hover:text-primary transition-colors">Finance NYC</a>
            <a href="/operations-associate-jobs-new-york" className="text-muted-foreground hover:text-primary transition-colors">Operations Associate NYC</a>
            <a href="/executive-assistant-jobs-new-york" className="text-muted-foreground hover:text-primary transition-colors">Executive Assistant NYC</a>

            {/* Manhattan */}
            <a href="/software-engineer-jobs-manhattan" className="text-muted-foreground hover:text-primary transition-colors">Software Engineer Manhattan</a>
            <a href="/mobile-engineer-jobs-manhattan" className="text-muted-foreground hover:text-primary transition-colors">Mobile Engineer Manhattan</a>
            <a href="/devops-engineer-jobs-manhattan" className="text-muted-foreground hover:text-primary transition-colors">DevOps Engineer Manhattan</a>
            <a href="/data-scientist-jobs-manhattan" className="text-muted-foreground hover:text-primary transition-colors">Data Scientist Manhattan</a>
            <a href="/machine-learning-engineer-jobs-manhattan" className="text-muted-foreground hover:text-primary transition-colors">ML Engineer Manhattan</a>
            <a href="/qa-engineer-jobs-manhattan" className="text-muted-foreground hover:text-primary transition-colors">QA Engineer Manhattan</a>
            <a href="/security-engineer-jobs-manhattan" className="text-muted-foreground hover:text-primary transition-colors">Security Engineer Manhattan</a>
            <a href="/product-manager-jobs-manhattan" className="text-muted-foreground hover:text-primary transition-colors">Product Manager Manhattan</a>
            <a href="/product-designer-jobs-manhattan" className="text-muted-foreground hover:text-primary transition-colors">Product Designer Manhattan</a>
            <a href="/ux-researcher-jobs-manhattan" className="text-muted-foreground hover:text-primary transition-colors">UX Researcher Manhattan</a>
            <a href="/graphic-designer-jobs-manhattan" className="text-muted-foreground hover:text-primary transition-colors">Graphic Designer Manhattan</a>
            <a href="/brand-designer-jobs-manhattan" className="text-muted-foreground hover:text-primary transition-colors">Brand Designer Manhattan</a>
            <a href="/founder-jobs-manhattan" className="text-muted-foreground hover:text-primary transition-colors">Founder Manhattan</a>
            <a href="/coo-jobs-manhattan" className="text-muted-foreground hover:text-primary transition-colors">COO Manhattan</a>
            <a href="/cfo-jobs-manhattan" className="text-muted-foreground hover:text-primary transition-colors">CFO Manhattan</a>
            <a href="/cto-jobs-manhattan" className="text-muted-foreground hover:text-primary transition-colors">CTO Manhattan</a>
            <a href="/head-of-product-jobs-manhattan" className="text-muted-foreground hover:text-primary transition-colors">Head of Product Manhattan</a>
            <a href="/head-of-design-jobs-manhattan" className="text-muted-foreground hover:text-primary transition-colors">Head of Design Manhattan</a>
            <a href="/growth-marketer-jobs-manhattan" className="text-muted-foreground hover:text-primary transition-colors">Growth Marketer Manhattan</a>
            <a href="/content-marketer-jobs-manhattan" className="text-muted-foreground hover:text-primary transition-colors">Content Marketer Manhattan</a>
            <a href="/seo-marketer-jobs-manhattan" className="text-muted-foreground hover:text-primary transition-colors">SEO Marketer Manhattan</a>
            <a href="/social-media-manager-jobs-manhattan" className="text-muted-foreground hover:text-primary transition-colors">Social Media Manager Manhattan</a>
            <a href="/community-manager-jobs-manhattan" className="text-muted-foreground hover:text-primary transition-colors">Community Manager Manhattan</a>
            <a href="/business-development-manager-jobs-manhattan" className="text-muted-foreground hover:text-primary transition-colors">Business Development Manhattan</a>
            <a href="/sales-manager-jobs-manhattan" className="text-muted-foreground hover:text-primary transition-colors">Sales Manager Manhattan</a>
            <a href="/partnerships-manager-jobs-manhattan" className="text-muted-foreground hover:text-primary transition-colors">Partnerships Manager Manhattan</a>
            <a href="/account-manager-jobs-manhattan" className="text-muted-foreground hover:text-primary transition-colors">Account Manager Manhattan</a>
            <a href="/customer-success-manager-jobs-manhattan" className="text-muted-foreground hover:text-primary transition-colors">Customer Success Manhattan</a>
            <a href="/customer-support-jobs-manhattan" className="text-muted-foreground hover:text-primary transition-colors">Customer Support Manhattan</a>
            <a href="/hr-manager-jobs-manhattan" className="text-muted-foreground hover:text-primary transition-colors">HR Manager Manhattan</a>
            <a href="/recruiter-jobs-manhattan" className="text-muted-foreground hover:text-primary transition-colors">Recruiter Manhattan</a>
            <a href="/legal-jobs-manhattan" className="text-muted-foreground hover:text-primary transition-colors">Legal Manhattan</a>
            <a href="/finance-jobs-manhattan" className="text-muted-foreground hover:text-primary transition-colors">Finance Manhattan</a>
            <a href="/operations-associate-jobs-manhattan" className="text-muted-foreground hover:text-primary transition-colors">Operations Associate Manhattan</a>
            <a href="/executive-assistant-jobs-manhattan" className="text-muted-foreground hover:text-primary transition-colors">Executive Assistant Manhattan</a>

            {/* Brooklyn */}
            <a href="/software-engineer-jobs-brooklyn" className="text-muted-foreground hover:text-primary transition-colors">Software Engineer Brooklyn</a>
            <a href="/mobile-engineer-jobs-brooklyn" className="text-muted-foreground hover:text-primary transition-colors">Mobile Engineer Brooklyn</a>
            <a href="/devops-engineer-jobs-brooklyn" className="text-muted-foreground hover:text-primary transition-colors">DevOps Engineer Brooklyn</a>
            <a href="/data-scientist-jobs-brooklyn" className="text-muted-foreground hover:text-primary transition-colors">Data Scientist Brooklyn</a>
            <a href="/machine-learning-engineer-jobs-brooklyn" className="text-muted-foreground hover:text-primary transition-colors">ML Engineer Brooklyn</a>
            <a href="/qa-engineer-jobs-brooklyn" className="text-muted-foreground hover:text-primary transition-colors">QA Engineer Brooklyn</a>
            <a href="/security-engineer-jobs-brooklyn" className="text-muted-foreground hover:text-primary transition-colors">Security Engineer Brooklyn</a>
            <a href="/product-manager-jobs-brooklyn" className="text-muted-foreground hover:text-primary transition-colors">Product Manager Brooklyn</a>
            <a href="/product-designer-jobs-brooklyn" className="text-muted-foreground hover:text-primary transition-colors">Product Designer Brooklyn</a>
            <a href="/ux-researcher-jobs-brooklyn" className="text-muted-foreground hover:text-primary transition-colors">UX Researcher Brooklyn</a>
            <a href="/graphic-designer-jobs-brooklyn" className="text-muted-foreground hover:text-primary transition-colors">Graphic Designer Brooklyn</a>
            <a href="/brand-designer-jobs-brooklyn" className="text-muted-foreground hover:text-primary transition-colors">Brand Designer Brooklyn</a>
            <a href="/founder-jobs-brooklyn" className="text-muted-foreground hover:text-primary transition-colors">Founder Brooklyn</a>
            <a href="/coo-jobs-brooklyn" className="text-muted-foreground hover:text-primary transition-colors">COO Brooklyn</a>
            <a href="/cfo-jobs-brooklyn" className="text-muted-foreground hover:text-primary transition-colors">CFO Brooklyn</a>
            <a href="/cto-jobs-brooklyn" className="text-muted-foreground hover:text-primary transition-colors">CTO Brooklyn</a>
            <a href="/head-of-product-jobs-brooklyn" className="text-muted-foreground hover:text-primary transition-colors">Head of Product Brooklyn</a>
            <a href="/head-of-design-jobs-brooklyn" className="text-muted-foreground hover:text-primary transition-colors">Head of Design Brooklyn</a>
            <a href="/growth-marketer-jobs-brooklyn" className="text-muted-foreground hover:text-primary transition-colors">Growth Marketer Brooklyn</a>
            <a href="/content-marketer-jobs-brooklyn" className="text-muted-foreground hover:text-primary transition-colors">Content Marketer Brooklyn</a>
            <a href="/seo-marketer-jobs-brooklyn" className="text-muted-foreground hover:text-primary transition-colors">SEO Marketer Brooklyn</a>
            <a href="/social-media-manager-jobs-brooklyn" className="text-muted-foreground hover:text-primary transition-colors">Social Media Manager Brooklyn</a>
            <a href="/community-manager-jobs-brooklyn" className="text-muted-foreground hover:text-primary transition-colors">Community Manager Brooklyn</a>
            <a href="/business-development-manager-jobs-brooklyn" className="text-muted-foreground hover:text-primary transition-colors">Business Development Brooklyn</a>
            <a href="/sales-manager-jobs-brooklyn" className="text-muted-foreground hover:text-primary transition-colors">Sales Manager Brooklyn</a>
            <a href="/partnerships-manager-jobs-brooklyn" className="text-muted-foreground hover:text-primary transition-colors">Partnerships Manager Brooklyn</a>
            <a href="/account-manager-jobs-brooklyn" className="text-muted-foreground hover:text-primary transition-colors">Account Manager Brooklyn</a>
            <a href="/customer-success-manager-jobs-brooklyn" className="text-muted-foreground hover:text-primary transition-colors">Customer Success Brooklyn</a>
            <a href="/customer-support-jobs-brooklyn" className="text-muted-foreground hover:text-primary transition-colors">Customer Support Brooklyn</a>
            <a href="/hr-manager-jobs-brooklyn" className="text-muted-foreground hover:text-primary transition-colors">HR Manager Brooklyn</a>
            <a href="/recruiter-jobs-brooklyn" className="text-muted-foreground hover:text-primary transition-colors">Recruiter Brooklyn</a>
            <a href="/legal-jobs-brooklyn" className="text-muted-foreground hover:text-primary transition-colors">Legal Brooklyn</a>
            <a href="/finance-jobs-brooklyn" className="text-muted-foreground hover:text-primary transition-colors">Finance Brooklyn</a>
            <a href="/operations-associate-jobs-brooklyn" className="text-muted-foreground hover:text-primary transition-colors">Operations Associate Brooklyn</a>
            <a href="/executive-assistant-jobs-brooklyn" className="text-muted-foreground hover:text-primary transition-colors">Executive Assistant Brooklyn</a>

            {/* Queens */}
            <a href="/software-engineer-jobs-queens" className="text-muted-foreground hover:text-primary transition-colors">Software Engineer Queens</a>
            <a href="/mobile-engineer-jobs-queens" className="text-muted-foreground hover:text-primary transition-colors">Mobile Engineer Queens</a>
            <a href="/devops-engineer-jobs-queens" className="text-muted-foreground hover:text-primary transition-colors">DevOps Engineer Queens</a>
            <a href="/data-scientist-jobs-queens" className="text-muted-foreground hover:text-primary transition-colors">Data Scientist Queens</a>
            <a href="/machine-learning-engineer-jobs-queens" className="text-muted-foreground hover:text-primary transition-colors">ML Engineer Queens</a>
            <a href="/qa-engineer-jobs-queens" className="text-muted-foreground hover:text-primary transition-colors">QA Engineer Queens</a>
            <a href="/security-engineer-jobs-queens" className="text-muted-foreground hover:text-primary transition-colors">Security Engineer Queens</a>
            <a href="/product-manager-jobs-queens" className="text-muted-foreground hover:text-primary transition-colors">Product Manager Queens</a>
            <a href="/product-designer-jobs-queens" className="text-muted-foreground hover:text-primary transition-colors">Product Designer Queens</a>
            <a href="/ux-researcher-jobs-queens" className="text-muted-foreground hover:text-primary transition-colors">UX Researcher Queens</a>
            <a href="/graphic-designer-jobs-queens" className="text-muted-foreground hover:text-primary transition-colors">Graphic Designer Queens</a>
            <a href="/brand-designer-jobs-queens" className="text-muted-foreground hover:text-primary transition-colors">Brand Designer Queens</a>
            <a href="/founder-jobs-queens" className="text-muted-foreground hover:text-primary transition-colors">Founder Queens</a>
            <a href="/coo-jobs-queens" className="text-muted-foreground hover:text-primary transition-colors">COO Queens</a>
            <a href="/cfo-jobs-queens" className="text-muted-foreground hover:text-primary transition-colors">CFO Queens</a>
            <a href="/cto-jobs-queens" className="text-muted-foreground hover:text-primary transition-colors">CTO Queens</a>
            <a href="/head-of-product-jobs-queens" className="text-muted-foreground hover:text-primary transition-colors">Head of Product Queens</a>
            <a href="/head-of-design-jobs-queens" className="text-muted-foreground hover:text-primary transition-colors">Head of Design Queens</a>
            <a href="/growth-marketer-jobs-queens" className="text-muted-foreground hover:text-primary transition-colors">Growth Marketer Queens</a>
            <a href="/content-marketer-jobs-queens" className="text-muted-foreground hover:text-primary transition-colors">Content Marketer Queens</a>
            <a href="/seo-marketer-jobs-queens" className="text-muted-foreground hover:text-primary transition-colors">SEO Marketer Queens</a>
            <a href="/social-media-manager-jobs-queens" className="text-muted-foreground hover:text-primary transition-colors">Social Media Manager Queens</a>
            <a href="/community-manager-jobs-queens" className="text-muted-foreground hover:text-primary transition-colors">Community Manager Queens</a>
            <a href="/business-development-manager-jobs-queens" className="text-muted-foreground hover:text-primary transition-colors">Business Development Queens</a>
            <a href="/sales-manager-jobs-queens" className="text-muted-foreground hover:text-primary transition-colors">Sales Manager Queens</a>
            <a href="/partnerships-manager-jobs-queens" className="text-muted-foreground hover:text-primary transition-colors">Partnerships Manager Queens</a>
            <a href="/account-manager-jobs-queens" className="text-muted-foreground hover:text-primary transition-colors">Account Manager Queens</a>
            <a href="/customer-success-manager-jobs-queens" className="text-muted-foreground hover:text-primary transition-colors">Customer Success Queens</a>
            <a href="/customer-support-jobs-queens" className="text-muted-foreground hover:text-primary transition-colors">Customer Support Queens</a>
            <a href="/hr-manager-jobs-queens" className="text-muted-foreground hover:text-primary transition-colors">HR Manager Queens</a>
            <a href="/recruiter-jobs-queens" className="text-muted-foreground hover:text-primary transition-colors">Recruiter Queens</a>
            <a href="/legal-jobs-queens" className="text-muted-foreground hover:text-primary transition-colors">Legal Queens</a>
            <a href="/finance-jobs-queens" className="text-muted-foreground hover:text-primary transition-colors">Finance Queens</a>
            <a href="/operations-associate-jobs-queens" className="text-muted-foreground hover:text-primary transition-colors">Operations Associate Queens</a>
            <a href="/executive-assistant-jobs-queens" className="text-muted-foreground hover:text-primary transition-colors">Executive Assistant Queens</a>

            {/* Bronx */}
            <a href="/software-engineer-jobs-bronx" className="text-muted-foreground hover:text-primary transition-colors">Software Engineer Bronx</a>
            <a href="/mobile-engineer-jobs-bronx" className="text-muted-foreground hover:text-primary transition-colors">Mobile Engineer Bronx</a>
            <a href="/devops-engineer-jobs-bronx" className="text-muted-foreground hover:text-primary transition-colors">DevOps Engineer Bronx</a>
            <a href="/data-scientist-jobs-bronx" className="text-muted-foreground hover:text-primary transition-colors">Data Scientist Bronx</a>
            <a href="/machine-learning-engineer-jobs-bronx" className="text-muted-foreground hover:text-primary transition-colors">ML Engineer Bronx</a>
            <a href="/qa-engineer-jobs-bronx" className="text-muted-foreground hover:text-primary transition-colors">QA Engineer Bronx</a>
            <a href="/security-engineer-jobs-bronx" className="text-muted-foreground hover:text-primary transition-colors">Security Engineer Bronx</a>
            <a href="/product-manager-jobs-bronx" className="text-muted-foreground hover:text-primary transition-colors">Product Manager Bronx</a>
            <a href="/product-designer-jobs-bronx" className="text-muted-foreground hover:text-primary transition-colors">Product Designer Bronx</a>
            <a href="/ux-researcher-jobs-bronx" className="text-muted-foreground hover:text-primary transition-colors">UX Researcher Bronx</a>
            <a href="/graphic-designer-jobs-bronx" className="text-muted-foreground hover:text-primary transition-colors">Graphic Designer Bronx</a>
            <a href="/brand-designer-jobs-bronx" className="text-muted-foreground hover:text-primary transition-colors">Brand Designer Bronx</a>
            <a href="/founder-jobs-bronx" className="text-muted-foreground hover:text-primary transition-colors">Founder Bronx</a>
            <a href="/coo-jobs-bronx" className="text-muted-foreground hover:text-primary transition-colors">COO Bronx</a>
            <a href="/cfo-jobs-bronx" className="text-muted-foreground hover:text-primary transition-colors">CFO Bronx</a>
            <a href="/cto-jobs-bronx" className="text-muted-foreground hover:text-primary transition-colors">CTO Bronx</a>
            <a href="/head-of-product-jobs-bronx" className="text-muted-foreground hover:text-primary transition-colors">Head of Product Bronx</a>
            <a href="/head-of-design-jobs-bronx" className="text-muted-foreground hover:text-primary transition-colors">Head of Design Bronx</a>
            <a href="/growth-marketer-jobs-bronx" className="text-muted-foreground hover:text-primary transition-colors">Growth Marketer Bronx</a>
            <a href="/content-marketer-jobs-bronx" className="text-muted-foreground hover:text-primary transition-colors">Content Marketer Bronx</a>
            <a href="/seo-marketer-jobs-bronx" className="text-muted-foreground hover:text-primary transition-colors">SEO Marketer Bronx</a>
            <a href="/social-media-manager-jobs-bronx" className="text-muted-foreground hover:text-primary transition-colors">Social Media Manager Bronx</a>
            <a href="/community-manager-jobs-bronx" className="text-muted-foreground hover:text-primary transition-colors">Community Manager Bronx</a>
            <a href="/business-development-manager-jobs-bronx" className="text-muted-foreground hover:text-primary transition-colors">Business Development Bronx</a>
            <a href="/sales-manager-jobs-bronx" className="text-muted-foreground hover:text-primary transition-colors">Sales Manager Bronx</a>
            <a href="/partnerships-manager-jobs-bronx" className="text-muted-foreground hover:text-primary transition-colors">Partnerships Manager Bronx</a>
            <a href="/account-manager-jobs-bronx" className="text-muted-foreground hover:text-primary transition-colors">Account Manager Bronx</a>
            <a href="/customer-success-manager-jobs-bronx" className="text-muted-foreground hover:text-primary transition-colors">Customer Success Bronx</a>
            <a href="/customer-support-jobs-bronx" className="text-muted-foreground hover:text-primary transition-colors">Customer Support Bronx</a>
            <a href="/hr-manager-jobs-bronx" className="text-muted-foreground hover:text-primary transition-colors">HR Manager Bronx</a>
            <a href="/recruiter-jobs-bronx" className="text-muted-foreground hover:text-primary transition-colors">Recruiter Bronx</a>
            <a href="/legal-jobs-bronx" className="text-muted-foreground hover:text-primary transition-colors">Legal Bronx</a>
            <a href="/finance-jobs-bronx" className="text-muted-foreground hover:text-primary transition-colors">Finance Bronx</a>
            <a href="/operations-associate-jobs-bronx" className="text-muted-foreground hover:text-primary transition-colors">Operations Associate Bronx</a>
            <a href="/executive-assistant-jobs-bronx" className="text-muted-foreground hover:text-primary transition-colors">Executive Assistant Bronx</a>

            {/* Staten Island */}
            <a href="/software-engineer-jobs-staten-island" className="text-muted-foreground hover:text-primary transition-colors">Software Engineer Staten Island</a>
            <a href="/mobile-engineer-jobs-staten-island" className="text-muted-foreground hover:text-primary transition-colors">Mobile Engineer Staten Island</a>
            <a href="/devops-engineer-jobs-staten-island" className="text-muted-foreground hover:text-primary transition-colors">DevOps Engineer Staten Island</a>
            <a href="/data-scientist-jobs-staten-island" className="text-muted-foreground hover:text-primary transition-colors">Data Scientist Staten Island</a>
            <a href="/machine-learning-engineer-jobs-staten-island" className="text-muted-foreground hover:text-primary transition-colors">ML Engineer Staten Island</a>
            <a href="/qa-engineer-jobs-staten-island" className="text-muted-foreground hover:text-primary transition-colors">QA Engineer Staten Island</a>
            <a href="/security-engineer-jobs-staten-island" className="text-muted-foreground hover:text-primary transition-colors">Security Engineer Staten Island</a>
            <a href="/product-manager-jobs-staten-island" className="text-muted-foreground hover:text-primary transition-colors">Product Manager Staten Island</a>
            <a href="/product-designer-jobs-staten-island" className="text-muted-foreground hover:text-primary transition-colors">Product Designer Staten Island</a>
            <a href="/ux-researcher-jobs-staten-island" className="text-muted-foreground hover:text-primary transition-colors">UX Researcher Staten Island</a>
            <a href="/graphic-designer-jobs-staten-island" className="text-muted-foreground hover:text-primary transition-colors">Graphic Designer Staten Island</a>
            <a href="/brand-designer-jobs-staten-island" className="text-muted-foreground hover:text-primary transition-colors">Brand Designer Staten Island</a>
            <a href="/founder-jobs-staten-island" className="text-muted-foreground hover:text-primary transition-colors">Founder Staten Island</a>
            <a href="/coo-jobs-staten-island" className="text-muted-foreground hover:text-primary transition-colors">COO Staten Island</a>
            <a href="/cfo-jobs-staten-island" className="text-muted-foreground hover:text-primary transition-colors">CFO Staten Island</a>
            <a href="/cto-jobs-staten-island" className="text-muted-foreground hover:text-primary transition-colors">CTO Staten Island</a>
            <a href="/head-of-product-jobs-staten-island" className="text-muted-foreground hover:text-primary transition-colors">Head of Product Staten Island</a>
            <a href="/head-of-design-jobs-staten-island" className="text-muted-foreground hover:text-primary transition-colors">Head of Design Staten Island</a>
            <a href="/growth-marketer-jobs-staten-island" className="text-muted-foreground hover:text-primary transition-colors">Growth Marketer Staten Island</a>
            <a href="/content-marketer-jobs-staten-island" className="text-muted-foreground hover:text-primary transition-colors">Content Marketer Staten Island</a>
            <a href="/seo-marketer-jobs-staten-island" className="text-muted-foreground hover:text-primary transition-colors">SEO Marketer Staten Island</a>
            <a href="/social-media-manager-jobs-staten-island" className="text-muted-foreground hover:text-primary transition-colors">Social Media Manager Staten Island</a>
            <a href="/community-manager-jobs-staten-island" className="text-muted-foreground hover:text-primary transition-colors">Community Manager Staten Island</a>
            <a href="/business-development-manager-jobs-staten-island" className="text-muted-foreground hover:text-primary transition-colors">Business Development Staten Island</a>
            <a href="/sales-manager-jobs-staten-island" className="text-muted-foreground hover:text-primary transition-colors">Sales Manager Staten Island</a>
            <a href="/partnerships-manager-jobs-staten-island" className="text-muted-foreground hover:text-primary transition-colors">Partnerships Manager Staten Island</a>
            <a href="/account-manager-jobs-staten-island" className="text-muted-foreground hover:text-primary transition-colors">Account Manager Staten Island</a>
            <a href="/customer-success-manager-jobs-staten-island" className="text-muted-foreground hover:text-primary transition-colors">Customer Success Staten Island</a>
            <a href="/customer-support-jobs-staten-island" className="text-muted-foreground hover:text-primary transition-colors">Customer Support Staten Island</a>
            <a href="/hr-manager-jobs-staten-island" className="text-muted-foreground hover:text-primary transition-colors">HR Manager Staten Island</a>
            <a href="/recruiter-jobs-staten-island" className="text-muted-foreground hover:text-primary transition-colors">Recruiter Staten Island</a>
            <a href="/legal-jobs-staten-island" className="text-muted-foreground hover:text-primary transition-colors">Legal Staten Island</a>
            <a href="/finance-jobs-staten-island" className="text-muted-foreground hover:text-primary transition-colors">Finance Staten Island</a>
            <a href="/operations-associate-jobs-staten-island" className="text-muted-foreground hover:text-primary transition-colors">Operations Associate Staten Island</a>
            <a href="/executive-assistant-jobs-staten-island" className="text-muted-foreground hover:text-primary transition-colors">Executive Assistant Staten Island</a>
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