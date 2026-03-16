import React from "react";
import { motion } from "framer-motion";
import { EXPERIENCE_DATA } from "../data/content";

const Experience: React.FC = () => {
  return (
    <section className="py-20 w-full max-w-4xl mx-auto px-6" id="experience">
      <div className="mb-16">
        <span className="block font-mono text-xs uppercase tracking-widest text-text-ink/40 mb-2">
          03 —— Where I've been
        </span>
        <h2 className="font-heading text-4xl text-text-ink">Experience.</h2>
      </div>

      <div className="space-y-12">
        {EXPERIENCE_DATA.map((entry, idx) => {
          const isLast = idx === EXPERIENCE_DATA.length - 1;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative"
            >
              {/* Desktop Timeline Layout Grid */}
              <div className="flex flex-col md:grid md:grid-cols-[100px_1fr] gap-4 md:gap-8">

                {/* Year Column (Desktop) & Timeline Dot Container */}
                <div className="relative flex items-center md:items-start md:justify-end">
                  <span className="font-mono text-sm text-text-ink/40 md:mt-1 pr-6 md:pr-4">
                    {entry.year}
                  </span>

                  {/* Timeline Dot */}
                  <div className="absolute top-2 md:top-2 -right-2 md:right-[-9px] flex items-center justify-center">
                    {entry.upcoming ? (
                      <div className="w-3 h-3 rounded-full border-2 border-accent-terracotta bg-bg-cream z-10" />
                    ) : (
                      <div className="w-3 h-3 rounded-full bg-text-ink/30 z-10" />
                    )}
                  </div>

                  {/* Dashed line segment (not on the last item) */}
                  {!isLast && (
                    <div className="absolute top-6 bottom-[-3rem] md:bottom-[-4rem] right-[-4px] w-[1px] border-l-2 border-dashed border-text-ink/10" />
                  )}
                </div>

                {/* Content Column */}
                <div className="pl-4 md:pl-0 pt-1 md:pt-0">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h3 className={`font-heading text-2xl ${entry.upcoming ? "text-text-ink" : "text-text-ink"}`}>
                      {entry.role}
                    </h3>

                    {entry.tags && (
                      <div className="flex flex-wrap gap-2">
                        {entry.tags.map(tag => (
                          <span
                            key={tag}
                            className={`px-3 py-1 text-xs font-mono tracking-wide rounded-full ${
                              entry.international
                                ? "bg-accent-terracotta/10 text-accent-terracotta"
                                : entry.upcoming
                                  ? "bg-secondary-sage/10 text-secondary-sage italic"
                                  : "bg-text-ink/5 text-text-ink/60"
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className={`font-medium mb-3 ${entry.upcoming ? "text-text-ink/50" : "text-text-ink/80"}`}>
                    {entry.organisation} {entry.international && "🇪🇸"}
                  </div>

                  <p className={`leading-relaxed ${entry.upcoming ? "text-text-ink/40" : "text-text-ink/70"}`}>
                    {entry.description}
                  </p>

                  {entry.extraDetail && (
                    <p className="mt-3 text-sm italic text-text-ink/50 font-body">
                      {entry.extraDetail}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
