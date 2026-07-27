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
            <motion.h4 variants={fadeUpVariants} className="about-label">OUR LEGACY</motion.h4>
            <motion.h1 variants={fadeUpVariants} className="about-title">
              BEYOND EVENTS.<br />
              <span className="text-gold">WE BUILD MEMORIES.</span>
            </motion.h1>
            <motion.p variants={fadeUpVariants} className="about-subtitle">
              For over a decade, Kalamaya has been at the forefront of luxury event management, transforming ordinary spaces into extraordinary experiences.
            </motion.p>
          </motion.div>
        </section>

        {/* ABOUT CONTENT */}
        <section className="about-content-section">
          <div className="about-container">
            <motion.div 
              className="about-grid"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
            >
              <div className="about-text-col">
                <motion.h2 variants={fadeUpVariants} className="section-heading text-blue">
                  A COMMITMENT TO <br/><span className="text-gold">EXCELLENCE</span>
                </motion.h2>
                <motion.div variants={fadeUpVariants} className="title-underline"></motion.div>
                
                <motion.p variants={fadeUpVariants} className="about-body-text mt-4">
                  Founded on the belief that every celebration is a unique story waiting to be told, Kalamaya Events India is a collective of passionate creators, meticulous planners, and visionary designers.
                </motion.p>
                <motion.p variants={fadeUpVariants} className="about-body-text">
                  From large-scale corporate summits to intimate luxury destination weddings, our approach remains the same: uncompromising quality, relentless attention to detail, and a deeply personalized touch.
                </motion.p>
                
                <motion.div variants={fadeUpVariants} className="signature-block mt-4">
                  <p className="signature-font">Kalamaya Leadership</p>
                </motion.div>
              </div>

              <motion.div variants={fadeUpVariants} className="about-image-col">
                <div className="about-image-wrapper">
                  {/* Using the generated corporate image as a placeholder for the team/about image */}
                  <img src="/src/assets/services_intro.png" alt="About Kalamaya" className="about-image" />
                  <div className="experience-badge-floating">
                    <span className="years">15+</span>
                    <span className="label">Years of<br/>Excellence</span>
                  </div>
                </div>
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
