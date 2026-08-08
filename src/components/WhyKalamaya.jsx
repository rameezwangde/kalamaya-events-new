import React from 'react';
import { motion } from 'framer-motion';
import '../styles/whyKalamaya.css';

const reasons = [
  { number: "30+", label: "Years of\nExperience" },
  { number: "3000+", label: "Successful\nEvents" },
  { number: "25+", label: "Cities &\nDestinations" },
  { number: "98%", label: "Client\nSatisfaction" },
  { number: "1", label: "Single Window\nSolution" },
];

const WhyKalamaya = () => {
  return (
    <section className="why-section">
      <div className="why-container">
        <motion.div
          className="why-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <p className="why-eyebrow">WHY CHOOSE US</p>
          <h3 className="why-heading">THE KALAMAYA DIFFERENCE</h3>
        </motion.div>

        <motion.div
          className="why-strip"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, delay: 0.15 }}
        >
          {reasons.map((item, idx) => (
            <div className="why-stat" key={idx}>
              <span className="why-stat-number">{item.number}</span>
              <span className="why-stat-label">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyKalamaya;
