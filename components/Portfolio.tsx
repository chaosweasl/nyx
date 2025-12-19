'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import styles from './Portfolio.module.css'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured online store with cart, checkout, and payment integration. Built with React, Node.js, and Stripe.',
    category: 'fullstack',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: null,
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative project management tool with real-time updates, drag-and-drop, and team features.',
    category: 'fullstack',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'WebSocket'],
    image: null,
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio showcasing creative work with smooth animations and interactions.',
    category: 'frontend',
    tags: ['Next.js', 'Framer Motion', 'CSS'],
    image: null,
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    description: 'Real-time weather application with location-based forecasts, interactive maps, and alerts.',
    category: 'frontend',
    tags: ['React', 'API Integration', 'Chart.js'],
    image: null,
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    id: 5,
    title: 'REST API Service',
    description: 'Scalable backend API with authentication, rate limiting, and comprehensive documentation.',
    category: 'backend',
    tags: ['Node.js', 'Express', 'JWT', 'Swagger'],
    image: null,
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    id: 6,
    title: 'Blog Platform',
    description: 'Content management system with markdown support, SEO optimization, and social sharing.',
    category: 'fullstack',
    tags: ['Next.js', 'MDX', 'Prisma', 'Vercel'],
    image: null,
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
]

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
]

export default function Portfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="portfolio" className={styles.portfolio} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.subtitle}>My recent work</span>
          <h2 className={styles.title}>Featured Projects</h2>
          <p className={styles.description}>
            Here are some of the projects I've worked on. Each one taught me something 
            new and helped me grow as a developer.
          </p>
        </motion.div>

        <motion.div
          className={styles.filters}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              className={`${styles.filterBtn} ${activeCategory === category.id ? styles.active : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        <div className={styles.grid}>
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              className={`${styles.card} ${project.featured ? styles.featured : ''}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              layout
            >
              <div className={styles.cardImage}>
                <div className={styles.imagePlaceholder}>
                  <span>Project Image</span>
                </div>
                <div className={styles.cardOverlay}>
                  <a href={project.liveUrl} className={styles.overlayBtn} target="_blank" rel="noopener noreferrer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    Live Demo
                  </a>
                  <a href={project.githubUrl} className={styles.overlayBtn} target="_blank" rel="noopener noreferrer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                    Code
                  </a>
                </div>
              </div>
              
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDescription}>{project.description}</p>
                <div className={styles.cardTags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className={styles.moreProjects}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
            See more on GitHub
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
