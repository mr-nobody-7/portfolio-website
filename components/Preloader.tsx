"use client";
import { stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";

const PANELS = Array.from({ length: 10 }, (_, i) => i);
const NAME = "VIVEKANANDA".split("");

const Preloader = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const run = async () => {
      // 1. Slide letters up into view (staggered)
      await animate(
        ".preloader-letter",
        { y: 0 },
        {
          duration: 0.25,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: stagger(0.05),
        },
      );

      // 2. Simultaneously: slide panels away + fade letters
      animate(
        ".preloader-letter",
        { opacity: 0 },
        { duration: 0.3, delay: 0.6 },
      );
      await animate(
        ".preloader-panel",
        { y: "100%" },
        {
          duration: 0.5,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: stagger(0.08, { startDelay: 0.5 }),
        },
      );

      // 3. Fade out container
      await animate(scope.current, { opacity: 0 }, { duration: 0.3 });
    };

    run();
  }, [animate, scope]);

  return (
    <div
      ref={scope}
      className="fixed inset-0 z-[80] flex pointer-events-none bg-black"
    >
      {PANELS.map((i) => (
        <div key={i} className="preloader-panel h-full w-[10%] bg-black" />
      ))}

      <p className="flex text-[20vw] lg:text-[200px] font-anton text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-none overflow-hidden select-none">
        {NAME.map((letter, i) => (
          <span
            // biome-ignore lint/suspicious/noArrayIndexKey: static letter array
            key={i}
            className="preloader-letter inline-block"
            style={{ transform: "translateY(110%)" }}
          >
            {letter}
          </span>
        ))}
      </p>
    </div>
  );
};

export default Preloader;
