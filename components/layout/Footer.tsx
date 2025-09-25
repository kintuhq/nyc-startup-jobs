import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="mx-auto px-4 py-12" style={{ maxWidth: "1240px" }}>
        {/* Featured Job Categories */}
        <div className="mb-8">
          <h4 className="font-semibold text-foreground mb-4">Featured Job Categories</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            <a href="/account-manager-jobs-new-york" className="text-sm text-muted-foreground hover:text-primary transition-colors">Account Manager Jobs in New York</a>
            <a href="/machine-learning-engineer-jobs-new-york" className="text-sm text-muted-foreground hover:text-primary transition-colors">AI Jobs in New York</a>
            <a href="/brand-designer-jobs-new-york" className="text-sm text-muted-foreground hover:text-primary transition-colors">Brand Designer Jobs in New York</a>
            <a href="/business-development-manager-jobs-new-york" className="text-sm text-muted-foreground hover:text-primary transition-colors">Business Development Jobs in New York</a>
            <a href="/cfo-jobs-new-york" className="text-sm text-muted-foreground hover:text-primary transition-colors">CFO Jobs in New York</a>
            <a href="/community-manager-jobs-new-york" className="text-sm text-muted-foreground hover:text-primary transition-colors">Community Jobs in New York</a>
            <a href="/content-marketer-jobs-new-york" className="text-sm text-muted-foreground hover:text-primary transition-colors">Content Marketing Jobs in New York</a>
            <a href="/coo-jobs-new-york" className="text-sm text-muted-foreground hover:text-primary transition-colors">COO Jobs in New York</a>
            <a href="/cto-jobs-new-york" className="text-sm text-muted-foreground hover:text-primary transition-colors">CTO Jobs in New York</a>
            <a href="/customer-success-manager-jobs-new-york" className="text-sm text-muted-foreground hover:text-primary transition-colors">Customer Success Jobs in New York</a>
            <a href="/customer-support-jobs-new-york" className="text-sm text-muted-foreground hover:text-primary transition-colors">Customer Support Jobs in New York</a>
            <a href="/data-scientist-jobs-new-york" className="text-sm text-muted-foreground hover:text-primary transition-colors">Data Scientist Jobs in New York</a>
            <a href="/head-of-design-jobs-new-york" className="text-sm text-muted-foreground hover:text-primary transition-colors">Designer Jobs in New York</a>
            <a href="/devops-engineer-jobs-new-york" className="text-sm text-muted-foreground hover:text-primary transition-colors">DevOps Jobs in New York</a>
            <a href="/executive-assistant-jobs-new-york" className="text-sm text-muted-foreground hover:text-primary transition-colors">Executive Assistant Jobs in New York</a>
            <a href="/finance-jobs-new-york" className="text-sm text-muted-foreground hover:text-primary transition-colors">Finance Jobs in New York</a>
            <a href="/graphic-designer-jobs-new-york" className="text-sm text-muted-foreground hover:text-primary transition-colors">Graphic Designer Jobs in New York</a>
            <a href="/hr-manager-jobs-new-york" className="text-sm text-muted-foreground hover:text-primary transition-colors">HR Jobs in New York</a>
            <a href="/legal-jobs-new-york" className="text-sm text-muted-foreground hover:text-primary transition-colors">Legal Jobs in New York</a>
            <a href="/growth-marketer-jobs-new-york" className="text-sm text-muted-foreground hover:text-primary transition-colors">Marketing Jobs in New York</a>
            <a href="/product-designer-jobs-new-york" className="text-sm text-muted-foreground hover:text-primary transition-colors">Product Designer Jobs in New York</a>
            <a href="/product-manager-jobs-new-york" className="text-sm text-muted-foreground hover:text-primary transition-colors">Product Manager Jobs in New York</a>
            <a href="/recruiter-jobs-new-york" className="text-sm text-muted-foreground hover:text-primary transition-colors">Recruiting Jobs in New York</a>
            <a href="/sales-manager-jobs-new-york" className="text-sm text-muted-foreground hover:text-primary transition-colors">Sales Jobs in New York</a>
            <a href="/seo-marketer-jobs-new-york" className="text-sm text-muted-foreground hover:text-primary transition-colors">SEO Jobs in New York</a>
            <a href="/social-media-manager-jobs-new-york" className="text-sm text-muted-foreground hover:text-primary transition-colors">Social Media Jobs in New York</a>
            <a href="/software-engineer-jobs-new-york" className="text-sm text-muted-foreground hover:text-primary transition-colors">Software Engineer Jobs in New York</a>
            <a href="/ux-researcher-jobs-new-york" className="text-sm text-muted-foreground hover:text-primary transition-colors">UX Jobs in New York</a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-8 border-t border-border items-start">
          {/* Brand Section */}
          <div>
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
            <p className="text-muted-foreground mb-4 max-w-xs">
              Helping New York's startup ecosystem thrive by connecting skilled professionals with the city's most promising startups.
            </p>
          </div>

          {/* Jobs by Location */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">Jobs by Location</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/manhattan-jobs-new-york" className="hover:text-primary transition-colors">
                  Manhattan Tech Jobs
                </a>
              </li>
              <li>
                <a href="/brooklyn-jobs-new-york" className="hover:text-primary transition-colors">
                  Brooklyn Tech Jobs
                </a>
              </li>
              <li>
                <a href="/queens-jobs-new-york" className="hover:text-primary transition-colors">
                  Queens Tech Jobs
                </a>
              </li>
              <li>
                <a href="/bronx-jobs-new-york" className="hover:text-primary transition-colors">
                  Bronx Tech Jobs
                </a>
              </li>
              <li>
                <a href="/staten-island-jobs-new-york" className="hover:text-primary transition-colors">
                  Staten Island Tech Jobs
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