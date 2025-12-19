'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './Journey.module.css'

const milestones = [
  {
    id: 1,
    year: '2024',
    title: 'Software Developer at TechCorp',
    type: 'work',
    description: 'Joined an amazing team building scalable web applications. Working on exciting projects that impact millions of users.',
    tags: ['Full-time', 'Remote'],
    icon: '💼',
  },
  {
    id: 2,
    year: '2023',
    title: 'Internship at StartupXYZ',
    type: 'internship',
    description: 'Gained hands-on experience in a fast-paced startup environment. Contributed to the development of their core product features.',
    tags: ['Internship', '6 months'],
    icon: '🚀',
  },
  {
    id: 3,
    year: '2023',
    title: 'Open Source Contributor',
    type: 'achievement',
    description: 'Started contributing to open source projects. Had my first PR merged into a popular library with 10k+ stars.',
    tags: ['Open Source', 'Community'],
    icon: '⭐',
  },
  {
    id: 4,
    year: '2022',
    title: 'Volunteer Tech Mentor',
    type: 'volunteer',
    description: 'Taught coding basics to underprivileged youth at local community center. Helped 20+ students start their programming journey.',
    tags: ['Volunteer', 'Education'],
    icon: '🎓',
  },
  {
    id: 5,
    year: '2022',
    title: 'Hackathon Winner',
    type: 'achievement',
    description: 'Won first place at City Tech Hackathon with a team project focused on sustainability. Built an app in 48 hours.',
    tags: ['Competition', '1st Place'],
    icon: '🏆',
  },
  {
    id: 6,
    year: '2021',
    title: 'Computer Science Degree',
    type: 'education',
    description: 'Graduated with honors. Specialized in software engineering and completed a thesis on web accessibility.',
    tags: ['Education', 'Honors'],
    icon: '📜',
  },
]

const typeColors: Record<string, string> = {
  work: 'terracotta',
  internship: 'sage',
  achievement: 'gold',
  volunteer: 'lavender',
  education: 'sky',
}

export default function Journey() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="journey" className={styles.journey} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.subtitle}>My story so far</span>
          <h2 className={styles.title}>Journey & Achievements</h2>
          <p className={styles.description}>
            A timeline of experiences that shaped who I am today — the milestones, 
            the lessons learned, and the memories made along the way.
          </p>
        </motion.div>

        <div className={styles.timeline}>
          <div className={styles.timelineLine}></div>
          
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.id}
              className={`${styles.milestone} ${index % 2 === 0 ? styles.left : styles.right}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <div className={styles.milestoneContent}>
                <div className={styles.milestoneIcon}>{milestone.icon}</div>
                <span className={styles.year}>{milestone.year}</span>
                <h3 className={styles.milestoneTitle}>{milestone.title}</h3>
                <p className={styles.milestoneDescription}>{milestone.description}</p>
                <div className={styles.milestoneTags}>
                  {milestone.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className={`${styles.milestoneTag} ${styles[typeColors[milestone.type] || 'terracotta']}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className={styles.timelineDot}></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.funFacts}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className={styles.funFactsTitle}>Quick Facts About Me</h3>
          <div className={styles.factsGrid}>
            <div className={styles.fact}>
              <span className={styles.factEmoji}>☕</span>
              <span className={styles.factText}>Coffee enthusiast (3+ cups/day)</span>
            </div>
            <div className={styles.fact}>
              <span className={styles.factEmoji}>🌍</span>
              <span className={styles.factText}>Visited 12 countries</span>
            </div>
            <div className={styles.fact}>
              <span className={styles.factEmoji}>📖</span>
              <span className={styles.factText}>Read 30+ books last year</span>
            </div>
            <div className={styles.fact}>
              <span className={styles.factEmoji}>🎮</span>
              <span className={styles.factText}>Retro gaming collector</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
