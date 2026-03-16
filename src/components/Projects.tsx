import React from "react";
import { motion } from "framer-motion";
import { PROJECTS_DATA } from "../data/content";
import type { Project } from "../types";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

/* Sketchy SVG placeholder image area for featured cards */
const CardImagePlaceholder: React.FC<{ title: string }> = ({ title }) => (
  <div className="relative w-full h-32 mb-6 overflow-hidden rounded-sm bg-accent-terracotta/5 border border-accent-terracotta/10 flex items-center justify-center">
    {/* Dot-grid pattern */}
    <svg className="absolute inset-0 w-full h-full" aria-hidden="true">
      {Array.from({ length: 6 }).map((_, row) =>
        Array.from({ length: 16 }).map((_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={col * 26 + 13}
            cy={row * 22 + 11}
            r="1.5"
            fill="#C85F38"
            fillOpacity="0.12"
          />
        )),
      )}
    </svg>
    <span className="relative font-mono text-xs text-accent-terracotta/40 uppercase tracking-widest px-4 py-2 border border-accent-terracotta/15 rounded-sm bg-bg-cream/50">
      {title}
    </span>
  </div>
);

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const isFeatured = project.featured;

  if (project.comingSoon) {
    return (
      <div className="group relative border border-text-ink/10 rounded-xl p-8 bg-text-ink/5 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-text-ink/30 h-full flex flex-col">
        {project.numeral && (
          <span className="absolute -bottom-6 -right-4 font-heading text-[10rem] leading-none text-text-ink/5 -rotate-12 pointer-events-none select-none">
            {project.numeral}
          </span>
        )}
        <div className="flex justify-between items-start mb-4">
          <h3 className="font-heading text-2xl text-text-ink relative z-10">
            {project.title}
          </h3>
          <span className="px-3 py-1 bg-secondary-sage/10 text-secondary-sage font-mono text-[10px] uppercase tracking-wider rounded-sm border border-secondary-sage/20">
            [ in progress ]
          </span>
        </div>

        {project.description && (
          <p className="text-text-ink/40 text-sm leading-relaxed mb-6 flex-grow italic">
            {project.description}
          </p>
        )}

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-1 bg-text-ink/5 rounded text-xs font-mono text-text-ink/50"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    );
  }

  const baseCardClasses =
    "group relative border rounded-sm p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[8px_8px_0_var(--color-accent-terracotta)] hover:border-accent-terracotta h-full flex flex-col justify-between";
  const featuredClasses =
    "border-t-4 border-accent-terracotta border-b-text-ink/20 border-r-text-ink/20 border-l-text-ink/20 bg-text-ink/10 md:col-span-2 shadow-[4px_4px_0_rgba(0,0,0,0.05)] dark:shadow-[4px_4px_0_rgba(255,255,255,0.05)]";
  const standardClasses =
    "border-text-ink/20 bg-text-ink/5 overflow-hidden shadow-[4px_4px_0_rgba(0,0,0,0.05)] dark:shadow-[4px_4px_0_rgba(255,255,255,0.05)]";

  return (
    <div
      className={`${baseCardClasses} ${isFeatured ? featuredClasses : standardClasses}`}
    >
      {/* Sketchy accent corners */}
      <svg
        className="absolute top-0 left-0 w-4 h-4 text-accent-terracotta opacity-0 group-hover:opacity-100 transition-opacity"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 4h16v16"
        />
      </svg>
      <svg
        className="absolute bottom-0 right-0 w-4 h-4 text-accent-terracotta opacity-0 group-hover:opacity-100 transition-opacity"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20 20H4V4"
        />
      </svg>

      {!isFeatured && project.numeral && (
        <span className="absolute -bottom-6 -right-4 font-heading text-[12rem] leading-none text-text-ink/5 -rotate-12 pointer-events-none select-none group-hover:text-accent-terracotta/10 transition-colors duration-500">
          {project.numeral}
        </span>
      )}

      <div>
        {/* Placeholder image area for featured card */}
        {isFeatured && <CardImagePlaceholder title={project.title} />}

        <div className="flex justify-between items-start mb-4 relative z-10">
          <h3 className="font-heading text-3xl md:text-4xl text-text-ink group-hover:text-accent-terracotta transition-colors duration-300">
            {project.title}
          </h3>
          <div className="flex gap-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="text-text-ink/30 hover:text-text-ink transition-colors"
                aria-label="GitHub Repository"
              >
                <Github size={20} />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="text-text-ink/30 hover:text-text-ink transition-colors"
                aria-label="Live Demo"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>

        <p className="text-text-ink/80 text-lg leading-relaxed mb-8 relative z-10">
          {project.description}
        </p>
      </div>

      <div className="flex items-center justify-between relative z-10">
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className={`px-3 py-1 rounded text-xs font-mono tracking-wide ${
                isFeatured
                  ? "bg-accent-terracotta/10 text-accent-terracotta"
                  : "bg-text-ink/5 text-text-ink/60"
              }`}
            >
              {t}
            </span>
          ))}
        </div>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 font-mono text-xs text-accent-terracotta/60 hover:text-accent-terracotta transition-colors group/link ml-4 shrink-0"
          >
            View
            <ArrowRight
              size={12}
              className="group-hover/link:translate-x-1 transition-transform duration-200"
            />
          </a>
        )}
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section className="py-24 w-full max-w-4xl mx-auto px-6" id="projects">
      <div className="mb-12">
        <span className="block font-mono text-xs uppercase tracking-widest text-text-ink/40 mb-2">
          02 —— Selected Work
        </span>
        <h2 className="font-heading text-4xl text-text-ink mb-3">Projects.</h2>
        <p className="text-text-ink/50 font-body italic">
          a handful of things I've shipped
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS_DATA.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={project.featured ? "md:col-span-2" : ""}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
