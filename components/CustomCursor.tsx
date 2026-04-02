"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const CustomCursor = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const mouseX = useMotionValue(
    typeof window !== "undefined" ? window.innerWidth / 2 : 0,
  );
  const mouseY = useMotionValue(
    typeof window !== "undefined" ? window.innerHeight / 2 : 0,
  );

  const springConfig = { damping: 25, stiffness: 150 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setIsMounted(true);
    if (window.innerWidth < 768) return; // Disable on mobile

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 13.5);
      mouseY.set(e.clientY - 5);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!isMounted || typeof window === "undefined" || window.innerWidth < 768)
    return null;

  return (
    <motion.svg
      width="27"
      height="30"
      viewBox="0 0 27 30"
      className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      style={{
        translateX: cursorX,
        translateY: cursorY,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
    >
      <path
        d="M20.0995 11.0797L3.72518 1.13204C2.28687 0.258253 0.478228 1.44326 0.704999 3.11083L3.28667 22.0953C3.58333 24.2768 7.33319 24.6415 8.3792 22.7043C9.5038 20.6215 10.8639 18.7382 12.43 17.7122C13.996 16.6861 16.2658 16.1911 18.6244 15.9918C20.8181 15.8063 21.9811 12.2227 20.0995 11.0797Z"
        fill="white"
        stroke="black"
        strokeWidth="1"
      />
    </motion.svg>
  );
};
