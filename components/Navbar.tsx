"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { GENERAL_INFO, PERSONAL_INFO } from "@/lib/data";
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
      <div className="fixed top-6 right-6 md:top-8 md:right-10 z-50">
        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="w-12 h-12 flex flex-col justify-center items-center gap-1.5"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <motion.span
            className="w-7 h-0.5 bg-foreground"
            animate={{
              rotate: isMenuOpen ? 45 : 0,
              y: isMenuOpen ? 3 : 0,
            }}
          />
          <motion.span
            className="w-7 h-0.5 bg-foreground"
            animate={{
              rotate: isMenuOpen ? -45 : 0,
              y: isMenuOpen ? -3 : 0,
            }}
          />
        </button>
      </div>

      {/* Overlay */}
      <button
        type="button"
        aria-label="Close menu overlay"
        className={cn(
          "fixed inset-0 z-40 bg-black/75 transition-all duration-300",
          {
            "opacity-0 invisible pointer-events-none": !isMenuOpen,
          },
        )}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Menu */}
      <motion.div
        className="fixed top-0 right-0 h-screen w-[420px] max-w-[calc(100vw-1.5rem)] bg-[#3b3b3b] z-40 px-8 py-10 md:px-12 md:py-14 flex flex-col"
        initial={{ x: "100%" }}
        animate={{ x: isMenuOpen ? 0 : "100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="grid grid-cols-2 gap-8 mt-28">
          <div>
            <p className="text-xs tracking-[0.24em] text-foreground/60 mb-8">SOCIAL</p>
            <div className="space-y-4">
              {SOCIAL_LINKS.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-2xl text-foreground/90 hover:text-primary transition-colors capitalize"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{
                    opacity: isMenuOpen ? 1 : 0,
                    y: isMenuOpen ? 0 : 12,
                  }}
                  transition={{ delay: 0.08 * index }}
                >
                  {social.name}
                </motion.a>
              ))}

              {PERSONAL_INFO.oldPortfolio && (
                <motion.a
                  href={PERSONAL_INFO.oldPortfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-2xl text-foreground/90 hover:text-primary transition-colors"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{
                    opacity: isMenuOpen ? 1 : 0,
                    y: isMenuOpen ? 0 : 12,
                  }}
                  transition={{ delay: 0.32 }}
                >
                  Old Version
                </motion.a>
              )}
            </div>
          </div>

          <div>
            <p className="text-xs tracking-[0.24em] text-foreground/60 mb-8">MENU</p>
            <nav className="space-y-4">
              {MENU_LINKS.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{
                    opacity: isMenuOpen ? 1 : 0,
                    y: isMenuOpen ? 0 : 12,
                  }}
                  transition={{ delay: 0.08 * (index + 1) }}
                >
                  <Link
                    href={link.url}
                    className="inline-flex items-center gap-3 text-2xl text-foreground/90 hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span
                      className={cn("h-3 w-3 rounded-full", {
                        "bg-[#ffc400]": link.name === "Home",
                        "bg-[#3e89ff]": link.name === "About Me",
                        "bg-[#0abcbc]": link.name === "Experience",
                        "bg-[#6d61ff]": link.name === "Projects",
                      })}
                    />
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-auto">
          <p className="text-xs tracking-[0.24em] text-foreground/60 mb-5">GET IN TOUCH</p>
          <a
            href={`mailto:${GENERAL_INFO.email}`}
            className="text-2xl text-foreground/90 hover:text-primary transition-colors"
          >
            {GENERAL_INFO.email}
          </a>
        </div>
      </motion.div>
    </>
  );
};
