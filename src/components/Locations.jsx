import React from 'react';
import { motion } from 'framer-motion';
import '../styles/locations.css';

const locations = [
  "Kerala",
  "Tamil Nadu",
  "Karnataka",
  "Andhra Pradesh",
  "Maharashtra",
  "Rajasthan",
  "New Delhi",
  "Kolkatta",
  "UAE",
  "Singapore",
  "London"
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const Locations = () => {
  return (
    <section className="locations-section">
      <div className="locations-container">
        <motion.div 
          className="section-title-wrapper center-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="section-title">OUR LOCATIONS</h3>
          <div className="title-underline"></div>
          <p className="locations-description">
            We deliver exceptional event experiences across major domestic and international destinations.
          </p>
        </motion.div>

        <motion.div 
          className="locations-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {locations.map((location, idx) => (
            <motion.div className="location-card" key={idx} variants={itemVariants}>
              <div className="location-content">
                <span className="location-name">{location}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Locations;
