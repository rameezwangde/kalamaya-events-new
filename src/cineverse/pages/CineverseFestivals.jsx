import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import CineverseNavbar from '../components/CineverseNavbar';
import CineverseFooter from '../components/CineverseFooter';
import '../cineverse.css';

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Accurate geographic coordinates [Longitude, Latitude]
const festivalLocations = [
  {
    id: "la",
    name: "Los Angeles",
    coordinates: [-118.2437, 34.0522],
    festival: "LA Independent Film Festival",
    award: "Official Selection",
    year: "2026"
  },
  {
    id: "greece",
    name: "Greece",
    coordinates: [22.9444, 40.6401], // Thessaloniki
    festival: "Thessaloniki International Film Festival",
    award: "Best Cinematography Nominee",
    year: "2026"
  },
  {
    id: "istanbul",
    name: "Istanbul",
    coordinates: [28.9784, 41.0082],
    festival: "Istanbul Film Festival",
    award: "Jury Prize Winner",
    year: "2026"
  },
  {
    id: "kolkata",
    name: "Kolkata",
    coordinates: [88.3639, 22.5726],
    festival: "Kolkata International Film Festival",
    award: "Official Selection",
    year: "2025"
  }
];

const MapMarkerTooltip = ({ location, isHovered }) => {
  return (
    <AnimatePresence>
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 5, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-[#090706] text-[#EAE6DF] p-4 shadow-2xl border border-white/10 pointer-events-none z-30"
          style={{ transformOrigin: 'bottom center' }}
        >
          <span className="block text-brand-red uppercase tracking-[0.2em] text-[10px] font-bold mb-1">{location.name}</span>
          <h4 className="text-white font-bold text-sm leading-tight mb-2">{location.festival}</h4>
          <span className="block text-[#888] text-xs font-light">{location.award} • {location.year}</span>
          {/* Pointer triangle */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-[#090706]" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const CineverseFestivals = () => {
  return (
    <div className="min-h-screen text-white bg-[#050505]">
      <CineverseNavbar />

      {/* SECTION 1: Intro (Black) */}
      <section className="relative w-full bg-[#050505] text-[#EAE6DF] overflow-hidden" style={{ paddingTop: '150px', paddingBottom: '100px' }}>
        <div className="absolute top-0 left-[10%] w-[60%] h-[60%] bg-brand-red/5 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 w-full max-w-[1440px] mx-auto flex flex-col items-center text-center" style={{ paddingInline: 'clamp(32px, 5vw, 80px)' }}>
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full flex flex-col items-center"
          >
            <h1 
              className="uppercase leading-[0.9] mb-12 text-white text-center w-full"
              style={{ fontSize: 'clamp(64px, 10vw, 160px)', fontFamily: '"Druk Condensed Super", "Druk Condensed", "Bebas Neue", sans-serif', letterSpacing: '0.02em' }}
            >
              FESTIVAL JOURNEY
            </h1>

            <div className="w-full flex justify-center">
              <p className="text-[#bbb] text-lg md:text-2xl font-light max-w-3xl text-center leading-relaxed">
                Explore our global footprint. An interactive map tracking Kalamaya Cineverse’s official selections, premieres, and awards across the world.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: Interactive SVG Map (Beige) */}
      <section className="relative w-full bg-[#EAE6DF] overflow-hidden" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
        <div className="relative z-10 w-full max-w-[1440px] mx-auto" style={{ paddingInline: 'clamp(16px, 3vw, 40px)' }}>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-full aspect-[2/1] md:aspect-[2.5/1] relative bg-[#050505] rounded-xl overflow-hidden shadow-2xl border border-black/10"
          >
            <ComposableMap 
              projection="geoMercator" 
              projectionConfig={{ scale: 140 }}
              className="w-full h-full object-cover"
            >
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography 
                      key={geo.rsmKey} 
                      geography={geo} 
                      fill="#1a1a1a" 
                      stroke="#333333"
                      strokeWidth={0.5}
                      style={{
                        default: { outline: "none" },
                        hover: { outline: "none", fill: "#252525" },
                        pressed: { outline: "none" },
                      }}
                    />
                  ))
                }
              </Geographies>

              {festivalLocations.map(loc => (
                <Marker key={loc.id} coordinates={loc.coordinates}>
                  <g className="group cursor-pointer">
                    {/* Outer Pulse */}
                    <circle cx="0" cy="0" r="10" fill="rgba(218, 41, 28, 0.2)">
                      <animate attributeName="r" values="8; 24; 8" dur="2s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.6; 0; 0.6" dur="2s" repeatCount="indefinite" />
                    </circle>
                    {/* Core Dot */}
                    <circle cx="0" cy="0" r="5" fill="#da291c" stroke="#EAE6DF" strokeWidth="2" className="transition-transform duration-300 group-hover:scale-125" />
                    {/* Render Tooltip via a foreignObject for HTML rendering inside SVG */}
                    <foreignObject x="-100" y="-120" width="200" height="120" className="pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-visible z-50">
                      <MapMarkerTooltip location={loc} isHovered={true} />
                    </foreignObject>
                  </g>
                </Marker>
              ))}
            </ComposableMap>
          </motion.div>

        </div>
      </section>

      {/* SECTION 3: Honors List (Black) */}
      <section className="relative w-full bg-[#050505] text-[#EAE6DF] overflow-hidden" style={{ paddingTop: '150px', paddingBottom: '150px' }}>
        <div className="relative z-10 w-full max-w-[1440px] mx-auto flex flex-col items-center" style={{ paddingInline: 'clamp(32px, 5vw, 80px)' }}>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-4xl"
          >
            <div className="text-center mb-24">
              <h2 className="text-brand-red uppercase tracking-[0.4em] text-2xl md:text-3xl font-bold">The Honors List</h2>
            </div>

            <div className="flex flex-col gap-12">
              {festivalLocations.map((loc, index) => (
                <div key={loc.id} className="flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center border-b border-white/10 pb-12">
                  <div className="w-full md:w-1/4">
                    <span className="text-[#666] font-bold text-2xl tracking-widest">{loc.year}</span>
                  </div>
                  <div className="w-full md:w-3/4 flex flex-col gap-2">
                    <h3 className="text-white text-3xl font-bold uppercase tracking-wide">{loc.festival}</h3>
                    <p className="text-brand-red uppercase tracking-[0.2em] text-sm font-bold">{loc.award}</p>
                    <p className="text-[#888] font-light mt-2">Location: {loc.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* SECTION 4: Custom CTA (Black) */}
      <section className="relative w-full bg-[#050505] text-[#EAE6DF] overflow-hidden" style={{ paddingTop: '100px', paddingBottom: '150px' }}>
        <div className="absolute top-1/2 left-[20%] -translate-y-1/2 w-[60%] max-w-3xl h-[400px] bg-brand-red/5 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 w-full max-w-[1440px] mx-auto flex flex-col items-start" style={{ paddingInline: 'clamp(32px, 5vw, 80px)' }}>
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-5xl"
          >
            <span className="text-brand-red uppercase tracking-[0.4em] text-xs font-bold mb-8 block">Your Story. Our Canvas.</span>
            
            <h2 
              className="uppercase leading-[0.9] mb-8"
              style={{ fontSize: 'clamp(48px, 8vw, 120px)', fontFamily: '"Druk Condensed Super", "Druk Condensed", "Bebas Neue", sans-serif', letterSpacing: '0.02em' }}
            >
              HAVE A STORY THE<br/>
              WORLD NEEDS TO<br/>
              <span className="text-brand-red">SEE?</span>
            </h2>

            <p className="text-[#bbb] text-lg md:text-2xl font-light max-w-2xl mb-12 leading-relaxed">
              Let's collaborate to bring your vision to life. From script development to global distribution, we create cinema that leaves a lasting impact.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
              <a href="#" className="inline-flex items-center justify-center gap-4 bg-[#EAE6DF] text-[#090706] uppercase tracking-[0.2em] text-[11px] md:text-xs font-bold hover:bg-brand-red hover:text-white transition-all duration-500 group" style={{ padding: '20px 48px' }}>
                <span>START A PROJECT</span>
                <span className="text-lg leading-none transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500">↗</span>
              </a>
              
              <a href="#" className="inline-flex items-center justify-center gap-4 bg-[#EAE6DF] text-[#090706] uppercase tracking-[0.2em] text-[11px] md:text-xs font-bold hover:bg-brand-red hover:text-white transition-all duration-500 group" style={{ padding: '20px 48px' }}>
                <span>CONTACT US</span>
                <span className="text-lg leading-none transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">↗</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <CineverseFooter />
    </div>
  );
};

export default CineverseFestivals;
