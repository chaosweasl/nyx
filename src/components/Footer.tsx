import React from "react";
import { CONTACT_DATA } from "../data/content";

const Footer: React.FC = () => {
  return (
    <footer className="py-20 text-center relative z-10 w-full max-w-4xl mx-auto px-6">
      <div className="mb-12">
        <h2 className="font-heading text-5xl md:text-6xl text-text-ink mb-6">
          {CONTACT_DATA.heading}
        </h2>
        <p className="font-body text-lg text-text-ink/50 max-w-md mx-auto leading-relaxed">
          I'm currently open to internships, collaborations, and interesting conversations.
        </p>
      </div>

      <div className="flex justify-center gap-6 md:gap-12 mb-20 font-mono uppercase tracking-widest text-sm text-text-ink/60">
        <a
          href={CONTACT_DATA.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="relative px-4 py-2 hover:text-text-ink transition-colors before:absolute before:inset-0 before:border before:border-transparent before:rounded hover:before:border-text-ink/20"
        >
          GitHub
        </a>
        <a
          href={CONTACT_DATA.linkedinUrl}
          target="_blank"
          rel="noreferrer"
          className="relative px-4 py-2 hover:text-text-ink transition-colors before:absolute before:inset-0 before:border before:border-transparent before:rounded hover:before:border-text-ink/20"
        >
          LinkedIn
        </a>
        <a
          href={`mailto:${CONTACT_DATA.email}`}
          className="relative px-4 py-2 hover:text-text-ink transition-colors before:absolute before:inset-0 before:border before:border-transparent before:rounded hover:before:border-text-ink/20"
        >
          Email
        </a>
      </div>

      <div className="font-mono text-xs tracking-widest text-text-ink/30 uppercase">
        {CONTACT_DATA.copyright}
      </div>
    </footer>
  );
};

export default Footer;
