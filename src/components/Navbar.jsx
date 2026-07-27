import React from 'react';
import { motion } from 'framer-motion';
import '../styles/navbar.css';
import eventsLogo from '../assets/events logo.jpeg';

const navItems = [
  { name: 'Home', active: true },
  { name: 'About Kalamaya', active: false },
  { name: 'Corporate Event Services', active: false },
  { name: 'Industries We Serve', active: false },
  { name: 'Destination Weddings', active: false },
  { name: 'Portfolio / Case Studies', active: false },
  { name: 'Locations', active: false },
  { name: 'Blog & Insights', active: false },
  { name: 'Contact', active: false },
];

const containerVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

const Navbar = () => {
  return (
    <motion.nav 
      className="luxury-navbar"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="nav-container">
        {/* LOGO */}
        <div className="nav-logo">
           <img src={eventsLogo} alt="Kalamaya Events" className="nav-img-logo" />
        </div>
        
        {/* LINKS */}
        <ul className="nav-links">
          {navItems.map((item, index) => (
            <motion.li key={index} variants={itemVariants}>
              <a href="#" className={item.active ? 'active' : ''}>
                {item.name}
                <span className="underline-effect"></span>
              </a>
            </motion.li>
          ))}
        </ul>
        
        {/* CTA */}
        <motion.div className="nav-cta-wrapper" variants={itemVariants}>
          <button className="nav-cta">
            LET'S PLAN YOUR EVENT <span className="cta-arrow">&#x2197;</span>
          </button>
        </motion.div>

        {/* MOBILE HAMBURGER (hidden on desktop) */}
        <div className="hamburger">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
