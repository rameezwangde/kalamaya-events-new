import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CineverseCTA = () => {
  return (
    <section className="relative w-full bg-[#050505] text-[#EAE6DF] overflow-hidden" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
      <div className="max-w-[1440px] mx-auto w-full flex flex-col items-center" style={{ paddingInline: 'clamp(32px, 5vw, 80px)' }}>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl text-center flex flex-col items-center"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand-red/5 blur-[150px] rounded-full pointer-events-none"></div>

          <span className="text-brand-red uppercase tracking-[0.4em] text-xs font-bold mb-8 relative z-10">Collaborate</span>

          <h2 
            className="leading-[0.9] text-[#EAE6DF] pb-6"
            style={{ fontSize: 'clamp(48px, 8vw, 120px)', fontFamily: '"Druk Condensed Super", "Druk Condensed", "Bebas Neue", sans-serif', letterSpacing: '0.02em' }}
          >
            READY TO BRING YOUR<br/>
            <span className="text-brand-red">VISION</span> TO LIFE?
          </h2>
          
          <p className="relative z-10 text-[#EAE6DF] text-lg md:text-2xl font-light max-w-2xl mx-auto mb-16 leading-relaxed">
            Let's collaborate to create powerful narratives that leave a lasting impact.
          </p>

          <button className="relative z-10 inline-flex items-center justify-center gap-4 border border-[#EAE6DF] rounded-full text-[#EAE6DF] uppercase tracking-[0.2em] text-[11px] md:text-xs font-bold hover:bg-[#EAE6DF] hover:text-[#050505] transition-all duration-500 group" style={{ padding: '20px 48px' }}>
            <span>START A PROJECT</span>
            <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-500" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default CineverseCTA;
