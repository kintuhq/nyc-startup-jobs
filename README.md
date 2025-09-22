# NYC Startup Jobs - Building NYC startups

A modern job board platform connecting professionals with NYC startups. Built with Next.js 14, featuring free job postings for companies and unlimited applications for professionals.

## 🚀 Features

### For Companies
- **Free account creation** and job posting
- **Professional dashboard** to manage job postings
- **Logo upload** with Cloudflare R2 storage
- **Rich job descriptions** with full specifications
- **Authentication** with NextAuth
- **Email notifications** via Resend

### For Job Seekers
- **Browse jobs** without creating an account
- **Newsletter subscription** for new job notifications
- **Detailed job pages** with full specifications
- **Easy application process** with company contact info
- **Email alerts** when new positions are posted

### Technical Features
- **Responsive design** with shadcn/ui components
- **Database** powered by Neon PostgreSQL
- **File storage** via Cloudflare R2
- **Email** service via Resend
- **Authentication** with JWT and secure cookies
- **Modern UI** with Tailwind CSS

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Database**: Neon PostgreSQL with Drizzle ORM
- **Authentication**: NextAuth with secure sessions
- **File Storage**: Cloudflare R2
- **Email**: Resend
- **UI**: Tailwind CSS + shadcn/ui
- **Deployment**: Vercel-ready

## 📦 Project Structure

```
├── app/                    # Next.js app router
│   ├── api/               # API routes
│   │   ├── auth/          # Authentication endpoints
│   │   ├── jobs/          # Job management
│   │   ├── dashboard/     # School dashboard data
│   │   ├── school/        # School profile management
│   │   └── upload/        # File upload handling
│   ├── dashboard/         # School dashboard page
│   ├── jobs/[id]/         # Individual job pages
│   ├── login/             # Login page
│   ├── register/          # Registration page
│   └── page.tsx           # Homepage with job listings
├── components/            # Reusable UI components
│   ├── ui/               # shadcn/ui components
│   ├── job-posting-form.tsx
│   └── logo-upload.tsx
├── lib/                   # Utilities and configurations
│   ├── db/               # Database schema and connection
│   ├── auth.ts           # Authentication utilities
│   ├── email.ts          # Email service functions
│   ├── storage.ts        # File storage utilities
│   └── utils.ts          # General utilities
└── drizzle.config.ts     # Database configuration
```

## 🗃 Database Schema

### Companies Table
- **id**: UUID primary key
- **email**: Unique email address
- **password**: Hashed password
- **name**: Company name
- **logo**: Optional logo URL
- **verified**: Email verification status
- **timestamps**: Created/updated dates

### Jobs Table
- **id**: UUID primary key
- **companyId**: Foreign key to companies
- **title**: Job title
- **location**: City and country
- **type**: full-time or part-time
- **shortBio**: Brief description for job cards
- **jobSpec**: Detailed job requirements
- **aboutCompany**: Information about the company
- **howToApply**: Application instructions
- **published**: Publication status
- **timestamps**: Created/updated dates

### Newsletter Subscribers Table
- **id**: UUID primary key
- **name**: Subscriber's name
- **email**: Unique email address
- **active**: Subscription status
- **timestamps**: Created/updated dates

## 🔧 Setup & Development

### Prerequisites
- Node.js 18+
- npm or pnpm
- Neon PostgreSQL database
- Cloudflare R2 account
- Resend account

### Environment Variables
Create `.env.local` with:

```env
DATABASE_URL=your_neon_database_url
RESEND_API_KEY=your_resend_api_key
EMAIL_FROM_ADDRESS=team@updates.nycstartupjobs.com
R2_ENDPOINT=your_r2_endpoint
R2_PUBLIC_URL=your_r2_public_url
R2_ACCESS_KEY_ID=your_r2_access_key
R2_SECRET_ACCESS_KEY=your_r2_secret_key
JWT_SECRET=your_jwt_secret
NEXT_PUBLIC_BASE_URL=https://nycstartupjobs.com
```

### Installation & Setup

```bash
# Clone and install dependencies
git clone <repository>
cd math-jobs
npm install

# Generate and push database schema
npm run db:generate
npm run db:push

# Start development server
npm run dev
```

## 📱 Usage

### For Companies
1. Visit the homepage and click "Post a Job"
2. Create an account with company email and details
3. Access the dashboard to manage job postings
4. Upload company logo for branding
5. Create detailed job postings with rich descriptions

### For Job Seekers
1. Browse jobs on the homepage
2. Subscribe to newsletter for new job notifications
3. Click "View Details" to see full job specifications
4. Follow the application instructions provided by each company
5. Receive email alerts when new positions are posted

## 🌐 API Endpoints

### Authentication
- `POST /api/auth/register` - Company registration
- `POST /api/auth/login` - Company login
- `POST /api/auth/logout` - Logout

### Jobs
- `GET /api/jobs` - Get all published jobs
- `POST /api/jobs` - Create new job (authenticated)
- `GET /api/jobs/[id]` - Get specific job
- `PUT /api/jobs/[id]` - Update job (authenticated)
- `DELETE /api/jobs/[id]` - Delete job (authenticated)

### Dashboard
- `GET /api/dashboard/jobs` - Get company's jobs and profile

### Company Profile
- `PUT /api/company/logo` - Update company logo

### File Upload
- `POST /api/upload` - Get signed upload URL for R2

### Newsletter
- `POST /api/newsletter/subscribe` - Subscribe to job notifications
- `POST /api/newsletter/welcome` - Send welcome email to new subscriber

## 🚀 Deployment

The application is ready for deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Add all environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

## 🔒 Security Features

- **Password hashing** with bcryptjs
- **JWT tokens** with secure HTTP-only cookies
- **Input validation** with Zod schemas
- **SQL injection protection** with Drizzle ORM
- **File upload validation** with type and size limits
- **Authentication middleware** for protected routes

## 🎨 UI/UX Features

- **Responsive design** for all screen sizes
- **Dark/light mode** support via next-themes
- **Loading states** and error handling
- **Form validation** with real-time feedback
- **Modern animations** and transitions
- **Accessible** components with proper ARIA labels

## 📧 Email Features

- **Welcome emails** for new company registrations
- **Newsletter subscriptions** with welcome emails
- **Job notification emails** sent to subscribers automatically
- **Password reset** emails (framework in place)
- **Transactional emails** via Resend service

## 🔧 Development Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run db:generate  # Generate database migrations
npm run db:push      # Push schema to database
npm run db:migrate   # Run migrations
```

## 🌟 Live Demo

**Development Server**: http://localhost:3001
**Production**: Deploy to Vercel with provided environment variables

---

**NYC Startup Jobs** - Connecting talented professionals with NYC startups. 📊💼
