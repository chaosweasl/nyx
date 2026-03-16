import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Blog", href: "#blog" },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        { threshold: 0.35 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
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
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-bg-cream/85 backdrop-blur-md border-b border-text-ink/5 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo / wordmark */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="font-heading font-bold text-xl text-text-ink tracking-tight flex items-center gap-2 group"
          >
            <span className="text-accent-terracotta group-hover:rotate-12 transition-transform duration-300 inline-block">
              {"<"}
            </span>
            jd
            <span className="text-accent-terracotta group-hover:-rotate-12 transition-transform duration-300 inline-block">
              {"/>"}
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`font-mono text-sm transition-all duration-200 relative group ${
                    isActive
                      ? "text-text-ink"
                      : "text-text-ink/60 hover:text-text-ink"
                  }`}
                >
                  {link.name}
                  {/* Active underline */}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] bg-accent-terracotta transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Mobile hamburger button */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2 z-50 relative"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <motion.span
              animate={
                mobileMenuOpen
                  ? { rotate: 45, y: 7 }
                  : { rotate: 0, y: 0 }
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
                mobileMenuOpen
                  ? { rotate: -45, y: -7 }
                  : { rotate: 0, y: 0 }
              }
              transition={{ duration: 0.2 }}
              className="block w-5 h-[1.5px] bg-text-ink origin-center"
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile slide-down drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed top-0 left-0 w-full z-40 pt-20 pb-8 px-6 bg-bg-cream/95 backdrop-blur-md border-b border-text-ink/10 md:hidden"
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.06 }}
                  className="font-heading text-3xl text-text-ink py-3 border-b border-text-ink/10 hover:text-accent-terracotta transition-colors duration-200 flex items-center justify-between group"
                >
                  {link.name}
                  <span className="font-mono text-xs text-text-ink/30 group-hover:text-accent-terracotta/60 transition-colors">
                    {`0${idx + 1}`}
                  </span>
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
