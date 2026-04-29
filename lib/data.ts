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
    thumbnail: "/projects/thumbnail/linkfolio.svg",
    longThumbnail: "/projects/thumbnail/linkfolio.svg",
    images: ["/projects/thumbnail/linkfolio.svg"],
    slug: "linkfolio",
    liveUrl: "https://link-folio-frontend.vercel.app",
    sourceCode: "https://github.com/mr-nobody-7/link-folio",
  },
  {
    title: "Team Pulse",
    year: 2026,
    description: `
      <p>Team Pulse replaces the usual chaos of WhatsApp and spreadsheets for team leave management — leave requests, capacity planning, manager approvals, and audit logs, all in one multi-tenant workspace.</p>

      <p>The frontend is a Next.js App Router app with React Query powering smart cache invalidation, role-gated dashboards for employees, managers, and admins, and a planning calendar with public holiday overlays and heatmap context. The backend is an Express 5 API with Prisma ORM and tenant-scoped queries for complete data isolation between workspaces.</p>

      <h3>Technical Highlights</h3>
      <ul>
        <li>Three-role RBAC: Employees submit leave, Managers approve with capacity warnings, Admins govern policy and audit logs.</li>
        <li>Half-day sessions, overlap prevention, and projected team availability at the point of approval.</li>
        <li>React Query stale-time tuning and placeholder data for near-zero perceived latency on navigation.</li>
        <li>Prisma + PostgreSQL (Neon) backend deployed on Render, Next.js frontend deployed on Vercel.</li>
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
    thumbnail: "/projects/thumbnail/viveks-farm-commerce.svg",
    longThumbnail: "/projects/thumbnail/viveks-farm-commerce.svg",
    images: ["/projects/thumbnail/viveks-farm-commerce.svg"],
    slug: "viveks-farm-commerce",
    liveUrl: "https://viveksfarm.app",
    sourceCode: "https://github.com/mr-nobody-7/viveks-farm-commerce",
  },
];
