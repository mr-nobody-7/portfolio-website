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
      delayChildren: 0.35,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

export const ProjectDetailsClient = ({ project }: Props) => {
  return (
    <section className="py-16 md:py-20 lg:py-24">
      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <Link
            href="/"
            className="inline-flex items-center gap-2 mb-10 md:mb-12 text-lg md:text-2xl text-muted-foreground hover:text-primary transition-colors"
          >
            &larr; Back
          </Link>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-anton mb-8 md:mb-10 leading-[0.95] max-w-[900px]"
          variants={itemVariants}
        >
          {project.title}
        </motion.h1>

        <div className="max-w-[860px] space-y-8 md:space-y-10 text-xl md:text-[30px] leading-snug">
          <motion.div variants={itemVariants}>
            <p className="text-muted-foreground text-base md:text-xl mb-2 font-semibold uppercase tracking-wide">
              Year
            </p>
            <p>{project.year}</p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="text-muted-foreground text-base md:text-xl mb-2 font-semibold uppercase tracking-wide">
              Tech & Technique
            </p>
            <p className="leading-relaxed">{project.techStack.join(", ")}</p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="text-muted-foreground text-base md:text-xl mb-4 font-semibold uppercase tracking-wide">
              Description
            </p>
            <div className="prose prose-invert max-w-[820px] text-muted-foreground text-lg md:text-2xl leading-relaxed prose-p:my-4 prose-li:my-1.5">
              {parse(project.description)}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="text-muted-foreground text-base md:text-xl mb-2 font-semibold uppercase tracking-wide">
              My Role
            </p>
            <p>{project.role}</p>
          </motion.div>
        </div>

        <motion.div
          className="flex gap-4 mt-10 md:mt-12 flex-wrap"
          variants={itemVariants}
        >
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
        </motion.div>

        {project.images.length > 0 && (
          <motion.div
            className="mt-14 md:mt-20 flex flex-col gap-2 max-w-[800px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: { opacity: 1 },
              visible: {
                opacity: 1,
                transition: { delayChildren: 0.15, staggerChildren: 0.08 },
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
                    transition: { duration: 0.5, ease: "easeOut" as const },
                  },
                }}
                className="relative w-full aspect-[750/400] bg-background-light"
              >
                <Image
                  src={image}
                  alt={`${project.title} screenshot`}
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};
