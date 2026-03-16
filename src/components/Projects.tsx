import React from "react";
import { motion } from "framer-motion";
import { PROJECTS_DATA } from "../data/content";
import type { Project } from "../types";
import { ExternalLink, Github } from "lucide-react";

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const isFeatured = project.featured;

  if (project.comingSoon) {
    return (
      <div className="group relative border border-text-ink/10 rounded-xl p-8 bg-white/40 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-text-ink/30 h-full flex flex-col">
        {project.numeral && (
          <span className="absolute -bottom-6 -right-4 font-heading text-[10rem] leading-none text-text-ink/5 -rotate-12 pointer-events-none select-none">
            {project.numeral}
          </span>
        )}
        <div className="flex justify-between items-start mb-6">
          <h3 className="font-heading text-2xl text-text-ink relative z-10">
            {project.title}
          </h3>
          <span className="px-3 py-1 bg-text-ink/5 text-text-ink/50 font-mono text-xs uppercase tracking-wider rounded-md">
            soon
          </span>
        </div>

        {/* Redacted lines for description */}
        <div className="space-y-3 mb-8 flex-grow">
          <div className="h-3 bg-text-ink/10 rounded-full w-4/5 blur-[1px]"></div>
          <div className="h-3 bg-text-ink/10 rounded-full w-[60%] blur-[1px]"></div>
          <div className="h-3 bg-text-ink/10 rounded-full w-[70%] blur-[1px]"></div>
        </div>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-1 bg-text-ink/5 rounded text-xs font-mono text-text-ink/60"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    );
  }

  const baseCardClasses = "group relative border rounded-xl p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent-terracotta h-full flex flex-col justify-between";
  const featuredClasses = "border-t-4 md:border-t md:border-l-4 border-accent-terracotta border-b-text-ink/10 border-r-text-ink/10 md:border-r-text-ink/10 md:border-b-text-ink/10 bg-accent-terracotta/5 md:col-span-2";
  const standardClasses = "border-text-ink/10 bg-white/40 overflow-hidden";

  return (
    <div className={`${baseCardClasses} ${isFeatured ? featuredClasses : standardClasses}`}>
      {!isFeatured && project.numeral && (
        <span className="absolute -bottom-6 -right-4 font-heading text-[10rem] leading-none text-text-ink/5 -rotate-12 pointer-events-none select-none">
          {project.numeral}
        </span>
      )}

      <div>
        <div className="flex justify-between items-start mb-4 relative z-10">
          <h3 className="font-heading text-3xl text-text-ink">
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

      <div className="flex flex-wrap gap-2 relative z-10">
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
        <h2 className="font-heading text-4xl text-text-ink">
          Projects.
        </h2>
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
