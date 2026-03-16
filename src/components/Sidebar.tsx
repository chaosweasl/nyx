import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Blog", href: "#blog" },
];

const Logo = ({
  onClick,
}: {
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}) => (
  <a
    href="#home"
    onClick={onClick}
    className="font-heading font-bold text-2xl text-text-ink tracking-tight flex items-center gap-2 group"
  >
    <span className="text-accent-terracotta group-hover:rotate-12 transition-transform duration-300 inline-block">
      {"<"}
    </span>
    jd
    <span className="text-accent-terracotta group-hover:-rotate-12 transition-transform duration-300 inline-block">
      {"/>"}
    </span>
  </a>
);

const Sidebar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  /* Active section tracking via IntersectionObserver */
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.35 },
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: top - 80, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Mobile Top Bar */}
      <header className="md:hidden fixed top-0 left-0 w-full z-[100] bg-bg-cream/85 backdrop-blur-md border-b border-text-ink/5 py-4 px-6 flex items-center justify-between">
        <Logo onClick={(e) => handleNavClick(e, "#home")} />
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button
            className="flex flex-col gap-[5px] p-2 z-50 relative"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <motion.span
              animate={
                mobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }
              }
              transition={{ duration: 0.2 }}
              className="block w-5 h-[1.5px] bg-text-ink origin-center"
            />
            <motion.span
              animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.15 }}
              className="block w-5 h-[1.5px] bg-text-ink"
            />
            <motion.span
              animate={
                mobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }
              }
              transition={{ duration: 0.2 }}
              className="block w-5 h-[1.5px] bg-text-ink origin-center"
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed top-0 left-0 w-full h-screen z-[90] pt-24 px-6 bg-bg-cream/95 backdrop-blur-md md:hidden flex flex-col justify-between pb-10"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link, idx) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.06 }}
                    className={`font-heading text-4xl py-2 flex items-center justify-between group ${
                      isActive
                        ? "text-text-ink font-bold"
                        : "text-text-ink/60 hover:text-accent-terracotta"
                    }`}
                  >
                    {link.name}
                    <span className="font-mono text-sm group-hover:text-accent-terracotta/60 transition-colors">
                      {`0${idx + 1}`}
                    </span>
                  </motion.a>
                );
              })}
            </nav>
            <div className="flex items-center gap-4 border-t border-text-ink/10 pt-6">
              <span className="font-mono text-xs text-text-ink/50">
                Change Theme:
              </span>
              <ThemeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex fixed top-0 left-0 h-screen w-72 bg-bg-cream border-r border-text-ink/5 flex-col justify-between py-10 px-8 z-50">
        <div className="flex flex-col gap-10">
          <div className="flex items-center justify-between">
            <Logo onClick={(e) => handleNavClick(e, "#home")} />
            <ThemeToggle />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-sm"
          >
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
              alt="Profile"
              className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
            />
          </motion.div>

          {/* Desktop nav */}
          <nav className="flex flex-col gap-5 mt-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`font-mono text-sm transition-all duration-200 relative group flex items-center gap-4 ${
                    isActive
                      ? "text-text-ink font-bold"
                      : "text-text-ink/50 hover:text-text-ink"
                  }`}
                >
                  <span
                    className={`h-[1px] bg-accent-terracotta transition-all duration-300 ${
                      isActive ? "w-8" : "w-0 group-hover:w-4"
                    }`}
                  />
                  {link.name}
                </a>
              );
            })}
          </nav>
        </div>

        <div className="text-xs font-mono text-text-ink/40">
          <p>© {new Date().getFullYear()} John Doe.</p>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
