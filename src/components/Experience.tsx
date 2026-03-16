import React from "react";
import { motion } from "framer-motion";
import { EXPERIENCE_DATA } from "../data/content";

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 max-w-5xl mx-auto px-6 lg:px-0">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-heading mb-4">Experience.</h2>
        <p className="text-foreground/60 max-w-xl text-lg">
          The path so far.
        </p>
      </div>

      <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
        {EXPERIENCE_DATA.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active ${item.upcoming ? 'opacity-70' : ''}`}
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-accent text-white group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              {item.international && <span className="text-sm">🇪🇸</span>}
              {!item.international && <span className="w-2 h-2 rounded-full bg-white"></span>}
            </div>

            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded border border-slate-200 bg-white/40 shadow-sm backdrop-blur-sm">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-2">
                <div className="font-heading font-medium text-xl text-slate-900">{item.role}</div>
                <time className="text-xs font-mono font-medium text-accent">{item.year}</time>
              </div>
              <div className="text-slate-600 mb-3">{item.organisation}</div>
              <p className="text-slate-500 leading-relaxed text-sm mb-4">{item.description}</p>

              {item.tags && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-2.5 py-1 rounded-full font-mono ${
                        tag.includes('Incoming') ? 'bg-amber/10 text-amber' :
                        tag.includes('International') ? 'bg-accent/10 text-accent' :
                        'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
