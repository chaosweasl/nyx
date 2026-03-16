import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HERO_DATA } from "../data/content";
import { ArrowDown } from "lucide-react";

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_DATA.currently.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-start pt-20 pb-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="font-heading text-6xl md:text-8xl font-medium tracking-tight mb-4 text-foreground">
          {HERO_DATA.name}
        </h1>
        <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl font-light">
          {HERO_DATA.role}
        </p>

        <div className="flex items-center gap-2 text-foreground/60 text-sm md:text-base font-mono">
          <span className="text-accent">currently:</span>
          <span className="relative inline-flex overflow-hidden h-6 items-center">
            {HERO_DATA.currently.map((item, index) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: currentIndex === index ? 1 : 0,
                  y: currentIndex === index ? 0 : -20,
                  position: currentIndex === index ? "relative" : "absolute",
                }}
                transition={{ duration: 0.4 }}
                className="whitespace-nowrap"
              >
                {item}
              </motion.span>
            ))}
          </span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/40"
      >
        <span className="text-xs uppercase tracking-widest font-mono">Scroll</span>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
