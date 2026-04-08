"use client";
import { motion, type Variants } from "framer-motion";

const Preloader = () => {
  const preloaderItems = Array.from({ length: 10 }, (_, i) => i);
  const name = "VIVEKANANDA".split("");
  const letters = name.reduce<{ id: string; value: string }[]>(
    (acc, letter) => {
      const occurrence = acc.filter((item) => item.value === letter).length + 1;
      acc.push({ id: `${letter}-${occurrence}`, value: letter });
      return acc;
    },
    [],
  );

  const containerVariants: Variants = {
    hidden: { opacity: 1 },
    exit: {
      opacity: 0,
      transition: {
        delay: 2.5,
        duration: 0.5,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: "0%" },
    exit: {
      y: "100%",
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const letterVariants: Variants = {
    hidden: { y: "100%" },
    visible: {
      y: 0,
      transition: {
        duration: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        delay: 1.5,
        duration: 0.3,
      },
    },
  };

  return (
    <motion.div
      className="fixed inset-0 z-[80] flex pointer-events-none"
      variants={containerVariants}
      initial="hidden"
      animate="exit"
    >
      {preloaderItems.map((i) => (
        <motion.div
          key={i}
          className="h-full w-[10%] bg-black"
          variants={itemVariants}
          initial="hidden"
          animate="exit"
          transition={{
            delay: 1 + i * 0.1,
          }}
        />
      ))}

      <p className="name-text flex text-[20vw] lg:text-[200px] font-anton text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-none overflow-hidden">
        {letters.map((letter, i) => (
          <motion.span
            key={letter.id}
            className="inline-block"
            variants={letterVariants}
            initial="hidden"
            animate={["visible", "exit"]}
            transition={{
              delay: i * 0.05,
            }}
          >
            {letter.value}
          </motion.span>
        ))}
      </p>
    </motion.div>
  );
};

export default Preloader;
