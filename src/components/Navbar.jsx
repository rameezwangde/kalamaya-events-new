import React from 'react';
import { motion } from 'framer-motion';
import { NavLink, Link } from 'react-router-dom';
import '../styles/navbar.css';
import eventsLogo from '../assets/events logo.jpeg';

const navItems = [
  { name: 'Home', path: '/events' },
  { name: 'About Kalamaya', path: '/about' },
  { name: 'Corporate Event Services', path: '/corporate' },
  { name: 'Industries We Serve', path: '/industries' },
  { name: 'Destination Weddings', path: '/weddings' },
  { name: 'Portfolio / Case Studies', path: '/portfolio' },
  { name: 'Locations', path: '/locations' },
  { name: 'Blog & Insights', path: '/blogs' },
  { name: 'Contact', path: '/contact' },
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
          <Link to="/">
            <img src={eventsLogo} alt="Kalamaya Events" className="nav-img-logo" />
          </Link>
        </div>

        {/* LINKS */}
        <ul className="nav-links">
          {navItems.map((item, index) => (
            <motion.li key={index} variants={itemVariants}>
              <NavLink
                to={item.path}
                className={({ isActive }) => (isActive && item.path !== '#') ? 'active' : ''}
              >
                {item.name}
                <span className="underline-effect"></span>
              </NavLink>
            </motion.li>
          ))}
        </ul>

        {/* CTA */}
        <motion.div className="nav-cta-wrapper" variants={itemVariants}>
          <Link to="/" className="nav-back-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="nav-back-icon">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            <span>Main Menu</span>
          </Link>
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
