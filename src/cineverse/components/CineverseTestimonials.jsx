import { motion } from 'framer-motion';

const CineverseTestimonials = () => {
  const testimonials = [
    {
      quote: "Kalamaya Cineverse consistently delivers narratives that hit right at the heart of the audience. A visionary studio.",
      author: "Arun Kumar",
      role: "Film Critic & Director"
    },
    {
      quote: "Working with this team is a masterclass in visual storytelling and sheer cinematic execution.",
      author: "Priya Rajan",
      role: "Independent Producer"
    },
    {
      quote: "They have a unique ability to bridge regional soul with global scale. Absolutely breathtaking work.",
      author: "Vikram Sethi",
      role: "Festival Curator"
    },
    {
      quote: "A rare breed of storytellers who understand the delicate balance of art and audience engagement.",
      author: "Sarah Jenkins",
      role: "Global Distribution"
    },
    {
      quote: "Their commitment to pushing the boundaries of Indian cinema is truly unmatched in the current era.",
      author: "Karthik Subbaraj",
      role: "Filmmaker"
    }
  ];

  // Duplicate the array to create a seamless infinite loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="relative w-full bg-[#050505] text-white overflow-hidden" style={{ paddingBlock: 'clamp(120px, 15vw, 250px)' }}>
      <div className="w-full flex flex-col items-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24 md:mb-32"
        >
          <span className="text-brand-red uppercase tracking-[0.4em] text-xs font-bold">What They Say</span>
        </motion.div>

        {/* Free-Flowing Marquee Container */}
        <div className="relative w-full flex overflow-hidden group">
          {/* Left/Right Fade Masks */}
          <div className="absolute top-0 left-0 w-32 md:w-64 h-full bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-32 md:w-64 h-full bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none"></div>

          <motion.div
            className="flex gap-16 md:gap-32 px-8 md:px-16 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 45 }}
          >
            {duplicatedTestimonials.map((test, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center w-[300px] md:w-[450px] shrink-0"
              >
                <div className="text-brand-red text-5xl md:text-6xl leading-none font-serif mb-6 opacity-40">"</div>
                <p className="text-lg md:text-xl font-light italic text-[#e0e0e0] leading-loose mb-10">
                  {test.quote}
                </p>
                <div className="mt-auto flex flex-col items-center gap-2">
                  <div className="h-[1px] w-8 bg-brand-red/50 mb-2"></div>
                  <h4 className="text-white font-bold tracking-[0.2em] uppercase text-xs md:text-sm">{test.author}</h4>
                  <span className="text-[#888] text-[10px] md:text-xs uppercase tracking-wider">{test.role}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default CineverseTestimonials;
