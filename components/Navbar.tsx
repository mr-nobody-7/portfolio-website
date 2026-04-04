"use client";
import Link from "next/link";
import { useState } from "react";
import { GENERAL_INFO, PERSONAL_INFO, SOCIAL_LINKS } from "@/lib/data";
import { cn } from "@/lib/utils";

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
      <div className="sticky top-0 z-[4]">
        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="group size-12 absolute top-5 right-5 md:right-10 z-[4]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span
            className={cn(
              "inline-block w-3/5 h-0.5 bg-foreground rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 duration-300 -translate-y-[5px]",
              {
                "rotate-45 -translate-y-1/2": isMenuOpen,
                "md:group-hover:rotate-12": !isMenuOpen,
              },
            )}
          ></span>
          <span
            className={cn(
              "inline-block w-3/5 h-0.5 bg-foreground rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 duration-300 translate-y-[5px]",
              {
                "-rotate-45 -translate-y-1/2": isMenuOpen,
                "md:group-hover:-rotate-12": !isMenuOpen,
              },
            )}
          ></span>
        </button>
      </div>

      <button
        type="button"
        aria-label="Close menu overlay"
        className={cn(
          "fixed inset-0 z-[2] bg-black/70 transition-all duration-150",
          {
            "opacity-0 invisible pointer-events-none": !isMenuOpen,
          },
        )}
        onClick={() => setIsMenuOpen(false)}
      />

      <div
        className={cn(
          "fixed top-0 right-0 h-[100dvh] w-[500px] max-w-[calc(100vw-3rem)] transform translate-x-full transition-transform duration-700 z-[3] overflow-hidden gap-y-14",
          "flex flex-col lg:justify-center py-10",
          { "translate-x-0": isMenuOpen },
        )}
      >
        <div
          className={cn(
            "fixed inset-0 scale-150 translate-x-1/2 rounded-[50%] bg-background-light duration-700 delay-150 z-[-1]",
            {
              "translate-x-0": isMenuOpen,
            },
          )}
        ></div>

        <div className="grow flex md:items-center w-full max-w-[300px] mx-8 sm:mx-auto">
          <div className="flex gap-10 lg:justify-between max-lg:flex-col w-full">
            <div className="max-lg:order-2">
              <p className="text-[11px] tracking-[0.24em] text-foreground/60 mb-6 md:mb-8">
                SOCIAL
              </p>
              <div className="space-y-3 md:space-y-4">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-xl md:text-2xl text-foreground/90 hover:text-primary transition-colors capitalize"
                  >
                    {social.name}
                  </a>
                ))}

                {PERSONAL_INFO.oldPortfolio && (
                  <a
                    href={PERSONAL_INFO.oldPortfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-xl md:text-2xl text-foreground/90 hover:text-primary transition-colors"
                  >
                    Old Version
                  </a>
                )}
              </div>
            </div>

            <div>
              <p className="text-[11px] tracking-[0.24em] text-foreground/60 mb-6 md:mb-8">
                MENU
              </p>
              <nav className="space-y-3 md:space-y-4">
                {MENU_LINKS.map((link) => (
                  <div key={link.name}>
                    <Link
                      href={link.url}
                      className="group inline-flex items-center gap-3 text-xl md:text-2xl text-foreground/90 hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span
                        className={cn(
                          "h-3.5 w-3.5 rounded-full flex items-center justify-center group-hover:scale-[200%] transition-all",
                          {
                            "bg-[#ffc400]": link.name === "Home",
                            "bg-[#3e89ff]": link.name === "About Me",
                            "bg-[#0abcbc]": link.name === "Experience",
                            "bg-[#6d61ff]": link.name === "Projects",
                          },
                        )}
                      ></span>
                      {link.name}
                    </Link>
                  </div>
                ))}
              </nav>
            </div>
          </div>
        </div>

        <div className="w-full max-w-[300px] mx-8 sm:mx-auto">
          <p className="text-[11px] tracking-[0.24em] text-foreground/60 mb-4 md:mb-5">
            GET IN TOUCH
          </p>
          <a
            href={`mailto:${GENERAL_INFO.email}`}
            className="text-lg sm:text-xl md:text-2xl text-foreground/90 hover:text-primary transition-colors break-all"
          >
            {GENERAL_INFO.email}
          </a>
        </div>
      </div>
    </>
  );
};
