'use client'

import { motion } from 'framer-motion'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <motion.p 
            className={styles.greeting}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hello there! 👋 I'm
          </motion.p>
          
          <motion.h1 
            className={styles.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Your Name
          </motion.h1>
          
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className={styles.titleAccent}>Full-Stack Developer</span> crafting
            <br />beautiful digital experiences
          </motion.h2>
          
          <motion.p 
            className={styles.tagline}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            I love building things that live on the internet. Currently focused on 
            creating accessible, human-centered products.
          </motion.p>
          
          <motion.div 
            className={styles.buttons}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a href="#portfolio" className={styles.btnPrimary}>
              View My Work
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a href="#contact" className={styles.btnSecondary}>
              Get In Touch
            </a>
          </motion.div>
        </div>
        
        <motion.div 
          className={styles.imageWrapper}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.imageDecoration}></div>
          <div className={styles.imagePlaceholder}>
            <span>Your Photo</span>
          </div>
          <div className={styles.floatingElement1}></div>
          <div className={styles.floatingElement2}></div>
        </motion.div>
      </div>
      
      <div className={styles.scrollIndicator}>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </motion.div>
      </div>
    </section>
  )
}
