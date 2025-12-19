'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './Skills.module.css'

const skillCategories = [
  {
    title: 'Frontend',
    icon: '🎨',
    description: 'Building beautiful, responsive interfaces',
    skills: ['React', 'Next.js', 'TypeScript', 'HTML/CSS', 'JavaScript', 'Framer Motion']
  },
  {
    title: 'Backend',
    icon: '⚙️',
    description: 'Creating robust server-side solutions',
    skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL']
  },
  {
    title: 'Tools & Workflow',
    icon: '🛠️',
    description: 'Streamlining development processes',
    skills: ['Git', 'Docker', 'Figma', 'AWS', 'CI/CD', 'Linux']
  }
]

const currentlyLearning = ['Rust', 'Kubernetes', 'Machine Learning']
const wantToLearn = ['Go', 'WebAssembly', 'Blockchain']

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className={styles.skills} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.subtitle}>What I work with</span>
          <h2 className={styles.title}>Skills & Technologies</h2>
          <p className={styles.description}>
            Here are the tools and technologies I use to bring ideas to life. 
            Always learning, always improving.
          </p>
        </motion.div>

        <div className={styles.categories}>
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className={styles.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + categoryIndex * 0.1 }}
            >
              <div className={styles.categoryHeader}>
                <span className={styles.categoryIcon}>{category.icon}</span>
                <div>
                  <h3 className={styles.categoryTitle}>{category.title}</h3>
                  <p className={styles.categoryDescription}>{category.description}</p>
                </div>
              </div>
              
              <div className={styles.skillTags}>
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className={styles.skillTag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.4 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.learningSection}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className={styles.learningCard}>
            <div className={styles.learningIcon}>📚</div>
            <h4 className={styles.learningTitle}>Currently Learning</h4>
            <div className={styles.learningTags}>
              {currentlyLearning.map((tech) => (
                <span key={tech} className={styles.learningTag}>{tech}</span>
              ))}
            </div>
          </div>
          
          <div className={styles.learningCard}>
            <div className={styles.learningIcon}>🎯</div>
            <h4 className={styles.learningTitle}>Want to Explore</h4>
            <div className={styles.learningTags}>
              {wantToLearn.map((tech) => (
                <span key={tech} className={styles.futureTag}>{tech}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
