import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/industriesWeServe.css';

const industries = [
  {
    name: "Healthcare & Pharmaceuticals",
    desc: "Medical conferences, pharma launches, doctor symposiums, and healthcare brand activations.",
  },
  {
    name: "Information Technology & Software",
    desc: "Tech summits, developer conferences, SaaS product launches, and hackathon events.",
  },
  {
    name: "Banking, Financial Services & Insurance",
    desc: "BFSI conclaves, wealth management summits, insurance roadshows, and investor meets.",
  },
  {
    name: "Automobile & Mobility",
    desc: "Auto expos, dealer meets, EV launch events, and test-drive experiences.",
  },
  {
    name: "Manufacturing & Industrial",
    desc: "Factory inaugurations, safety summits, industrial expos, and supply chain conferences.",
  },
  {
    name: "FMCG & Consumer Brands",
    desc: "Brand launches, consumer engagement activations, retail meets, and influencer events.",
  },
  {
    name: "Retail & E-Commerce",
    desc: "Store launches, flash-sale events, marketplace summits, and omnichannel strategy meets.",
  },
  {
    name: "Real Estate & Infrastructure",
    desc: "Property expos, township launches, groundbreaking ceremonies, and broker meets.",
  },
  {
    name: "Education & Universities",
    desc: "Convocations, academic conferences, alumni meets, and campus engagement events.",
  },
  {
    name: "Government & Public Sector",
    desc: "Government summits, policy conclaves, public awareness campaigns, and state-level events.",
  },
  {
    name: "Hospitality & Tourism",
    desc: "Tourism board events, hotel launches, travel trade shows, and culinary festivals.",
  },
  {
    name: "Media & Entertainment",
    desc: "Film premieres, press conferences, award ceremonies, and entertainment galas.",
  },
];

const IndustriesPage = () => {
  return (
    <>
      <Navbar />

      {/* ===== HERO HEADER ===== */}
      <section className="ind-hero">
        <div className="ind-hero-inner">
          <motion.div
            className="ind-hero-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 0.72, 0.2, 1] }}
          >
            <p className="ind-hero-eyebrow">SECTOR EXPERTISE</p>
            <h1 className="ind-hero-title">
              INDUSTRIES
              <br />
              <span className="ind-hero-outline">WE SERVE</span>
            </h1>
          </motion.div>

          <motion.div
            className="ind-hero-right"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <p className="ind-hero-desc">
              From pharma conferences to tech summits, automobile expos to
              government conclaves — we bring deep domain understanding to every
              event we create. Our sector-specific expertise ensures your event
              speaks the language of your industry.
            </p>
            <div className="ind-hero-stat-row">
              <div className="ind-hero-stat">
                <span className="ind-hero-stat-val">12+</span>
                <span className="ind-hero-stat-label">Industry Verticals</span>
              </div>
              <div className="ind-hero-stat">
                <span className="ind-hero-stat-val">3000+</span>
                <span className="ind-hero-stat-label">Events Delivered</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== MARQUEE STRIP ===== */}
      <div className="ind-marquee-wrap">
        <div className="ind-marquee">
          <div className="ind-marquee-track">
            {[...industries, ...industries].map((ind, idx) => (
              <span className="ind-marquee-item" key={idx}>
                {ind.name} <span className="ind-marquee-dot">◆</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ===== INDUSTRIES GRID ===== */}
      <section className="ind-grid-section">
        <div className="ind-grid">
          {industries.map((industry, idx) => (
            <motion.div
              className="ind-card"
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: (idx % 3) * 0.1 }}
            >
              <span className="ind-card-num">{String(idx + 1).padStart(2, '0')}</span>
              <div className="ind-card-body">
                <h3 className="ind-card-name">{industry.name}</h3>
                <p className="ind-card-desc">{industry.desc}</p>
              </div>
              <span className="ind-card-arrow">&#x2197;</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="ind-cta">
        <motion.div
          className="ind-cta-inner"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9 }}
        >
          <h2 className="ind-cta-heading">
            DON'T SEE YOUR
            <br />
            INDUSTRY?
          </h2>
          <div className="ind-cta-right">
            <p className="ind-cta-desc">
              We've partnered with brands across every imaginable sector.
              If your industry isn't listed, we probably already have experience in it.
            </p>
            <a href="/contact" className="ind-cta-btn">
              LET'S TALK <span>&#x2197;</span>
            </a>
          </div>
        </motion.div>
      </section>

      <Footer />
    </>
  );
};

export default IndustriesPage;
