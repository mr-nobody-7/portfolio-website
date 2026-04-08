"use client";
import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/lib/data";

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
      transition: { duration: 0.5 },
    },
  };

  const titleParts = PERSONAL_INFO.title.toUpperCase().split(" ");
  const primaryTitle = titleParts.slice(0, -1).join(" ") || titleParts[0];
  const secondaryTitle = titleParts.slice(-1).join(" ");

  return (
    <section className="relative overflow-hidden" id="banner">
      <motion.div
        className="container h-[100svh] min-h-[530px] max-md:pb-10 flex justify-between items-center max-md:flex-col"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-md:grow max-md:flex flex-col justify-center items-start max-w-[520px]">
          <motion.h1
            className="text-5xl sm:text-[72px] font-anton leading-[0.95]"
            variants={itemVariants}
          >
            <span className="text-primary">{primaryTitle}</span>
            <br />
            <span className="ml-4">{secondaryTitle}</span>
          </motion.h1>

          <motion.p
            className="mt-6 text-base text-muted-foreground leading-relaxed"
            variants={itemVariants}
          >
            Hi! I&apos;m {PERSONAL_INFO.name}. {PERSONAL_INFO.shortBio}
          </motion.p>

          <motion.div
            className="md:absolute bottom-[10%] right-[4%] flex md:flex-col gap-4 md:gap-8 text-center md:text-right"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <p className="text-primary text-3xl sm:text-4xl font-anton leading-none mb-1.5">
                {PERSONAL_INFO.stats.yearsOfExperience}
              </p>
              <p className="text-muted-foreground">Years of Experience</p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-primary text-3xl sm:text-4xl font-anton leading-none mb-1.5">
                {PERSONAL_INFO.stats.completedProjects}
              </p>
              <p className="text-muted-foreground">Completed Projects</p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-primary text-3xl sm:text-4xl font-anton leading-none mb-1.5">
                {PERSONAL_INFO.stats.hoursWorked}
              </p>
              <p className="text-muted-foreground">Hours Worked</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
