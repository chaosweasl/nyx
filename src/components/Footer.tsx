import React from "react";
import { CONTACT_DATA } from "../data/content";

const Footer: React.FC = () => {
  return (
    <footer className="py-12 mt-24 border-t border-black/5 bg-foreground/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 lg:px-0 relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <h2 className="text-3xl font-heading font-medium text-foreground mb-4">
            {CONTACT_DATA.heading}
          </h2>
          <a
            href={`mailto:${CONTACT_DATA.email}`}
            className="text-lg font-body text-foreground/70 hover:text-accent transition-colors underline decoration-foreground/20 underline-offset-4"
          >
            {CONTACT_DATA.email}
          </a>
        </div>

        <div className="flex flex-col items-center md:items-end gap-6">
          <div className="flex gap-6 font-mono text-sm">
            <a
              href={CONTACT_DATA.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <a
              href={CONTACT_DATA.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
          </div>

          <p className="text-xs font-mono text-foreground/40 text-center md:text-right">
            {CONTACT_DATA.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
