import React from "react";
import { CONTACT_DATA } from "../data/content";

const Footer: React.FC = () => {
  return (
    <footer className="py-20 text-center relative z-10 w-full max-w-4xl mx-auto px-6 overflow-hidden">
      {/* Large background watermark */}
      <div className="absolute inset-0 flex items-end justify-center pointer-events-none select-none overflow-hidden">
        <span
          className="font-heading font-bold text-text-ink leading-none"
          style={{ fontSize: "clamp(8rem, 30vw, 22rem)", opacity: 0.025 }}
          aria-hidden="true"
        >
          hi.
        </span>
      </div>

      <div className="relative z-10 mb-12">
        {/* Availability pulsing dot */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-sage opacity-60"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary-sage"></span>
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-secondary-sage/80">
            Open to opportunities
          </span>
        </div>

        <h2 className="font-heading text-5xl md:text-6xl text-text-ink mb-6">
          {CONTACT_DATA.heading}
        </h2>
        <p className="font-body text-lg text-text-ink/50 max-w-md mx-auto leading-relaxed">
          I'm currently open to internships, collaborations, and interesting conversations.
        </p>
      </div>

      <div className="relative z-10 flex justify-center gap-6 md:gap-12 mb-20 font-mono uppercase tracking-widest text-sm text-text-ink/60">
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

      <div className="relative z-10 space-y-2">
        <div className="font-mono text-xs tracking-widest text-text-ink/30 uppercase">
          {CONTACT_DATA.copyright}
        </div>
        <div className="font-mono text-[10px] tracking-wider text-text-ink/20">
          Designed in Figma · Built with Vite &amp; React · Deployed on Vercel
        </div>
      </div>
    </footer>
  );
};

export default Footer;
