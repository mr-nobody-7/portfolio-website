import type { Metadata } from "next";
export const dynamic = "force-static";

import { absoluteUrl, DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/site";  
import { AboutMe } from "./_components/AboutMe";
import { Banner } from "./_components/Banner";
import { Experiences } from "./_components/Experiences";
import { ProjectList } from "./_components/ProjectList";
import { Skills } from "./_components/Skills";

export const metadata: Metadata = {
  title: "Vivekananda Godi - Full Stack Developer",
  description:
    "Hire Vivekananda Godi, a full stack web developer building high-performance React, Next.js, and Node.js applications.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    title: "Vivekananda Godi - Full Stack Developer",
    description:
      "Discover full stack case studies, skills, and production-ready projects built with modern web technologies.",
    url: SITE_URL,
    images: [
      {
        url: absoluteUrl(DEFAULT_OG_IMAGE),
        width: 1200,
        height: 630,
        alt: "Portfolio homepage for full stack developer Vivekananda Godi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vivekananda Godi - Full Stack Developer",
    description:
      "React, Next.js, and Node.js full stack projects focused on performance and scalability.",
    images: [absoluteUrl(DEFAULT_OG_IMAGE)],
  },
};

export default function Home() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Vivekananda Godi",
    url: SITE_URL,
    image: absoluteUrl(DEFAULT_OG_IMAGE),
    jobTitle: "Full Stack Developer",
    description:
      "Full stack developer specializing in React, Next.js, Node.js, and scalable web applications.",
    email: "mailto:vivekanandagodi@gmail.com",
    sameAs: [
      "https://github.com/mr-nobofy-7",
      "https://www.linkedin.com/in/vivekananda-godi/",
      "https://www.facebook.com/",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Hiring",
      email: "vivekanandagodi@gmail.com",
      availableLanguage: ["English"],
      url: absoluteUrl("/#contact"),
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: "Portfolio website of full stack developer Vivekananda Godi.",
  };

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>

      <div>
        <Banner />
        <AboutMe />
        <Skills />
        <Experiences />
        <ProjectList />
      </div>
    </>
  );
}
