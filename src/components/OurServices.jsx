import React from 'react';
import { motion } from 'framer-motion';
import '../styles/ourServices.css';

const servicesData = [
  {
    title: "CORPORATE EVENTS",
    desc: "Corporate Event Management, Conference & Convention Management, Product Launches, Dealer Meets, and MICE.",
  },
  {
    title: "WEDDING PLANNING SERVICES",
    desc: "Destination Weddings in Kerala, Goa & India, Luxury Wedding Management, Decor & Entertainment.",
  },
  {
    title: "HYBRID & VIRTUAL EVENTS",
    desc: "Seamless digital and hybrid experiences to connect global audiences effectively.",
  },
  {
    title: "EVENT PRODUCTION & TECHNICAL MANAGEMENT",
    desc: "Top-tier sound, lighting, staging, and technical production for flawless execution.",
  },
  {
    title: "MICE & INCENTIVE PROGRAMS",
    desc: "Curated corporate offsites, reward trips, and international incentive travel programs.",
  },
  {
    title: "GOVERNMENT & PUBLIC EVENTS",
    desc: "Large-scale public gatherings, government summits, and protocol-driven events.",
  },
];

const OurServices = () => {
  return (
    <section className="wwd-section">
      <div className="wwd-container">
        {/* Section Header */}
        <motion.div
          className="wwd-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.22, 0.72, 0.2, 1] }}
        >
          <p className="wwd-eyebrow">OUR SERVICES</p>
          <h2 className="wwd-heading">
            CRAFTING EXPERIENCES,
            <br />
            CREATING LEGACIES
          </h2>
          <p className="wwd-intro">
            One creative and production partner — from the first concept to the
            last guest walking out, we handle everything.
          </p>
        </motion.div>

        {/* Divider */}
        <div className="wwd-divider" />

        {/* Service Rows */}
        <div className="wwd-list">
          {servicesData.map((service, idx) => (
            <motion.div
              className="wwd-row"
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.6,
                delay: idx * 0.08,
                ease: 'easeOut',
              }}
            >
              <span className="wwd-number">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <h3 className="wwd-title">{service.title}</h3>
              <p className="wwd-desc">{service.desc}</p>
              <span className="wwd-arrow">&#x2197;</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
