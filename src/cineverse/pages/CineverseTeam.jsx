import React from 'react';
import { motion } from 'framer-motion';
import CineverseNavbar from '../components/CineverseNavbar';
import CineverseFooter from '../components/CineverseFooter';
import '../cineverse.css';

const CineverseTeam = () => {
  return (
    <div className="min-h-screen text-white bg-[#050505]">
      <CineverseNavbar />

      {/* SECTION 1: Intro (Black) */}
      <section className="relative w-full bg-[#050505] text-[#EAE6DF] overflow-hidden" style={{ paddingTop: '150px', paddingBottom: '100px' }}>
        <div className="absolute top-0 right-[20%] w-[50%] h-[50%] bg-brand-red/5 blur-[150px] rounded-full pointer-events-none"></div>

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
              OUR LEADERSHIP
            </h1>

            <div className="w-full flex justify-center">
              <p className="text-[#bbb] text-lg md:text-2xl font-light max-w-3xl text-center leading-relaxed">
                Meet the visionaries driving Kalamaya Cineverse. A perfect synergy of global strategy, production excellence, and raw storytelling.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: Githesh Viswambharan (Beige) */}
      <section className="relative w-full bg-[#EAE6DF] text-[#090706] overflow-hidden" style={{ paddingTop: '150px', paddingBottom: '150px' }}>
        <div className="relative z-10 w-full max-w-[1440px] mx-auto" style={{ paddingInline: 'clamp(32px, 5vw, 80px)' }}>
          
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            {/* Left: Image Placeholder */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full lg:w-5/12 aspect-[4/5] bg-[#050505] relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-brand-red/10 group-hover:bg-brand-red/20 transition-colors duration-500 z-10"></div>
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#333] text-sm tracking-[0.2em] uppercase font-bold text-center z-0 px-4">
                Githesh Viswambharan<br/>Portrait Placeholder
              </span>
            </motion.div>
            
            {/* Right: Typography */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full lg:w-7/12 flex flex-col items-start"
            >
              <span className="text-brand-red uppercase tracking-[0.3em] text-xs font-bold mb-6 block">Founder & Producer</span>
              
              <h2 
                className="uppercase leading-[0.9] mb-10 text-[#090706]"
                style={{ fontSize: 'clamp(48px, 8vw, 100px)', fontFamily: '"Druk Condensed Super", "Druk Condensed", "Bebas Neue", sans-serif', letterSpacing: '0.02em' }}
              >
                GITHESH VISWAMBHARAN
              </h2>
              
              <div className="flex flex-col gap-6 text-[#444] font-light text-lg md:text-xl leading-relaxed max-w-2xl">
                <p>
                  With over 30 years of unparalleled experience in the media and entertainment industry, Githesh Viswambharan stands as the strategic force behind Kalamaya Cineverse.
                </p>
                <p>
                  As the visionary founder of Kalamaya Events India, Githesh has spent decades orchestrating monumental projects, cementing his reputation as a master marketing strategist. Now, stepping into the role of Producer, his unparalleled expertise in global strategy is driving the studio's ambition to craft cinema that resonates on an international scale.
                </p>
                <p>
                  His leadership ensures that every project not only pushes creative boundaries but is also perfectly positioned to captivate audiences worldwide.
                </p>
              </div>
            </motion.div>
          </div>
          
        </div>
      </section>

      {/* SECTION 3: Anugopal Venugopalan (Black) */}
      <section className="relative w-full bg-[#050505] text-[#EAE6DF] overflow-hidden" style={{ paddingTop: '150px', paddingBottom: '150px' }}>
        <div className="absolute top-1/2 left-[10%] -translate-y-1/2 w-[40%] h-[60%] bg-brand-red/5 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 w-full max-w-[1440px] mx-auto" style={{ paddingInline: 'clamp(32px, 5vw, 80px)' }}>
          
          <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
            {/* Left: Typography */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full lg:w-7/12 flex flex-col items-start"
            >
              <span className="text-brand-red uppercase tracking-[0.3em] text-xs font-bold mb-6 block">Creative Visionary & Director</span>
              
              <h2 
                className="uppercase leading-[0.9] mb-10 text-white"
                style={{ fontSize: 'clamp(48px, 8vw, 100px)', fontFamily: '"Druk Condensed Super", "Druk Condensed", "Bebas Neue", sans-serif', letterSpacing: '0.02em' }}
              >
                ANUGOPAL VENUGOPALAN
              </h2>
              
              <div className="flex flex-col gap-6 text-[#bbb] font-light text-lg md:text-xl leading-relaxed max-w-2xl">
                <p>
                  Anugopal Venugopalan is the creative heartbeat of Kalamaya Cineverse, a storyteller who thrives on exploring the raw, unfiltered depths of the human condition. 
                </p>
                <p>
                  His distinct directorial voice is defined by his ability to extract profound emotion from gritty, grounded realities. This mastery is on full display in his crafting of <em>Enna Vilai</em>, where the simple discovery of a gold pendant on the shores of Rameswaram unravels into a devastating, powerful struggle for justice and truth. 
                </p>
                <p>
                  Under Anugopal's creative direction, Kalamaya Cineverse doesn't just produce films—it crafts unforgettable cinematic experiences that restore and examine human dignity.
                </p>
              </div>
            </motion.div>
            
            {/* Right: Image Placeholder */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full lg:w-5/12 aspect-[4/5] bg-[#EAE6DF] relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-black/5 group-hover:bg-brand-red/10 transition-colors duration-500 z-10"></div>
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#888] text-sm tracking-[0.2em] uppercase font-bold text-center z-0 px-4">
                Anugopal Venugopalan<br/>Portrait Placeholder
              </span>
            </motion.div>
          </div>
          
        </div>
      </section>

      {/* SECTION 4: Universal CTA (Black) */}
      <section className="relative w-full bg-[#050505] text-[#EAE6DF] overflow-hidden" style={{ paddingTop: '50px', paddingBottom: '150px' }}>
        <div className="relative z-10 w-full max-w-[1440px] mx-auto flex flex-col items-center text-center" style={{ paddingInline: 'clamp(32px, 5vw, 80px)' }}>
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-4xl flex flex-col items-center"
          >
            <span className="text-brand-red uppercase tracking-[0.4em] text-xs font-bold mb-8 block">Connect</span>
            
            <h2 
              className="uppercase leading-[0.9] mb-8"
              style={{ fontSize: 'clamp(48px, 8vw, 120px)', fontFamily: '"Druk Condensed Super", "Druk Condensed", "Bebas Neue", sans-serif', letterSpacing: '0.02em' }}
            >
              REACH OUT TO<br/>
              <span className="text-brand-red">THE TEAM</span>
            </h2>

            <a href="#" className="inline-flex items-center justify-center gap-4 bg-[#EAE6DF] text-[#090706] uppercase tracking-[0.2em] text-[11px] md:text-xs font-bold hover:bg-brand-red hover:text-white transition-all duration-500 group" style={{ padding: '20px 48px', marginTop: '40px' }}>
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

export default CineverseTeam;
