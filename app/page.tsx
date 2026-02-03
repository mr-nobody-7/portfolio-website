"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="container min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <h1 className="text-6xl font-anton">Hello, World!</h1>
        <p className="text-xl text-muted-foreground mt-4">
          This slides up AND fades in!
        </p>
      </motion.div>
    </div>
  );
}
