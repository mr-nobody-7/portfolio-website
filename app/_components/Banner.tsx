"use client";
import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/lib/data";
import Link from "next/link";

export const Banner = () => {
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative overflow-hidden" id="banner">
      <motion.div
        className="container h-screen min-h-132.5 flex flex-col justify-center items-start"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-6xl sm:text-8xl font-anton leading-tight"
          variants={itemVariants}
        >
          {PERSONAL_INFO.name}
          <br />
          <span className="text-primary">{PERSONAL_INFO.title}</span>
        </motion.h1>

        <motion.p
          className="mt-6 text-xl text-muted-foreground max-w-136"
          variants={itemVariants}
        >
          {PERSONAL_INFO.shortBio}
        </motion.p>

        <motion.div variants={itemVariants} className="mt-8">
          <Link
            href="#contact"
            className="inline-block bg-primary text-primary-foreground px-8 py-4 text-lg font-anton tracking-wider hover:bg-primary/90 transition-colors"
          >
            GET IN TOUCH
          </Link>
        </motion.div>

        <motion.div className="mt-12 flex gap-8" variants={containerVariants}>
          <motion.div variants={itemVariants}>
            <p className="text-4xl font-anton">
              {PERSONAL_INFO.stats.yearsOfExperience}
            </p>
            <p className="text-muted-foreground">Years Experience</p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <p className="text-4xl font-anton">
              {PERSONAL_INFO.stats.completedProjects}
            </p>
            <p className="text-muted-foreground">Projects Completed</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
