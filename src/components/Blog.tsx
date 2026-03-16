import React from "react";
import { motion } from "framer-motion";
import { BLOG_DATA } from "../data/content";
import { ArrowRight } from "lucide-react";

const Blog: React.FC = () => {
  return (
    <section id="writing" className="py-24 max-w-5xl mx-auto px-6 lg:px-0">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-heading mb-4">Writing.</h2>
        <p className="text-foreground/60 max-w-xl text-lg">
          Occasional thoughts and technical deep dives.
        </p>
      </div>

      <div className="space-y-6">
        {BLOG_DATA.map((post, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`group relative flex flex-col md:flex-row md:items-center justify-between p-6 -mx-6 rounded-2xl hover:bg-black/[0.02] transition-colors cursor-pointer ${post.comingSoon ? 'opacity-80' : ''}`}
          >
            <div className="flex-1 pr-8">
              <div className="flex items-center gap-4 mb-2">
                <span className="font-mono text-sm text-foreground/40">{post.date}</span>
                {post.comingSoon && (
                  <span className="text-[10px] uppercase tracking-widest font-mono font-medium text-sage bg-sage/10 px-2 py-0.5 rounded-full">
                    Drafting
                  </span>
                )}
              </div>
              <h3 className="text-xl md:text-2xl font-heading font-medium text-foreground mb-3 group-hover:text-accent transition-colors">
                {post.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed font-light">
                {post.teaser}
              </p>
            </div>

            <div className="mt-6 md:mt-0 text-foreground/20 group-hover:text-accent transition-colors transform group-hover:translate-x-1 duration-300 hidden md:block">
              <ArrowRight size={24} />
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Blog;
