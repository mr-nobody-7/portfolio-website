export const SITE_URL = "https://vivekanandagodi.dev";

export const SITE_NAME = "Vivekananda Godi Portfolio";

export const DEFAULT_OG_IMAGE = "/og/portfolio-og.svg";

export const DEFAULT_KEYWORDS = [
  "full stack developer",
  "full stack developer portfolio",
  "fullstack web developer",
  "React Next.js developer",
  "Node.js developer",
  "MERN stack developer",
  "freelance fullstack developer",
  "web application developer",
];

export const absoluteUrl = (path: string) => {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalizedPath, SITE_URL).toString();
};
