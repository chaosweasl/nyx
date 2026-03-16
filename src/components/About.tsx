import React from "react";
import { motion } from "framer-motion";
import { ABOUT_DATA } from "../data/content";

const CheckIcon = () => (
  <svg
    className="w-4 h-4 shrink-0 mt-0.5 text-secondary-sage"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="1" y="1" width="14" height="14" rx="2" strokeOpacity="0.4" />
    <path d="M4 8 L7 11 L12 5" />
  </svg>
);

const About: React.FC = () => {
  return (
    <section className="py-32 w-full max-w-4xl mx-auto px-6" id="about">
      {/* Section label + heading */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="block font-mono text-xs uppercase tracking-widest text-text-ink/40 mb-2">
          01 —— Who I Am
        </span>
        <h2 className="font-heading text-4xl text-text-ink">About.</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
        <motion.div
          className="col-span-1 md:col-span-3 space-y-6 pr-0 md:pr-12 relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Subtle quote mark decoration removed as requested */}
          {ABOUT_DATA.bio.map((paragraph, idx) => (
            <p
              key={idx}
              className="text-lg md:text-xl leading-relaxed text-text-ink/85 font-body"
            >
              {paragraph}
            </p>
          ))}
        </motion.div>

        <motion.div
          className="col-span-1 md:col-span-2 mt-8 md:mt-0 space-y-12 pl-0 md:pl-8 border-l-0 md:border-l-[1.5px] border-dashed border-text-ink/20 relative"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          {/* Quick stats callout */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "4+", label: "yrs building" },
              { value: "∞", label: "bugs squashed" },
              { value: "3", label: "languages spoken" },
              { value: "1", label: "Erasmus country" },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="border border-text-ink/10 rounded-sm p-3 bg-bg-cream/40 shadow-[2px_2px_0_rgba(0,0,0,0.05)] dark:shadow-[2px_2px_0_rgba(255,255,255,0.05)] group hover:border-accent-terracotta/30 transition-colors duration-300"
              >
                <div className="font-heading text-3xl text-accent-terracotta leading-none mb-1">
                  {value}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-text-ink/50">
                  {label}
                </div>
              </div>
            ))}
          </div>

          {/* Tech stack */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-text-ink/40 mb-4">
              Stack
            </p>
            <div className="flex flex-col gap-5">
              {ABOUT_DATA.techStack.map((group, groupIdx) => (
                <div key={groupIdx} className="flex flex-wrap gap-2.5">
                  {group.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-sm font-mono tracking-wide rounded-sm bg-bg-cream/50 border border-text-ink/20 text-text-ink/80 shadow-[2px_2px_0_rgba(0,0,0,0.05)] dark:shadow-[2px_2px_0_rgba(255,255,255,0.05)] hover:-translate-y-0.5 hover:shadow-[3px_3px_0_var(--color-accent-terracotta)] hover:border-accent-terracotta transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Fun facts */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-text-ink/40 mb-4">
              Misc
            </p>
            <ul className="space-y-3">
              {ABOUT_DATA.funFacts.map((fact, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-text-ink/70"
                >
                  <CheckIcon />
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
