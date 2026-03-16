import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Blog', href: '#blog' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: top - 80, // Adjust for header height
        behavior: 'smooth',
      });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-bg-cream/80 backdrop-blur-md border-b border-text-ink/5 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="font-heading font-bold text-xl text-text-ink tracking-tight flex items-center gap-2 group"
        >
          <span className="text-accent-terracotta group-hover:rotate-12 transition-transform duration-300 inline-block">{'<'}</span>
          dev
          <span className="text-accent-terracotta group-hover:-rotate-12 transition-transform duration-300 inline-block">{'/>'}</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-mono text-sm text-text-ink/70 hover:text-text-ink hover:underline decoration-accent-terracotta decoration-2 underline-offset-4 transition-all duration-200"
            >
              <span className="text-accent-terracotta/50 mr-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">{`// `}</span>
              {link.name}
            </a>
          ))}
        </nav>

        <div className="md:hidden flex gap-4">
          {navLinks.slice(0, 2).map((link) => (
             <a
             key={link.name}
             href={link.href}
             onClick={(e) => handleNavClick(e, link.href)}
             className="font-mono text-xs text-text-ink/70 hover:text-text-ink transition-colors"
           >
             {link.name}
           </a>
          ))}
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
