import React from 'react';
import { motion } from 'framer-motion';
import '../styles/weddingServices.css';

const weddingServicesList = [
  "Destination Wedding Planning",
  "Luxury Wedding Management",
  "Beach Weddings",
  "Backwater Weddings",
  "Royal Palace Weddings",
  "Wedding Decor & Design",
  "Hospitality & Guest Management",
  "Entertainment & Artist Management",
  "Photography & Videography Coordination",
  "Wedding Logistics & Travel Management"
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

const WeddingServices = () => {
  return (
    <section className="wedding-services-section">
      <div className="wedding-services-container">
        
        {/* Intro Area */}
        <motion.div 
          className="wedding-intro"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="wedding-heading">DESTINATION WEDDING PLANNER</h2>
          <div className="title-underline center blue-underline"></div>
          <p className="wedding-desc">
            Dream weddings crafted with elegance and precision.
          </p>
          <p className="wedding-body">
            From beach weddings and backwater celebrations to luxury destination weddings, Kalamaya manages every detail to create unforgettable experiences.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="wedding-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {weddingServicesList.map((service, idx) => (
            <motion.div className="wedding-card" key={idx} variants={itemVariants}>
              <div className="wedding-card-inner">
                <span className="wedding-icon">✧</span>
                <span className="wedding-name">{service}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Conclusion Area */}
        <motion.div 
          className="wedding-conclusion"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="wedding-body">
            Whether it is an intimate celebration or a grand multi-day wedding experience, our team manages every detail so families can focus on creating memories.
          </p>
          <p className="wedding-locations">
            Kalamaya creates elegant, personalized, and memorable weddings across India’s most sought-after destinations including Kerala, Goa, Rajasthan, Udaipur, Jaipur, Kovalam, Kumarakom, Kochi, Alleppey, and international destinations.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default WeddingServices;
