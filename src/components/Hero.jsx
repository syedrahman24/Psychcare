import React, { useCallback } from 'react'
import { motion } from 'framer-motion'
import '../styles/Hero.css'

const Hero = React.memo(() => {
  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  return (
    <section className="hero" id="hero">
      <div className="hero-background">
        <div className="gradient-overlay"></div>
        <div className="floating-shapes">
          <motion.div 
            className="shape shape-1"
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="shape shape-2"
            animate={{ 
              y: [0, 15, 0],
              rotate: [0, -3, 0]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="shape shape-3"
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 2, 0]
            }}
            transition={{ 
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </div>
      
      <div className="container hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Empowering Through Therapy
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            "Nurturing Minds, Empowering Futures"
          </motion.p>
          
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Professional therapeutic services for children and families, 
            providing compassionate care in a supportive environment.
          </motion.p>
          
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('contact')}
            >
              Book a Session
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => scrollToSection('about')}
            >
              Learn More
            </button>
          </motion.div>
        </motion.div>
        
        <motion.div
          className="hero-images"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="children-gallery">
            <motion.div 
              className="child-image child-1"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="image-container">
                <div className="child-avatar">
                  <span className="child-emoji">👧</span>
                </div>
                <div className="image-glow"></div>
                <motion.div 
                  className="floating-icon icon-1"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  🌟
                </motion.div>
              </div>
              <div className="child-label">
                <span>Happy & Confident</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="child-image child-2"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="image-container">
                <div className="child-avatar">
                  <span className="child-emoji">👦</span>
                </div>
                <div className="image-glow"></div>
                <motion.div 
                  className="floating-icon icon-2"
                  animate={{ 
                    y: [0, 8, 0],
                    rotate: [0, -3, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  🎯
                </motion.div>
              </div>
              <div className="child-label">
                <span>Focused & Engaged</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="child-image child-3"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="image-container">
                <div className="child-avatar">
                  <span className="child-emoji">🧒</span>
                </div>
                <div className="image-glow"></div>
                <motion.div 
                  className="floating-icon icon-3"
                  animate={{ 
                    y: [0, 6, 0],
                    rotate: [0, 2, 0]
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                  💙
                </motion.div>
              </div>
              <div className="child-label">
                <span>Loved & Supported</span>
              </div>
            </motion.div>
          </div>
          
          <div className="gallery-decorations">
            <motion.div 
              className="decoration decoration-1"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              🌈
            </motion.div>
            <motion.div 
              className="decoration decoration-2"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              ✨
            </motion.div>
            <motion.div 
              className="decoration decoration-3"
              animate={{ 
                scale: [1, 1.15, 1],
                opacity: [0.4, 0.7, 0.4]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            >
              🤗
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
})

export default Hero
