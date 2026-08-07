import React from 'react';
import { motion } from 'framer-motion';
import CineverseNavbar from '../components/CineverseNavbar';
import CineverseFooter from '../components/CineverseFooter';
import '../cineverse.css';

const CollabCard = ({ category, title, description, buttonText, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay: delay, ease: [0.16, 1, 0.3, 1] }}
    className="bg-[#050505] text-[#EAE6DF] border border-[#222] flex flex-col relative overflow-hidden group hover:border-brand-red/50 transition-colors duration-500 w-full"
    style={{ padding: 'clamp(40px, 6vw, 100px)' }}
  >
    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 rounded-full blur-[40px] group-hover:bg-brand-red/10 transition-colors duration-500 pointer-events-none"></div>
    
    <span className="text-brand-red uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold mb-6 block">
      {category}
    </span>
    
    <h3 
      className="text-white uppercase leading-[0.9] mb-6 tracking-wide group-hover:text-brand-red transition-colors duration-300"
      style={{ fontSize: 'clamp(32px, 5vw, 64px)', fontFamily: '"Druk Condensed Super", "Druk Condensed", "Bebas Neue", sans-serif' }}
    >
      {title}
    </h3>
    
    <p className="text-[#888] font-light text-base md:text-xl leading-relaxed mb-12 max-w-lg">
      {description}
    </p>
    
    <div className="mt-auto">
      <a href="#" className="inline-flex items-center justify-center gap-4 bg-[#EAE6DF] text-[#090706] uppercase tracking-[0.2em] text-[11px] md:text-xs font-bold hover:bg-brand-red hover:text-white transition-all duration-500 group/btn" style={{ padding: '20px 48px' }}>
        <span>{buttonText}</span>
        <span className="text-lg leading-none transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300">↗</span>
      </a>
    </div>
  </motion.div>
);

const CineverseCollaborate = () => {
  return (
    <div className="min-h-screen text-white bg-[#050505]">
      <CineverseNavbar />

      {/* SECTION 1: Intro (Black) */}
      <section className="relative w-full bg-[#050505] text-[#EAE6DF] overflow-hidden" style={{ paddingTop: '150px', paddingBottom: '100px' }}>
        <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-brand-red/5 blur-[150px] rounded-full pointer-events-none"></div>

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
              style={{ fontSize: 'clamp(56px, 10vw, 150px)', fontFamily: '"Druk Condensed Super", "Druk Condensed", "Bebas Neue", sans-serif', letterSpacing: '0.02em' }}
            >
              COLLABORATE WITH US
            </h1>

            <div className="w-full flex justify-center">
              <p className="text-[#bbb] text-lg md:text-2xl font-light max-w-3xl text-center leading-relaxed">
                Connect with Kalamaya Cineverse. We are always looking for visionary filmmakers, strategic partners, and global distributors.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: The Opportunities Grid (Beige) */}
      <section className="relative w-full bg-[#EAE6DF] text-[#090706] overflow-hidden" style={{ paddingTop: '150px', paddingBottom: '150px' }}>
        <div className="relative z-10 w-full max-w-[1440px] mx-auto flex flex-col gap-8" style={{ paddingInline: 'clamp(32px, 5vw, 80px)' }}>
          
          <CollabCard 
            category="Creative"
            title="For Filmmakers"
            description="Pitch your story, screenplay or project. We empower visionary creators to partner with a leading Regional Cinema Production House to bring their cinematic ideas to life."
            buttonText="Submit Pitch"
            delay={0}
          />
          
          <CollabCard 
            category="Business"
            title="For Investors & Partners"
            description="Explore co-production and distribution opportunities. Invest in premium storytelling with a global footprint."
            buttonText="Explore Partnerships"
            delay={0.2}
          />
          
          <CollabCard 
            category="Distribution"
            title="For Distributors"
            description="Request screener access and business discussions. Explore premium Film Distribution India partnerships to bring Kalamaya Cineverse titles to your markets and platforms."
            buttonText="Request Access"
            delay={0.4}
          />

        </div>
      </section>

      {/* SECTION 3: Universal CTA (Black) */}
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
            <span className="text-brand-red uppercase tracking-[0.4em] text-xs font-bold mb-8 block">Reach Out</span>
            
            <h2 
              className="uppercase leading-[0.9] mb-8"
              style={{ fontSize: 'clamp(48px, 8vw, 120px)', fontFamily: '"Druk Condensed Super", "Druk Condensed", "Bebas Neue", sans-serif', letterSpacing: '0.02em' }}
            >
              HAVE A SPECIFIC<br/>
              <span className="text-brand-red">INQUIRY?</span>
            </h2>

            <p className="text-[#bbb] text-lg md:text-2xl font-light max-w-2xl mb-12 leading-relaxed">
              Not sure where you fit in? Contact our general inquiries team, and we'll point you in the right direction.
            </p>

            <a href="#" className="inline-flex items-center justify-center gap-4 bg-[#EAE6DF] text-[#090706] uppercase tracking-[0.2em] text-[11px] md:text-xs font-bold hover:bg-brand-red hover:text-white transition-all duration-500 group" style={{ padding: '20px 48px' }}>
              <span>CONTACT US</span>
              <span className="text-lg leading-none transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">↗</span>
            </a>
          </motion.div>
        </div>
      </section>

      <CineverseFooter />
    </div>
  );
};

export default CineverseCollaborate;
