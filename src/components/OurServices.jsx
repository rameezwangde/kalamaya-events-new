import React from 'react';
import { motion } from 'framer-motion';
import '../styles/ourServices.css';
import introImage from '../assets/services_intro.png';
import cardCorporate from '../assets/services_card_corporate.png';
import cardWedding from '../assets/services_card_wedding.png';

// Simple SVG Icons
const IconCorporate = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>;
const IconWedding = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path></svg>;
const IconSocial = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>;
const IconExpo = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>;
const IconEntertainment = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>;
const IconVenue = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>;

const IconTailored = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>;
const IconSupport = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>;
const IconPartners = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line></svg>;
const IconTeam = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path></svg>;

const servicesData = [
  {
    icon: <IconCorporate />,
    title: "CORPORATE EVENTS",
    desc: "Conferences, summits, product launches and experiences that elevate your brand.",
    image: cardCorporate
  },
  {
    icon: <IconWedding />,
    title: "DESTINATION WEDDINGS",
    desc: "Bespoke celebrations in breathtaking locations, curated with passion and precision.",
    image: cardWedding
  },
  {
    icon: <IconSocial />,
    title: "SOCIAL CELEBRATIONS",
    desc: "Weddings, engagements, anniversaries and more—crafted around your story.",
    image: cardWedding
  },
  {
    icon: <IconExpo />,
    title: "EXHIBITIONS & TRADE SHOWS",
    desc: "End-to-end solutions that create impact and drive engagement.",
    image: cardCorporate
  },
  {
    icon: <IconEntertainment />,
    title: "ENTERTAINMENT & ARTIST MANAGEMENT",
    desc: "Bringing the right talent to make your event unforgettable.",
    image: cardCorporate
  },
  {
    icon: <IconVenue />,
    title: "VENUE MANAGEMENT",
    desc: "Helping you find and manage the perfect venue for every occasion.",
    image: cardWedding
  }
];

const featuresData = [
  { icon: <IconTailored />, title: "TAILORED SOLUTIONS", desc: "Every event is designed around your vision." },
  { icon: <IconSupport />, title: "END TO END SUPPORT", desc: "From planning to execution, we've got you covered." },
  { icon: <IconPartners />, title: "PREMIUM PARTNERS", desc: "Collaborating with the best to deliver excellence." },
  { icon: <IconTeam />, title: "PASSIONATE TEAM", desc: "A dedicated team that cares about every detail." }
];

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const slideLeftVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const OurServices = () => {
  return (
    <section className="services-section">
      {/* SVG Clip Path Definition for Organic Image Cutout */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <clipPath id="organic-wave" clipPathUnits="objectBoundingBox">
            <path d="M0.08,0 C0.2,0.3 -0.05,0.7 0.08,1 L1,1 L1,0 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="services-container">
        
        {/* INTRO AREA */}
        <div className="services-intro">
          <div className="services-left">
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUpVariants}
            >
              <h4 className="services-label">OUR SERVICES</h4>
              <h2 className="services-heading">
                <span className="text-blue">CRAFTING EXPERIENCES.</span><br/>
                <span className="text-gold">CREATING LEGACIES.</span>
              </h2>
              
              <div className="services-desc-wrapper">
                <div className="services-dots">
                  {[...Array(9)].map((_, i) => <div key={i} className="service-dot"></div>)}
                </div>
                <p className="services-desc">
                  Every celebration is unique. Every detail matters. From concept to celebration, we design moments that inspire, connect and leave a lasting impression.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="services-right">
            <motion.div 
              className="services-image-wrapper"
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, amount: 0.3 }}
              variants={slideLeftVariants}
            >
              <img src={introImage} alt="Luxury Event" className="services-intro-image" />
            </motion.div>
          </div>
        </div>

        {/* WHAT WE DO SECTION */}
        <div className="what-we-do">
          <motion.div 
            className="section-title-wrapper"
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.8 }}
            variants={fadeUpVariants}
          >
            <h3 className="section-title">WHAT WE DO</h3>
            <div className="title-underline"></div>
          </motion.div>

          <motion.div 
            className="services-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {servicesData.map((service, idx) => (
              <motion.div className="service-card" key={idx} variants={fadeUpVariants}>
                <div className="card-top">
                  <div className="card-icon">{service.icon}</div>
                  <h4 className="card-title">{service.title}</h4>
                  <p className="card-desc">{service.desc}</p>
                </div>
                <div className="card-bottom">
                  <img src={service.image} alt={service.title} className="card-image" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* BOTTOM FEATURE STRIP */}
        <motion.div 
          className="feature-strip"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpVariants}
        >
          {featuresData.map((feature, idx) => (
            <div className="feature-item" key={idx}>
              <div className="feature-icon">{feature.icon}</div>
              <div className="feature-text">
                <h5 className="feature-title">{feature.title}</h5>
                <p className="feature-desc">{feature.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
};

export default OurServices;
