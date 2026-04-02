import type { IProject } from "@/types";

export const PERSONAL_INFO = {
  name: "Vivekananda",
  fullName: "Vivekananda Godi",
  title: "Full Stack Developer",
  email: "vivekanandagodi@gmail.com",
  shortBio:
    "A creative full stack developer focused on building high-performance, scalable, and responsive web solutions.",
  aboutMe: {
    headline:
      "I focus on building clean, scalable, and performance-driven applications.",
    greeting: "Hi, I'm Vivekananda.",
    description: [
      "I am a full stack web developer who cares deeply about building intuitive applications.",
      "My approach combines strong frontend UI engineering with solid backend fundamentals.",
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
  { name: "github", url: "https://github.com/mr-nobofy-7" },
  { name: "linkedin", url: "https://www.linkedin.com/in/vivekananda-godi/" },
];

export const MY_STACK = {
  Frontend: [
    { name: "React", icon: "/logo/react.svg" },
    { name: "Next.js", icon: "/logo/nextjs.svg" },
    { name: "TypeScript", icon: "/logo/typescript.svg" },
    { name: "Tailwind CSS", icon: "/logo/tailwind.svg" },
    { name: "JavaScript", icon: "/logo/javascript.svg" },
    { name: "Redux", icon: "/logo/redux.svg" },
  ],
  Backend: [
    { name: "Node.js", icon: "/logo/nodejs.svg" },
    { name: "Express", icon: "/logo/express.svg" },
  ],
  Database: [
    { name: "MongoDB", icon: "/logo/mongodb.svg" },
    { name: "PostgreSQL", icon: "/logo/postgresql.svg" },
    { name: "MySQL", icon: "/logo/mysql.svg" },
  ],
  Devops: [
    { name: "Docker", icon: "/logo/docker.svg" },
    { name: "Git", icon: "/logo/git.svg" },
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
];
