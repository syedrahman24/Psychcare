import React from 'react'
import { motion } from 'framer-motion'
import '../styles/Services.css'

const Services = () => {
  const services = [
    {
      icon: '🧠',
      title: 'Behavior Modification',
      description: 'Evidence-based strategies to help children develop positive behaviors and reduce challenging ones.',
      features: ['Positive reinforcement', 'Structured programs', 'Family involvement']
    },
    {
      icon: '⚡',
      title: 'ADHD Support',
      description: 'Comprehensive support for Attention Deficit Hyperactivity Disorder with personalized interventions.',
      features: ['Focus training', 'Executive function skills', 'Coping strategies']
    },
    {
      icon: '🌟',
      title: 'Autism Spectrum Disorder',
      description: 'Specialized therapy programs designed to support children with ASD and their families.',
      features: ['Social skills training', 'Communication support', 'Sensory integration']
    },
    {
      icon: '🤗',
      title: 'Anxiety Issues',
      description: 'Gentle, effective approaches to help children manage anxiety and build confidence.',
      features: ['Relaxation techniques', 'Cognitive strategies', 'Gradual exposure']
    },
    {
      icon: '📚',
      title: 'Special Education Support',
      description: 'Educational support services tailored to each child\'s unique learning needs.',
      features: ['Learning assessments', 'Academic strategies', 'IEP support']
    },
    {
      icon: '💬',
      title: 'Counseling & Psychological Services',
      description: 'Professional counseling services for children and families in a supportive environment.',
      features: ['Individual therapy', 'Family counseling', 'Group sessions']
    },
    {
      icon: '🌈',
      title: 'Developmental Disorders',
      description: 'Comprehensive support for various developmental challenges and delays.',
      features: ['Early intervention', 'Skill development', 'Progress monitoring']
    },
    {
      icon: '🎯',
      title: 'Personalized Programs',
      description: 'Customized therapeutic programs designed specifically for each child\'s needs.',
      features: ['Individual assessment', 'Goal setting', 'Regular reviews']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="services" className="services section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <div className="section-badge">
            <span className="badge-icon">🏥</span>
            <span>Our Services</span>
          </div>
          <h2 className="section-title">Therapeutic Services Offered</h2>
          <p className="section-subtitle">
            Comprehensive, evidence-based therapeutic services designed to support 
            every child's unique journey toward growth and development
          </p>
        </motion.div>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 20px 40px rgba(0, 95, 131, 0.15)"
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="service-icon">
                <span>{service.icon}</span>
              </div>
              
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                
                <ul className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="feature-item">
                      <span className="feature-bullet">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="service-overlay">
                <div className="overlay-content">
                  <div className="service-icon">
                    <span>{service.icon}</span>
                  </div>
                  
                  <div className="service-content">
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-description">{service.description}</p>
                    
                    <ul className="service-features">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="feature-item">
                          <span className="feature-bullet">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="parent-benefit">
                      <span className="benefit-icon">👨‍👩‍👧‍👦</span>
                      <span className="benefit-text">
                        Trusted by parents for effective, compassionate care
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="services-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="cta-background">
            <div className="floating-elements">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="floating-element"
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 180, 360],
                    opacity: [0.3, 0.7, 0.3]
                  }}
                  transition={{
                    duration: 4 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2
                  }}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`
                  }}
                />
              ))}
            </div>
          </div>
          
          <div className="cta-content">
            <div className="cta-header">
              <motion.div 
                className="cta-icon"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🌟
              </motion.div>
              <h3>Ready to Transform Your Child's Future?</h3>
              <p className="cta-subtitle">
                Join hundreds of families who have discovered the power of personalized therapeutic care
              </p>
            </div>
            
            <div className="cta-features">
              <div className="cta-feature">
                <span className="feature-icon">📋</span>
                <span>Free Initial Consultation</span>
              </div>
              <div className="cta-feature">
                <span className="feature-icon">🎯</span>
                <span>Personalized Treatment Plan</span>
              </div>
              <div className="cta-feature">
                <span className="feature-icon">👨‍👩‍👧‍👦</span>
                <span>Family-Centered Approach</span>
              </div>
            </div>
            
            <div className="cta-actions">
              <button 
                className="btn btn-primary cta-primary"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="btn-icon">📞</span>
                Schedule Free Consultation
              </button>
              {/* <button className="btn btn-secondary cta-secondary">
                <span className="btn-icon">📄</span>
                Download Service Guide
              </button> */}
            </div>
            
            <div className="cta-trust">
              <div className="trust-badges">
                <div className="trust-badge">
                  <span className="badge-icon">🏆</span>
                  <span>Licensed Professionals</span>
                </div>
                <div className="trust-badge">
                  <span className="badge-icon">🔒</span>
                  <span>Confidential Care</span>
                </div>
                <div className="trust-badge">
                  <span className="badge-icon">⭐</span>
                  <span>5-Star Rated</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
