"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <motion.div
        className="page-transition w-screen h-screen fixed top-0 left-0 bg-background-light z-100"
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <motion.div
          className="w-screen h-screen fixed top-0 left-0 bg-primary z-101"
          initial={{ y: "100%" }}
          animate={{ y: [0, "-100%"] }}
          transition={{ duration: 0.5, times: [0, 1] }}
        />
      </motion.div>

      {children}
    </div>
  );
}
