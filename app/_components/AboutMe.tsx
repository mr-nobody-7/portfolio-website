"use client";
import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/lib/data";

export const AboutMe = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="pb-section" id="about-me">
      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="text-4xl md:text-6xl font-thin mb-20"
          variants={itemVariants}
        >
          {PERSONAL_INFO.aboutMe.headline}
        </motion.h2>

        <motion.p
          className="pb-3 border-b text-muted-foreground"
          variants={itemVariants}
        >
          This is me.
        </motion.p>

        <div className="grid md:grid-cols-12 mt-9 gap-8">
          <div className="md:col-span-5">
            <motion.p className="text-5xl" variants={itemVariants}>
              {PERSONAL_INFO.aboutMe.greeting}
            </motion.p>
          </div>
          <div className="md:col-span-7">
            <div className="text-lg text-muted-foreground max-w-112.5">
              {PERSONAL_INFO.aboutMe.description.map((paragraph, index) => (
                <motion.p
                  key={paragraph}
                  className={index > 0 ? "mt-3" : ""}
                  variants={itemVariants}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
