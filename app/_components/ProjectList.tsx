"use client";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/SectionTitle";
import { PROJECTS } from "@/lib/data";
import Link from "next/link";

export const ProjectList = () => {
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
          className="grid gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {PROJECTS.map((project, index) => (
            <motion.div key={project.slug} variants={itemVariants}>
              <Link href={`/projects/${project.slug}`} className="group block">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                  </div>
                  <div className="flex-1 mx-8">
                    <h3 className="text-4xl md:text-6xl font-anton group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <div>
                    <p className="text-muted-foreground">{project.year}</p>
                  </div>
                </div>
                <div className="flex gap-3 flex-wrap">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="text-sm text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
