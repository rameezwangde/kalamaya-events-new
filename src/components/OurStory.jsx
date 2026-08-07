import React from 'react';
import { motion } from 'framer-motion';
import '../styles/ourStory.css';
import eventImage from '../assets/luxury_event_wedding.png';

// Lucide React minimal icons can be approximated via simple SVGs to avoid extra deps if not already installed.
// We'll use simple inline SVG line icons for the stats.
const IconExperience = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const IconEvents = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
    <path d="M9 16l2 2 4-4"></path>
  </svg>
);

const IconGlobe = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

const IconStar = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

const statsData = [
  {
    icon: <IconExperience />,
    number: "30+",
    label: "YEARS OF EXPERIENCE",
    desc: "Decades of crafting exceptional experiences."
  },
  {
    icon: <IconEvents />,
    number: "3000+",
    label: "SUCCESSFUL EVENTS",
    desc: "Flawless execution across India and beyond."
  },
  {
    icon: <IconGlobe />,
    number: "25+",
    label: "CITIES & DESTINATIONS",
    desc: "Creating memorable moments everywhere."
  },
  {
    icon: <IconStar />,
    number: "98%",
    label: "CLIENT SATISFACTION",
    desc: "Relationships built on trust, creativity and results."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
  }
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const slideLeftVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } }
};

const OurStory = () => {
  return (
    <section className="our-story-section">
      <motion.div
        className="story-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* LEFT CONTENT */}
        <div className="story-left">
          <motion.div variants={fadeUpVariants} className="story-content">
            <h4 className="story-label">OUR STORY</h4>
            <h2 className="story-heading">
              <span className="text-blue">EVENT MANAGEMENT</span><br />
              <span className="text-blue">COMPANY IN INDIA</span>
            </h2>

            <div className="story-text-wrapper">
              {/* Decorative dots matching hero */}
              <div className="story-dots">
                {[...Array(16)].map((_, i) => <div key={i} className="story-dot"></div>)}
              </div>

              <p className="story-desc">
                Creating exceptional corporate events, destination weddings, conferences, product launches, dealer meets, and business experiences for over 30 years.
              </p>
              <p className="story-desc">
                Kalamaya is a trusted event management company delivering creative concepts, flawless execution, and memorable experiences across India and international destinations.
              </p>
            </div>

            <motion.div variants={fadeUpVariants} className="story-signature-block">
              <div className="signature-font">Kalamaya Team</div>
              <p className="signature-subtext">Crafting Experiences.<br />Creating Legacies.</p>
            </motion.div>
          </motion.div>
        </div>



        {/* RIGHT IMAGE */}
        <motion.div variants={slideLeftVariants} className="story-right">
          <div className="story-image-wrapper">
            <img src={eventImage} alt="Luxury Event Setup" className="story-image" />
          </div>
        </motion.div>

        {/* FLOATING STATS CARD */}
        <motion.div variants={fadeUpVariants} className="stats-card-wrapper">
          <div className="stats-card">
            {statsData.map((stat, idx) => (
              <div className="stat-item" key={idx}>
                <div className="stat-icon-wrapper">
                  {stat.icon}
                </div>
                <div className="stat-content">
                  <h3 className="stat-number">{stat.number}</h3>
                  <h4 className="stat-label">{stat.label}</h4>
                  <p className="stat-desc">{stat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default OurStory;
