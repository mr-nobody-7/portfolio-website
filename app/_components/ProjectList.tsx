"use client";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { SectionTitle } from "@/components/SectionTitle";
import { PROJECTS } from "@/lib/data";
import type { IProject } from "@/types";

function ProjectPreviewLinks({
  projects,
  activeSlug,
}: {
  projects: IProject[];
  activeSlug: string | null | undefined;
}) {
  const active = projects.find((p) => p.slug === activeSlug);
  if (!active?.liveUrl && !active?.sourceCode) return null;
  return (
    <div className="mt-3 flex gap-2">
      {active.liveUrl && (
        <a
          href={active.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center py-2 text-xs border border-border/60 bg-background-light/40 text-muted-foreground hover:border-primary hover:text-primary transition-colors"
        >
          Live Demo ↗
        </a>
      )}
      {active.sourceCode && (
        <a
          href={active.sourceCode}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center py-2 text-xs border border-border/60 bg-background-light/40 text-muted-foreground hover:border-primary hover:text-primary transition-colors"
        >
          GitHub ↗
        </a>
      )}
    </div>
  );
}

export const ProjectList = () => {
  const [hoveredProjectSlug, setHoveredProjectSlug] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 180, damping: 22 });
  const springY = useSpring(mouseY, { stiffness: 180, damping: 22 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left + 24);
    mouseY.set(e.clientY - rect.top - 90);
  };

  const activeProject = PROJECTS.find((p) => p.slug === hoveredProjectSlug);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="pb-section" id="selected-projects">
      {/* biome-ignore lint/a11y/noStaticElementInteractions: mouse tracking for floating preview */}
      <div
        ref={containerRef}
        className="container relative"
        onMouseMove={handleMouseMove}
      >
        <SectionTitle title="SELECTED PROJECTS" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          onMouseLeave={() => setHoveredProjectSlug(null)}
        >
          {PROJECTS.map((project, index) => {
            const isHovered = hoveredProjectSlug === project.slug;

            return (
              <motion.div key={project.slug} variants={itemVariants}>
                <Link
                  href={`/projects/${project.slug}`}
                  className={`group block border-b border-border/60 py-6 md:py-8 transition-opacity duration-300 ${
                    hoveredProjectSlug && !isHovered
                      ? "opacity-30"
                      : "opacity-100"
                  }`}
                  onMouseEnter={() => setHoveredProjectSlug(project.slug)}
                >
                  <div className="flex justify-between items-center gap-5">
                    <p className="text-muted-foreground font-anton text-2xl md:text-3xl shrink-0">
                      _{String(index + 1).padStart(2, "0")}.
                    </p>

                    <div className="flex-1 pl-3 md:pl-6">
                      <h3 className="text-4xl sm:text-6xl font-anton transition-all duration-700 bg-linear-to-r from-primary to-foreground from-50% to-50% bg-size-[200%] bg-right bg-clip-text text-transparent group-hover:bg-left">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-muted-foreground text-xl md:text-2xl shrink-0">
                      {project.year}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3 text-muted-foreground text-xs md:text-sm mt-3 pl-0 md:pl-14">
                    {project.techStack.slice(0, 3).map((tech, idx, arr) => (
                      <div className="gap-3 flex items-center" key={tech}>
                        <span>{tech}</span>
                        {idx !== arr.length - 1 && (
                          <span className="inline-block size-2 rounded-full bg-background-light" />
                        )}
                      </div>
                    ))}
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Floating cursor-following preview */}
        <AnimatePresence>
          {hoveredProjectSlug && activeProject && (
            <motion.div
              className="absolute top-0 left-0 pointer-events-none z-50 w-[320px] overflow-hidden border border-border/60 shadow-2xl"
              style={{ x: springX, y: springY }}
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.88 }}
              transition={{ duration: 0.18 }}
            >
              <Image
                src={activeProject.thumbnail}
                alt={`${activeProject.title} preview`}
                width={320}
                height={200}
                className="object-cover w-full"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
