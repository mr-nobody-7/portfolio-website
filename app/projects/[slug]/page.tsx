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
    <section className="py-16 md:py-20 lg:py-24">
      <div className="container">
        <Link
          href="/"
          className="inline-flex items-center gap-2 mb-10 md:mb-12 text-lg md:text-2xl text-muted-foreground hover:text-primary"
        >
          ← Back
        </Link>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-anton mb-8 md:mb-10 leading-[0.95] max-w-[900px]">
          {project.title}
        </h1>

        <div className="max-w-[860px] space-y-8 md:space-y-10 text-xl md:text-[30px] leading-snug">
          <div>
            <p className="text-muted-foreground text-base md:text-xl mb-2 font-semibold uppercase tracking-wide">
              Year
            </p>
            <p>{project.year}</p>
          </div>

          <div>
            <p className="text-muted-foreground text-base md:text-xl mb-2 font-semibold uppercase tracking-wide">
              Tech & Technique
            </p>
            <p className="leading-relaxed">{project.techStack.join(", ")}</p>
          </div>

          <div>
            <p className="text-muted-foreground text-base md:text-xl mb-4 font-semibold uppercase tracking-wide">
              Description
            </p>
            <div className="prose prose-invert max-w-[820px] text-muted-foreground text-lg md:text-2xl leading-relaxed prose-p:my-4 prose-li:my-1.5">
              {parse(project.description)}
            </div>
          </div>

          <div>
            <p className="text-muted-foreground text-base md:text-xl mb-2 font-semibold uppercase tracking-wide">
              My Role
            </p>
            <p>{project.role}</p>
          </div>
        </div>

        <div className="flex gap-4 mt-10 md:mt-12 flex-wrap">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 md:px-8 py-3.5 md:py-4 bg-primary text-primary-foreground text-xl md:text-2xl font-anton"
            >
              VIEW LIVE
            </a>
          )}
          {project.sourceCode && (
            <a
              href={project.sourceCode}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 md:px-8 py-3.5 md:py-4 bg-background-light text-xl md:text-2xl font-anton"
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
