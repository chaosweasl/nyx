import React from "react";
import { motion } from "framer-motion";
import { ABOUT_DATA } from "../data/content";

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 max-w-5xl mx-auto px-6 lg:px-0">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
      >
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-heading mb-8">About me.</h2>
          {ABOUT_DATA.bio.map((paragraph, index) => (
            <p key={index} className="text-lg leading-relaxed text-foreground/90">
              {paragraph}
            </p>
          ))}

          <div className="mt-12">
            <h3 className="text-xl font-heading mb-4 text-accent">A few fun facts:</h3>
            <ul className="list-disc pl-5 space-y-2 text-foreground/80">
              {ABOUT_DATA.funFacts.map((fact, index) => (
                <li key={index}>{fact}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-white/50 border border-black/5 p-8 rounded-2xl shadow-sm space-y-8">
          <div>
            <h3 className="text-xl font-heading mb-6 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-foreground/20 block"></span>
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {ABOUT_DATA.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-foreground/5 text-foreground/80 rounded-full font-mono text-sm border border-black/5"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
