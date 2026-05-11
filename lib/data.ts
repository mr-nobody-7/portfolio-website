import type { IProject } from "@/types";

export const PERSONAL_INFO = {
  name: "Vivekananda",
  fullName: "Vivekananda Godi",
  title: "Full Stack Developer",
  email: "vivekanandagodi@gmail.com",
  shortBio:
    "I craft fast, polished web interfaces with React and Next.js — and back them with clean API design and production-ready backend architecture.",
  aboutMe: {
    headline:
      "I build interfaces people enjoy using, backed by systems built to last.",
    greeting: "Hi, I'm Vivekananda.",
    description: [
      "I specialize in React and Next.js — building UIs that feel fast, look sharp, and hold up under real user load.",
      "On the backend, I design clean REST APIs, pick the right data model, and wire everything together so the product ships ready for production.",
    ],
  },
  stats: {
    yearsOfExperience: "3+",
    completedProjects: "3+",
    hoursWorked: "7K+",
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
    title: "Software Developer",
    duration: "Jun 2023 – Present",
  },
];

export const PROJECTS: IProject[] = [
  {
    title: "LinkFolio",
    year: 2026,
    description: `
      <p>LinkFolio is a production-grade link-in-bio platform — built from scratch with Next.js and Express. Creators get a themed public profile, drag-and-drop link management, click analytics, QR code sharing, and a visitor messaging inbox, all in one dashboard.</p>

      <p>The frontend is a Next.js App Router app with an interactive dashboard: DnD Kit for drag-to-reorder, Recharts for click analytics charts, and multi-theme profile rendering. The backend is a secured Express REST API handling auth, media uploads, analytics events, and cron-scheduled link expiry — deployed and live.</p>

      <h3>Key Engineering Decisions</h3>
      <ul>
        <li>JWT + refresh-token rotation with secure logout and email-based password reset via Brevo.</li>
        <li>Reserved-username guard and generic reset responses to prevent account enumeration.</li>
        <li>Cloudinary for media, MongoDB for analytics events, node-cron for automated expiry jobs.</li>
        <li>Per-profile Open Graph metadata so links render cleanly when shared on social platforms.</li>
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
    thumbnail: "/projects/link-folio/link-folio-1.png",
    longThumbnail: "/projects/link-folio/link-folio-1.png",
    images: [
      "/projects/link-folio/link-folio-1.png",
      "/projects/link-folio/link-folio-2.png",
      "/projects/link-folio/link-folio-3.png",
    ],
    slug: "linkfolio",
    liveUrl: "https://link-folio-frontend.vercel.app",
    sourceCode: "https://github.com/mr-nobody-7/link-folio",
  },
  {
    title: "TeamFore",
    year: 2026,
    status: "🟡 Launching soon — core product complete, final integrations shipping this week",
    description: `
      <p>TeamFore replaces the chaos of WhatsApp groups and Google Sheets for team leave coordination — giving engineering managers a single surface for leave requests, approvals, daily standup availability, capacity planning, and Slack-native visibility.</p>

      <p>The frontend is a Next.js 16 App Router application with React 19, TanStack Query handling smart cache invalidation, and role-gated dashboards for employees, managers, and admins. The backend is an Express 5 API with Prisma ORM, workspace-scoped query isolation, and a Slack integration layer that pushes leave events, daily standup digests, and slash command responses directly into team channels.</p>

      <p>Google Calendar sync and an installable mobile PWA are shipping this week to complete the core integration surface.</p>

      <h3>Technical Highlights</h3>
      <ul>
        <li>Three-role RBAC — employees submit leave with half-day session granularity, managers approve with live capacity warnings, admins govern policy, teams, users, and a full audit trail.</li>
        <li>Slack integration — OAuth workspace connection, leave notifications via DM and channel, configurable daily standup digest via cron, and four slash commands (/whos-out, /my-leaves, /team-status, /apply-leave) with Block Kit interactive approval buttons gated behind the paid plan.</li>
        <li>Capacity warning engine — slot-based overlap detection at half-day precision, peak-day capacity projection at the point of approval, configurable warning threshold via environment variable.</li>
        <li>Standup availability board — daily status (available, remote, focus time, busy, half-day, on leave) and workload level (light, normal, heavy) per team member, surfaced in both the app and Slack digest.</li>
        <li>29 REST endpoints across 11 route files, 13 Prisma models, 41 frontend components, complete audit logging with 15 action types.</li>
        <li>CSV export for leave history with workspace-scoped filtering by status, date range, user, and team.</li>
        <li>React Query stale-time tuning and stable query-key strategy for near-zero perceived latency; parallel Prisma validations on leave application to reduce backend round-trips.</li>
        <li>Google Calendar sync (shipping this week) — approved leaves push as OOO events to employee calendars with a shared team subscribe feed.</li>
        <li>Mobile PWA (shipping this week) — installable to homescreen via Web App Manifest, offline-capable core flows, Web Push notifications for approvals.</li>
      </ul>
    `,
    role: "Full Stack Developer",
    techStack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "TanStack React Query",
      "Axios",
      "Express 5",
      "Prisma 7",
      "PostgreSQL",
      "JWT",
      "Slack API",
      "Brevo",
      "Google OAuth",
      "PostHog",
      "pnpm Workspaces",
      "Biome",
      "Neon",
      "Railway",
      "Vercel",
    ],
    thumbnail: "/projects/team-pulse/team-pulse-1.png",
    longThumbnail: "/projects/team-pulse/team-pulse-1.png",
    images: [
      "/projects/team-pulse/team-pulse-1.png",
      "/projects/team-pulse/team-pulse-2.png",
      "/projects/team-pulse/team-pulse-3.png",
    ],
    slug: "team-pulse",
    liveUrl: "https://team-pulse-web-omega.vercel.app",
    sourceCode: "https://github.com/mr-nobody-7/team-pulse",
  },
  {
    title: "Vivek's Farm Commerce",
    year: 2026,
    description: `
      <p>A full-stack e-commerce platform built for a real farm brand selling ghee, pickles, honey, and pantry staples — direct-to-consumer, no marketplace cut.</p>

      <p>The storefront is a Next.js 16 App Router app with TanStack Query for cached product data, Zustand for a persistent cart that survives page refreshes, and a Razorpay checkout flow with server-side payment verification. Admins get a protected panel in the same pnpm monorepo with full product CRUD, order management, and Cloudinary image uploads.</p>

      <h3>Under the Hood</h3>
      <ul>
        <li>OTP-based login — fast, passwordless checkout on mobile.</li>
        <li>Razorpay payment verification with full order lifecycle tracking (placed → paid → shipped).</li>
        <li>Express 5 + MongoDB backend with Cloudinary for image storage and Multer for uploads.</li>
        <li>Shared TypeScript types across storefront and admin via pnpm workspaces.</li>
      </ul>
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
    thumbnail: "/projects/viveks-farm/viveks_farm-1.png",
    longThumbnail: "/projects/viveks-farm/viveks_farm-1.png",
    images: [
      "/projects/viveks-farm/viveks_farm-1.png",
      "/projects/viveks-farm/viveks_farm-2.png",
      "/projects/viveks-farm/viveks_farm-3.png",
      "/projects/viveks-farm/viveks_farm-4.png",
      "/projects/viveks-farm/viveks_farm-5.png",
    ],
    slug: "viveks-farm-commerce",
    liveUrl: "https://viveksfarm.app",
    sourceCode: "https://github.com/mr-nobody-7/viveks-farm-commerce",
  },
];
