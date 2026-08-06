import React from 'react';
import { motion } from 'framer-motion';
import '../styles/industriesWeServe.css';

const industries = [
  "Healthcare & Pharmaceuticals",
  "Information Technology (IT) & Software",
  "Banking, Financial Services & Insurance (BFSI)",
  "Automobile & Mobility",
  "Manufacturing & Industrial",
  "FMCG & Consumer Brands",
  "Retail & E-commerce",
  "Real Estate & Infrastructure",
  "Education & Universities",
  "Government & Public Sector",
  "Hospitality & Tourism",
  "Telecom & Technology",
  "Energy & Utilities",
  "Media & Entertainment",
  "Startups & Emerging Businesses",
  "Trade Associations & Professional Bodies",
  "NGOs & Non-Profit Organizations"
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
    <section id="industries-we-serve" className="industries-section">
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
          <p className="industries-description">
            From healthcare conferences and pharmaceutical launches to automobile dealer meets, technology summits, government events, and destination weddings, Kalamaya delivers customized event solutions across industries and sectors.
          </p>
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
