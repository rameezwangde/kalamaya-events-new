import React from 'react';
import { motion } from 'framer-motion';
import '../styles/caseStudies.css';

// Placeholder for actual portfolio items
const portfolioItems = [
  { category: "Corporate Event", title: "Global Leadership Summit" },
  { category: "Destination Wedding", title: "Royal Jaipur Wedding" },
  { category: "Product Launch", title: "Automobile Expo" },
  { category: "Conference", title: "Tech Innovators Convention" },
  { category: "Dealer Meet", title: "Annual Partners Retreat" },
  { category: "Public Event", title: "City Cultural Festival" }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const CaseStudies = () => {
  return (
    <section className="portfolio-section">
      <div className="portfolio-container">
        
        {/* Intro Area */}
        <motion.div 
          className="portfolio-intro"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="portfolio-heading">EVENTS THAT SPEAK FOR THEMSELVES</h2>
          <div className="title-underline center blue-underline"></div>
          <p className="portfolio-subtitle">
            Thousands of successful events. Hundreds of happy clients. Decades of trusted relationships.
          </p>
          <p className="portfolio-desc">
            Explore our corporate events, destination weddings, conferences, and brand experiences.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div 
          className="portfolio-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {portfolioItems.map((item, idx) => (
            <motion.div className="portfolio-card" key={idx} variants={itemVariants}>
              <div className="portfolio-image-placeholder">
                <span className="image-icon">🖼️</span>
                <p>Image Coming Soon</p>
              </div>
              <div className="portfolio-info">
                <span className="portfolio-category">{item.category}</span>
                <h3 className="portfolio-title">{item.title}</h3>
                <button className="portfolio-link">View Case Study &rarr;</button>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default CaseStudies;
