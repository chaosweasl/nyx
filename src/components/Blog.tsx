import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BLOG_DATA } from "../data/content";

const Blog: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-16 w-full max-w-4xl mx-auto px-6" id="blog">
      <div className="mb-12">
        <span className="block font-mono text-xs uppercase tracking-widest text-text-ink/40 mb-2">
          04 —— Writing
        </span>
        <h2 className="font-heading text-4xl text-text-ink mb-4">Blog.</h2>
        <p className="text-lg text-text-ink/60 font-body max-w-xl">
          Occasionally I write about things I'm building or figuring out.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {BLOG_DATA.map((post, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group relative flex flex-col md:flex-row md:items-baseline border-b border-text-ink/10 pb-6 gap-2 md:gap-8 cursor-pointer"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="font-mono text-sm uppercase tracking-wider md:w-24 shrink-0 text-accent-terracotta/80">
              {post.date}
            </div>

            <div className="flex flex-col md:flex-row md:items-baseline flex-grow gap-2 md:gap-4 relative">
              <div className="flex items-center gap-3 mb-1 md:mb-0">
                {post.category && (
                  <span
                    className={`px-2 py-0.5 text-[10px] font-mono uppercase tracking-widest rounded bg-secondary-sage/10 text-secondary-sage`}
                  >
                    {post.category}
                  </span>
                )}
                <h3 className="font-heading text-xl md:text-2xl text-text-ink group-hover:text-accent-terracotta transition-colors duration-300">
                  {post.title}
                </h3>
              </div>
              <p className="text-sm md:text-base text-text-ink/50 font-body">
                {post.teaser}
              </p>
            </div>

            <AnimatePresence>
              {hoveredIndex === idx && post.comingSoon && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="absolute right-0 top-1/2 -translate-y-1/2 bg-text-ink text-bg-cream text-xs px-3 py-1 rounded hidden md:block"
                >
                  Coming soon
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
