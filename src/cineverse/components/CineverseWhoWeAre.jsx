import { motion } from 'framer-motion';

const CineverseWhoWeAre = () => {
  return (
    <section className="relative w-full bg-[#050505] text-white overflow-hidden" style={{ paddingTop: '150px', paddingBottom: '150px' }}>
      
      {/* Subtle ambient light */}
      <div className="absolute top-1/2 left-[20%] -translate-y-1/2 w-[60%] max-w-3xl h-[400px] bg-brand-red/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-[1440px] mx-auto w-full flex flex-col lg:flex-row gap-16 lg:gap-32 items-start" style={{ paddingInline: 'clamp(32px, 5vw, 80px)' }}>
        
        {/* Left Side: Headline */}
        <motion.div 
          className="w-full lg:w-1/2 flex flex-col"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-4 mb-12">
            <span className="text-brand-red uppercase tracking-[0.4em] text-xs font-bold">Who We Are</span>
            <div className="h-[1px] w-12 md:w-24 bg-brand-red"></div>
          </div>
          
          <h2 
            className="text-white uppercase leading-[0.9]"
            style={{ fontSize: 'clamp(48px, 8vw, 100px)', fontFamily: '"Druk Condensed Super", "Druk Condensed", "Bebas Neue", sans-serif', letterSpacing: '0.02em' }}
          >
            CRAFTING AUTHENTIC<br />
            <span className="text-brand-red">CINEMA</span> FOR A<br />
            GLOBAL AUDIENCE
          </h2>
        </motion.div>

        {/* Right Side: Copy */}
        <motion.div 
          className="w-full lg:w-1/2 flex flex-col pt-4 lg:pt-24"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-col gap-8 max-w-xl text-justify">
            <p className="text-lg md:text-xl font-light text-[#e0e0e0] leading-relaxed">
              As a premier independent film production studio based in Chennai, Kalamaya Cineverse is driven by a singular vision: powerful stories transcend borders. With over 30 years of multidisciplinary expertise spanning media, television, and entertainment, we produce culturally rooted cinema that captivates worldwide audiences.
            </p>
            <p className="text-base md:text-lg font-light text-[#888] leading-relaxed">
              Our filmography balances artistic integrity with global commercial appeal. From critically acclaimed theatrical releases to premium OTT streaming content and international film festival selections, we bridge the gap between authentic local voices and the global stage. 
            </p>
            <p className="text-[#888] font-light text-lg md:text-2xl leading-relaxed max-w-2xl">
              As a premier Film Production Company in India, Kalamaya Cineverse is a visionary Independent Film Studio in India dedicated to crafting raw, powerful, and visually stunning cinematic experiences.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default CineverseWhoWeAre;
