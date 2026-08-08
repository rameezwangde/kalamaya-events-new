import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="luxury-footer">
      {/* Giant Brand Statement */}
      <div className="footer-hero">
        <motion.div
          className="footer-hero-inner"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.22, 0.72, 0.2, 1] }}
        >
          <h2 className="footer-brand-heading">
            LET'S CREATE
            <br />
            <span className="footer-brand-accent">SOMETHING</span>
            <br />
            EXTRAORDINARY.
          </h2>
          <div className="footer-hero-cta">
            <Link to="/contact" className="footer-cta-btn">
              GET IN TOUCH <span className="footer-cta-arrow">&#x2197;</span>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="footer-main-divider" />

      {/* Footer Grid */}
      <div className="footer-grid-wrap">
        <div className="footer-grid">
          {/* Col 1: About */}
          <div className="footer-col">
            <h3 className="footer-col-title">KALAMAYA</h3>
            <p className="footer-col-desc">
              A premier event management company crafting extraordinary
              experiences across India and internationally for over 30 years.
            </p>
            <div className="footer-socials">
              <a href="#" className="footer-social" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
              <a href="#" className="footer-social" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
              </a>
              <a href="#" className="footer-social" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-label">QUICK LINKS</h4>
            <ul className="footer-links">
              <li><Link to="/events">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/blogs">Blog & Insights</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="footer-col">
            <h4 className="footer-col-label">OUR SERVICES</h4>
            <ul className="footer-links">
              <li><Link to="/corporate">Corporate Events</Link></li>
              <li><Link to="/weddings">Destination Weddings</Link></li>
              <li><a href="#">Social Celebrations</a></li>
              <li><a href="#">Exhibitions & Trade Shows</a></li>
              <li><a href="#">Venue Management</a></li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div className="footer-col">
            <h4 className="footer-col-label">CONTACT</h4>
            <div className="footer-contact-item">
              <span className="footer-contact-key">Email</span>
              <a href="mailto:hello@kalamaya.com" className="footer-contact-val">hello@kalamaya.com</a>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-key">Phone</span>
              <a href="tel:+919319966567" className="footer-contact-val">+91 93199 66567</a>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-key">Address</span>
              <p className="footer-contact-val">Delhi, India</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom-bar">
        <p className="footer-copy">&copy; {new Date().getFullYear()} Kalamaya Events India. All rights reserved.</p>
        <div className="footer-legal">
          <a href="#">Privacy Policy</a>
          <span className="footer-dot">&bull;</span>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
