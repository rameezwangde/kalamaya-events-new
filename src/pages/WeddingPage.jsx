import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/weddingServices.css';

const destinations = [
  "Udaipur", "Goa", "Kerala", "Jaipur", "Jodhpur",
  "Kovalam", "Kumarakom", "Kochi", "Alleppey", "Rajasthan",
  "Mussoorie", "Jim Corbett", "International",
];

const services = [
  {
    title: "Destination Wedding Planning",
    desc: "Curating dream weddings at India's most iconic venues — from lakeside palaces to beachside resorts.",
  },
  {
    title: "Luxury Wedding Management",
    desc: "White-glove service for multi-day celebrations with meticulous attention to every detail.",
  },
  {
    title: "Wedding Decor & Design",
    desc: "Bespoke floral arrangements, mandap designs, and thematic décor that bring your vision to life.",
  },
  {
    title: "Entertainment & Artists",
    desc: "Curated performances, DJs, live bands, and celebrity appearances for unforgettable celebrations.",
  },
  {
    title: "Guest Hospitality",
    desc: "Complete guest management — accommodation, transport, welcome kits, and concierge services.",
  },
  {
    title: "Photography & Film",
    desc: "Coordination with top photographers and cinematographers to capture every precious moment.",
  },
];

const WeddingPage = () => {
  return (
    <>
      {/* ===== SPLIT-SCREEN HERO ===== */}
      <div className="wed-hero-wrap">
        <Navbar />
        <section className="wed-hero">
          <motion.div
            className="wed-hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 0.72, 0.2, 1] }}
          >
            <p className="wed-hero-eyebrow">KALAMAYA WEDDINGS</p>
            <h1 className="wed-hero-title">
              WHERE
              <br />
              <span className="wed-hero-italic">Dreams</span>
              <br />
              BECOME
              <br />
              REALITY.
            </h1>
            <p className="wed-hero-desc">
              Crafting timeless love stories across India's most
              breathtaking destinations since 1990.
            </p>
            <div className="wed-hero-stats">
              <div className="wed-hero-stat">
                <span className="wed-hero-stat-num">500+</span>
                <span className="wed-hero-stat-lbl">Weddings</span>
              </div>
              <div className="wed-hero-stat-sep" />
              <div className="wed-hero-stat">
                <span className="wed-hero-stat-num">13+</span>
                <span className="wed-hero-stat-lbl">Destinations</span>
              </div>
              <div className="wed-hero-stat-sep" />
              <div className="wed-hero-stat">
                <span className="wed-hero-stat-num">30+</span>
                <span className="wed-hero-stat-lbl">Years</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="wed-hero-image"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            <img
              src="https://res.cloudinary.com/crw5jo8x/image/upload/v1786130942/AF6I0079_sx1akd.jpg"
              alt="Luxury Destination Wedding"
              className="wed-hero-img"
            />
            <div className="wed-hero-image-label">
              <span>UDAIPUR, RAJASTHAN</span>
            </div>
          </motion.div>
        </section>
      </div>

      {/* ===== DESTINATIONS TICKER ===== */}
      <div className="wed-ticker-wrap">
        <div className="wed-ticker">
          <div className="wed-ticker-track">
            {[...destinations, ...destinations, ...destinations].map((d, i) => (
              <span className="wed-ticker-item" key={i}>
                {d} <span className="wed-ticker-diamond">♦</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ===== EDITORIAL STATEMENT ===== */}
      <section className="wed-statement">
        <motion.div
          className="wed-statement-inner"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.22, 0.72, 0.2, 1] }}
        >
          <p className="wed-statement-small">Every love story is unique.</p>
          <h2 className="wed-statement-big">
            YOUR WEDDING
            <br />
            <span className="wed-statement-italic">SHOULD BE TOO.</span>
          </h2>
        </motion.div>
      </section>

      {/* ===== SERVICES — ALTERNATING TWO-COLUMN ===== */}
      <section className="wed-services">
        <div className="wed-services-container">
          <motion.div
            className="wed-services-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <p className="wed-services-eyebrow">WHAT WE OFFER</p>
            <h2 className="wed-services-heading">OUR WEDDING SERVICES</h2>
          </motion.div>

          <div className="wed-services-grid">
            {services.map((s, idx) => (
              <motion.div
                className={`wed-service-card ${idx % 2 === 0 ? 'wed-card-beige' : 'wed-card-white'}`}
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: (idx % 2) * 0.12 }}
              >
                <div className="wed-card-top">
                  <span className="wed-card-num">{String(idx + 1).padStart(2, '0')}</span>
                  <span className="wed-card-line" />
                </div>
                <h3 className="wed-card-title">{s.title}</h3>
                <p className="wed-card-desc">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CLOSING QUOTE ===== */}
      <section className="wed-quote">
        <motion.div
          className="wed-quote-inner"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9 }}
        >
          <blockquote className="wed-quote-text">
            "Whether it's an intimate celebration or a grand multi-day experience,
            our team manages every detail so families can focus on creating memories."
          </blockquote>
          <p className="wed-quote-attr">— THE KALAMAYA PROMISE</p>
        </motion.div>
      </section>

      <Footer />
    </>
  );
};

export default WeddingPage;
