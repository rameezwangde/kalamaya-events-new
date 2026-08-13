import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/corporateEventServices.css';

const corporateServices = [
  {
    title: "ANNUAL MEETINGS & CONFERENCES",
    desc: "Large-scale conferences, sales meets, and annual gatherings with seamless logistics and impactful content delivery.",
  },
  {
    title: "LEADERSHIP SUMMITS",
    desc: "High-profile summits designed to inspire, align, and empower leadership teams across organizations.",
  },
  {
    title: "PRODUCT LAUNCH EVENTS",
    desc: "Dramatic reveal experiences that create buzz, drive media coverage, and leave audiences captivated.",
  },
  {
    title: "DEALER & CHANNEL PARTNER MEETS",
    desc: "Relationship-strengthening programs that reward, motivate, and align channel partners with your brand vision.",
  },
  {
    title: "AWARD CEREMONIES & GALAS",
    desc: "Prestigious ceremonies celebrating excellence — from stage design to entertainment and guest management.",
  },
  {
    title: "EXHIBITIONS & TRADE SHOWS",
    desc: "End-to-end exhibition management including booth design, fabrication, and on-ground activation.",
  },
];

const stats = [
  { value: "500+", label: "Corporate Events" },
  { value: "50+", label: "Fortune 500 Clients" },
  { value: "25+", label: "Cities Covered" },
  { value: "98%", label: "Repeat Business" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.9, delay, ease: [0.22, 0.72, 0.2, 1] },
  }),
};

const CorporatePage = () => {
  return (
    <>
      {/* ===== DARK HERO ===== */}
      <div className="corp-hero-wrap">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Navbar />
        </motion.div>

        <section className="corp-hero">
          <div
            className="corp-hero-bg"
            style={{
              backgroundImage: `url("https://res.cloudinary.com/crw5jo8x/image/upload/v1786339792/kalamaya_events_photos/nissan/11.jpg")`,
            }}
          />
          <div className="corp-hero-overlay" />

          <div className="corp-hero-content">
            <motion.p className="corp-hero-eyebrow" custom={0.2} initial="hidden" animate="visible" variants={fadeUp}>
              KALAMAYA CORPORATE DIVISION
            </motion.p>
            <motion.h1 className="corp-hero-title" custom={0.4} initial="hidden" animate="visible" variants={fadeUp}>
              CORPORATE
              <br />
              <span className="corp-hero-blue">EVENT</span>
              <br />
              EXCELLENCE.
            </motion.h1>
            <motion.p className="corp-hero-desc" custom={0.6} initial="hidden" animate="visible" variants={fadeUp}>
              Professional planning. Seamless execution. Measurable results.
              We transform your corporate vision into extraordinary experiences.
            </motion.p>
          </div>

          <div className="corp-hero-scroll">
            <span className="corp-hero-scroll-text">EXPLORE</span>
            <span className="corp-hero-scroll-arrow">&#x2193;</span>
          </div>
        </section>
      </div>

      {/* ===== IMPACT STATEMENT ===== */}
      <section className="corp-impact">
        <motion.div
          className="corp-impact-inner"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.22, 0.72, 0.2, 1] }}
        >
          <p className="corp-impact-small">We don't just manage events.</p>
          <h2 className="corp-impact-big">
            <span className="corp-impact-dark">WE ENGINEER</span>
            <br />
            <span className="corp-impact-blue">BUSINESS IMPACT.</span>
          </h2>
        </motion.div>
      </section>

      {/* ===== SERVICES LIST ===== */}
      <section className="corp-services">
        <div className="corp-services-container">
          <motion.div
            className="corp-services-header"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9 }}
          >
            <p className="corp-services-eyebrow">WHAT WE DELIVER</p>
            <h2 className="corp-services-heading">
              OUR CORPORATE
              <br />
              EVENT SERVICES
            </h2>
          </motion.div>

          <div className="corp-services-divider" />

          <div className="corp-services-list">
            {corporateServices.map((service, idx) => (
              <motion.div
                className="corp-service-row"
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
              >
                <span className="corp-service-num">{String(idx + 1).padStart(2, '0')}</span>
                <h3 className="corp-service-title">{service.title}</h3>
                <p className="corp-service-desc">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATS STRIP ===== */}
      <section className="corp-stats">
        <div className="corp-stats-inner">
          {stats.map((stat, idx) => (
            <motion.div
              className="corp-stat"
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
            >
              <span className="corp-stat-val">{stat.value}</span>
              <span className="corp-stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== WHY CORPORATE CLIENTS TRUST US ===== */}
      <section className="corp-trust">
        <div className="corp-trust-container">
          <motion.div
            className="corp-trust-left"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9 }}
          >
            <p className="corp-trust-eyebrow">WHY KALAMAYA</p>
            <h2 className="corp-trust-heading">
              WHY LEADING
              <br />
              BRANDS TRUST US
            </h2>
          </motion.div>

          <motion.div
            className="corp-trust-right"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.15 }}
          >
            <div className="corp-trust-item">
              <span className="corp-trust-num">01</span>
              <div>
                <h4 className="corp-trust-item-title">30+ Years of Industry Experience</h4>
                <p className="corp-trust-item-desc">Three decades of executing flawless corporate events across every industry vertical.</p>
              </div>
            </div>
            <div className="corp-trust-item">
              <span className="corp-trust-num">02</span>
              <div>
                <h4 className="corp-trust-item-title">Pan-India & International Reach</h4>
                <p className="corp-trust-item-desc">Operational capability across 25+ cities in India and key international destinations.</p>
              </div>
            </div>
            <div className="corp-trust-item">
              <span className="corp-trust-num">03</span>
              <div>
                <h4 className="corp-trust-item-title">End-to-End Event Solutions</h4>
                <p className="corp-trust-item-desc">From concept and creative to logistics, production, and post-event analytics — one partner for everything.</p>
              </div>
            </div>
            <div className="corp-trust-item">
              <span className="corp-trust-num">04</span>
              <div>
                <h4 className="corp-trust-item-title">Dedicated Project Teams</h4>
                <p className="corp-trust-item-desc">A single point of contact with dedicated teams ensuring accountability at every stage.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CorporatePage;
