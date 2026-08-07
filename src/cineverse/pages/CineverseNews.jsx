import React from 'react';
import { motion } from 'framer-motion';
import CineverseNavbar from '../components/CineverseNavbar';
import CineverseFooter from '../components/CineverseFooter';
import '../cineverse.css';

const NewsCard = ({ category, date, title, excerpt }) => (
  <div className="bg-[#ddd] border border-[#ccc] flex flex-col relative overflow-hidden group cursor-pointer h-full">
    {/* Image Placeholder Block */}
    <div className="w-full aspect-[16/9] bg-[#111] relative overflow-hidden">
      <div className="absolute inset-0 bg-black/5 group-hover:bg-brand-red/20 transition-colors duration-500 z-10"></div>
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#444] text-xs tracking-[0.2em] uppercase font-bold z-0">
        Article Image Placeholder
      </span>
    </div>
    
    {/* Content Block */}
    <div className="p-8 flex flex-col flex-grow bg-white group-hover:bg-[#f5f5f5] transition-colors duration-500">
      <div className="flex items-center justify-between mb-6">
        <span className="text-brand-red uppercase tracking-[0.2em] text-[10px] font-bold">{category}</span>
        <span className="text-[#888] uppercase tracking-[0.1em] text-[10px] font-semibold">{date}</span>
      </div>
      
      <h3 className="text-xl md:text-2xl font-bold tracking-wide text-[#090706] mb-4 leading-snug group-hover:text-brand-red transition-colors duration-300">
        {title}
      </h3>
      
      {excerpt && (
        <p className="text-[#555] font-light text-sm leading-relaxed mb-6 flex-grow">
          {excerpt}
        </p>
      )}
      
      <div className="mt-auto pt-6 border-t border-[#eee]">
        <span className="block uppercase tracking-[0.2em] text-[10px] font-bold text-[#090706] group-hover:text-brand-red transition-colors duration-300">
          Read Full Story ↗
        </span>
      </div>
    </div>
  </div>
);

const CineverseNews = () => {
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
            className="w-full flex flex-col items-center"
          >
            <h1 
              className="uppercase leading-[0.9] mb-12 text-white text-center w-full"
              style={{ fontSize: 'clamp(64px, 12vw, 180px)', fontFamily: '"Druk Condensed Super", "Druk Condensed", "Bebas Neue", sans-serif', letterSpacing: '0.02em' }}
            >
              NEWS & MEDIA
            </h1>

            <div className="w-full flex justify-center">
              <p className="text-[#bbb] text-lg md:text-2xl font-light max-w-3xl text-center leading-relaxed">
                Press releases, festival announcements, trailer launches and media coverage.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: The Newsroom (Beige) */}
      <section className="relative w-full bg-[#EAE6DF] text-[#090706] overflow-hidden" style={{ paddingTop: '150px', paddingBottom: '150px' }}>
        <div className="relative z-10 w-full max-w-[1440px] mx-auto flex flex-col gap-16" style={{ paddingInline: 'clamp(32px, 5vw, 80px)' }}>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div style={{ marginBottom: '60px' }}>
              <h2 className="text-brand-red uppercase tracking-[0.4em] text-2xl md:text-4xl font-bold">Latest Updates</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1 */}
              <NewsCard 
                category="Festivals" 
                date="August 2026" 
                title="Enna Vilai selected at international film festivals"
                excerpt="Our highly anticipated feature film 'Enna Vilai' officially begins its festival run, securing spots at several prestigious international showcases."
              />
              
              {/* Card 2 */}
              <NewsCard 
                category="Streaming" 
                date="July 2026" 
                title="Netflix acquires streaming rights for upcoming slate"
                excerpt="Kalamaya Cineverse strikes a major deal with Netflix to bring our original storytelling to audiences globally, starting later this year."
              />
              
              {/* Card 3 */}
              <NewsCard 
                category="Press Release" 
                date="June 2026" 
                title="First-look launch announcements for the new season"
                excerpt="Get an exclusive first look at the characters, worlds, and cinematic vision behind our upcoming original productions."
              />
              
              {/* Card 4 */}
              <NewsCard 
                category="Events" 
                date="May 2026" 
                title="Grand Music launch events announced for 'Enna Vilai'"
                excerpt="Join us as we unveil the sweeping, emotional soundtrack of 'Enna Vilai' with live performances and the entire cast in attendance."
              />
            </div>
          </motion.div>

        </div>
      </section>

      {/* SECTION 3: Press Inquiries CTA (Black) */}
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
            <span className="text-brand-red uppercase tracking-[0.4em] text-xs font-bold mb-8 block">Press & Media</span>
            
            <h2 
              className="uppercase leading-[0.9] mb-8"
              style={{ fontSize: 'clamp(48px, 8vw, 120px)', fontFamily: '"Druk Condensed Super", "Druk Condensed", "Bebas Neue", sans-serif', letterSpacing: '0.02em' }}
            >
              FOR PRESS INQUIRIES &<br/>
              <span className="text-brand-red">MEDIA KITS</span>
            </h2>

            <p className="text-[#bbb] text-lg md:text-2xl font-light max-w-2xl mb-12 leading-relaxed">
              If you are a member of the press and wish to feature Kalamaya Cineverse, please reach out to our communications team for official media assets and interviews.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
              <a href="#" className="inline-flex items-center justify-center gap-4 bg-[#EAE6DF] text-[#090706] uppercase tracking-[0.2em] text-[11px] md:text-xs font-bold hover:bg-brand-red hover:text-white transition-all duration-500 group" style={{ padding: '20px 48px' }}>
                <span>DOWNLOAD BRAND ASSETS</span>
                <span className="text-lg leading-none transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500">↓</span>
              </a>
              
              <a href="#" className="inline-flex items-center justify-center gap-4 bg-[#EAE6DF] text-[#090706] uppercase tracking-[0.2em] text-[11px] md:text-xs font-bold hover:bg-brand-red hover:text-white transition-all duration-500 group" style={{ padding: '20px 48px' }}>
                <span>CONTACT PRESS TEAM</span>
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

export default CineverseNews;
