import React from "react";
import { motion } from "framer-motion";
import { ABOUT_DATA } from "../data/content";

const About: React.FC = () => {
  return (
    <section className="py-32 w-full max-w-4xl mx-auto px-6" id="about">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
        <motion.div
          className="col-span-1 md:col-span-3 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {ABOUT_DATA.bio.map((paragraph, idx) => (
            <p
              key={idx}
              className="text-lg leading-relaxed text-text-ink/80 font-body"
            >
              {paragraph}
            </p>
          ))}
        </motion.div>

        <motion.div
          className="col-span-1 md:col-span-2 mt-8 md:mt-16 space-y-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div>
            <div className="flex flex-col gap-4">
              {ABOUT_DATA.techStack.map((group, groupIdx) => (
                <div key={groupIdx} className="flex flex-wrap gap-2">
                  {group.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm font-mono tracking-wide rounded-md bg-text-ink/5 border border-text-ink/10 text-text-ink/70"
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
