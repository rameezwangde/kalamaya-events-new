import React from 'react';
import { motion } from 'framer-motion';
import '../styles/whyKalamaya.css';

// Clean, minimal SVGs for a premium look
const IconExperience = () => <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="opacity-90"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>;
const IconEvents = () => <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="opacity-90"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>;
const IconGlobe = () => <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="opacity-90"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>;
const IconSolutions = () => <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="opacity-90"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>;
const IconWindow = () => <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="opacity-90"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line></svg>;

const reasons = [
  { title: "30+ Years of Experience", icon: <IconExperience /> },
  { title: "3000+ Successful Events", icon: <IconEvents /> },
  { title: "Pan India & International Event Execution", icon: <IconGlobe /> },
  { title: "End-to-End Event Solutions", icon: <IconSolutions /> },
  { title: "Single Window Solution for All Event Requirements", icon: <IconWindow /> }
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
              <div className="reason-icon" style={{ display: 'flex', justifyContent: 'center', marginBottom: '25px', color: '#C8A15A' }}>
                {reason.icon}
              </div>
              <h4 className="reason-title" style={{ fontSize: '1.15rem', fontWeight: 600, letterSpacing: '0.05em' }}>{reason.title}</h4>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyKalamaya;
