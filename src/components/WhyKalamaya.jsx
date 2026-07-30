import React from 'react';
import { motion } from 'framer-motion';
import '../styles/whyKalamaya.css';

const reasons = [
  { title: "30+ Years of Experience", icon: "🏆" },
  { title: "3000+ Successful Events", icon: "🎉" },
  { title: "Pan India & International Event Execution", icon: "🌍" },
  { title: "End-to-End Event Solutions", icon: "🛠️" },
  { title: "Single Window Solution for All Event Requirements", icon: "🏢" }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

const WhyKalamaya = () => {
  return (
    <section className="why-section">
      <div className="why-container">
        <motion.div 
          className="section-title-wrapper center-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="section-title">WHY KALAMAYA</h3>
          <div className="title-underline"></div>
        </motion.div>

        <motion.div 
          className="reasons-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {reasons.map((reason, idx) => (
            <motion.div className="reason-card" key={idx} variants={itemVariants}>
              <div className="reason-icon">{reason.icon}</div>
              <h4 className="reason-title">{reason.title}</h4>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyKalamaya;
