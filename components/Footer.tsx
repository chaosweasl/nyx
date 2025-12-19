'use client'

import { motion } from 'framer-motion'
import styles from './Footer.module.css'

const quickLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#contact', label: 'Contact' },
]

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com' },
  { name: 'LinkedIn', url: 'https://linkedin.com' },
  { name: 'Twitter', url: 'https://twitter.com' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <a href="#home" className={styles.logo} onClick={(e) => handleNavClick(e, '#home')}>
              <span className={styles.logoAccent}>{"<"}</span>
              Portfolio
              <span className={styles.logoAccent}>{" />"}</span>
            </a>
            <p className={styles.tagline}>
              Building beautiful digital experiences, one line of code at a time.
            </p>
          </div>

          <div className={styles.links}>
            <h4 className={styles.linksTitle}>Quick Links</h4>
            <nav className={styles.nav}>
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={styles.navLink}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className={styles.social}>
            <h4 className={styles.linksTitle}>Connect</h4>
            <div className={styles.socialLinks}>
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className={styles.socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} Your Name. All rights reserved.
          </p>
          <p className={styles.madeWith}>
            Made with <span className={styles.heart}>♥</span> and lots of coffee
          </p>
        </div>
      </div>

      <motion.button
        className={styles.backToTop}
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Back to top"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 19V5M5 12l7-7 7 7"/>
        </svg>
      </motion.button>
    </footer>
  )
}
