import React from 'react';
import { motion } from 'framer-motion';
import CineverseNavbar from '../components/CineverseNavbar';
import CineverseFooter from '../components/CineverseFooter';
import '../cineverse.css';

const CineverseFilms = () => {
  return (
    <div className="min-h-screen text-white bg-[#050505]">
      <CineverseNavbar />

      {/* SECTION 1: Featured Film Intro (Black) */}
      <section className="relative w-full bg-[#050505] text-[#EAE6DF] overflow-hidden" style={{ paddingTop: '150px', paddingBottom: '150px' }}>
        <div className="absolute top-0 right-0 w-[80%] h-[80%] bg-brand-red/5 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 w-full max-w-[1440px] mx-auto flex flex-col items-center text-center" style={{ paddingInline: 'clamp(32px, 5vw, 80px)' }}>
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="text-brand-red uppercase tracking-[0.4em] text-sm md:text-base font-bold">Featured Film</span>
            </div>
            
            <h1 
              className="uppercase leading-[0.9] mb-16 text-white"
              style={{ fontSize: 'clamp(64px, 12vw, 180px)', fontFamily: '"Druk Condensed Super", "Druk Condensed", "Bebas Neue", sans-serif', letterSpacing: '0.02em' }}
            >
              ENNA VILAI
            </h1>

            {/* Poster Layout Block */}
            <div className="w-full max-w-5xl mx-auto aspect-[2/3] md:aspect-[16/9] bg-[#111] border border-white/10 flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
              <span className="relative z-20 text-[#666] tracking-[0.2em] uppercase text-sm font-bold group-hover:text-white transition-colors duration-500">Poster Placeholder</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: Synopsis & Details (Beige) */}
      <section className="relative w-full bg-[#EAE6DF] text-[#090706] overflow-hidden" style={{ paddingTop: '150px', paddingBottom: '150px' }}>
        <div className="relative z-10 w-full max-w-[1440px] mx-auto flex flex-col md:flex-row gap-16 lg:gap-32" style={{ paddingInline: 'clamp(32px, 5vw, 80px)' }}>
          
          {/* Synopsis */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full md:w-2/3"
          >
            <div style={{ marginBottom: '40px' }}>
              <h2 className="text-brand-red uppercase tracking-[0.4em] text-2xl md:text-3xl font-bold">Synopsis</h2>
            </div>
            <p className="text-lg md:text-2xl font-light leading-relaxed text-[#333]">
              A fisherman discovers a gold pendant on the shores of Rameswaram, only to lose his dignity when he is falsely accused. What follows is a powerful struggle for justice, truth and human dignity.
            </p>
          </motion.div>

          {/* Details Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full md:w-1/3 flex flex-col gap-12"
          >
            <div>
              <h3 className="text-brand-red uppercase tracking-[0.3em] text-sm font-bold mb-4">Streaming Partner</h3>
              <p className="text-[#090706] text-xl font-bold uppercase tracking-wider">To Be Announced</p>
            </div>
            
            <div>
              <h3 className="text-brand-red uppercase tracking-[0.3em] text-sm font-bold mb-4">Resources</h3>
              <a href="#" className="inline-flex items-center justify-center gap-4 bg-[#090706] text-[#EAE6DF] uppercase tracking-[0.2em] text-[11px] md:text-xs font-bold hover:bg-brand-red hover:text-white transition-all duration-500 group" style={{ padding: '20px 48px' }}>
                <span>PRESS KIT DOWNLOAD</span>
                <span className="text-lg leading-none transform group-hover:translate-y-1 transition-transform duration-500">↓</span>
              </a>
            </div>
          </motion.div>

        </div>
      </section>

      {/* SECTION 3: Cast, Crew & Awards (Black) */}
      <section className="relative w-full bg-[#050505] text-[#EAE6DF] overflow-hidden" style={{ paddingTop: '150px', paddingBottom: '150px' }}>
        <div className="relative z-10 w-full max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-24" style={{ paddingInline: 'clamp(32px, 5vw, 80px)' }}>
          
          {/* Cast */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          >
            <div style={{ marginBottom: '40px' }}>
              <h2 className="text-brand-red uppercase tracking-[0.4em] text-2xl font-bold">Cast</h2>
            </div>
            <ul className="space-y-6">
              <li className="flex flex-col border-b border-white/10 pb-4">
                <span className="uppercase text-sm tracking-widest text-[#777] mb-1">Lead Actor</span>
                <span className="text-xl text-white">TBA</span>
              </li>
              <li className="flex flex-col border-b border-white/10 pb-4">
                <span className="uppercase text-sm tracking-widest text-[#777] mb-1">Supporting Cast</span>
                <span className="text-xl text-white">TBA</span>
              </li>
            </ul>
          </motion.div>

          {/* Crew */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div style={{ marginBottom: '40px' }}>
              <h2 className="text-brand-red uppercase tracking-[0.4em] text-2xl font-bold">Crew</h2>
            </div>
            <ul className="space-y-6">
              <li className="flex flex-col border-b border-white/10 pb-4">
                <span className="uppercase text-sm tracking-widest text-[#777] mb-1">Director</span>
                <span className="text-xl text-white">TBA</span>
              </li>
              <li className="flex flex-col border-b border-white/10 pb-4">
                <span className="uppercase text-sm tracking-widest text-[#777] mb-1">Producer</span>
                <span className="text-xl text-white">Kalamaya Cineverse</span>
              </li>
              <li className="flex flex-col border-b border-white/10 pb-4">
                <span className="uppercase text-sm tracking-widest text-[#777] mb-1">Cinematographer</span>
                <span className="text-xl text-white">TBA</span>
              </li>
            </ul>
          </motion.div>

          {/* Awards */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.0, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div style={{ marginBottom: '40px' }}>
              <h2 className="text-brand-red uppercase tracking-[0.4em] text-2xl font-bold">Awards & Festivals</h2>
            </div>
            <div className="bg-[#111] p-8 border border-white/5">
              <p className="text-[#888] font-light leading-relaxed text-justify">Festival submissions currently in progress. Updates on laurels, selections, and awards will be announced here soon.</p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* SECTION 4: Trailer & Gallery (Beige) */}
      <section className="relative w-full bg-[#EAE6DF] text-[#090706] overflow-hidden" style={{ paddingTop: '150px', paddingBottom: '150px' }}>
        <div className="relative z-10 w-full max-w-[1440px] mx-auto flex flex-col gap-32" style={{ paddingInline: 'clamp(32px, 5vw, 80px)' }}>
          
          {/* Trailer */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div style={{ marginBottom: '60px', textAlign: 'center' }}>
              <h2 className="text-brand-red uppercase tracking-[0.4em] text-2xl md:text-3xl font-bold">Official Trailer</h2>
            </div>
            <div className="w-full max-w-5xl mx-auto aspect-video bg-[#090706] flex items-center justify-center relative overflow-hidden group shadow-2xl">
              <span className="relative z-20 text-[#666] tracking-[0.2em] uppercase text-sm font-bold group-hover:text-brand-red transition-colors duration-500">Video Embed Placeholder</span>
            </div>
          </motion.div>

          {/* Gallery */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div style={{ marginBottom: '60px', textAlign: 'center' }}>
              <h2 className="text-brand-red uppercase tracking-[0.4em] text-2xl md:text-3xl font-bold">Gallery</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="aspect-[4/3] bg-[#ddd] flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors duration-500"></div>
                  <span className="text-[#888] tracking-widest text-xs uppercase font-bold relative z-10 group-hover:text-black transition-colors duration-300">Still 0{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* SECTION 5: Custom CTA (Black) */}
      <section className="relative w-full bg-[#050505] text-[#EAE6DF] overflow-hidden" style={{ paddingTop: '150px', paddingBottom: '150px' }}>
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

export default CineverseFilms;
