import React from 'react';
import { motion } from 'framer-motion';
import CineverseNavbar from '../components/CineverseNavbar';
import CineverseFooter from '../components/CineverseFooter';
import '../cineverse.css';

const CineverseAbout = () => {
  return (
    <div className="min-h-screen text-white bg-[#050505]">
      <CineverseNavbar />
      
      {/* SECTION 1: The Foundation (Beige) */}
      <section className="relative w-full bg-[#EAE6DF] text-[#090706] overflow-hidden" style={{ paddingTop: '130px', paddingBottom: '150px' }}>
        {/* Subtle ambient light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-4xl h-[300px] bg-brand-red/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 w-full max-w-[1440px] mx-auto flex flex-col items-start text-left" style={{ paddingInline: 'clamp(32px, 5vw, 80px)' }}>
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-4xl"
          >
            <div style={{ marginBottom: '40px' }}>
              <span className="text-brand-red uppercase tracking-[0.4em] text-2xl md:text-3xl font-bold">About Us</span>
            </div>
            
            <h1 
              className="uppercase leading-[0.9] mb-12"
              style={{ fontSize: 'clamp(48px, 8vw, 110px)', fontFamily: '"Druk Condensed Super", "Druk Condensed", "Bebas Neue", sans-serif', letterSpacing: '0.02em' }}
            >
              STORIES FROM ANYWHERE.<br />
              <span className="text-brand-red">AUDIENCES EVERYWHERE.</span>
            </h1>

            <p className="text-[#333] text-lg md:text-2xl font-light leading-relaxed mb-8">
              <span className="font-bold text-brand-red">Kalamaya Cineverse</span> was founded with a simple belief: great stories can emerge from anywhere and connect with audiences everywhere.
            </p>
            <p className="text-[#555] text-base md:text-xl font-light leading-relaxed">
              Backed by over three decades of experience in events, media, television, marketing and entertainment, Kalamaya Cineverse develops and produces films that celebrate authentic voices, meaningful characters and culturally rooted storytelling.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: Our Focus (Black) */}
      <section className="relative w-full bg-[#050505] text-[#EAE6DF] overflow-hidden" style={{ paddingTop: '150px', paddingBottom: '150px' }}>
        {/* Subtle ambient light */}
        <div className="absolute top-1/2 left-[20%] -translate-y-1/2 w-[60%] max-w-3xl h-[400px] bg-brand-red/5 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 w-full max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-32 items-center" style={{ paddingInline: 'clamp(32px, 5vw, 80px)' }}>
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-1/2"
          >
            <h2 
              className="text-white uppercase leading-[0.9]"
              style={{ fontSize: 'clamp(48px, 8vw, 100px)', fontFamily: '"Druk Condensed Super", "Druk Condensed", "Bebas Neue", sans-serif', letterSpacing: '0.02em' }}
            >
              BALANCING<br />
              ARTISTIC INTEGRITY<br />
              WITH <span className="text-brand-red">GLOBAL APPEAL.</span>
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-1/2"
          >
            <p className="text-lg md:text-2xl font-light text-[#EAE6DF] opacity-90 leading-relaxed text-justify">
              Our focus is on creating cinema that balances artistic integrity with global appeal. Whether through theatrical releases, streaming platforms or international film festivals, we strive to bring local stories to the world while building meaningful collaborations with creators, distributors and audiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: The Philosophy (Beige) */}
      <section className="relative w-full bg-[#EAE6DF] text-[#090706] overflow-hidden text-center" style={{ paddingTop: '150px', paddingBottom: '150px' }}>
        <div className="relative z-10 w-full max-w-[1440px] mx-auto flex flex-col items-center" style={{ paddingInline: 'clamp(32px, 5vw, 80px)' }}>
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-4xl"
          >
            <div className="text-brand-red text-6xl md:text-8xl leading-none font-serif mb-8 opacity-40">"</div>
            <h2 
              className="uppercase leading-[1.1] mb-12 text-[#090706]"
              style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontFamily: '"Druk Condensed Super", "Druk Condensed", "Bebas Neue", sans-serif', letterSpacing: '0.02em' }}
            >
              At Kalamaya Cineverse, every film begins with a <span className="text-brand-red">story worth telling.</span>
            </h2>
            <div className="h-[2px] w-24 bg-brand-red mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: Custom CTA (Black) - based on reference */}
      <section className="relative w-full bg-[#050505] text-[#EAE6DF] overflow-hidden" style={{ paddingTop: '150px', paddingBottom: '150px' }}>
        {/* Subtle ambient light */}
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

export default CineverseAbout;
