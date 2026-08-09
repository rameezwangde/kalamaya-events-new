import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/caseStudies.css';

const categories = ["All", "Corporate", "Weddings", "Conferences", "Launches", "Public"];

const portfolioItems = [
  {
    category: "Corporate",
    title: "Global Leadership Summit 2024",
    client: "Fortune 500 Tech Company",
    location: "Hyderabad",
    size: "large",
  },
  {
    category: "Weddings",
    title: "Royal Palace Wedding",
    client: "Private Family",
    location: "Udaipur, Rajasthan",
    size: "small",
  },
  {
    category: "Launches",
    title: "EV Product Launch & Expo",
    client: "Automobile Giant",
    location: "Mumbai",
    size: "small",
  },
  {
    category: "Conferences",
    title: "Pharma Innovation Conclave",
    client: "Healthcare Leader",
    location: "New Delhi",
    size: "medium",
  },
  {
    category: "Corporate",
    title: "Annual Dealer Meet 2024",
    client: "FMCG Brand",
    location: "Goa",
    size: "medium",
  },
  {
    category: "Public",
    title: "City Cultural Festival",
    client: "State Government",
    location: "Kerala",
    size: "large",
  },
  {
    category: "Weddings",
    title: "Backwater Destination Wedding",
    client: "Private Family",
    location: "Kumarakom, Kerala",
    size: "small",
  },
  {
    category: "Launches",
    title: "Fintech App Launch",
    client: "BFSI Startup",
    location: "Bangalore",
    size: "small",
  },
];

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredItems = activeFilter === "All"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <>
      <Navbar />

      {/* ===== HERO ===== */}
      <section className="pf-hero">
        <div className="pf-hero-inner">
          <motion.div
            className="pf-hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 0.72, 0.2, 1] }}
          >
            <p className="pf-hero-eyebrow">PORTFOLIO / CASE STUDIES</p>
            <h1 className="pf-hero-title">
              EVENTS THAT
              <br />
              <span className="pf-hero-outline">SPEAK FOR</span>
              <br />
              THEMSELVES.
            </h1>
          </motion.div>

          <motion.div
            className="pf-hero-meta"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <p className="pf-hero-desc">
              Three decades of crafting extraordinary experiences.
              From intimate gatherings to 10,000+ attendee conferences — explore the work that defines us.
            </p>
            <div className="pf-hero-counts">
              <div className="pf-hero-count">
                <span className="pf-hero-count-num">3000+</span>
                <span className="pf-hero-count-lbl">Events Delivered</span>
              </div>
              <div className="pf-hero-count">
                <span className="pf-hero-count-num">200+</span>
                <span className="pf-hero-count-lbl">Corporate Clients</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== FILTER BAR ===== */}
      <div className="pf-filter-bar">
        <div className="pf-filter-inner">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`pf-filter-btn ${activeFilter === cat ? 'pf-filter-active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ===== PORTFOLIO GRID ===== */}
      <section className="pf-grid-section">
        <div className="pf-grid">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                className={`pf-card pf-card-${item.size}`}
                key={item.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
              >
                {/* Image placeholder — replace src later */}
                <div className="pf-card-image">
                  <div className="pf-card-placeholder">
                    <span className="pf-card-placeholder-num">{String(idx + 1).padStart(2, '0')}</span>
                  </div>
                </div>

                <div className="pf-card-overlay">
                  <span className="pf-card-cat">{item.category}</span>
                  <h3 className="pf-card-title">{item.title}</h3>
                  <div className="pf-card-details">
                    <span className="pf-card-detail">{item.client}</span>
                    <span className="pf-card-dot">•</span>
                    <span className="pf-card-detail">{item.location}</span>
                  </div>
                </div>

                <div className="pf-card-arrow">&#x2197;</div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="pf-cta">
        <motion.div
          className="pf-cta-inner"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9 }}
        >
          <h2 className="pf-cta-heading">
            LET'S ADD YOUR
            <br />
            <span className="pf-cta-italic">EVENT</span> TO THIS LIST.
          </h2>
          <a href="/contact" className="pf-cta-btn">
            START A PROJECT <span>&#x2197;</span>
          </a>
        </motion.div>
      </section>

      <Footer />
    </>
  );
};

export default PortfolioPage;
