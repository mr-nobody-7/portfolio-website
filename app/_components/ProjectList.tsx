"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { SectionTitle } from "@/components/SectionTitle";
import { PROJECTS } from "@/lib/data";
import Link from "next/link";
import { useState } from "react";

export const ProjectList = () => {
  const [hoveredProjectSlug, setHoveredProjectSlug] = useState<string | null>(
    null,
  );

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
          <div
            className="border-y border-border/80"
            onMouseLeave={() => setHoveredProjectSlug(null)}
          >
            {PROJECTS.map((project, index) => (
              <motion.div key={project.slug} variants={itemVariants}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="group block border-b border-border/80 last:border-0 py-6 md:py-7 transition-opacity duration-300"
                  onMouseEnter={() => setHoveredProjectSlug(project.slug)}
                  onMouseLeave={() => setHoveredProjectSlug(null)}
                >
                  <div className="flex justify-between items-start mb-4 gap-5">
                    <div>
                      <p className="text-muted-foreground font-anton text-3xl">
                        _{String(index + 1).padStart(2, "0")}.
                      </p>
                    </div>

                    <div className="flex-1 pl-3 md:pl-6">
                      <h3
                        className={`text-5xl md:text-6xl font-anton transition-all duration-500 bg-gradient-to-r from-primary to-foreground from-[50%] to-[50%] bg-[length:200%] bg-right bg-clip-text text-transparent ${
                          hoveredProjectSlug === project.slug
                            ? "bg-left"
                            : ""
                        }`}
                      >
                        {project.title}
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
            ))}
          </div>

          <div className="hidden lg:block sticky top-28">
            {PROJECTS.map((project) => (
              <div
                key={project.slug}
                className={
                  hoveredProjectSlug === project.slug ? "block" : "hidden"
                }
              >
                <div className="relative w-full h-105 border border-border/60 bg-background-light/30">
                  <Image
                    src={project.thumbnail}
                    alt={`${project.title} preview`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
