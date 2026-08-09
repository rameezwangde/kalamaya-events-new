import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from 'react-simple-maps';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/locations.css';

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const locationData = [
  // India
  { name: "New Delhi", region: "India", coords: [77.209, 28.6139], type: "hq" },
  { name: "Andhra Pradesh", region: "India", coords: [79.7400, 15.9129] },
  { name: "Maharashtra", region: "India", coords: [72.8777, 19.0760], offset: "left" },
  { name: "Rajasthan", region: "India", coords: [73.7125, 26.9124] },
  { name: "Kolkata", region: "India", coords: [88.3639, 22.5726] },
  { name: "Karnataka", region: "India", coords: [75.7139, 15.3173], offset: "left" },
  { name: "Kerala", region: "India", coords: [76.2711, 10.8505], offset: "left" },
  // International
  { name: "Dubai, UAE", region: "International", coords: [55.2708, 25.2048] },
  { name: "Singapore", region: "International", coords: [103.8198, 1.3521] },
  { name: "London", region: "International", coords: [-0.1276, 51.5074] },
];

const indiaLocations = locationData.filter(l => l.region === "India");
const intlLocations = locationData.filter(l => l.region === "International");

const LocationsPage = () => {
  const [tooltip, setTooltip] = useState(null);

  return (
    <>
      <Navbar />

      {/* ===== HERO ===== */}
      <section className="loc-hero">
        <div className="loc-hero-inner">
          <motion.div
            className="loc-hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 0.72, 0.2, 1] }}
          >
            <p className="loc-hero-eyebrow">WHERE WE OPERATE</p>
            <h1 className="loc-hero-title">
              OUR GLOBAL
              <br />
              PRESENCE.
            </h1>
            <p className="loc-hero-desc">
              From the royal palaces of Rajasthan to the skyscrapers of Dubai — we
              deliver extraordinary events across India and international destinations.
            </p>
            <div className="loc-hero-stats">
              <div className="loc-hero-stat">
                <span className="loc-hero-stat-num">8</span>
                <span className="loc-hero-stat-lbl">Indian States</span>
              </div>
              <div className="loc-hero-stat-sep" />
              <div className="loc-hero-stat">
                <span className="loc-hero-stat-num">3</span>
                <span className="loc-hero-stat-lbl">Countries</span>
              </div>
              <div className="loc-hero-stat-sep" />
              <div className="loc-hero-stat">
                <span className="loc-hero-stat-num">25+</span>
                <span className="loc-hero-stat-lbl">Cities</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== WORLD MAP ===== */}
      <section className="loc-map-section">
        <div className="loc-map-container">
          <motion.div
            className="loc-map-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <p className="loc-map-eyebrow">GLOBAL FOOTPRINT</p>
            <h2 className="loc-map-heading">EVENTS ACROSS THE WORLD</h2>
          </motion.div>

          <div className="loc-map-wrap">
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{
                scale: 500,
                center: [45, 30],
              }}
              className="loc-world-map"
            >
              <Geographies geography={GEO_URL}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      className="loc-geography"
                      style={{
                        default: { outline: 'none' },
                        hover: { outline: 'none' },
                        pressed: { outline: 'none' },
                      }}
                    />
                  ))
                }
              </Geographies>

              {locationData.map((loc, idx) => {
                const isLeft = loc.offset === 'left' || loc.coords[0] < 0;
                return (
                  <Marker
                    key={idx}
                    coordinates={loc.coords}
                    onMouseEnter={() => setTooltip(loc)}
                    onMouseLeave={() => setTooltip(null)}
                  >
                    {/* Pulse ring */}
                    <circle
                      r={loc.type === 'hq' ? 3 : 2}
                      className={`loc-marker-pulse ${loc.type === 'hq' ? 'loc-marker-hq' : ''}`}
                    />
                    {/* Solid dot */}
                    <circle
                      r={loc.type === 'hq' ? 1.5 : 1}
                      className={`loc-marker-dot ${loc.type === 'hq' ? 'loc-marker-hq-dot' : ''}`}
                    />
                    {/* Permanent Label */}
                    <text
                      textAnchor={isLeft ? "end" : "start"}
                      x={isLeft ? -4 : 4}
                      y={1.5}
                      className="loc-marker-text"
                    >
                      {loc.name}
                    </text>
                  </Marker>
                );
              })}
            </ComposableMap>

            {/* Tooltip */}
            <AnimatePresence>
              {tooltip && (
                <motion.div
                  className="loc-tooltip"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="loc-tooltip-region">{tooltip.region}</span>
                  <span className="loc-tooltip-name">{tooltip.name}</span>
                  {tooltip.type === 'hq' && <span className="loc-tooltip-hq">HQ</span>}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Map legend */}
            <div className="loc-legend">
              <div className="loc-legend-item">
                <span className="loc-legend-dot loc-legend-hq" />
                <span>Headquarters</span>
              </div>
              <div className="loc-legend-item">
                <span className="loc-legend-dot loc-legend-office" />
                <span>Operational Presence</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LOCATION LISTS ===== */}
      <section className="loc-lists">
        <div className="loc-lists-container">
          {/* India */}
          <motion.div
            className="loc-list-block"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="loc-list-title">INDIA</h3>
            <div className="loc-list-grid">
              {indiaLocations.map((loc, idx) => (
                <div className="loc-list-item" key={idx}>
                  <span className="loc-list-num">{String(idx + 1).padStart(2, '0')}</span>
                  <span className="loc-list-name">{loc.name}</span>
                  {loc.type === 'hq' && <span className="loc-list-badge">HQ</span>}
                </div>
              ))}
            </div>
          </motion.div>

          {/* International */}
          <motion.div
            className="loc-list-block"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <h3 className="loc-list-title">INTERNATIONAL</h3>
            <div className="loc-list-grid">
              {intlLocations.map((loc, idx) => (
                <div className="loc-list-item" key={idx}>
                  <span className="loc-list-num">{String(idx + 1).padStart(2, '0')}</span>
                  <span className="loc-list-name">{loc.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default LocationsPage;
