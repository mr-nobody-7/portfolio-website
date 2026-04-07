"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionTitle } from "@/components/SectionTitle";
import { MY_EXPERIENCE } from "@/lib/data";

export const Experiences = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 60%", "end 20%"],
  });

  const sectionOpacity = useTransform(scrollYProgress, [0, 0.75, 1], [1, 1, 0]);
  const sectionY = useTransform(scrollYProgress, [0, 1], [0, -150]);

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
    <section className="py-section" id="my-experience" ref={sectionRef}>
      <motion.div
        className="container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        style={{ opacity: sectionOpacity, y: sectionY }}
      >
        <SectionTitle title="My Experience" />

        <div className="grid gap-14">
          {MY_EXPERIENCE.map((item) => (
            <motion.div
              key={`${item.company}-${item.title}`}
              variants={itemVariants}
            >
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
