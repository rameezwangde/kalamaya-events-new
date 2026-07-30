import React from 'react';
import { motion } from 'framer-motion';
import '../styles/contactForm.css';

const ContactForm = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        
        {/* Left Side: Info */}
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="contact-heading">PLANNING AN EVENT?</h2>
          <div className="title-underline left blue-underline"></div>
          
          <p className="contact-subtitle">
            Looking for an event management company, corporate event planner, or destination wedding specialist?
          </p>
          
          <p className="contact-desc">
            Get in touch with our team today. We would love to hear about your vision and help you bring it to life with flawless execution and premium service.
          </p>
          
          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <p>Based in India, executing events globally.</p>
            </div>
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <p>hello@kalamayaevents.com</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div 
          className="contact-form-wrapper"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <h3 className="form-title">Send us a message</h3>
            
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your full name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your email address" required />
            </div>

            <div className="form-group">
              <label htmlFor="eventType">Event Type</label>
              <select id="eventType">
                <option value="">Select an option</option>
                <option value="corporate">Corporate Event</option>
                <option value="wedding">Destination Wedding</option>
                <option value="other">Other Event</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="4" placeholder="Tell us about your event..." required></textarea>
            </div>

            <button type="submit" className="submit-btn">SUBMIT INQUIRY</button>
          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactForm;
