import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PROJECTS } from "@/lib/data";
import { absoluteUrl, DEFAULT_OG_IMAGE } from "@/lib/site";
import { ProjectDetailsClient } from "./_components/ProjectDetailsClient";

export const dynamic = "force-static";

export const generateStaticParams = async () => {
  return PROJECTS.map((project) => ({ slug: project.slug }));
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> => {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "Requested project was not found.",
      alternates: { canonical: "/projects" },
    };
  }

  const ogImage = project.images[0] ?? project.thumbnail ?? DEFAULT_OG_IMAGE;
  const projectPath = `/projects/${project.slug}`;
  const plainDescription = project.description
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 160);

  return {
    title: `${project.title} Project`,
    description:
      plainDescription || `${project.title} case study and build details.`,
    alternates: {
      canonical: projectPath,
    },
    openGraph: {
      type: "article",
      title: `${project.title} | Full Stack Project`,
      description:
        plainDescription ||
        `${project.title} project details, architecture, and implementation.`,
      url: absoluteUrl(projectPath),
      images: [
        {
          url: absoluteUrl(ogImage),
          width: 1200,
          height: 630,
          alt: `${project.title} project preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Full Stack Project`,
      description:
        plainDescription ||
        `${project.title} project details, architecture, and implementation.`,
      images: [absoluteUrl(ogImage)],
    },
  };
};

const ProjectPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return notFound();
  }

  const relatedProjects = PROJECTS.filter((p) => p.slug !== project.slug).slice(
    0,
    2,
  );

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: absoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: absoluteUrl("/#selected-projects"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: absoluteUrl(`/projects/${project.slug}`),
      },
    ],
  };

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description
      .replace(/<[^>]*>/g, " ")
      .replace(/\s+/g, " ")
      .trim(),
    url: absoluteUrl(`/projects/${project.slug}`),
    image: project.images.map((image) => absoluteUrl(image)),
    datePublished: `${project.year}-01-01`,
    dateModified: `${project.year}-01-01`,
    creator: {
      "@type": "Person",
      name: "Vivekananda Godi",
    },
    keywords: project.techStack.join(", "),
    programmingLanguage: project.techStack,
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(projectSchema)}
      </script>
      <ProjectDetailsClient
        project={project}
        relatedProjects={relatedProjects}
      />
    </>
  );
};

export default ProjectPage;
