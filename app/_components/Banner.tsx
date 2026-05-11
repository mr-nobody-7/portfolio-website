"use client";
import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/lib/data";

const STATS = [
  {
    value: PERSONAL_INFO.stats.yearsOfExperience,
    label: "Years of Experience",
  },
  { value: PERSONAL_INFO.stats.completedProjects, label: "Completed Personal Projects" },
  { value: PERSONAL_INFO.stats.hoursWorked, label: "Hours Worked" },
];

export const Banner = () => {
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.15,
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: "easeOut" as const },
    },
  };

  const titleParts = PERSONAL_INFO.title.toUpperCase().split(" ");
  const primaryTitle = titleParts.slice(0, -1).join(" ") || titleParts[0];
  const secondaryTitle = titleParts.slice(-1).join(" ");

  return (
    <section className="relative overflow-hidden" id="banner">
      <motion.div
        className="container h-[100svh] min-h-[560px] max-md:pb-10 flex items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main content */}
        <div className="flex flex-col justify-center items-start max-w-140">
          <motion.h1
            className="text-5xl sm:text-[72px] font-anton leading-[0.95]"
            variants={itemVariants}
          >
            <span className="text-primary">{primaryTitle}</span>
            <br />
            <span className="ml-4">{secondaryTitle}</span>
          </motion.h1>

          <motion.p
            className="mt-6 text-base text-muted-foreground leading-relaxed max-w-110"
            variants={itemVariants}
          >
            Hi! I&apos;m {PERSONAL_INFO.name}. {PERSONAL_INFO.shortBio}
          </motion.p>

          {/* Stats — inline on mobile, absolutely positioned bottom-right on md+ */}
          <motion.div
            className="mt-8 flex gap-8 md:hidden"
            variants={itemVariants}
          >
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="text-primary text-3xl font-anton leading-none mb-1">
                  {stat.value}
                </p>
                <p className="text-muted-foreground text-xs leading-tight">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats — desktop: bottom-right corner */}
        <motion.div
          className="absolute bottom-[10%] right-[4%] hidden md:flex flex-col gap-8 text-right"
          variants={itemVariants}
        >
          {STATS.map((stat) => (
            <div key={stat.label}>
              <p className="text-primary text-4xl font-anton leading-none mb-1.5">
                {stat.value}
              </p>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
          variants={itemVariants}
          aria-hidden="true"
        >
          <span className="text-xs tracking-widest text-muted-foreground uppercase">
            Scroll
          </span>
          <motion.div
            className="w-px h-10 bg-muted-foreground/50"
            initial={{ scaleY: 0, originY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
