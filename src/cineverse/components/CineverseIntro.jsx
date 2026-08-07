import { motion } from 'framer-motion';

const CineverseIntro = () => {
  const highlights = [
    "30+ Years of Experience",
    "International Festival Selections",
    "Netflix Streaming Partner",
    "Feature Films & OTT",
    "Based in Chennai, India"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 10 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="relative w-full bg-[#EAE6DF] text-[#090706] py-24 md:py-32 flex flex-col items-center justify-center overflow-hidden">
      
      {/* Subtle ambient light from behind the text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-4xl h-[300px] bg-brand-red/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-[1000px] mx-auto w-full flex flex-col items-center text-center" style={{ paddingInline: 'clamp(24px, 5vw, 64px)' }}>
        
        {/* Intro Text */}
        <motion.div 
          className="w-full flex flex-col items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="h-[1px] w-8 bg-brand-red"></div>
            <span className="uppercase tracking-[0.3em] text-brand-red text-[10px] md:text-xs font-bold">THE STUDIO</span>
            <div className="h-[1px] w-8 bg-brand-red"></div>
          </div>
          
          <p className="text-[#333] text-lg md:text-2xl font-light leading-relaxed mb-12 max-w-4xl">
            <span className="font-bold text-brand-red">Kalamaya Cineverse</span> is an independent film production studio dedicated to discovering, developing, and producing powerful stories that resonate across cultures and borders. From regional narratives to global audiences, we create cinema that inspires, challenges, and endures.
          </p>
        </motion.div>

        {/* Highlights List */}
        <motion.div 
          className="w-full mt-24 md:mt-32 flex flex-col max-w-5xl mx-auto border-t border-black/10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {highlights.map((item, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="flex items-center gap-8 md:gap-16 border-b border-black/10 group hover:bg-black/[0.03] transition-colors duration-500 px-4 md:px-8"
              style={{ paddingBlock: 'clamp(24px, 3vw, 40px)' }}
            >
              <span className="text-brand-red text-xs md:text-sm font-bold tracking-widest shrink-0">
                0{idx + 1}
              </span>
              <span className="text-[#090706] text-lg md:text-2xl font-light tracking-wide group-hover:text-brand-red transition-colors duration-500">
                {item}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default CineverseIntro;
