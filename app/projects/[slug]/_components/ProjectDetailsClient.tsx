"use client";

import { motion } from "framer-motion";
import parse from "html-react-parser";
import Image from "next/image";
import Link from "next/link";
import type { IProject } from "@/types";

interface Props {
  project: IProject;
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

export const ProjectDetailsClient = ({ project }: Props) => {
  return (
    <section className="pt-5 pb-14">
      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <Link
            href="/"
            className="mb-16 inline-flex gap-2 items-center group h-12 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="group-hover:-translate-x-1 transition-all duration-300">
              &larr;
            </span>
            Back
          </Link>
        </motion.div>

        <div className="max-w-[635px] mx-auto">
          <div className="flex items-start gap-6 mb-10">
            <motion.h1
              className="text-4xl md:text-[60px] leading-none font-anton"
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

          <div className="space-y-7 pb-20">
            <motion.div variants={itemVariants}>
              <p className="text-muted-foreground font-anton mb-3">Year</p>
              <p className="text-lg">{project.year}</p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-muted-foreground font-anton mb-3">
                Tech & Technique
              </p>
              <p className="text-lg leading-relaxed">
                {project.techStack.join(", ")}
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-muted-foreground font-anton mb-3">
                Description
              </p>
              <div className="prose prose-invert max-w-none text-muted-foreground text-lg leading-relaxed prose-p:my-3 prose-li:my-1.5">
                {parse(project.description)}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-muted-foreground font-anton mb-3">My Role</p>
              <p className="text-lg">{project.role}</p>
            </motion.div>
          </div>
        </div>

        {project.images.length > 0 && (
          <motion.div
            className="relative flex flex-col gap-2 max-w-[800px] mx-auto"
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
      </motion.div>
    </section>
  );
};
