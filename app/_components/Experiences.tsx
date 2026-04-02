"use client";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/SectionTitle";
import { MY_EXPERIENCE } from "@/lib/data";

export const Experiences = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-section" id="my-experience">
      <motion.div
        className="container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={containerVariants}
      >
        <SectionTitle title="My Experience" />

        <div className="grid gap-14">
          {MY_EXPERIENCE.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <p className="text-xl text-muted-foreground">{item.company}</p>
              <p className="text-5xl font-anton leading-none mt-3.5 mb-2.5">
                {item.title}
              </p>
              <p className="text-lg text-muted-foreground">{item.duration}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
