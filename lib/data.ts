import type { IProject } from "@/types";

export const PERSONAL_INFO = {
  name: "Vivekananda",
  fullName: "Vivekananda Godi",
  title: "Full Stack Developer",
  email: "vivekanandagodi@gmail.com",
  shortBio:
    "A full stack developer building scalable products with clean frontend architecture, robust backend APIs, and production-ready cloud workflows.",
  aboutMe: {
    headline:
      "I focus on building clean, scalable, and performance-driven applications.",
    greeting: "Hi, I'm Vivekananda.",
    description: [
      "I design and build end-to-end products, from polished user interfaces to secure and maintainable backend services.",
      "My full stack approach combines frontend performance, backend reliability, and developer-friendly architecture for long-term scale.",
    ],
  },
  stats: {
    yearsOfExperience: "3+",
    completedProjects: "7+",
    hoursWorked: "10K+",
  },
  emailSubject: "Let's collaborate",
  emailBody: "Hi, I am reaching out to you because...",
  oldPortfolio: "",
  upworkProfile: "",
};

export const GENERAL_INFO = {
  email: PERSONAL_INFO.email,
  emailSubject: PERSONAL_INFO.emailSubject,
  emailBody: PERSONAL_INFO.emailBody,
};

export const SOCIAL_LINKS = [
  { name: "github", url: "https://github.com/mr-nobody-7" },
  { name: "linkedin", url: "https://www.linkedin.com/in/vivekananda-godi/" },
  { name: "x", url: "https://x.com/GodiVivekananda" },
  { name: "instagram", url: "https://www.instagram.com/mr.nobody_734/" },
];

export const MY_STACK = {
  frontend: [
    { name: "JavaScript", icon: "/logo/js.png" },
    { name: "TypeScript", icon: "/logo/ts.png" },
    { name: "React", icon: "/logo/react.png" },
    { name: "Next.js", icon: "/logo/next.png" },
    { name: "Redux", icon: "/logo/redux.png" },
    { name: "Tailwind CSS", icon: "/logo/tailwind.png" },
    { name: "Framer Motion", icon: "/logo/framer-motion.png" },
    { name: "Bootstrap", icon: "/logo/bootstrap.svg" },
  ],
  backend: [
    { name: "Node.js", icon: "/logo/node.png" },
    { name: "Express.js", icon: "/logo/express.png" },
  ],
  database: [
    { name: "MySQL", icon: "/logo/mysql.svg" },
    { name: "PostgreSQL", icon: "/logo/postgreSQL.png" },
    { name: "MongoDB", icon: "/logo/mongodb.svg" },
    { name: "Prisma", icon: "/logo/prisma.png" },
  ],
  tools: [
    { name: "Docker", icon: "/logo/docker.svg" },
    { name: "Git", icon: "/logo/git.png" },
    { name: "AWS", icon: "/logo/aws.png" },
  ],
};

export const MY_EXPERIENCE = [
  {
    company: "Candy Technologies Pvt. Ltd.",
    title: "Full Stack Developer",
    duration: "Jun 2023 – Present",
  },
];

export const PROJECTS: IProject[] = [
  {
    title: "LinkFolio",
    year: 2026,
    description: `
            <p>A full-stack link-in-bio platform where creators can publish a customizable public profile, manage links with drag-and-drop, track engagement analytics, share QR codes, and receive visitor messages.</p>

            <p>LinkFolio is a production-style application designed for creators, freelancers, and personal brands who want a clean public profile and measurable engagement in one place. Users can sign up, set up their profile, upload an avatar, choose from multiple visual themes, and manage links through an interactive dashboard.</p>

            <p>The platform includes click and profile-view analytics, temporary links that auto-expire, visitor messaging, branded QR code generation, and social-share-friendly Open Graph metadata. It also implements secure authentication with JWT access tokens, refresh tokens, rate limiting, input validation, and email-based password reset via Brevo.</p>

            <h3>Problem It Solves</h3>
            <p>Most profile-link tools are either too basic or too locked down. LinkFolio provides better profile customization, built-in growth insights, simpler sharing options, and admin-friendly campaign features.</p>

            <h3>Core Features</h3>
            <ul>
                <li>Authentication with signup/login, JWT + refresh-token flow, secure logout, and forgot-password reset.</li>
                <li>Public profile pages by username with 6 themes, tracked link clicks, and visitor message submission.</li>
                <li>Dashboard for link CRUD, drag-to-reorder, instant enable/disable, and profile editing.</li>
                <li>Analytics for daily click trends, today/week summaries, top-performing links, and profile views.</li>
                <li>Sharing support with Open Graph metadata and branded QR code rendering/download.</li>
                <li>Automation for temporary links with scheduled expiry disabling via cron jobs.</li>
            </ul>

            <h3>Security and Reliability</h3>
            <ul>
                <li>Password hashing, route-level rate limiting, and strict request validation.</li>
                <li>Reserved-username protection and generic forgot-password responses to reduce account enumeration.</li>
                <li>Tokenized password reset flow with expiry and one-time usage behavior.</li>
            </ul>

            <h3>Architecture Snapshot</h3>
            <ul>
                <li>Frontend app consumes backend REST APIs.</li>
                <li>Backend handles auth, profiles, links, analytics, messages, and uploads.</li>
                <li>MongoDB stores users, links, click events, and visitor messages.</li>
                <li>Cloudinary handles media assets, Brevo handles transactional emails, and cron handles link expiry jobs.</li>
            </ul>

            <h3>What This Project Demonstrates</h3>
            <ul>
                <li>End-to-end full-stack engineering and product-focused feature design.</li>
                <li>Secure auth/account recovery workflows and hardened API practices.</li>
                <li>Data modeling, analytics instrumentation, and deployment-ready configuration.</li>
                <li>User-centric UX decisions for guarded routes, feedback states, and reliable save flows.</li>
            </ul>
        `,
    role: "Full Stack Developer",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Zod",
      "JWT",
      "DnD Kit",
      "Recharts",
      "Cloudinary",
      "Brevo",
      "node-cron",
    ],
    thumbnail: "/projects/thumbnail/linkfolio.svg",
    longThumbnail: "/projects/thumbnail/linkfolio.svg",
    images: ["/projects/thumbnail/linkfolio.svg"],
    slug: "linkfolio",
  },
  {
    title: "Team Pulse",
    year: 2026,
    description: `
            <p>Team Pulse is a multi-tenant team leave and availability platform that helps organizations plan capacity, streamline approvals, and improve workforce visibility.</p>

            <p>Team Pulse solves fragmented leave management across chat, email, and spreadsheets by providing a single workspace where employees apply for leave, managers review approvals with team-capacity context, and admins govern teams, users, and policy settings.</p>

            <h3>Primary Users</h3>
            <ul>
                <li>Employees who apply for leave and manage daily status/workload.</li>
                <li>Managers who approve requests and monitor planning risk.</li>
                <li>Workspace admins who manage teams, users, settings, and governance logs.</li>
            </ul>

            <h3>Core Features</h3>
            <ul>
                <li>Role-based authentication and access control for user, manager, and admin workflows.</li>
                <li>Multi-workspace backend query scoping for tenant isolation.</li>
                <li>Leave lifecycle management with half-day sessions and overlap prevention.</li>
                <li>Approval workflow with projected capacity warning thresholds.</li>
                <li>Team planning calendar with public holiday and heatmap context.</li>
                <li>Daily availability and workload updates for standup visibility.</li>
                <li>Analytics and reports by date range, team, and leave type.</li>
                <li>Audit trails for auth, leave, users, teams, and settings operations.</li>
            </ul>

            <h3>Architecture Summary</h3>
            <ul>
                <li>Next.js App Router frontend with provider-based state and React Query data flows.</li>
                <li>Express 5 backend using layered route, controller, service, and middleware architecture.</li>
                <li>Prisma ORM with PostgreSQL for domain models: Workspace, User, Team, LeaveRequest, AvailabilityStatus, WorkloadStatus, PublicHoliday, WorkspaceLeaveType, and AuditLog.</li>
            </ul>

            <h3>Performance and Engineering Practices</h3>
            <ul>
                <li>React Query cache and stale-time tuning to reduce redundant requests.</li>
                <li>Stable query-key strategy and placeholder data for smoother transitions.</li>
                <li>Calendar UI render-cost reduction for dense planning screens.</li>
                <li>Backend reporting aggregation and parallel validation optimizations to lower latency.</li>
            </ul>

            <h3>Deployment Readiness</h3>
            <ul>
                <li>Frontend deployment on Vercel and backend deployment on Render.</li>
                <li>Neon/PostgreSQL database support with migration-ready flow.</li>
                <li>Production env-driven CORS allowlist and secure cookie auth settings.</li>
                <li>Security middleware with centralized error handling and health endpoint support.</li>
            </ul>
        `,
    role: "Full Stack Developer",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "React Query",
      "Axios",
      "Express 5",
      "Prisma",
      "PostgreSQL",
      "JWT",
      "pnpm Workspaces",
      "Biome",
      "Neon",
      "Vercel",
      "Render",
    ],
    thumbnail: "/projects/thumbnail/team-pulse.svg",
    longThumbnail: "/projects/thumbnail/team-pulse.svg",
    images: ["/projects/thumbnail/team-pulse.svg"],
    slug: "team-pulse",
  },
  {
    title: "Vivek's Farm Commerce",
    year: 2026,
    description: `
            <p>Vivek's Farm Commerce is a full-stack e-commerce platform for a farm-owned food brand selling natural products such as ghee, pickles, sweets, honey, and other pantry essentials. It is designed for direct-to-consumer selling with a clean customer storefront and a dedicated admin panel.</p>

            <p>The project combines a production-focused shopping experience with business-ready operations. Customers can browse categories, explore product details, manage a persistent cart, log in using OTP, and complete checkout with either Razorpay online payment or cash on delivery.</p>

            <h3>Business Problem Solved</h3>
            <p>This platform helps a small farm brand sell online without depending on heavyweight marketplaces. It provides full control over catalog, pricing, order flow, and customer experience while keeping operations simple for admins.</p>

            <h3>Customer Features</h3>
            <ul>
                <li>Product catalog with categories and product detail pages.</li>
                <li>Persistent cart powered by Zustand for smooth repeat buying.</li>
                <li>OTP-based authentication for fast mobile-friendly login.</li>
                <li>Checkout with Razorpay online payment and COD support.</li>
                <li>Order creation, payment verification, and order tracking/history.</li>
                <li>Responsive UX with loading states, empty states, and SEO metadata.</li>
            </ul>

            <h3>Admin Features</h3>
            <ul>
                <li>Protected admin authentication and role-restricted routes.</li>
                <li>Dashboard metrics for order and revenue monitoring.</li>
                <li>Category CRUD and product CRUD operations.</li>
                <li>Order review and status management workflows.</li>
                <li>Image uploads with Cloudinary integration.</li>
            </ul>

            <h3>Architecture</h3>
            <ul>
                <li>Monorepo setup with separate frontend and backend apps.</li>
                <li>Next.js 16 App Router frontend for storefront and admin UI.</li>
                <li>Express 5 + MongoDB backend with modular route structure.</li>
                <li>Shared TypeScript-first development workflow using pnpm workspaces.</li>
            </ul>

            <h3>Tech Highlights</h3>
            <ul>
                <li>Frontend: Next.js, React, TypeScript, Tailwind CSS, TanStack Query, Zustand.</li>
                <li>Backend: Express, MongoDB, Mongoose, JWT, bcryptjs, Multer, Cloudinary.</li>
                <li>Payments and Ops: Razorpay integration, Biome linting/formatting, production-focused error handling.</li>
            </ul>

            <p>This project demonstrates full-stack architecture, product thinking, and deployment-ready execution for real-world small-business commerce.</p>
        `,
    role: "Full Stack Developer",
    techStack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "TanStack Query",
      "Zustand",
      "Express 5",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Razorpay",
      "Cloudinary",
      "Multer",
      "Biome",
      "pnpm Monorepo",
    ],
    thumbnail: "/projects/thumbnail/viveks-farm-commerce.svg",
    longThumbnail: "/projects/thumbnail/viveks-farm-commerce.svg",
    images: ["/projects/thumbnail/viveks-farm-commerce.svg"],
    slug: "viveks-farm-commerce",
  },
];
