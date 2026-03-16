import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HERO_DATA } from "../data/content";
import Hero3D from "./Hero3D";

const TypewriterText = ({ text }: { text: string }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    setDisplayedText("");
    const intervalId = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;
      if (i === text.length) {
        clearInterval(intervalId);
      }
    }, 50);
    return () => clearInterval(intervalId);
  }, [text]);

  return (
    <span className="relative">
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-[0.4em] h-[1.1em] bg-accent-terracotta/70 align-text-bottom ml-1"
      />
    </span>
  );
};

/* Decorative SVG that replaces the broken 3-D canvas */
const HeroDecoration: React.FC = () => (
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none"
    viewBox="0 0 800 600"
    preserveAspectRatio="xMidYMid slice"
    aria-hidden="true"
  >
    {/* Faint ruled-notebook lines */}
    {Array.from({ length: 18 }).map((_, i) => (
      <line
        key={i}
        x1="0"
        y1={i * 36 + 20}
        x2="800"
        y2={i * 36 + 20}
        stroke="#1C1917"
        strokeOpacity="0.025"
        strokeWidth="1"
      />
    ))}
    {/* Left margin rule */}
    <line
      x1="90"
      y1="0"
      x2="90"
      y2="600"
      stroke="#C85F38"
      strokeOpacity="0.04"
      strokeWidth="1.5"
    />

    {/* Sketchy bracket pair — top-left */}
    <text
      x="120"
      y="110"
      fontFamily="JetBrains Mono, monospace"
      fontSize="96"
      fill="#1C1917"
      fillOpacity="0.03"
      letterSpacing="-4"
    >
      {"{}"}
    </text>
    {/* Trailing semicolon — bottom-right */}
    <text
      x="640"
      y="490"
      fontFamily="JetBrains Mono, monospace"
      fontSize="80"
      fill="#C85F38"
      fillOpacity="0.03"
    >
      {";"}
    </text>
    {/* Arrow doodle — mid right */}
    <path
      d="M 680 260 Q 700 280, 720 270"
      stroke="#8BAF7C"
      strokeOpacity="0.08"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
    />
    <path
      d="M 714 263 L 720 270 L 712 275"
      stroke="#8BAF7C"
      strokeOpacity="0.08"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Dot-grid cluster — bottom left */}
    {Array.from({ length: 4 }).map((_, row) =>
      Array.from({ length: 6 }).map((_, col) => (
        <circle
          key={`${row}-${col}`}
          cx={60 + col * 16}
          cy={430 + row * 16}
          r="1.5"
          fill="#1C1917"
          fillOpacity="0.04"
        />
      )),
    )}
  </svg>
);

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_DATA.currently.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center py-20 relative overflow-hidden">
      {/* SVG background decoration */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-100">
        <HeroDecoration />
      </div>

      {/* Floating annotation sticky-note */}
      <div className="absolute top-[18%] right-[6%] hidden md:block opacity-40 pointer-events-none rotate-[3deg] z-0">
        <div className="bg-amber/20 border border-amber/30 px-4 py-3 max-w-[160px] shadow-sm">
          <p className="font-mono text-[10px] text-text-ink/60 leading-relaxed">
            {`// let me =\n  "your next hire";`}
          </p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-16 relative z-10 pt-10"
      >
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1">
          <div className="relative inline-block mb-6">
            <h1
              className="font-heading font-bold tracking-tighter text-text-ink leading-[0.9] relative z-10"
              style={{ fontSize: "clamp(3.5rem, 8vw, 8rem)" }}
            >
              {HERO_DATA.name}
            </h1>
            {/* Hand-drawn underline accent */}
            <svg
              className="absolute -bottom-4 left-0 w-full h-4 text-accent-terracotta/30 pointer-events-none"
              viewBox="0 0 400 20"
              preserveAspectRatio="none"
            >
              <path
                d="M0 10 Q 100 20, 200 10 T 400 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="flex flex-col gap-4 mb-12 items-center lg:items-start mt-4">
            <p className="text-xl md:text-3xl font-medium text-text-ink/90">
              {HERO_DATA.role}
            </p>
            <p className="text-base md:text-xl text-text-ink/60 font-body max-w-xl text-center lg:text-left">
              {HERO_DATA.context}
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-3 bg-text-ink/5 border border-text-ink/10 rounded-full px-6 py-3 shadow-[inset_0_1px_3px_rgba(0,0,0,0.05)] dark:shadow-[inset_0_1px_3px_rgba(255,255,255,0.05)] w-fit">
            <span className="text-xs uppercase tracking-widest font-mono text-text-ink/50 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary-sage animate-pulse"></span>
              currently —
            </span>
            <div className="font-heading italic text-lg md:text-xl text-accent-terracotta relative h-8 flex items-center justify-center lg:justify-start min-w-[250px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="whitespace-nowrap absolute"
                >
                  <TypewriterText text={HERO_DATA.currently[currentIndex]} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Right side 3D element */}
        <div className="flex-1 w-full max-w-lg relative block mt-8 lg:mt-0 aspect-square md:aspect-[4/3] lg:aspect-auto">
          <Hero3D />
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-text-ink/40"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] mb-3">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="flex flex-col items-center"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-text-ink/40 via-text-ink/10 to-transparent"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
