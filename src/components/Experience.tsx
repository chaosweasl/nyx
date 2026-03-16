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
              <div className="flex flex-col md:grid md:grid-cols-[100px_1fr] gap-6 md:gap-8">
                {/* Year Column (Desktop) & Timeline Dot Container */}
                <div className="relative flex flex-row md:flex-col md:items-end items-center">
                  <span className="font-mono text-sm text-text-ink/40 md:mt-1 md:pr-8 pr-4">
                    {entry.year}
                  </span>

                  {/* Timeline cap on very first entry */}
                  {idx === 0 && (
                    <div className="hidden md:block absolute -top-5 right-[13px] w-[2px] h-5 bg-gradient-to-b from-accent-terracotta/60 to-transparent" />
                  )}

                  {/* Timeline Dot */}
                  <div className="md:absolute static top-2.5 right-[8px] flex items-center justify-center z-10">
                    {entry.upcoming ? (
                      <div className="w-4 h-4 rounded-none border-2 border-accent-terracotta bg-bg-cream rotate-45" />
                    ) : (
                      <div className="w-3 h-3 rounded-sm bg-text-ink/30 rotate-[15deg]" />
                    )}
                  </div>

                  {/* Dashed line segment */}
                  {!isLast && (
                    <div className="hidden md:block absolute top-8 bottom-[-3rem] md:bottom-[-4rem] right-[13px] w-[2px] border-l-[1.5px] border-dotted border-text-ink/20" />
                  )}
                </div>

                {/* Content Column */}
                <div className="pl-6 md:pl-0 pt-1 md:pt-0 group relative border-l-[1.5px] border-dotted border-text-ink/20 md:border-l-0 ml-2 md:ml-0">
                  {/* Dashed line segment for Mobile */}
                  {!isLast && (
                    <div className="block md:hidden absolute top-8 bottom-[-3rem] left-[-1.5px] w-[2px] border-l-[1.5px] border-dotted border-text-ink/20" />
                  )}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h3
                      className={`font-heading text-2xl transition-colors duration-300 ${entry.upcoming ? "text-text-ink group-hover:text-secondary-sage" : "text-text-ink group-hover:text-accent-terracotta"}`}
                    >
                      {entry.role}
                    </h3>

                    {entry.tags && (
                      <div className="flex flex-wrap gap-2">
                        {entry.tags.map((tag) => (
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

                  <div
                    className={`font-medium mb-3 ${entry.upcoming ? "text-text-ink/50" : "text-text-ink/80"}`}
                  >
                    {entry.organisation} {entry.international && "🇪🇸"}
                  </div>

                  <p
                    className={`leading-relaxed ${entry.upcoming ? "text-text-ink/40" : "text-text-ink/70"}`}
                  >
                    {entry.description}
                  </p>

                  {entry.extraDetail && (
                    <p className="mt-3 text-sm italic text-text-ink/50 font-body">
                      {entry.extraDetail}
                    </p>
                  )}

                  {/* Asterisk footnote for upcoming entry */}
                  {entry.upcoming && (
                    <p className="mt-3 font-mono text-[10px] text-text-ink/30 tracking-wide">
                      * subject to confirmed enrolment
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
