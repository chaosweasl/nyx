import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HERO_DATA } from "../data/content";

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
    }, 50); // Speed of typing

    return () => clearInterval(intervalId);
  }, [text]);

  return <span>{displayedText}</span>;
};

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_DATA.currently.length);
    }, 4000); // Give enough time for typing + reading
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-start py-20 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full"
      >
        <h1
          className="font-heading font-medium tracking-tight text-text-ink leading-none mb-6"
          style={{ fontSize: "clamp(3.5rem, 10vw, 8rem)" }}
        >
          {HERO_DATA.name}
        </h1>

        <hr className="w-full border-t border-text-ink/10 mb-8" />

        <div className="flex flex-col gap-1 mb-12">
          <p className="text-2xl md:text-3xl font-medium text-text-ink">
            {HERO_DATA.role}
          </p>
          <p className="text-lg md:text-xl text-text-ink/60 font-light">
            {HERO_DATA.context}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs uppercase tracking-widest font-mono text-text-ink/40">
            currently —
          </span>
          <span className="font-heading italic text-xl md:text-2xl text-accent-terracotta relative h-8 flex items-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="whitespace-nowrap absolute left-0"
              >
                <TypewriterText text={HERO_DATA.currently[currentIndex]} />
              </motion.span>
            </AnimatePresence>
          </span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-0 flex flex-col items-start text-text-ink/40"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
           <div className="w-[1px] h-12 bg-gradient-to-b from-text-ink/40 to-transparent"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
