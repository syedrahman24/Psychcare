import React from 'react'
import { motion } from 'framer-motion'
import logo from '../assets/logo.png';
import '../styles/Footer.css'

const Footer = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-background">
        <div className="footer-shapes">
          <motion.div 
            className="footer-shape shape-1"
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div 
            className="footer-shape shape-2"
            animate={{ 
              rotate: [360, 0],
              scale: [1, 0.9, 1]
            }}
            transition={{ 
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>
      </div>

      <div className="container">
        <div className="footer-content">
          <motion.div
            className="footer-brand"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <img src={logo} alt="Logo" />
              </div>
              <div className="footer-logo-text">
                <span className="footer-logo-main">The Psychcare</span>
                <span className="footer-logo-sub">Therapy Center</span>
              </div>
            </div>
            <p className="footer-tagline">
              "Nurturing Minds, Empowering Futures"
            </p>
            <p className="footer-description">
              Providing compassionate, professional therapeutic services 
              for children and families in a supportive environment.
            </p>
            <div className="footer-social">
              <motion.div 
                className="social-icon"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                📧
              </motion.div>
              <motion.div 
                className="social-icon"
                whileHover={{ scale: 1.1, rotate: -5 }}
                transition={{ duration: 0.3 }}
              >
                📞
              </motion.div>
              <motion.div 
                className="social-icon"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                📍
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="footer-links"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4>Quick Links</h4>
            <ul>
              <li><button onClick={() => scrollToSection('hero')}>Home</button></li>
              <li><button onClick={() => scrollToSection('about')}>About Us</button></li>
              <li><button onClick={() => scrollToSection('services')}>Services</button></li>
              <li><button onClick={() => scrollToSection('features')}>Why Choose Us</button></li>
              <li><button onClick={() => scrollToSection('testimonials')}>Testimonials</button></li>
              <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
            </ul>
          </motion.div>

          <motion.div
            className="footer-services"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4>Our Services</h4>
            <ul>
              <li>Behavior Modification</li>
              <li>ADHD Support</li>
              <li>Autism Spectrum Disorder</li>
              <li>Anxiety Management</li>
              <li>Special Education</li>
              <li>Family Counseling</li>
            </ul>
          </motion.div>

          <motion.div
            className="footer-contact"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4>Contact Info</h4>
            <div className="contact-items">
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span>8885800560</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <span>psychcare4you@gmail.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div className="address">
                  <span>5th floor, Sri Keertis Residency</span>
                  <span>Kondapur, Telangana 500084</span>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🕒</span>
                <div className="hours">
                  <span>Mon-Fri: 10:00 AM - 5:00 PM</span>
                  <span>Sat: By Appointment Only</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} The Psychcare Therapy Center. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>Accessibility</span>
            </div>
          </div>
          
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
