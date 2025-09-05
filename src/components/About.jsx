import React from 'react'
import { motion } from 'framer-motion'
import '../styles/About.css'

const About = React.memo(() => {
  return (
    <section id="about" className="about section">
      <div className="about-background">
        <div className="floating-particles">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
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

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <div className="section-badge">
            <span className="badge-icon">✨</span>
            <span>About Our Center</span>
          </div>
          <h2 className="section-title">
            Where <span className="highlight-text">Healing</span> Meets <span className="highlight-text">Hope</span>
          </h2>
          <p className="section-subtitle" style={{color:"#fff"}}>
            Transforming lives through compassionate care, evidence-based practices, 
            and unwavering dedication to every child's unique journey
          </p>
        </motion.div>

        {/* Mission and Vision Cards - Full Width */}
        <motion.div 
          className="mission-vision-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="mission-vision-container">
            <motion.div 
              className="story-card mission-card"
              whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0, 95, 131, 0.15)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="story-icon">🌱</div>
              <div className="story-text">
                <h4>Our Mission</h4>
                <p>
                  Every child deserves the opportunity to flourish. We provide specialized therapeutic 
                  services that nurture growth, build confidence, and empower families on their unique journey.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="story-card vision-card"
              whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0, 95, 131, 0.15)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="story-icon">🎯</div>
              <div className="story-text">
                <h4>Our Vision</h4>
                <p>
                  We blend evidence-based practices with genuine compassion, creating a safe haven 
                  where children feel understood, supported, and empowered to overcome challenges.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Founder Section - Full Width Horizontal Layout */}
        <motion.div 
          className="founder-section-full"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="founder-horizontal-content">
            <div className="founder-left">
              <div className="founder-visual">
                <div className="visual-container">
                  <div className="main-circle">
                    <div className="inner-circle">
                      <div className="therapist-avatar">
                        <span className="avatar-icon">👩‍⚕️</span>
                      </div>
                    </div>
                    <div className="orbit-elements">
                      <motion.div 
                        className="orbit-item item-1"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      >
                        <span>🧠</span>
                      </motion.div>
                      <motion.div 
                        className="orbit-item item-2"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                      >
                        <span>💙</span>
                      </motion.div>
                      <motion.div 
                        className="orbit-item item-3"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                      >
                        <span>🌟</span>
                      </motion.div>
                      <motion.div 
                        className="orbit-item item-4"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                      >
                        <span>🤗</span>
                      </motion.div>
                    </div>
                  </div>
                  <div className="glow-effect"></div>
                </div>
              </div>
            </div>

            <div className="founder-right">
              <div className="founder-info">
                <div className="founder-header">
                  <div className="founder-badge">
                    <span className="founder-icon">👑</span>
                    <span className="badge-title">Founder & Director</span>
                  </div>
                  <h3 className="founder-name">Mrs. Ayesha Siddiqa</h3>
                  <p className="founder-subtitle">Caring Hands by The Psychcare</p>
                </div>
                
                <div className="founder-description">
                  <p>
                    With over a decade of dedicated service in child psychology and therapeutic intervention, 
                    Mrs. Ayesha Siddiqa has transformed countless young lives through her compassionate approach 
                    and evidence-based methodologies.
                  </p>
                  <p>
                    Holding advanced degrees in Clinical Psychology and Child Development, she has continuously 
                    expanded her expertise through specialized training in autism spectrum disorders, ADHD management, 
                    behavioral therapy, and family counseling.
                  </p>
                </div>
                
                <div className="founder-achievements">
                  <div className="achievement-item">
                    <div className="achievement-icon">🏆</div>
                    <div className="achievement-text">
                      <h5>500+ Children Helped</h5>
                      <p>Successfully supported families across diverse therapeutic needs</p>
                    </div>
                  </div>
                  
                  <div className="achievement-item">
                    <div className="achievement-icon">📚</div>
                    <div className="achievement-text">
                      <h5>Certified Specialist</h5>
                      <p>Advanced certifications in multiple therapeutic modalities</p>
                    </div>
                  </div>
                  
                  <div className="achievement-item">
                    <div className="achievement-icon">🌟</div>
                    <div className="achievement-text">
                      <h5>Community Leader</h5>
                      <p>Active advocate for children's mental health awareness</p>
                    </div>
                  </div>
                  
                  <div className="achievement-item">
                    <div className="achievement-icon">💝</div>
                    <div className="achievement-text">
                      <h5>Family-Centered Care</h5>
                      <p>Holistic approach involving entire family support systems</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
})

export default About
