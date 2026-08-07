import { motion } from 'framer-motion';
import { ArrowUpRight, Plus } from 'lucide-react';

const CineverseIntro = () => {
  const highlights = [
    { 
      title: "30+ YEARS OF EXPERIENCE", 
      desc: "Decades of expertise in crafting compelling visual narratives across multiple formats and genres." 
    },
    { 
      title: "INTERNATIONAL FESTIVAL SELECTIONS", 
      desc: "Critically acclaimed cinema recognized and celebrated on prestigious global stages." 
    },
    { 
      title: "NETFLIX STREAMING PARTNER", 
      desc: "Strategic alliances with top-tier streaming platforms for worldwide distribution." 
    },
    { 
      title: "FEATURE FILMS & OTT", 
      desc: "A diverse portfolio spanning theatrical releases and high-end digital series." 
    },
    { 
      title: "BASED IN CHENNAI, INDIA", 
      desc: "Rooted in rich regional culture while speaking to a universal, global audience." 
    }
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="relative w-full bg-[#EAE6DF] text-[#090706] flex flex-col items-center justify-center overflow-hidden" style={{ paddingTop: '150px', paddingBottom: '150px' }}>
      
      {/* Subtle ambient light from behind the text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-4xl h-[300px] bg-brand-red/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto flex flex-col items-start text-left" style={{ paddingInline: 'clamp(32px, 5vw, 80px)' }}>
        
        {/* Intro Text */}
        <motion.div 
          className="w-full flex flex-col items-start mb-24 md:mb-32"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Overline */}
          <div className="flex items-center gap-4 mb-8">
            <span className="text-brand-red uppercase tracking-[0.4em] text-xl md:text-2xl font-bold">The Studio</span>
          </div>
          
          {/* Massive Headline */}
          <h2 
            className="text-[#090706] uppercase leading-[0.9] mb-8"
            style={{ fontSize: 'clamp(48px, 8vw, 120px)', fontFamily: '"Druk Condensed Super", "Druk Condensed", "Bebas Neue", sans-serif', letterSpacing: '0.02em' }}
          >
            POWERFUL STORIES,<br />
            GLOBALLY TOLD
          </h2>

          <p className="text-[#333] text-lg md:text-xl font-light leading-relaxed max-w-2xl">
            Kalamaya Cineverse is an independent film production studio dedicated to discovering, developing, and producing stories that resonate across cultures and borders.
          </p>
        </motion.div>

        {/* Highlights List */}
        <motion.div 
          className="w-full flex flex-col border-t border-black/20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {highlights.map((item, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16 border-b border-black/20 group hover:bg-black/[0.03] transition-colors duration-500 cursor-pointer"
              style={{ paddingBlock: 'clamp(32px, 4vw, 56px)' }}
            >
              {/* Left Side: Icon & Title */}
              <div className="flex flex-1 items-start gap-8 md:gap-12">
                <Plus 
                  strokeWidth={1.5}
                  className="w-5 h-5 md:w-6 md:h-6 text-brand-red shrink-0 mt-3 md:mt-5 group-hover:rotate-90 transition-transform duration-500" 
                />
                <span 
                  className="text-[#090706] uppercase leading-[0.9] group-hover:text-brand-red transition-colors duration-500"
                  style={{ fontSize: 'clamp(32px, 4vw, 64px)', fontFamily: '"Druk Condensed Super", "Druk Condensed", "Bebas Neue", sans-serif', letterSpacing: '0.02em' }}
                >
                  {item.title}
                </span>
              </div>

              {/* Right Side: Desc & Arrow */}
              <div className="flex lg:w-[400px] items-start lg:items-center justify-between gap-8 pl-12 lg:pl-0">
                <p className="text-[#555] text-sm md:text-base font-light leading-relaxed max-w-[280px]">
                  {item.desc}
                </p>
                <ArrowUpRight 
                  strokeWidth={1.5} 
                  className="w-6 h-6 md:w-8 md:h-8 text-brand-red shrink-0 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-500" 
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default CineverseIntro;
