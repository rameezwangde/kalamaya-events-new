import React from 'react';
import { motion } from 'framer-motion';
import CineverseNavbar from '../components/CineverseNavbar';
import CineverseFooter from '../components/CineverseFooter';
import '../cineverse.css';

const ProjectCard = ({ title, status, darkTheme = false }) => (
  <div className={`aspect-[4/5] ${darkTheme ? 'bg-[#111] border-[#333]' : 'bg-[#ddd] border-[#ccc]'} border flex flex-col justify-between p-8 relative overflow-hidden group`}>
    <div className={`absolute inset-0 ${darkTheme ? 'bg-black/40' : 'bg-black/5'} group-hover:bg-brand-red/10 transition-colors duration-500`}></div>
    
    <div className="relative z-10">
      <span className="text-brand-red uppercase tracking-[0.3em] text-xs font-bold mb-4 block">{status}</span>
    </div>
    
    <div className="relative z-10">
      <h3 className={`text-2xl md:text-3xl uppercase font-bold tracking-widest ${darkTheme ? 'text-white' : 'text-[#090706]'}`}>{title}</h3>
      <span className={`block mt-4 uppercase tracking-[0.2em] text-[10px] font-bold ${darkTheme ? 'text-[#888]' : 'text-[#666]'} group-hover:text-brand-red transition-colors duration-300`}>Explore Project ↗</span>
    </div>
  </div>
);

const CineverseProductions = () => {
  return (
    <div className="min-h-screen text-white bg-[#050505]">
      <CineverseNavbar />

      {/* SECTION 1: Intro (Black) */}
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
            <h1 
              className="uppercase leading-[0.9] mb-12 text-white"
              style={{ fontSize: 'clamp(64px, 12vw, 180px)', fontFamily: '"Druk Condensed Super", "Druk Condensed", "Bebas Neue", sans-serif', letterSpacing: '0.02em' }}
            >
              PRODUCTIONS
            </h1>

            <p className="text-[#bbb] text-lg md:text-2xl font-light max-w-3xl mx-auto leading-relaxed">
              Show all current and upcoming projects. This section is designed to grow as Kalamaya Cineverse expands its storytelling across different formats.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: Core Slate (Beige) */}
      <section className="relative w-full bg-[#EAE6DF] text-[#090706] overflow-hidden" style={{ paddingTop: '150px', paddingBottom: '150px' }}>
        <div className="relative z-10 w-full max-w-[1440px] mx-auto flex flex-col gap-32" style={{ paddingInline: 'clamp(32px, 5vw, 80px)' }}>
          
          {/* Feature Films */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div style={{ marginBottom: '60px' }}>
              <h2 className="text-brand-red uppercase tracking-[0.4em] text-2xl md:text-4xl font-bold">Feature Films</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard title="Enna Vilai" status="Post-Production" />
              <ProjectCard title="Untitled Feature" status="In Development" />
              <ProjectCard title="Future Project" status="Announced" />
            </div>
          </motion.div>

          {/* OTT Originals */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div style={{ marginBottom: '60px' }}>
              <h2 className="text-brand-red uppercase tracking-[0.4em] text-2xl md:text-4xl font-bold">OTT Originals</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard title="Series Alpha" status="Pre-Production" />
              <ProjectCard title="Series Beta" status="In Development" />
            </div>
          </motion.div>

        </div>
      </section>

      {/* SECTION 3: Expanding Slate (Black) */}
      <section className="relative w-full bg-[#050505] text-[#EAE6DF] overflow-hidden" style={{ paddingTop: '150px', paddingBottom: '150px' }}>
        <div className="relative z-10 w-full max-w-[1440px] mx-auto flex flex-col gap-32" style={{ paddingInline: 'clamp(32px, 5vw, 80px)' }}>
          
          {/* Co-Productions */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div style={{ marginBottom: '60px' }}>
              <h2 className="text-brand-red uppercase tracking-[0.4em] text-2xl md:text-4xl font-bold">Co-Productions</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard title="Global Project X" status="Filming" darkTheme={true} />
              <ProjectCard title="Global Project Y" status="In Development" darkTheme={true} />
            </div>
          </motion.div>

          {/* Development Slate */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div style={{ marginBottom: '60px' }}>
              <h2 className="text-brand-red uppercase tracking-[0.4em] text-2xl md:text-4xl font-bold">Development Slate</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ProjectCard title="Concept 01" status="Ideation" darkTheme={true} />
              <ProjectCard title="Concept 02" status="Pitching" darkTheme={true} />
              <ProjectCard title="Concept 03" status="Scripting" darkTheme={true} />
              <ProjectCard title="Concept 04" status="Ideation" darkTheme={true} />
            </div>
          </motion.div>

        </div>
      </section>

      {/* SECTION 4: Custom CTA (Black) */}
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

export default CineverseProductions;
