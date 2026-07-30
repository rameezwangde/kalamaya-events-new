import React from 'react';
import { motion } from 'framer-motion';
import '../styles/callToAction.css';

const CallToAction = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <motion.div 
          className="cta-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="cta-heading">LET'S CREATE YOUR NEXT EVENT</h2>
          <p className="cta-desc">Reach out to our experts and turn your vision into an unforgettable experience.</p>
          <button className="cta-btn">
            CONTACT US <span className="arrow">&#x2197;</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
