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

  const titleParts = PERSONAL_INFO.title.toUpperCase().split(" ");
  const primaryTitle = titleParts.slice(0, -1).join(" ") || titleParts[0];
  const secondaryTitle = titleParts.slice(-1).join(" ");

  return (
    <section className="relative overflow-hidden" id="banner">
      <motion.div
        className="container h-screen min-h-132.5 flex items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="w-full grid lg:grid-cols-[minmax(0,1fr)_220px] items-center gap-12">
          <div className="max-w-[650px]">
            <motion.h1
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-anton leading-[0.95]"
              variants={itemVariants}
            >
              <span className="text-primary block">{primaryTitle}</span>
              <span className="block">{secondaryTitle}</span>
            </motion.h1>

            <motion.p
              className="mt-8 text-lg md:text-[32px] text-muted-foreground max-w-[620px] leading-relaxed"
              variants={itemVariants}
            >
              Hi! I&apos;m {PERSONAL_INFO.name}. {PERSONAL_INFO.shortBio}
            </motion.p>

            <motion.div variants={itemVariants} className="mt-10">
              <Link
                href="#contact"
                className="inline-block bg-primary text-primary-foreground px-8 py-4 text-2xl font-anton tracking-wide hover:bg-primary/90 transition-colors"
              >
                HIRE ME
              </Link>
            </motion.div>
          </div>

          <motion.div
            className="hidden lg:flex flex-col justify-center gap-10 text-right"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <p className="text-primary text-6xl font-anton leading-none">
                {PERSONAL_INFO.stats.yearsOfExperience}
              </p>
              <p className="text-muted-foreground mt-2">Years of Experience</p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-primary text-6xl font-anton leading-none">
                {PERSONAL_INFO.stats.completedProjects}
              </p>
              <p className="text-muted-foreground mt-2">Completed Projects</p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-primary text-6xl font-anton leading-none">
                {PERSONAL_INFO.stats.hoursWorked}
              </p>
              <p className="text-muted-foreground mt-2">Hours Worked</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
