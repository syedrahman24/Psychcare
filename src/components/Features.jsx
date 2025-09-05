import React from 'react'
import { motion } from 'framer-motion'
import '../styles/Features.css'

const Features = () => {
  const features = [
    {
      icon: '👩‍⚕️',
      title: 'Experienced Therapists',
      description: 'Our team consists of qualified professionals with years of experience in child therapy and development.',
      highlight: 'Certified & Licensed'
    },
    {
      icon: '🎯',
      title: 'Personalized Programs',
      description: 'Every child receives a customized treatment plan tailored to their specific needs and goals.',
      highlight: 'Individual Approach'
    },
    {
      icon: '🏠',
      title: 'Child-Friendly Environment',
      description: 'Our center is designed to be welcoming, safe, and comfortable for children of all ages.',
      highlight: 'Safe & Welcoming'
    },
    {
      icon: '🔒',
      title: 'Confidential & Supportive Care',
      description: 'We maintain strict confidentiality while providing emotional support to families.',
      highlight: 'Privacy Protected'
    },
    {
      icon: '📊',
      title: 'Evidence-Based Practices',
      description: 'All our therapeutic interventions are based on proven, research-backed methodologies.',
      highlight: 'Research-Backed'
    },
    {
      icon: '👨‍👩‍👧‍👦',
      title: 'Family-Centered Approach',
      description: 'We involve families in the therapeutic process to ensure comprehensive support.',
      highlight: 'Holistic Care'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="features" className="features section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <div className="section-badge">
            <span className="badge-icon">⭐</span>
            <span>Why Choose Us</span>
          </div>
          <h2 className="section-title">Why Choose Psychcare?</h2>
          <p className="section-subtitle">
            Discover what makes our therapy center the trusted choice for families 
            seeking exceptional care for their children
          </p>
        </motion.div>

        <motion.div
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 25px 50px rgba(0, 95, 131, 0.2)"
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="feature-header">
                <div className="feature-icon">
                  <span>{feature.icon}</span>
                  <div className="icon-glow"></div>
                </div>
                <div className="feature-highlight">
                  {feature.highlight}
                </div>
              </div>
              
              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
              
              <div className="feature-border"></div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="features-stats"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="stats-grid">
            <motion.div 
              className="stat-item"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="stat-number">500+</div>
              <div className="stat-label">Children Helped</div>
            </motion.div>
            
            <motion.div 
              className="stat-item"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="stat-number">5+</div>
              <div className="stat-label">Years Experience</div>
            </motion.div>
            
            <motion.div 
              className="stat-item"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="stat-number">98%</div>
              <div className="stat-label">Family Satisfaction</div>
            </motion.div>
            
            <motion.div 
              className="stat-item"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support Available</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features
