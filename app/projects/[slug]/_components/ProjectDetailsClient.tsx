"use client";

import { motion } from "framer-motion";
import parse from "html-react-parser";
import Image from "next/image";
import Link from "next/link";
import type { IProject } from "@/types";

interface Props {
  project: IProject;
  relatedProjects: IProject[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.42,
      staggerChildren: 0.09,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.52, ease: "easeOut" as const },
  },
};

export const ProjectDetailsClient = ({ project, relatedProjects }: Props) => {
  return (
    <section className="pt-6 pb-16 md:pb-24">
      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <Link
            href="/"
            className="mb-12 inline-flex gap-2 items-center group h-12 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="group-hover:-translate-x-1 transition-all duration-300">
              &larr;
            </span>
            Back
          </Link>
        </motion.div>

        <div className="max-w-[580px] mx-auto">
          <div className="flex items-start gap-6 mb-12">
            <motion.h1
              className="text-3xl md:text-[52px] leading-[0.95] font-anton"
              variants={itemVariants}
            >
              {project.title}
            </motion.h1>

            <motion.div className="flex gap-2" variants={itemVariants}>
              {project.sourceCode && (
                <a
                  href={project.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="size-10 rounded-full bg-background-light hover:bg-primary hover:text-primary-foreground transition-all inline-flex items-center justify-center text-sm font-semibold"
                >
                  GH
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="size-10 rounded-full bg-background-light hover:bg-primary hover:text-primary-foreground transition-all inline-flex items-center justify-center text-sm font-semibold"
                >
                  ↗
                </a>
              )}
            </motion.div>
          </div>

          <div className="space-y-8 pb-20">
            <motion.div
              variants={itemVariants}
              className="border-b border-border/60 pb-7"
            >
              <p className="text-muted-foreground font-anton mb-2 text-sm tracking-wide uppercase">
                Year
              </p>
              <p className="text-base">{project.year}</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="border-b border-border/60 pb-7"
            >
              <p className="text-muted-foreground font-anton mb-2 text-sm tracking-wide uppercase">
                Tech & Technique
              </p>
              <p className="text-base leading-relaxed text-foreground/95">
                {project.techStack.join(", ")}
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="border-b border-border/60 pb-7"
            >
              <p className="text-muted-foreground font-anton mb-2 text-sm tracking-wide uppercase">
                Description
              </p>
              <div className="prose prose-invert max-w-none text-muted-foreground text-base leading-relaxed prose-p:my-3 prose-li:my-1.5 prose-headings:font-anton prose-headings:text-foreground">
                {parse(project.description)}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-muted-foreground font-anton mb-2 text-sm tracking-wide uppercase">
                My Role
              </p>
              <p className="text-base text-foreground/95 leading-relaxed">
                {project.role}
              </p>
            </motion.div>
          </div>
        </div>

        {project.images.length > 0 && (
          <motion.div
            className="relative flex flex-col gap-2 max-w-[760px] mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: { opacity: 1 },
              visible: {
                opacity: 1,
                transition: { delayChildren: 0.18, staggerChildren: 0.09 },
              },
            }}
          >
            {project.images.map((image) => (
              <motion.div
                key={image}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.52, ease: "easeOut" as const },
                  },
                }}
                className="group relative w-full aspect-[750/400] bg-background-light"
              >
                <Image
                  src={image}
                  alt={`${project.title} screenshot`}
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="object-cover"
                  loading="lazy"
                />
                <a
                  href={image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 bg-background/70 text-foreground size-11 inline-flex justify-center items-center transition-all opacity-0 hover:bg-primary hover:text-primary-foreground group-hover:opacity-100"
                >
                  ↗
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}

        {relatedProjects.length > 0 && (
          <motion.aside
            className="max-w-[760px] mx-auto mt-14"
            variants={itemVariants}
          >
            <h2 className="font-anton text-2xl mb-5">Related Projects</h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {relatedProjects.map((relatedProject) => (
                <li key={relatedProject.slug}>
                  <Link
                    href={`/projects/${relatedProject.slug}`}
                    className="block border border-border/70 bg-background-light/40 p-4 hover:border-primary hover:bg-background-light transition-colors"
                  >
                    <p className="font-anton text-xl leading-none">
                      {relatedProject.title}
                    </p>
                    <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                      {relatedProject.techStack.slice(0, 3).join(" • ")}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.aside>
        )}
      </motion.div>
    </section>
  );
};
