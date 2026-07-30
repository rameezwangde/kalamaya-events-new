import React from 'react';
import { motion } from 'framer-motion';
import '../styles/corporateEventServices.css';

const corporateServicesList = [
  "Annual Meetings",
  "Leadership Summits",
  "Sales Conferences",
  "Dealer Meets",
  "Channel Partner Programs",
  "Product Launch Events",
  "Award Functions",
  "Employee Engagement Programs",
  "Corporate Family Days",
  "Town Halls",
  "Exhibitions & Trade Shows",
  "Business Networking Events"
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

const CorporateEventServices = () => {
  return (
    <section className="corporate-services-section">
      <div className="corporate-services-container">
        
        {/* Intro Area */}
        <motion.div 
          className="corporate-intro"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="corporate-heading">CORPORATE EVENT MANAGEMENT COMPANY</h2>
          <div className="title-underline center"></div>
          <p className="corporate-desc">
            We specialize in conferences, annual meetings, leadership summits, dealer meets, employee engagement programs, award functions, and product launches.
          </p>
          <p className="corporate-subtitle">
            <span className="highlight-blue">Professional planning.</span> <span className="highlight-blue">Seamless execution.</span> <span className="highlight-blue">Measurable results.</span>
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="corporate-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {corporateServicesList.map((service, idx) => (
            <motion.div className="corporate-card" key={idx} variants={itemVariants}>
              <div className="corporate-card-inner">
                <span className="corporate-icon">❖</span>
                <span className="corporate-name">{service}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default CorporateEventServices;
