import React from 'react';
import { motion } from 'framer-motion';
import '../styles/eventsHero.css';
import Navbar from '../components/Navbar';
import OurStory from '../components/OurStory';
import OurServices from '../components/OurServices';
import WhyKalamaya from '../components/WhyKalamaya';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay, ease: [0.22, 0.72, 0.2, 1] },
  }),
};

const EventsPage = () => {
  return (
    <>
      {/* ===== SECTION 1: DARK CINEMATIC HERO ===== */}
      <div className="hero-container">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Navbar />
        </motion.div>

        <section className="hero-section">
          {/* Background image */}
          <div
            className="hero-bg-image"
            style={{
              backgroundImage: `url("https://res.cloudinary.com/crw5jo8x/image/upload/v1786130942/AF6I0079_sx1akd.jpg")`,
            }}
          />
          <div className="hero-bg-overlay" />

          {/* Hero Content */}
          <div className="hero-content">
            <motion.p
              className="hero-eyebrow"
              custom={0.2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              ONE LEGACY. INFINITE POSSIBILITIES.
            </motion.p>

            <motion.h1
              className="hero-title"
              custom={0.4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <span className="hero-title-white">EXTRAORDINARY</span>
              <br />
              <span className="hero-title-white">EVENTS.</span>
              <br />
              <span className="hero-title-blue">TIMELESS</span>
              <br />
              <span className="hero-title-blue">IMPRESSIONS.</span>
            </motion.h1>

            <motion.p
              className="hero-desc"
              custom={0.6}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              From corporate milestones to dream weddings, we craft experiences
              that inspire, connect and remain unforgettable.
            </motion.p>

            <motion.div
              className="hero-buttons"
              custom={0.8}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <button className="hero-btn hero-btn--primary">
                EXPLORE EVENTS <span className="hero-btn-arrow">&#x2197;</span>
              </button>
              <button className="hero-btn hero-btn--outline">
                DISCOVER KALAMAYA{' '}
                <span className="hero-btn-arrow">&#x2197;</span>
              </button>
            </motion.div>

            <motion.div
              className="hero-badge"
              custom={1.0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <div className="hero-badge-circle">30+</div>
              <div className="hero-badge-text">
                <span className="hero-badge-label">YEARS OF CRAFTING</span>
                <span className="hero-badge-value">MEMORABLE EXPERIENCES</span>
              </div>
            </motion.div>
          </div>

          {/* Scroll to Enter */}
          <div className="hero-scroll-indicator">
            <span className="hero-scroll-text">SCROLL TO ENTER</span>
            <span className="hero-scroll-arrow">&#x2193;</span>
          </div>
        </section>
      </div>

      {/* ===== SECTION 2: IMPACT STATEMENT ===== */}
      <section className="impact-section">
        <div className="impact-content">
          <motion.p
            className="impact-small"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            Some events are planned.
          </motion.p>

          <motion.h2
            className="impact-heading"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 0.72, 0.2, 1] }}
          >
            <span className="impact-dark">EXTRAORDINARY EVENTS</span>
            <br />
            <span className="impact-blue">ARE CRAFTED.</span>
          </motion.h2>
        </div>
      </section>

      {/* ===== SECTION 3: STORY (BOLD HEADING VARIANT) ===== */}
      <section className="bold-story-section">
        <div className="bold-story-top">
          <motion.p
            className="bold-story-eyebrow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.7 }}
          >
            THE MOST TRUSTED NAME
          </motion.p>
          <motion.h2
            className="bold-story-heading"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 0.72, 0.2, 1] }}
          >
            INDIA'S PREMIER
            <br />
            EVENT MANAGEMENT
            <br />
            COMPANY
          </motion.h2>
        </div>

        <div className="bold-story-body">
          <motion.div
            className="bold-story-image-wrap"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <img
              src="https://res.cloudinary.com/crw5jo8x/image/upload/v1786130942/AF6I0079_sx1akd.jpg"
              alt="Kalamaya Event Setup"
              className="bold-story-image"
            />
          </motion.div>

          <motion.div
            className="bold-story-text"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.15, ease: 'easeOut' }}
          >
            <p>
              Kalamaya brings performers, creatives, and visionaries together to
              create events that leave lasting impressions. With over 30 years of
              experience, we have executed 3000+ successful events across 25+
              cities and international destinations.
            </p>
            <p>
              From corporate conferences and product launches to destination
              weddings and government summits — we deliver creative concepts,
              flawless execution, and memorable experiences that exceed
              expectations.
            </p>
            <div className="bold-story-stats">
              <div className="bold-stat">
                <span className="bold-stat-number">30+</span>
                <span className="bold-stat-label">Years Experience</span>
              </div>
              <div className="bold-stat">
                <span className="bold-stat-number">3000+</span>
                <span className="bold-stat-label">Events Delivered</span>
              </div>
              <div className="bold-stat">
                <span className="bold-stat-number">25+</span>
                <span className="bold-stat-label">Cities Covered</span>
              </div>
              <div className="bold-stat">
                <span className="bold-stat-number">98%</span>
                <span className="bold-stat-label">Client Satisfaction</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== REMAINING SECTIONS (EXISTING) ===== */}
      <OurServices />
      <WhyKalamaya />
      <CallToAction />
      <Footer />
    </>
  );
};

export default EventsPage;
