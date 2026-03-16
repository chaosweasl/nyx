import React from "react";
import { motion } from "framer-motion";
import { PROJECTS_DATA } from "../data/content";
import type { Project } from "../types";
import { Github, ExternalLink } from "lucide-react";

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative flex flex-col justify-between p-8 rounded-2xl border border-black/5 bg-white/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-sm ${
        project.featured ? "col-span-1 md:col-span-2 min-h-[300px]" : "col-span-1 min-h-[250px]"
      }`}
    >
      <div>
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-heading text-foreground font-medium flex items-center gap-3">
            {project.title}
            {project.comingSoon && (
              <span className="text-xs bg-amber/20 text-amber px-2 py-0.5 rounded-full font-mono uppercase tracking-wider">
                Soon
              </span>
            )}
          </h3>
          <div className="flex gap-3 text-foreground/40">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                <Github size={20} />
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
        <p className="text-foreground/80 leading-relaxed mb-8 max-w-2xl">
          {project.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="text-xs font-mono px-2.5 py-1 bg-foreground/5 rounded-md text-foreground/60"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 max-w-5xl mx-auto px-6 lg:px-0">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-heading mb-4">Selected Work.</h2>
        <p className="text-foreground/60 max-w-xl text-lg">
          A collection of things I've built, ranging from full-stack applications to smaller experiments.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS_DATA.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
