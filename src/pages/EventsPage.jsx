import React from 'react';
import { motion } from 'framer-motion';
import '../styles/eventsHero.css';
import rightBackground from '../assets/right hero.png';
import Navbar from '../components/Navbar';
import OurStory from '../components/OurStory';
import OurServices from '../components/OurServices';
import WhyKalamaya from '../components/WhyKalamaya';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const EventsPage = () => {
  return (
    <>
      <div className="hero-container">
        {/* Navbar with Framer Motion */}
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Navbar />
        </motion.div>

        <section className="hero-section">
          {/* Curved Divider Overlay (Huge Navy Curve) removed per request */}

          {/* LEFT PANEL */}
          <div className="hero-left">
            <div className="left-content">
              <motion.p
                className="small-label"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                ONE LEGACY. INFINITE POSSIBILITIES.
              </motion.p>

              <motion.h1
                className="main-heading"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <span className="text-blue">EXTRAORDINARY</span><br />
                <span className="text-blue">EVENTS.</span><br />
                <span className="text-blue">TIMELESS</span><br />
                <span className="text-blue">IMPRESSIONS.</span>
              </motion.h1>

              <motion.p
                className="description"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                From corporate milestones to dream weddings, we craft experiences that inspire, connect and remain unforgettable.
              </motion.p>

              <motion.div
                className="buttons-group"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <button className="btn-primary">
                  EXPLORE EVENTS <span className="arrow">&#x2197;</span>
                </button>
                <button className="btn-secondary">
                  DISCOVER KALAMAYA <span className="arrow">&#x2197;</span>
                </button>
              </motion.div>

              <motion.div
                className="experience-badge"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <div className="badge-circle">
                  30+
                </div>
                <div className="badge-text">
                  <span className="years-text">YEARS OF CRAFTING</span><br />
                  <span className="memorable-text">MEMORABLE EXPERIENCES</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <motion.div
            className="hero-right"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            <div
              className="right-image"
              style={{ backgroundImage: `url("https://res.cloudinary.com/crw5jo8x/image/upload/v1786130942/AF6I0079_sx1akd.jpg")` }}
            ></div>
            <div className="image-overlay"></div>
          </motion.div>
        </section>
      </div>
      <OurStory />
      <OurServices />
      <WhyKalamaya />
      <CallToAction />
      <Footer />
    </>
  );
};

export default EventsPage;
