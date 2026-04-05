"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SectionTitle } from "@/components/SectionTitle";
import { PROJECTS } from "@/lib/data";

export const ProjectList = () => {
  const [hoveredProjectSlug, setHoveredProjectSlug] = useState<string | null>(
    null,
  );
  const activeProjectSlug = hoveredProjectSlug ?? PROJECTS[0]?.slug;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="pb-section" id="selected-projects">
      <div className="container">
        <SectionTitle title="SELECTED PROJECTS" />

        <motion.div
          className="grid lg:grid-cols-[minmax(0,1fr)_320px] gap-14 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="group/projects border-y border-border/80">
            {PROJECTS.map((project, index) => {
              const isHovered = hoveredProjectSlug === project.slug;

              return (
                <motion.div key={project.slug} variants={itemVariants}>
                  <Link
                    href={`/projects/${project.slug}`}
                    className={`group block border-b border-border/80 last:border-0 py-6 md:py-7 transition-all duration-300 md:group-hover/projects:opacity-30 md:hover:!opacity-100 ${
                      hoveredProjectSlug && hoveredProjectSlug !== project.slug
                        ? "md:opacity-30"
                        : "md:opacity-100"
                    }`}
                    onMouseEnter={() => setHoveredProjectSlug(project.slug)}
                  >
                    <div className="flex justify-between items-start mb-4 gap-5">
                      <div>
                        <p className="text-muted-foreground font-anton text-3xl">
                          _{String(index + 1).padStart(2, "0")}.
                        </p>
                      </div>

                      <div className="flex-1 pl-3 md:pl-6">
                        <h3
                          className={`text-5xl md:text-6xl font-anton transition-all duration-700 ease-out bg-gradient-to-r from-primary to-foreground from-[50%] to-[50%] bg-[length:200%] bg-right bg-clip-text text-transparent ${isHovered ? "bg-left" : ""}`}
                        >
                          <span>{project.title}</span>
                          <motion.span
                            className="ml-3 hidden md:inline-flex text-foreground"
                            initial={false}
                            animate={
                              isHovered
                                ? {
                                    opacity: [0, 1, 1, 0],
                                    scale: [0.9, 1, 1, 0.95],
                                  }
                                : { opacity: 0, scale: 0.9 }
                            }
                            transition={
                              isHovered
                                ? {
                                    duration: 1.15,
                                    times: [0, 0.2, 0.8, 1],
                                    repeat: Number.POSITIVE_INFINITY,
                                    repeatDelay: 0.75,
                                  }
                                : { duration: 0.2 }
                            }
                            aria-hidden="true"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="36"
                              height="36"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <title>Project link indicator</title>
                              <motion.path
                                d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                                initial={{ pathLength: 0 }}
                                animate={{
                                  pathLength: isHovered ? [0, 1, 1, 0] : 0,
                                }}
                                transition={{
                                  duration: 1.15,
                                  times: [0, 0.35, 0.8, 1],
                                  repeat: isHovered
                                    ? Number.POSITIVE_INFINITY
                                    : 0,
                                  repeatDelay: 0.75,
                                }}
                              />
                              <motion.path
                                d="M10 14 21 3"
                                initial={{ pathLength: 0 }}
                                animate={{
                                  pathLength: isHovered ? [0, 1, 1, 0] : 0,
                                }}
                                transition={{
                                  duration: 1.15,
                                  delay: 0.08,
                                  times: [0, 0.35, 0.8, 1],
                                  repeat: isHovered
                                    ? Number.POSITIVE_INFINITY
                                    : 0,
                                  repeatDelay: 0.75,
                                }}
                              />
                              <motion.path
                                d="M15 3h6v6"
                                initial={{ pathLength: 0 }}
                                animate={{
                                  pathLength: isHovered ? [0, 1, 1, 0] : 0,
                                }}
                                transition={{
                                  duration: 1.15,
                                  delay: 0.12,
                                  times: [0, 0.35, 0.8, 1],
                                  repeat: isHovered
                                    ? Number.POSITIVE_INFINITY
                                    : 0,
                                  repeatDelay: 0.75,
                                }}
                              />
                            </svg>
                          </motion.span>
                        </h3>
                      </div>

                      <div>
                        <p className="text-muted-foreground text-2xl">
                          {project.year}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 text-muted-foreground text-xs md:text-sm pl-0 md:pl-14">
                      {project.techStack.slice(0, 3).map((tech, idx, arr) => (
                        <div className="gap-3 flex items-center" key={tech}>
                          <span>{tech}</span>
                          {idx !== arr.length - 1 && (
                            <span className="inline-block size-2 rounded-full bg-background-light"></span>
                          )}
                        </div>
                      ))}
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <div className="hidden lg:block sticky top-28">
            <div className="relative w-full h-105 border border-border/60 bg-background-light/30 overflow-hidden">
              {PROJECTS.map((project) => (
                <div
                  key={project.slug}
                  className={`absolute inset-0 transition-all duration-500 ease-out ${
                    activeProjectSlug === project.slug
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-2"
                  }`}
                >
                  <Image
                    src={project.thumbnail}
                    alt={`${project.title} preview`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
