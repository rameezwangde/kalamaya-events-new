import React from 'react';
import { motion } from 'framer-motion';
import '../styles/industriesWeServe.css';

const industries = [
  "Healthcare",
  "IT & Technology",
  "Manufacturing",
  "Automobile",
  "Education",
  "Government",
  "FMCG",
  "Retail"
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

const IndustriesWeServe = () => {
  return (
    <section className="industries-section">
      <div className="industries-container">
        <motion.div 
          className="section-title-wrapper center-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="section-title">INDUSTRIES WE SERVE</h3>
          <div className="title-underline"></div>
        </motion.div>

        <motion.div 
          className="industries-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {industries.map((industry, idx) => (
            <motion.div className="industry-card" key={idx} variants={itemVariants}>
              <div className="industry-content">
                <span className="industry-name">{industry}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;
