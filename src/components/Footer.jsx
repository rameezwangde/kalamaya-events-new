import React from 'react';
import { motion } from 'framer-motion';
import '../styles/footer.css';

const IconFacebook = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;
const IconInstagram = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
const IconLinkedIn = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const Footer = () => {
  return (
    <footer className="luxury-footer">
      <div className="footer-container">
        
        <motion.div 
          className="footer-top"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariants}
        >
          <div className="footer-brand">
            <h2 className="footer-logo-text">KALAMAYA</h2>
            <p className="footer-tagline">CRAFTING EXPERIENCES. CREATING LEGACIES.</p>
          </div>
          <div className="footer-cta">
            <h3 className="cta-heading">Ready to plan your next event?</h3>
            <button className="btn-primary">LET'S TALK <span className="arrow">&#x2197;</span></button>
          </div>
        </motion.div>

        <div className="footer-divider"></div>

        <motion.div 
          className="footer-middle"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariants}
        >
          <div className="footer-col">
            <h4 className="footer-heading">ABOUT KALAMAYA</h4>
            <p className="footer-desc">
              We are a premier event management company dedicated to turning your vision into breathtaking realities across India and globally.
            </p>
            <div className="footer-socials">
              <a href="#" className="social-link"><IconFacebook /></a>
              <a href="#" className="social-link"><IconInstagram /></a>
              <a href="#" className="social-link"><IconLinkedIn /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">QUICK LINKS</h4>
            <ul className="footer-links">
              <li><a href="/events">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/portfolio">Portfolio</a></li>
              <li><a href="#">Blog & Insights</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">OUR SERVICES</h4>
            <ul className="footer-links">
              <li><a href="/corporate">Corporate Events</a></li>
              <li><a href="/weddings">Destination Weddings</a></li>
              <li><a href="#">Social Celebrations</a></li>
              <li><a href="#">Exhibitions & Trade Shows</a></li>
              <li><a href="#">Venue Management</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">GET IN TOUCH</h4>
            <ul className="footer-contact">
              <li>
                <span className="contact-label">Email:</span>
                <a href="mailto:hello@kalamaya.com">hello@kalamaya.com</a>
              </li>
              <li>
                <span className="contact-label">Phone:</span>
                <a href="tel:+919876543210">+91 98765 43210</a>
              </li>
              <li>
                <span className="contact-label">Address:</span>
                <p>123 Luxury Avenue, Bandra West, Mumbai, India</p>
              </li>
            </ul>
          </div>
        </motion.div>

        <div className="footer-bottom">
          <p className="copyright">&copy; {new Date().getFullYear()} Kalamaya Events India. All rights reserved.</p>
          <div className="legal-links">
            <a href="#">Privacy Policy</a>
            <span className="dot-sep">&bull;</span>
            <a href="#">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
