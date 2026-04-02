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
    <section className="py-20 lg:py-28">
      <div className="container">
        <Link
          href="/"
          className="inline-flex items-center gap-2 mb-12 text-2xl text-muted-foreground hover:text-primary"
        >
          ← Back
        </Link>

        <h1 className="text-7xl md:text-8xl lg:text-9xl font-anton mb-10 leading-[0.95]">
          {project.title}
        </h1>

        <div className="max-w-4xl space-y-10 text-2xl md:text-4xl">
          <div>
            <p className="text-muted-foreground text-xl md:text-2xl mb-2 font-semibold">Year</p>
            <p>{project.year}</p>
          </div>

          <div>
            <p className="text-muted-foreground text-xl md:text-2xl mb-2 font-semibold">Tech & Technique</p>
            <p>{project.techStack.join(", ")}</p>
          </div>

          <div>
            <p className="text-muted-foreground text-xl md:text-2xl mb-4 font-semibold">Description</p>
            <div className="prose prose-invert max-w-none text-muted-foreground text-xl md:text-3xl leading-relaxed">
              {parse(project.description)}
            </div>
          </div>

          <div>
            <p className="text-muted-foreground text-xl md:text-2xl mb-2 font-semibold">My Role</p>
            <p>{project.role}</p>
          </div>
        </div>

        <div className="flex gap-4 mt-12 flex-wrap">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-primary text-primary-foreground text-2xl font-anton"
            >
              VIEW LIVE
            </a>
          )}
          {project.sourceCode && (
            <a
              href={project.sourceCode}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-background-light text-2xl font-anton"
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
