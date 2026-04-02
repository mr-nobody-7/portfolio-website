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
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.h2
          className="text-5xl md:text-7xl lg:text-8xl font-light leading-[1.02] tracking-tight max-w-[1000px] mb-20"
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

        <div className="grid md:grid-cols-12 mt-9 gap-10">
          <div className="md:col-span-5">
            <motion.p className="text-5xl md:text-7xl font-medium" variants={itemVariants}>
              {PERSONAL_INFO.aboutMe.greeting}
            </motion.p>
          </div>
          <div className="md:col-span-7">
            <div className="text-3xl md:text-[38px] text-muted-foreground max-w-112.5 leading-relaxed">
              {PERSONAL_INFO.aboutMe.description.map((paragraph, index) => (
                <motion.p
                  key={paragraph}
                  className={index > 0 ? "mt-5" : ""}
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
