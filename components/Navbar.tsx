"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { SOCIAL_LINKS } from "@/lib/data";

const MENU_LINKS = [
  { name: "Home", url: "/" },
  { name: "About Me", url: "/#about-me" },
  { name: "Experience", url: "/#my-experience" },
  { name: "Projects", url: "/#selected-projects" },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="fixed top-5 right-5 md:right-10 z-50">
        <button
          className="w-12 h-12 flex flex-col justify-center items-center gap-1.5 bg-background-light rounded-md"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <motion.span
            className="w-6 h-0.5 bg-foreground"
            animate={{
              rotate: isMenuOpen ? 45 : 0,
              y: isMenuOpen ? 4 : 0,
            }}
          />
          <motion.span
            className="w-6 h-0.5 bg-foreground"
            animate={{
              opacity: isMenuOpen ? 0 : 1,
            }}
          />
          <motion.span
            className="w-6 h-0.5 bg-foreground"
            animate={{
              rotate: isMenuOpen ? -45 : 0,
              y: isMenuOpen ? -4 : 0,
            }}
          />
        </button>
      </div>

      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/70 transition-all duration-300",
          {
            "opacity-0 invisible pointer-events-none": !isMenuOpen,
          },
        )}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Menu */}
      <motion.div
        className="fixed top-0 right-0 h-screen w-[500px] max-w-[calc(100vw-3rem)] bg-background-light z-40 p-10 flex flex-col justify-center"
        initial={{ x: "100%" }}
        animate={{ x: isMenuOpen ? 0 : "100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <nav className="space-y-8">
          {MENU_LINKS.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, x: 50 }}
              animate={{
                opacity: isMenuOpen ? 1 : 0,
                x: isMenuOpen ? 0 : 50,
              }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={link.url}
                className="text-4xl font-anton hover:text-primary transition-colors block"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="mt-12 flex gap-4">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors capitalize"
            >
              {social.name}
            </a>
          ))}
        </div>
      </motion.div>
    </>
  );
};
