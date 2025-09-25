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

        {/* Featured Combinations */}
        <div className="mt-8 pt-8 border-t border-border">
          <h4 className="font-semibold text-foreground mb-4">Featured Job Categories</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <a href="/software-engineer-jobs-manhattan" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Software Engineer Manhattan
            </a>
            <a href="/product-manager-jobs-manhattan" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Product Manager Manhattan
            </a>
            <a href="/software-engineer-jobs-brooklyn" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Software Engineer Brooklyn
            </a>
            <a href="/data-scientist-jobs-manhattan" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Data Scientist Manhattan
            </a>
            <a href="/product-designer-jobs-manhattan" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Product Designer Manhattan
            </a>
            <a href="/product-manager-jobs-brooklyn" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Product Manager Brooklyn
            </a>
            <a href="/mobile-engineer-jobs-new-york" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Mobile Engineer NYC
            </a>
            <a href="/devops-engineer-jobs-new-york" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              DevOps Engineer NYC
            </a>
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