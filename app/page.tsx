"use client";
import { motion } from "framer-motion";

export default function Home() {
  const items = ["Section 1", "Section 2", "Section 3", "Section 4"];

  return (
    <div className="container py-20">
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="min-h-screen flex items-center justify-center"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-6xl font-anton">{item}</h2>
        </motion.div>
      ))}
    </div>
  );
}
