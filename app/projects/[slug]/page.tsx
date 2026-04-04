import { notFound } from "next/navigation";
import { PROJECTS } from "@/lib/data";
import { ProjectDetailsClient } from "./_components/ProjectDetailsClient";

export const generateStaticParams = async () => {
  return PROJECTS.map((project) => ({ slug: project.slug }));
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  return {
    title: `${project?.title} | My Portfolio`,
    description: project?.role,
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

  return <ProjectDetailsClient project={project} />;
};

export default ProjectPage;
