import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/aboutPage.css';

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
};

const AboutPage = () => {
  return (
    <>
      <Navbar />
      
      <main className="about-page">
        {/* ABOUT HERO */}
        <section className="about-hero">
          <div className="about-hero-overlay"></div>
          <motion.div 
            className="about-hero-content"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h4 variants={fadeUpVariants} className="about-label text-F8F3EA">ABOUT US</motion.h4>
            <motion.h1 variants={fadeUpVariants} className="about-title">
              <span>EXPERIENCE.</span><br />
              <span>CREATIVITY.</span><br />
              <span>EXECUTION.</span>
            </motion.h1>
          </motion.div>
        </section>

        {/* BLOCKS LAYOUT SECTION */}
        <section className="about-blocks-section">
          <div className="about-blocks-container">
            <motion.div 
              className="about-blocks-grid"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              {/* BLOCK 1: Main Text */}
              <motion.div variants={fadeUpVariants} className="about-block block-text block-main">
                <h2 className="block-heading text-blue">A LEGACY OF EXCELLENCE</h2>
                <p className="block-body">
                  For over three decades, Kalamaya has been helping brands, organizations, and families create impactful events and unforgettable celebrations.
                </p>
                <div className="block-divider"></div>
              </motion.div>

              {/* BLOCK 2: Image Block */}
              <motion.div variants={fadeUpVariants} className="about-block block-image">
                <img src="/src/assets/luxury_event_wedding.png" alt="Kalamaya Event" className="block-img" />
              </motion.div>

              {/* BLOCK 3: Secondary Image / Accent */}
              <motion.div variants={fadeUpVariants} className="about-block block-image-small">
                <img src="/src/assets/services_intro.png" alt="Event Setup" className="block-img" />
              </motion.div>

              {/* BLOCK 4: Highlight Text */}
              <motion.div variants={fadeUpVariants} className="about-block block-text block-highlight">
                <p className="block-body-large text-F8F3EA">
                  From corporate conferences to destination weddings, we bring together strategy, creativity, technology, and flawless event management.
                </p>
              </motion.div>

            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AboutPage;
