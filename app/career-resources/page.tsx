"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function CareerResourcesPage() {
  const router = useRouter()

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
            <Button
              onClick={() => router.push("/")}
              variant="outline"
              className="cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-8">Career Resources for NYC Startup Talent</h1>

          <p className="text-lg text-muted-foreground mb-8">
            Welcome to the Career Resources hub — your go-to guide for building a successful career in New York City's thriving startup ecosystem. Whether you're an aspiring professional, an experienced operator, or looking to make a career change, this page is designed to give you practical tools, advice, and local insights to help you succeed.
          </p>

          <hr className="my-8" />

          <h2 className="text-2xl font-bold mb-4">1. Getting Started in the NYC Startup Scene</h2>

          <p className="mb-4">
            Breaking into startups can feel overwhelming, but NYC is one of the best places to do it. The city's startup ecosystem is vibrant, diverse, and packed with opportunities across industries like fintech, healthtech, AI, media, and e-commerce.
          </p>

          <ul className="mb-6 space-y-2">
            <li><strong>Understand the ecosystem</strong>: Explore accelerators (Techstars NYC, ERA), venture firms, and coworking communities (WeWork, Company Ventures) that shape the scene.</li>
            <li><strong>Find your niche</strong>: NYC startups value specialized skills — from data analysis and design to business development and marketing.</li>
            <li><strong>Network early</strong>: Attend local meetups, pitch nights, and panels (e.g., NY Tech Meetup, Startup Grind NYC). Personal connections often open doors faster than online applications.</li>
          </ul>

          <hr className="my-8" />

          <h2 className="text-2xl font-bold mb-4">2. Job Search Strategies</h2>

          <p className="mb-4">
            Finding the right role takes more than just sending out resumes. Here's how to stand out:
          </p>

          <ul className="mb-6 space-y-2">
            <li><strong>Targeted applications</strong>: Customize your resume and cover letter to highlight measurable results (e.g., "increased user engagement by 25%").</li>
            <li><strong>Leverage LinkedIn & Twitter</strong>: Many NYC founders and hiring managers actively post openings. Follow companies you admire and engage with their content.</li>
            <li><strong>Referrals matter</strong>: Ask mentors, peers, or former colleagues for introductions. Referrals can significantly increase your chances of landing interviews.</li>
            <li><strong>Stay on top of trends</strong>: Subscribe to NYC startup newsletters (like Built In NYC, AlleyWatch) to catch emerging companies before roles hit job boards.</li>
          </ul>

          <hr className="my-8" />

          <h2 className="text-2xl font-bold mb-4">3. Building a Strong Startup Resume & Portfolio</h2>

          <p className="mb-4">
            Startups often value versatility, speed, and proven impact.
          </p>

          <ul className="mb-6 space-y-2">
            <li><strong>Keep it concise</strong>: Aim for one page that emphasizes results and responsibilities.</li>
            <li><strong>Show adaptability</strong>: Highlight times you wore multiple hats, launched projects from scratch, or solved unexpected problems.</li>
            <li><strong>Portfolio</strong>: For designers, product managers, and engineers, include links to GitHub, personal websites, or case studies.</li>
            <li><strong>Numbers over fluff</strong>: Use metrics whenever possible (users reached, revenue growth, cost savings, retention rates).</li>
          </ul>

          <hr className="my-8" />

          <h2 className="text-2xl font-bold mb-4">4. Preparing for Interviews</h2>

          <p className="mb-4">
            Startup interviews differ from corporate ones — they're often faster-paced, less formal, and focused on problem-solving.
          </p>

          <ul className="mb-4 space-y-2">
            <li><strong>Research deeply</strong>: Know the company's mission, funding stage, investors, and competitors.</li>
            <li><strong>Be ready for case studies</strong>: You may be asked to solve a real-world problem (e.g., "How would you acquire 1,000 users in NYC?").</li>
            <li><strong>Demonstrate passion</strong>: Show genuine excitement for the company's product or mission.</li>
          </ul>

          <p className="mb-2"><strong>Ask smart questions</strong>: Examples:</p>
          <ul className="mb-6 space-y-1 ml-6">
            <li>"What are the company's biggest priorities in the next 6 months?"</li>
            <li>"How do you define success for this role?"</li>
            <li>"What's the team culture like in a fast-growth environment?"</li>
          </ul>

          <hr className="my-8" />

          <h2 className="text-2xl font-bold mb-4">5. Skills in Demand at NYC Startups</h2>

          <p className="mb-4">
            The startup landscape evolves quickly, but some skills are always valued:
          </p>

          <ul className="mb-4 space-y-2">
            <li><strong>Engineering</strong>: Full-stack development, data engineering, AI/ML, mobile app development.</li>
            <li><strong>Product</strong>: Product management, user research, UX/UI design, prototyping.</li>
            <li><strong>Growth & Marketing</strong>: SEO, performance marketing, content strategy, community building.</li>
            <li><strong>Operations & Strategy</strong>: Business development, fundraising, scaling processes.</li>
            <li><strong>Data & Analytics</strong>: SQL, Python, BI tools (Tableau, Looker), statistical modeling.</li>
          </ul>

          <p className="mb-6">
            <strong>Tip</strong>: Pairing technical skills with strong communication abilities will make you stand out.
          </p>

          <hr className="my-8" />

          <h2 className="text-2xl font-bold mb-4">6. Networking & Community in NYC</h2>

          <p className="mb-4">
            NYC thrives on community and collaboration. Tap into these opportunities:
          </p>

          <ul className="mb-6 space-y-2">
            <li><strong>Events & Meetups</strong>: Startup Grind NYC, Tech Day, Product School events, NY Tech Meetup.</li>
            <li><strong>Coworking Spaces</strong>: WeWork, The Yard, Company Ventures, Alley.</li>
            <li><strong>Slack & Online Groups</strong>: #TechInNYC, Product NYC, Designers Guild NYC.</li>
            <li><strong>University Ties</strong>: NYU, Columbia, and Cornell Tech host regular startup events open to the public.</li>
          </ul>

          <hr className="my-8" />

          <h2 className="text-2xl font-bold mb-4">7. Career Growth & Upskilling</h2>

          <p className="mb-4">
            Continuous learning is essential in fast-changing startups.
          </p>

          <ul className="mb-6 space-y-2">
            <li><strong>Online Courses</strong>: General Assembly, Reforge, Coursera, and Udemy offer startup-relevant programs.</li>
            <li><strong>Workshops & Bootcamps</strong>: Product School, Flatiron School, and Fullstack Academy (NYC-based).</li>
            <li><strong>Mentorship</strong>: Join programs like First Round's mentorship network or tap into NYC's founder communities.</li>
            <li><strong>Stay informed</strong>: Follow VC blogs (Andreessen Horowitz, Union Square Ventures) to keep up with startup and tech trends.</li>
          </ul>

          <hr className="my-8" />

          <h2 className="text-2xl font-bold mb-4">8. Salary, Equity & Negotiation</h2>

          <p className="mb-4">
            Compensation in startups often includes equity alongside salary.
          </p>

          <ul className="mb-6 space-y-2">
            <li><strong>Do your research</strong>: Use resources like Levels.fyi, AngelList, and Glassdoor to benchmark salaries.</li>
            <li><strong>Understand equity</strong>: Learn about vesting schedules, options vs. RSUs, and dilution.</li>
            <li><strong>Negotiate respectfully</strong>: Be prepared to discuss both your market value and your passion for the mission.</li>
            <li><strong>Consider perks</strong>: Flexible schedules, remote options, and learning budgets can add significant value.</li>
          </ul>

          <hr className="my-8" />

          <h2 className="text-2xl font-bold mb-4">9. Career Transitions Into Startups</h2>

          <p className="mb-4">
            Coming from corporate, academia, or freelancing? NYC startups welcome diverse backgrounds.
          </p>

          <ul className="mb-6 space-y-2">
            <li><strong>Corporate to Startup</strong>: Emphasize agility, initiative, and ability to thrive in less structured environments.</li>
            <li><strong>Freelancers & Consultants</strong>: Showcase your project portfolio, adaptability, and entrepreneurial spirit.</li>
            <li><strong>Students & Recent Grads</strong>: Lean on internships, side projects, and hustle. Show you can learn quickly and contribute right away.</li>
          </ul>

          <hr className="my-8" />

          <h2 className="text-2xl font-bold mb-4">10. Mental Health & Work-Life Balance</h2>

          <p className="mb-4">
            Startups can be intense. Protecting your well-being is crucial:
          </p>

          <ul className="mb-6 space-y-2">
            <li><strong>Set boundaries</strong>: Communicate availability and manage workload expectations.</li>
            <li><strong>Find support</strong>: NYC offers therapy networks, peer groups, and wellness programs for professionals.</li>
            <li><strong>Practice self-care</strong>: Exercise, mindfulness, and regular breaks help maintain performance and prevent burnout.</li>
            <li><strong>Choose wisely</strong>: Not every startup is right for you. Evaluate company culture during the interview process.</li>
          </ul>

          <hr className="my-8" />

          <h2 className="text-2xl font-bold mb-4">Final Thoughts</h2>

          <p className="mb-4">
            The NYC startup ecosystem is fast-moving, competitive, and full of opportunities for those willing to dive in. Use these resources to prepare, connect, and grow your career. Remember: the best startup careers come from combining strong skills with curiosity, adaptability, and a genuine passion for solving problems.
          </p>

          <p className="mb-8 font-semibold">
            Good luck — and we hope your next big career move starts right here on our job board.
          </p>
        </div>
      </div>

      {/* Professional Footer */}
      <footer className="bg-card border-t border-border mt-16">
        <div className="mx-auto px-4 py-12" style={{ maxWidth: "1240px" }}>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <div className="flex items-center mb-3">
                <img
                  src="/logo.png"
                  alt="NYC StartupJobs Logo"
                  className="h-8 w-8 mr-2"
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
              <h4 className="font-semibold text-foreground mb-3">For Job Seekers</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Browse Jobs
                  </a>
                </li>
                <li>
                  <a href="/career-resources" className="hover:text-primary transition-colors">
                    Career Resources
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Career Tips
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
    </div>
  )
}