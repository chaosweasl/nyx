import React from "react";
import { motion } from "framer-motion";
import { ABOUT_DATA } from "../data/content";

const About: React.FC = () => {
  return (
    <section className="py-32 w-full max-w-4xl mx-auto px-6" id="about">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
        <motion.div
          className="col-span-1 md:col-span-3 space-y-6 pr-0 md:pr-12 relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Subtle quote mark decoration */}
          <span className="absolute -top-12 -left-8 font-heading text-8xl text-text-ink/5 pointer-events-none select-none">
            "
          </span>
          {ABOUT_DATA.bio.map((paragraph, idx) => (
            <p
              key={idx}
              className="text-lg md:text-xl leading-relaxed text-text-ink/85 font-body first-letter:float-left first-letter:text-5xl md:first-letter:text-6xl first-letter:font-heading first-letter:pr-3 first-letter:text-accent-terracotta first-letter:leading-[0.8]"
            >
              {paragraph}
            </p>
          ))}
        </motion.div>

        <motion.div
          className="col-span-1 md:col-span-2 mt-8 md:mt-24 space-y-16 pl-0 md:pl-8 border-l-0 md:border-l-[1.5px] border-dashed border-text-ink/10 relative"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          {/* Subtle hand-drawn arrow pointing to stack */}
          <svg className="hidden md:block absolute -top-16 left-8 w-12 h-12 text-accent-terracotta/40 pointer-events-none -rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>

          <div>
            <div className="flex flex-col gap-6">
              {ABOUT_DATA.techStack.map((group, groupIdx) => (
                <div key={groupIdx} className="flex flex-wrap gap-2.5">
                  {group.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-sm font-mono tracking-wide rounded-sm bg-white/50 border border-text-ink/20 text-text-ink/80 shadow-[2px_2px_0_rgba(28,25,23,0.05)] hover:-translate-y-0.5 hover:shadow-[3px_3px_0_rgba(200,95,56,0.15)] hover:border-accent-terracotta transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div>
            <ul className="space-y-3">
              {ABOUT_DATA.funFacts.map((fact, idx) => (
                <li key={idx} className="flex items-start text-text-ink/70">
                  <span className="text-accent-terracotta mr-3 font-mono">
                    —
                  </span>
                  <span className="text-sm font-body">{fact}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
