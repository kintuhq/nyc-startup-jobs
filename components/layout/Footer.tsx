import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="mx-auto px-4 py-12" style={{ maxWidth: "1240px" }}>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-3">
              <Image
                src="/logo.png"
                alt="NYC Startup Jobs Logo"
                width={32}
                height={32}
                className="h-8 w-8 mr-2"
                loading="lazy"
              />
              <h3 className="text-2xl font-bold text-foreground">
                NYC Startup <span className="text-primary">Jobs</span>
              </h3>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Helping NYC's startup ecosystem thrive by connecting skilled professionals with the city's most promising startups.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">For Analysts</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Browse Jobs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Career Resources
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Data Analysis Tips
                </a>
              </li>
            </ul>
          </div>

          {/* For Schools */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">For Companies</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/login" className="hover:text-primary transition-colors">
                  Login
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Hiring Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Success Stories
                </a>
              </li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">Connect With Us</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-primary transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2025 NYC Startup Jobs.
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