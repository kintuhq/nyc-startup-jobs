import { Resend } from 'resend'
import { escapeHtml } from './sanitize'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendPasswordResetEmail(email: string, resetToken: string) {
  const resetUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/reset-password?token=${resetToken}`

  await resend.emails.send({
    from: `NYC Startup Jobs <${process.env.EMAIL_FROM_ADDRESS!}>`,
    to: email,
    subject: 'Reset your NYC Startup Jobs password',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #333;">Reset Your Password</h1>
        <p>You requested to reset your password for your NYC Startup Jobs account.</p>
        <p>Click the link below to reset your password:</p>
        <a href="${resetUrl}" style="background-color: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; display: inline-block;">Reset Password</a>
        <p style="margin-top: 20px; color: #666;">This link will expire in 1 hour.</p>
        <p style="color: #666;">If you didn't request this password reset, you can safely ignore this email.</p>
      </div>
    `,
  })
}

export async function sendEmailVerificationEmail(email: string, verificationToken: string, baseUrl?: string) {
  const verificationUrl = `${baseUrl || process.env.NEXT_PUBLIC_BASE_URL || 'https://nycstartupjobs.com'}/verify-email?token=${verificationToken}`

  await resend.emails.send({
    from: `NYC Startup Jobs <${process.env.EMAIL_FROM_ADDRESS!}>`,
    to: email,
    subject: 'Verify your NYC Startup Jobs email address',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #333;">Verify your email address</h1>
        <p>Welcome to NYC Startup Jobs! Please verify your email address to start posting professional positions.</p>
        <p>Click the button below to verify your email address:</p>
        <a href="${verificationUrl}" style="background-color: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; display: inline-block; margin: 20px 0;">Verify Email Address</a>
        <p style="margin-top: 20px; color: #666;">This link will expire in 24 hours.</p>
        <p style="color: #666;">If you didn't create an account with NYC Startup Jobs, you can safely ignore this email.</p>
        <p style="color: #666; font-size: 14px; margin-top: 30px;">
          If the button above doesn't work, copy and paste this link into your browser:<br>
          <a href="${verificationUrl}" style="color: #2563eb; word-break: break-all;">${verificationUrl}</a>
        </p>
      </div>
    `,
  })
}

export async function sendWelcomeEmail(email: string, companyName: string, baseUrl?: string) {
  const loginUrl = `${baseUrl || process.env.NEXT_PUBLIC_BASE_URL || 'https://nycstartupjobs.com'}/login`

  await resend.emails.send({
    from: `NYC Startup Jobs <${process.env.EMAIL_FROM_ADDRESS!}>`,
    to: email,
    subject: 'Welcome to NYC Startup Jobs!',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #333;">Welcome to NYC Startup Jobs!</h1>
        <p>Thank you for joining NYC Startup Jobs! You can now start posting professional positions for free.</p>
        <p>To get started:</p>
        <ol>
          <li><a href="${loginUrl}" style="color: #2563eb; text-decoration: none;">Log in to your account</a></li>
          <li>Click "Post a Job" to create your first job posting</li>
          <li>Fill out the job details and publish</li>
        </ol>
        <p>Your job postings will be visible to professionals looking for NYC startup opportunities.</p>
        <p>If you have any questions, feel free to reach out to us.</p>
        <p>Best regards,<br>The NYC Startup Jobs Team</p>
      </div>
    `,
  })
}

export async function sendNewsletterWelcomeEmail(email: string, name?: string) {
  await resend.emails.send({
    from: `NYC Startup Jobs <${process.env.EMAIL_FROM_ADDRESS!}>`,
    to: email,
    subject: 'Welcome to NYC Startup Jobs Newsletter!',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #2563eb; margin: 0;">NYC Startup <span style="color: #333;">Jobs</span></h1>
          <p style="color: #666; margin: 5px 0;">Building NYC startups</p>
        </div>

        <h2 style="color: #333;">Welcome to our newsletter${name ? `, ${escapeHtml(name)}` : ''}!</h2>

        <p style="color: #555; line-height: 1.6;">
          Thank you for subscribing to NYC Startup Jobs newsletter! You'll now receive notifications whenever new professional positions are posted on our platform.
        </p>

        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">What you'll receive:</h3>
          <ul style="color: #555; line-height: 1.6;">
            <li>🔔 New job posting alerts</li>
            <li>📍 Opportunities at NYC startups</li>
            <li>🎯 Positions at all levels (junior, senior, lead)</li>
            <li>💼 Full-time and part-time opportunities</li>
          </ul>
        </div>

        <p style="color: #555; line-height: 1.6;">
          In the meantime, feel free to browse our current opportunities at
          <a href="${process.env.NEXT_PUBLIC_BASE_URL}" style="color: #2563eb; text-decoration: none;">nycstartupjobs.com</a>
        </p>

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center;">
          <p style="color: #888; font-size: 14px; margin: 0;">
            You're receiving this because you subscribed to NYC Startup Jobs newsletter.<br>
            <a href="#" style="color: #888; text-decoration: underline;">Unsubscribe</a> |
            <a href="${process.env.NEXT_PUBLIC_BASE_URL}" style="color: #888; text-decoration: underline;">Visit NYC Startup Jobs</a>
          </p>
        </div>
      </div>
    `,
  })
}

export async function sendJobNotificationEmail(subscriberEmail: string, subscriberName: string, job: any) {
  await resend.emails.send({
    from: `NYC Startup Jobs <${process.env.EMAIL_FROM_ADDRESS!}>`,
    to: subscriberEmail,
    subject: `New Professional Position: ${job.title} at ${job.company.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #2563eb; margin: 0;">NYC Startup <span style="color: #333;">Jobs</span></h1>
          <p style="color: #666; margin: 5px 0;">New Job Alert</p>
        </div>

        <h2 style="color: #333;">Hi ${escapeHtml(subscriberName) || 'Professional'}!</h2>

        <p style="color: #555; line-height: 1.6;">
          A new professional position has been posted that might interest you:
        </p>

        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #2563eb;">
          <h3 style="color: #333; margin-top: 0;">${escapeHtml(job.title)}</h3>
          <p style="color: #2563eb; font-weight: bold; margin: 5px 0;">${escapeHtml(job.company.name)}</p>
          <p style="color: #666; margin: 5px 0;">📍 ${escapeHtml(job.location)}</p>
          <p style="color: #666; margin: 5px 0;">💼 ${job.type === 'full-time' ? 'Full-time' : 'Part-time'}</p>

          <p style="color: #555; line-height: 1.6; margin-top: 15px;">
            ${escapeHtml(job.shortBio)}
          </p>

          <div style="text-align: center; margin-top: 20px;">
            <a href="${process.env.NEXT_PUBLIC_BASE_URL}/jobs/${job.shortId}"
               style="background: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; display: inline-block; font-weight: bold;">
              View Full Details
            </a>
          </div>
        </div>

        <p style="color: #555; line-height: 1.6;">
          Don't miss out on this opportunity! Visit the job page to learn more and apply.
        </p>

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center;">
          <p style="color: #888; font-size: 14px; margin: 0;">
            You're receiving this because you subscribed to NYC Startup Jobs job alerts.<br>
            <a href="#" style="color: #888; text-decoration: underline;">Unsubscribe</a> |
            <a href="${process.env.NEXT_PUBLIC_BASE_URL}" style="color: #888; text-decoration: underline;">Browse More Jobs</a>
          </p>
        </div>
      </div>
    `,
  })
}