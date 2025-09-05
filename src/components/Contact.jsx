import React, { useState, useCallback, useMemo } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import '../styles/Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  // Input sanitization function
  const sanitizeInput = useCallback((input) => {
    return input
      .replace(/<script[^>]*>.*?<\/script>/gi, '') // Remove script tags
      .replace(/<[^>]*>/g, '') // Remove HTML tags
      .replace(/javascript:/gi, '') // Remove javascript: protocol
      .replace(/on\w+=/gi, '') // Remove event handlers
  }, [])

  // Input validation
  const validateInput = useCallback((name, value) => {
    switch (name) {
      case 'name':
        return /^[a-zA-Z\s]{2,50}$/.test(value) && value.trim().length >= 2
      case 'email':
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
      case 'phone':
        const phoneOnly = value.replace(/[\s\-\(\)]/g, '')
        return /^[\+]?[0-9]{10,15}$/.test(phoneOnly)
      case 'message':
        return value.trim().length >= 10 && value.length <= 1000
      default:
        return true
    }
  }, [])

  // Real-time input filtering
  const filterInput = useCallback((name, value) => {
    switch (name) {
      case 'name':
        // Allow only letters and spaces, limit consecutive spaces
        return value.replace(/[^a-zA-Z\s]/g, '').replace(/\s{2,}/g, ' ')
      case 'phone':
        // Allow only numbers, +, spaces, hyphens, parentheses
        return value.replace(/[^0-9\+\s\-\(\)]/g, '')
      case 'email':
        // Remove spaces and convert to lowercase
        return value.replace(/\s/g, '').toLowerCase()
      case 'message':
        // Allow all characters but limit length
        return value.slice(0, 1000)
      default:
        return value
    }
  }, [])

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target
    
    // First apply input filtering to prevent unwanted characters
    const filteredValue = filterInput(name, value)
    
    // Then sanitize for security
    const sanitizedValue = sanitizeInput(filteredValue)
    
    // Update form data with filtered and sanitized value
    setFormData(prev => ({
      ...prev,
      [name]: sanitizedValue
    }))
  }, [sanitizeInput, filterInput])

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault()
    
    // Validate all fields before submission
    const validationErrors = []
    
    if (!validateInput('name', formData.name)) {
      validationErrors.push('Name must be 2-50 characters and contain only letters and spaces')
    }
    if (!validateInput('email', formData.email)) {
      validationErrors.push('Please enter a valid email address')
    }
    if (formData.phone && !validateInput('phone', formData.phone)) {
      validationErrors.push('Phone number must be 10-15 digits')
    }
    if (!validateInput('message', formData.message)) {
      validationErrors.push('Message must be 10-1000 characters')
    }
    
    if (validationErrors.length > 0) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus(''), 5000)
      return
    }
    
    setIsSubmitting(true)
    
    try {
      // Prepare email template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'Not provided',
        message: formData.message,
        to_name: 'PsychCare Team',
        reply_to: formData.email,
        subject: `New Contact Form Submission from ${formData.name}`
      }

      // Send email using EmailJS
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      console.log('Email sent successfully:', result.text)
      
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '' })
      
      setTimeout(() => {
        setSubmitStatus('')
      }, 5000)
    } catch (error) {
      console.error('Email sending failed:', error)
      setIsSubmitting(false)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus(''), 5000)
    }
  }, [formData, validateInput, sanitizeInput])

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <div className="section-badge">
            <span className="badge-icon">📞</span>
            <span>Contact Us</span>
          </div>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Ready to start your child's therapeutic journey? Contact us today to schedule 
            a consultation and learn how we can support your family.
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="info-header">
              <h3>Contact Information</h3>
              <p>We're here to help and answer any questions you might have.</p>
            </div>

            <div className="info-items">
              <div className="info-item">
                <div className="info-icon">📞</div>
                <div className="info-details">
                  <h4>Phone</h4>
                  <p>8885800560</p>
                  <span>Call us for immediate assistance</span>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">✉️</div>
                <div className="info-details">
                  <h4>Email</h4>
                  <p>psychcare4you@gmail.com</p>
                  <span>Send us your questions anytime</span>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">📍</div>
                <div className="info-details">
                  <h4>Location</h4>
                  <p>5th floor, Sri Keertis Residency</p>
                  <p>Seshadri Marg, Behind Mataji Traders</p>
                  <p>Park Avenue Colony, Raja Rajeshwara Nagar</p>
                  <p>Kondapur, Telangana 500084</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">🕒</div>
                <div className="info-details">
                  <h4>Office Hours</h4>
                  <p><strong>Monday - Friday:</strong> 10:00 AM - 5:00 PM</p>
                  <p><strong>Saturday:</strong> By Appointments Only</p>
                  <p><strong>Sunday:</strong> Closed</p>
                </div>
              </div>
            </div>

           
          </motion.div>

          <motion.div
            className="contact-form-container"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="form-header">
              <h3>Send us a Message</h3>
              <p>Fill out the form below and we'll get back to you as soon as possible.</p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your full name"
                  maxLength="50"
                  pattern="[a-zA-Z\s]{2,50}"
                  title="Name should contain only letters and spaces (2-50 characters)"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                    maxLength="100"
                    title="Please enter a valid email address"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 XXXXX XXXXX"
                    maxLength="20"
                    pattern="[\+]?[0-9\s\-\(\)]{10,20}"
                    title="Phone number should contain only numbers, +, spaces, hyphens, and parentheses (10-15 digits)"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  placeholder="Tell us about your child's needs and how we can help..."
                  maxLength="1000"
                  minLength="10"
                  title="Message should be between 10-1000 characters"
                ></textarea>
              </div>

              <button
                type="submit"
                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>

              {submitStatus === 'success' && (
                <motion.div
                  className="success-message"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="success-icon">✅</span>
                  Thank you! Your message has been sent successfully. We'll get back to you soon.
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div
                  className="error-message"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="error-icon">❌</span>
                  Please check your input and try again. All fields must be valid.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>

        <motion.div
          className="contact-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="cta-background">
            <div className="gradient-orbs">
              <motion.div 
                className="orb orb-1"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.7, 0.4]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="orb orb-2"
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </div>
          </div>
          
          <div className="cta-content">
            <div className="cta-header">
              <motion.div 
                className="cta-icon-large"
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                🚀
              </motion.div>
              <h3>Ready to Begin Your Child's Journey?</h3>
              <p className="cta-description">
                Take the first step towards unlocking your child's full potential. 
                Our expert team is here to guide you every step of the way.
              </p>
            </div>
            
            <div className="cta-benefits">
              <div className="benefit-item">
                <div className="benefit-icon">⚡</div>
                <div className="benefit-content">
                  <h4>Quick Response</h4>
                  <p>Get a response within 24 hours</p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">🎯</div>
                <div className="benefit-content">
                  <h4>Personalized Care</h4>
                  <p>Tailored treatment plans for each child</p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">🏆</div>
                <div className="benefit-content">
                  <h4>Proven Results</h4>
                  <p>500+ successful transformations</p>
                </div>
              </div>
            </div>
            
            <div className="cta-actions">
              <button className="btn btn-primary cta-primary">
                <span className="btn-icon">📅</span>
                Book Free Consultation
              </button>
              <button className="btn btn-secondary cta-secondary">
                <span className="btn-icon">📱</span>
                Call Now: 8885800560
              </button>
            </div>
            
            <div className="cta-guarantee">
              <div className="guarantee-badge">
                <span className="guarantee-icon">✅</span>
                <div className="guarantee-text">
                  <strong>100% Confidential</strong>
                  <span>Your privacy is our priority</span>
                </div>
              </div>
              <div className="guarantee-badge">
                <span className="guarantee-icon">💝</span>
                <div className="guarantee-text">
                  <strong>No Obligation</strong>
                  <span>Free consultation with no strings attached</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
