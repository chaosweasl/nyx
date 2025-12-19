'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import styles from './Contact.module.css'

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    ),
  },
  {
    name: 'Email',
    url: 'mailto:hello@example.com',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    alert('Thanks for your message! I\'ll get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section id="contact" className={styles.contact} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.subtitle}>Let's connect</span>
          <h2 className={styles.title}>Get In Touch</h2>
          <p className={styles.description}>
            I'm always open to discussing new projects, creative ideas, or opportunities 
            to be part of something amazing. Feel free to reach out!
          </p>
        </motion.div>

        <div className={styles.content}>
          <motion.div
            className={styles.info}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Let's talk about everything!</h3>
              <p className={styles.infoText}>
                Don't like forms? Send me an email directly at{' '}
                <a href="mailto:hello@example.com" className={styles.emailLink}>
                  hello@example.com
                </a>
              </p>
              
              <div className={styles.socials}>
                <p className={styles.socialsLabel}>Find me on</p>
                <div className={styles.socialLinks}>
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      className={styles.socialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.name}
                      whileHover={{ scale: 1.1, y: -3 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.decorativeShape}></div>
          </motion.div>

          <motion.form
            className={styles.form}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={styles.input}
                placeholder="John Doe"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
                placeholder="john@example.com"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={styles.textarea}
                placeholder="Hi! I'd like to talk about..."
                rows={5}
                required
              />
            </div>

            <button 
              type="submit" 
              className={styles.submitBtn}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className={styles.spinner}></span>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
