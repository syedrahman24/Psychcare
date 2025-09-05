import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import '../styles/Testimonials.css'

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Mother of 8-year-old with ADHD",
      content: "The team at Psychcare has been incredible. My son has made remarkable progress with his attention and behavior. Mrs. Ayesha's approach is both professional and caring.",
      rating: 5,
      image: "👩"
    },
    {
      name: "Michael Chen",
      role: "Father of 6-year-old with ASD",
      content: "We were worried about finding the right support for our daughter. Psychcare provided exactly what we needed - understanding, expertise, and genuine care for our family.",
      rating: 5,
      image: "👨"
    },
    {
      name: "Priya Sharma",
      role: "Mother of 10-year-old",
      content: "The anxiety support program has been life-changing for our son. He's more confident now and has learned valuable coping strategies. Highly recommend Psychcare!",
      rating: 5,
      image: "👩"
    },
    {
      name: "David Williams",
      role: "Father of 7-year-old",
      content: "Professional, compassionate, and effective. The personalized approach really makes a difference. Our child looks forward to every session.",
      rating: 5,
      image: "👨"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="testimonials section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <div className="section-badge">
            <span className="badge-icon">💬</span>
            <span>Testimonials</span>
          </div>
          <h2 className="section-title">What Families Say</h2>
          <p className="section-subtitle">
            Hear from the families who have experienced the positive impact 
            of our therapeutic services
          </p>
        </motion.div>

        <div className="testimonials-container">
          <div className="testimonials-slider">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                className="testimonial-card"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <div className="testimonial-content">
                  <div className="quote-icon">"</div>
                  <p className="testimonial-text">
                    {testimonials[currentTestimonial].content}
                  </p>
                  
                  <div className="rating">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <span key={i} className="star">⭐</span>
                    ))}
                  </div>
                </div>
                
                <div className="testimonial-author">
                  <div className="author-image">
                    <span>{testimonials[currentTestimonial].image}</span>
                  </div>
                  <div className="author-info">
                    <h4 className="author-name">{testimonials[currentTestimonial].name}</h4>
                    <p className="author-role">{testimonials[currentTestimonial].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="testimonials-controls">
            <button 
              className="control-btn prev-btn"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              ←
            </button>
            
            <div className="testimonials-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                  onClick={() => setCurrentTestimonial(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              className="control-btn next-btn"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>

        
      </div>
    </section>
  )
}

export default Testimonials
