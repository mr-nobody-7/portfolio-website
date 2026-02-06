import { notFound } from "next/navigation";
import { PROJECTS } from "@/lib/data";
import Link from "next/link";
import parse from "html-react-parser";

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

  return (
    <section className="py-20">
      <div className="container">
        <Link
          href="/"
          className="inline-block mb-12 text-muted-foreground hover:text-primary"
        >
          ← Back to Home
        </Link>

        <h1 className="text-6xl font-anton mb-4">{project.title}</h1>
        <p className="text-2xl text-muted-foreground mb-8">
          {project.role} • {project.year}
        </p>

        <div className="flex gap-3 flex-wrap mb-12">
          {project.techStack.map((tech) => (
            <span key={tech} className="px-4 py-2 bg-background-light text-sm">
              {tech}
            </span>
          ))}
        </div>

        <div className="prose prose-invert max-w-none mb-12">
          {parse(project.description)}
        </div>

        <div className="flex gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-primary text-primary-foreground font-anton"
            >
              VIEW LIVE
            </a>
          )}
          {project.sourceCode && (
            <a
              href={project.sourceCode}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-background-light font-anton"
            >
              SOURCE CODE
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
