import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';
import rightSideImage from '../../../right side image.png';

const CineverseHero = () => {
  return (
    <section className="relative w-full min-h-[100svh] flex items-center overflow-hidden bg-[#050505]">
      {/* Right Side Background Image */}
      <motion.div 
        className="absolute inset-0 z-0 flex justify-end pointer-events-none"
        initial={{ scale: 1.04 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: 'easeOut' }}
      >
        <img
          src={rightSideImage}
          alt="Cineverse Right Visual"
          className="w-full md:w-[54%] h-full object-cover object-[center_right]"
        />
      </motion.div>
      
      {/* Cinematic Blending Gradient */}
      <div 
        className="absolute inset-0 z-1 pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, #090706 0%, rgba(9,7,6,0.95) 25%, rgba(9,7,6,0.85) 45%, rgba(9,7,6,0.3) 65%, transparent 100%)'
        }}
      ></div>
      <div 
        className="absolute inset-0 z-1 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, transparent 70%, #090706 100%)'
        }}
      ></div>

      {/* Hero Content Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto pt-[90px] flex items-center h-full" style={{ paddingInline: 'clamp(32px, 5vw, 80px)' }}>
        <div className="w-full md:w-[46%] flex flex-col justify-center">
          
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0% 0 0 0)' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="leading-[0.9] text-[#f4f4f4] whitespace-nowrap" style={{ fontSize: 'clamp(40px, 5.5vw, 130px)', fontFamily: '"Druk Condensed Super", "Druk Condensed", "Bebas Neue", sans-serif', letterSpacing: '0.02em', textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
              LOCAL ROOTS.
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0% 0 0 0)' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            <h1 className="leading-[0.9] text-brand-red whitespace-nowrap" style={{ fontSize: 'clamp(40px, 5.5vw, 130px)', fontFamily: '"Druk Condensed Super", "Druk Condensed", "Bebas Neue", sans-serif', letterSpacing: '0.02em', textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
              GLOBAL STORIES.
            </h1>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 md:mt-8"
          >
            <p className="text-white/80 font-light tracking-wide max-w-xl" style={{ fontSize: 'clamp(18px, 2vw, 24px)', lineHeight: '1.5' }}>
              Stories born in India.<br/>Crafted for the world.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-8"
            style={{ marginTop: 'clamp(60px, 8vh, 120px)' }}
          >
            <button className="inline-flex items-center justify-center gap-3 border border-brand-red rounded-full text-[#cccccc] uppercase tracking-[0.15em] text-[11px] font-bold hover:bg-brand-red hover:text-white transition-colors duration-300 w-auto whitespace-nowrap" style={{ boxSizing: 'border-box', padding: '16px 32px' }}>
              <Play size={12} fill="currentColor" />
              <span>WATCH SHOWREEL</span>
            </button>
            <button className="inline-flex items-center justify-center gap-3 border border-brand-red rounded-full text-white/90 uppercase tracking-[0.15em] text-[11px] font-bold hover:bg-brand-red hover:text-white transition-colors duration-300 group w-auto whitespace-nowrap" style={{ boxSizing: 'border-box', padding: '16px 32px' }}>
              <span>EXPLORE OUR WORK</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 z-20 flex flex-col items-center md:items-start gap-4"
        style={{ left: 'clamp(32px, 5vw, 80px)' }}
      >
        <div className="w-[18px] h-[34px] rounded-full border-[1.5px] border-[#555] flex justify-center p-[2px] md:ml-[45px]">
          <motion.div 
            className="w-[2px] h-[5px] bg-[#999] rounded-full mt-1"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
        </div>
        <span className="text-[10px] uppercase tracking-[0.4em] font-medium text-[#777]">SCROLL TO EXPLORE</span>
      </motion.div>
    </section>
  );
};
export default CineverseHero;
