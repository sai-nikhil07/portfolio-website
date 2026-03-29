"use client";

import { useScroll, motion, useTransform } from "framer-motion";

export default function Overlay() {
  const { scrollYProgress } = useScroll();

  // Mapping hero fade out: Fades out quickly after ~3 mouse scrolls (approx 10-15% of the way down)
  const yHero = useTransform(scrollYProgress, [0, 1], ["0vh", "-100vh"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.05, 0.12, 1], [1, 1, 0, 0]);
  const displayHero = useTransform(scrollYProgress, pos => pos > 0.15 ? "none" : "flex");

  // Logo appears only after Hero text reaches 0 opacity
  const opacityLogo = useTransform(scrollYProgress, [0, 0.12, 0.18], [0, 0, 1]);

  // Phase 2: Welcome and About Me
  const opacityContent = useTransform(scrollYProgress, [0.18, 0.28, 0.85, 0.95], [0, 1, 1, 0]);
  const yContent = useTransform(scrollYProgress, [0.18, 0.28], ["4vh", "0vh"]);
  const displayContent = useTransform(scrollYProgress, pos => (pos > 0.15 && pos < 0.98) ? "flex" : "none");

  return (
    <div className="absolute top-0 left-0 w-full h-[400vh] pointer-events-none z-10">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden">
        
        {/* Branding Static Logo */}
        <motion.div 
          style={{ opacity: opacityLogo }}
          className="absolute top-8 left-8 md:top-10 md:left-12 z-[100] mix-blend-difference pointer-events-auto"
        >
          <span className="text-base md:text-lg font-outfit font-medium text-white tracking-[0.3em] uppercase">
            Naikini Sai Nikhil
          </span>
        </motion.div>

        {/* Phase 1: Hero Text */}
        <motion.div 
          className="absolute inset-0 flex flex-col items-start justify-center pl-[5vw] md:pl-[12vw] mix-blend-difference z-20"
          style={{ y: yHero, opacity: opacityHero, display: displayHero }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl leading-none font-bold tracking-tighter text-white font-gendy mb-3">
            Hello, I’m Nikhil.
          </h1>
          <p className="text-white/80 font-inter text-xs tracking-[0.3em] uppercase font-medium ml-1">
            Data Analyst & Developer
          </p>
        </motion.div>

        {/* Phase 2: Welcome + About (Stacked on Left) */}
        <motion.div 
          className="absolute inset-0 flex flex-col items-start justify-center pl-[5vw] md:pl-[12vw] mix-blend-difference z-20 gap-8"
          style={{ opacity: opacityContent, y: yContent, display: displayContent }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white font-gendy leading-tight text-left max-w-2xl">
            Welcome to my <br className="hidden md:block" /> portfolio.
          </h2>
          
          <p className="text-white/80 font-inter text-sm md:text-base leading-relaxed tracking-wide text-left max-w-[280px] md:max-w-md block">
            I craft data-driven insights and interactive digital experiences, fusing analytical rigor with brutalist aesthetics to build the extraordinary.
          </p>
        </motion.div>

      </div>
    </div>
  );
}
