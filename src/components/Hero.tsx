import React, { useState, useEffect, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Canvas } from '@react-three/fiber';
import { HERO_DATA } from "../data/content";
import SketchbookModel from "./SketchbookModel";

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
      {/* Background terminal/sketchbook elements */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <Suspense fallback={null}>
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <ambientLight intensity={1} />
            <SketchbookModel />
          </Canvas>
        </Suspense>
      </div>

      <div className="absolute top-10 left-10 font-mono text-[10rem] text-text-ink/[0.03] select-none pointer-events-none rotate-[-10deg]">
        {'{}'}
      </div>
      <div className="absolute bottom-20 right-10 font-mono text-[8rem] text-accent-terracotta/[0.02] select-none pointer-events-none rotate-[15deg]">
        ;
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-4xl mx-auto flex flex-col items-center text-center relative z-10"
      >
        <div className="relative inline-block mb-6">
          <h1
            className="font-heading font-bold tracking-tighter text-text-ink leading-[0.9] relative z-10"
            style={{ fontSize: "clamp(4rem, 12vw, 10rem)" }}
          >
            {HERO_DATA.name}
          </h1>
          {/* Subtle hand-drawn underline accent */}
          <svg className="absolute -bottom-4 left-0 w-full h-4 text-accent-terracotta/30 pointer-events-none" viewBox="0 0 400 20" preserveAspectRatio="none">
            <path d="M0 10 Q 100 20, 200 10 T 400 10" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </div>

        <div className="flex flex-col gap-2 mb-12 items-center mt-8">
          <p className="text-xl md:text-3xl font-medium text-text-ink/90">
            {HERO_DATA.role}
          </p>
          <p className="text-base md:text-xl text-text-ink/60 font-body max-w-2xl text-center">
            {HERO_DATA.context}
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-3 bg-text-ink/5 border border-text-ink/10 rounded-full px-6 py-3 shadow-[inset_0_1px_3px_rgba(0,0,0,0.05)]">
          <span className="text-xs uppercase tracking-widest font-mono text-text-ink/50 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-secondary-sage animate-pulse"></span>
            currently —
          </span>
          <div className="font-heading italic text-lg md:text-xl text-accent-terracotta relative h-8 flex items-center justify-center min-w-[250px]">
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
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-text-ink/40"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] mb-4 rotate-90 translate-y-4">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="flex flex-col items-center"
        >
           <div className="w-[1px] h-16 bg-gradient-to-b from-text-ink/30 via-text-ink/10 to-transparent"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
