"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function HiringPage() {
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
          <h1 className="text-4xl font-bold mb-8">Hiring Guide for NYC Startups</h1>

          <p className="text-lg text-muted-foreground mb-8">
            Hiring is one of the most important decisions a startup can make. The right talent can accelerate growth, strengthen culture, and help overcome early challenges. The wrong hire can slow momentum and drain valuable resources. This guide is built to help NYC startups — from seed-stage to scaling companies — find, attract, and retain the best talent.
          </p>

          <hr className="my-8" />

          <h2 className="text-2xl font-bold mb-4">1. Defining Your Hiring Needs</h2>

          <p className="mb-4">
            Before posting a job, clarify what your startup truly needs.
          </p>

          <ul className="mb-6 space-y-2">
            <li><strong>Identify core roles</strong>: Focus on positions that drive growth (e.g., engineering, product, sales, growth marketing).</li>
            <li><strong>Understand stage-specific needs</strong>:
              <ul className="ml-6 mt-2 space-y-1">
                <li><em>Early-stage (1–10 employees)</em>: Look for generalists who can wear multiple hats.</li>
                <li><em>Growth-stage (10–50 employees)</em>: Start adding specialists and managers.</li>
                <li><em>Scaling (50+ employees)</em>: Prioritize leaders who can build systems and processes.</li>
              </ul>
            </li>
            <li><strong>Write outcome-based descriptions</strong>: Instead of listing tasks, describe the impact the role should deliver (e.g., "Grow active users by 20% in 6 months").</li>
          </ul>

          <hr className="my-8" />

          <h2 className="text-2xl font-bold mb-4">2. Writing Effective Job Descriptions</h2>

          <p className="mb-4">
            A compelling job description is your first chance to attract top talent.
          </p>

          <ul className="mb-6 space-y-2">
            <li><strong>Be clear & concise</strong>: Use simple language that communicates mission, role, and expectations.</li>
            <li><strong>Highlight your culture</strong>: NYC startups compete with big tech — show what makes your environment unique (e.g., agility, autonomy, impact).</li>
            <li><strong>Show growth opportunities</strong>: Candidates want to know how they'll learn and advance.</li>
            <li><strong>Include equity & perks</strong>: Even if cash compensation is limited, equity, flexible schedules, and professional development support can tip the scales.</li>
          </ul>

          <p className="mb-6">
            <strong>Pro Tip</strong>: The best job posts sell the mission as much as the role. Make candidates want to be part of your story.
          </p>

          <hr className="my-8" />

          <h2 className="text-2xl font-bold mb-4">3. Finding Candidates</h2>

          <p className="mb-4">
            NYC's talent pool is large but competitive. Be strategic in sourcing:
          </p>

          <ul className="mb-6 space-y-2">
            <li><strong>Startup-focused job boards</strong>: Post on platforms like Built In NYC, AngelList, and our job board.</li>
            <li><strong>University talent</strong>: Partner with NYU, Columbia, Cornell Tech, and CUNY career centers.</li>
            <li><strong>Networking events</strong>: Attend Startup Grind NYC, NY Tech Meetup, and coworking events.</li>
            <li><strong>Employee referrals</strong>: Encourage your team to refer trusted peers — often your best hires come through networks.</li>
            <li><strong>Social media & communities</strong>: Twitter (X), LinkedIn, Slack groups, and Discord channels are powerful recruiting spaces.</li>
          </ul>

          <hr className="my-8" />

          <h2 className="text-2xl font-bold mb-4">4. The Interview Process</h2>

          <p className="mb-4">
            An intentional process helps you evaluate talent and ensures a positive candidate experience.
          </p>

          <ul className="mb-6 space-y-2">
            <li><strong>Screen efficiently</strong>: Start with short calls to confirm alignment on skills, role, and mission.</li>
            <li><strong>Structure interviews</strong>: Mix behavioral, technical, and case-based questions.</li>
            <li><strong>Assess cultural fit</strong>: Ask about adaptability, teamwork, and motivation in fast-paced environments.</li>
            <li><strong>Use take-home tasks carefully</strong>: Keep them short and relevant (2–4 hours max).</li>
            <li><strong>Communicate clearly</strong>: Respect candidates' time — update them promptly and provide feedback when possible.</li>
          </ul>

          <p className="mb-6">
            <strong>NYC Advantage</strong>: Many candidates are interviewing with multiple startups. A smooth, respectful process can set you apart.
          </p>

          <hr className="my-8" />

          <h2 className="text-2xl font-bold mb-4">5. Evaluating Candidates</h2>

          <p className="mb-4">
            Look beyond resumes.
          </p>

          <ul className="mb-6 space-y-2">
            <li><strong>Skills & experience</strong>: Verify they have the technical or functional abilities needed now.</li>
            <li><strong>Adaptability</strong>: Can they thrive with ambiguity, limited resources, and rapid change?</li>
            <li><strong>Passion for mission</strong>: Do they care about your startup's vision and problem space?</li>
            <li><strong>Team contribution</strong>: Will they make your team stronger, not just fill a role?</li>
          </ul>

          <p className="mb-6">
            <strong>Red flags</strong>: Lack of curiosity, resistance to feedback, poor communication, or unrealistic expectations about startup life.
          </p>

          <hr className="my-8" />

          <h2 className="text-2xl font-bold mb-4">6. Compensation & Equity</h2>

          <p className="mb-4">
            Startups often can't match corporate salaries, but they can offer upside.
          </p>

          <ul className="mb-6 space-y-2">
            <li><strong>Benchmark salaries</strong>: Use resources like Levels.fyi, AngelList, or Radford surveys.</li>
            <li><strong>Offer equity</strong>: Educate candidates about vesting schedules, option pools, and long-term value.</li>
            <li><strong>Be transparent</strong>: Share total compensation (salary, equity, benefits, perks).</li>
            <li><strong>Creative perks</strong>: Remote flexibility, learning stipends, coworking memberships, and wellness benefits can help you stand out.</li>
          </ul>

          <hr className="my-8" />

          <h2 className="text-2xl font-bold mb-4">7. Making the Offer</h2>

          <p className="mb-4">
            Closing candidates is about more than numbers.
          </p>

          <ul className="mb-6 space-y-2">
            <li><strong>Move fast</strong>: Once you find the right candidate, act quickly before they get other offers.</li>
            <li><strong>Personalize</strong>: Share why you believe they're the right fit and how they'll make an impact.</li>
            <li><strong>Be flexible</strong>: Consider adjusting title, equity, or perks if salary is constrained.</li>
            <li><strong>Build excitement</strong>: Reinforce your startup's vision, values, and growth potential.</li>
          </ul>

          <hr className="my-8" />

          <h2 className="text-2xl font-bold mb-4">8. Onboarding New Hires</h2>

          <p className="mb-4">
            The first 90 days are critical. Strong onboarding increases retention and productivity.
          </p>

          <ul className="mb-6 space-y-2">
            <li><strong>Set clear goals</strong>: Define what success looks like in the first weeks and months.</li>
            <li><strong>Assign a buddy</strong>: Pair new hires with team members for support.</li>
            <li><strong>Provide resources</strong>: Give access to tools, documentation, and company values from day one.</li>
            <li><strong>Check in regularly</strong>: Weekly 1:1s ensure alignment and support during adjustment.</li>
          </ul>

          <hr className="my-8" />

          <h2 className="text-2xl font-bold mb-4">9. Retaining Top Talent</h2>

          <p className="mb-4">
            Hiring doesn't stop once a candidate joins — keeping them engaged is just as important.
          </p>

          <ul className="mb-6 space-y-2">
            <li><strong>Create growth opportunities</strong>: Promotions, mentorship, and stretch projects.</li>
            <li><strong>Build strong culture</strong>: Transparency, recognition, and inclusive practices matter.</li>
            <li><strong>Encourage feedback</strong>: Regularly collect input from employees and act on it.</li>
            <li><strong>Balance intensity with care</strong>: Startups move fast, but burnout is real. Support work-life balance.</li>
          </ul>

          <hr className="my-8" />

          <h2 className="text-2xl font-bold mb-4">10. Legal & Compliance Considerations</h2>

          <p className="mb-4">
            NYC hiring has specific legal guidelines.
          </p>

          <ul className="mb-6 space-y-2">
            <li><strong>Equal Opportunity Employment</strong>: Ensure postings and practices comply with anti-discrimination laws.</li>
            <li><strong>Salary transparency</strong>: NYC requires job postings to include salary ranges.</li>
            <li><strong>Worker classification</strong>: Differentiate between employees and contractors correctly.</li>
            <li><strong>Visa & sponsorship</strong>: Many talented candidates may need H-1B or O-1 sponsorship.</li>
          </ul>

          <hr className="my-8" />

          <h2 className="text-2xl font-bold mb-4">Final Thoughts</h2>

          <p className="mb-4">
            Hiring in NYC startups requires clarity, speed, and authenticity. By defining roles clearly, creating a candidate-friendly process, and offering meaningful opportunities, you'll build a team that fuels your startup's success.
          </p>

          <p className="mb-8 font-semibold">
            The right hire is more than just filling a position — it's a step toward shaping the future of your company.
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
                  <a href="/hiring" className="hover:text-primary transition-colors">
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