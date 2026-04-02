"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { SectionTitle } from "@/components/SectionTitle";
import { PROJECTS } from "@/lib/data";
import Link from "next/link";
import { useState } from "react";

export const ProjectList = () => {
  const [hoveredProjectSlug, setHoveredProjectSlug] = useState(
    PROJECTS[0]?.slug,
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
          <div className="border-y border-border/80">
            {PROJECTS.map((project, index) => (
              <motion.div key={project.slug} variants={itemVariants}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="group block border-b border-border/80 last:border-0 py-7"
                  onMouseEnter={() => setHoveredProjectSlug(project.slug)}
                >
                  <div className="flex justify-between items-start mb-4 gap-5">
                    <div>
                      <p className="text-muted-foreground/80 font-anton text-3xl">
                        .{String(index + 1).padStart(2, "0")}
                      </p>
                    </div>

                    <div className="flex-1">
                      <h3
                        className={`text-6xl md:text-7xl font-anton transition-colors ${
                          hoveredProjectSlug === project.slug
                            ? "text-primary"
                            : "text-foreground/25 group-hover:text-foreground/60"
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

                  <div className="flex gap-5 flex-wrap pl-16">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-xl text-muted-foreground"
                      >
                        {tech}
                      </span>
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
                <div className="relative w-full h-[420px] border border-border/60 bg-background-light/30">
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
