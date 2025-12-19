'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './About.module.css'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className={styles.about} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.subtitle}>Get to know me</span>
          <h2 className={styles.title}>About Me</h2>
        </motion.div>

        <div className={styles.content}>
          <motion.div
            className={styles.imageSection}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.imageFrame}>
              <div className={styles.imagePlaceholder}>
                <span>Photo</span>
              </div>
            </div>
            <div className={styles.decorativeBox}></div>
          </motion.div>

          <div className={styles.textSection}>
            <motion.div
              className={styles.personalCard}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className={styles.cardIcon}>🌱</div>
              <h3 className={styles.cardTitle}>Personal Side</h3>
              <p className={styles.cardText}>
                When I'm not coding, you'll find me exploring nature trails, experimenting 
                with new recipes in the kitchen, or getting lost in a good book. I believe 
                in continuous learning and maintaining a healthy work-life balance. Coffee 
                enthusiast and amateur photographer on weekends.
              </p>
              <div className={styles.interests}>
                <span className={styles.interest}>🎿 Hiking</span>
                <span className={styles.interest}>📚 Reading</span>
                <span className={styles.interest}>🍳 Cooking</span>
                <span className={styles.interest}>📷 Photography</span>
              </div>
            </motion.div>

            <motion.div
              className={styles.professionalCard}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className={styles.cardIcon}>💼</div>
              <h3 className={styles.cardTitle}>Professional Journey</h3>
              <p className={styles.cardText}>
                I'm a passionate full-stack developer with a love for creating elegant 
                solutions to complex problems. With experience in modern web technologies, 
                I specialize in building responsive, user-friendly applications that make 
                a real impact.
              </p>
              <p className={styles.cardText}>
                My journey in tech started with curiosity and has evolved into a career 
                focused on delivering high-quality, scalable software. I thrive in 
                collaborative environments and enjoy mentoring junior developers.
              </p>
              <div className={styles.stats}>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>3+</span>
                  <span className={styles.statLabel}>Years Experience</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>20+</span>
                  <span className={styles.statLabel}>Projects Completed</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>10+</span>
                  <span className={styles.statLabel}>Happy Clients</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
