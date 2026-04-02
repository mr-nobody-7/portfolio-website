"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { SectionTitle } from "@/components/SectionTitle";
import { MY_STACK } from "@/lib/data";

export const Skills = () => {
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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-section" id="my-stack">
      <motion.div
        className="container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={containerVariants}
      >
        <SectionTitle title="My Stack" />

        <div className="space-y-20">
          {Object.entries(MY_STACK).map(([category, skills]) => (
            <div className="grid sm:grid-cols-12 gap-8" key={category}>
              <div className="sm:col-span-5">
                <motion.p
                  className="text-6xl md:text-7xl font-anton leading-none text-muted-foreground uppercase"
                  variants={itemVariants}
                >
                  {category}
                </motion.p>
              </div>

              <div className="sm:col-span-7 flex gap-x-10 gap-y-8 flex-wrap">
                {skills.map((skill) => (
                  <motion.div
                    className="flex gap-3.5 items-center leading-none"
                    key={skill.name}
                    variants={itemVariants}
                  >
                    <div className="w-10 h-10 relative flex items-center justify-center">
                      <Image
                        src={skill.icon}
                        alt={`${skill.name} logo`}
                        width={34}
                        height={34}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-3xl text-foreground/95">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
