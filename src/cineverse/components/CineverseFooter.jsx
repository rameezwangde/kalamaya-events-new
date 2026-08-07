import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';

const CineverseFooter = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  const socialLinks = ["Instagram", "LinkedIn", "Vimeo", "YouTube"];
  const quickLinks = ["Home", "About Us", "Films", "Productions", "News", "Festivals", "Collaborate", "Services", "Team", "Contact"];

  return (
    <footer className="relative w-full bg-[#050505] overflow-hidden border-t border-white/5" style={{ paddingTop: '120px', paddingBottom: '48px' }}>

      <div className="max-w-[1440px] mx-auto w-full flex flex-col" style={{ paddingInline: 'clamp(24px, 5vw, 80px)' }}>

        {/* Massive Hook */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex flex-col items-center text-center mb-32"
        >
          <span className="text-brand-red uppercase tracking-[0.4em] text-xs font-bold mb-6">Start Your Journey</span>
          <h2
            className="leading-[0.9] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 pb-4 whitespace-nowrap"
            style={{ fontSize: 'clamp(36px, 6vw, 100px)', fontFamily: '"Druk Condensed Super", "Druk Condensed", "Bebas Neue", sans-serif', letterSpacing: '0.02em' }}
          >
            LET'S TELL YOUR STORY.
          </h2>
        </motion.div>

        {/* Footer Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 w-full mb-32 md:mb-40"
        >
          {/* Column 1: Studio */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <h4 className="text-white font-semibold uppercase tracking-[0.2em] text-xs mb-6">Studio</h4>
            <h3 className="text-white text-2xl font-bold tracking-widest uppercase leading-none mb-4">KALAMAYA<br /><span className="text-brand-red text-sm tracking-[0.4em]">CINEVERSE</span></h3>
            <p className="text-[#888] font-light text-sm max-w-[250px] leading-relaxed">
              An independent film production studio creating cinema that inspires, challenges, and endures.
            </p>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <h4 className="text-white font-semibold uppercase tracking-[0.2em] text-xs mb-6">Explore</h4>
            <div className="flex flex-col gap-4">
              {quickLinks.map(link => (
                <a key={link} href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-[#888] hover:text-brand-red text-sm transition-colors duration-300 w-fit">
                  {link}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Column 3: Socials */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <h4 className="text-white font-semibold uppercase tracking-[0.2em] text-xs mb-6">Connect</h4>
            <div className="flex flex-col gap-4">
              {socialLinks.map(social => (
                <a key={social} href="#" className="text-[#888] hover:text-white text-sm transition-colors duration-300 flex items-center gap-1 group w-fit">
                  <span>{social}</span>
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Column 4: Contact */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <h4 className="text-white font-semibold uppercase tracking-[0.2em] text-xs mb-6">Inquiries</h4>
            <div className="flex flex-col gap-5">
              <a href="mailto:hello@kalamaya.in" className="flex items-center gap-3 text-[#888] hover:text-white transition-colors duration-300 text-sm group">
                <Mail size={16} className="text-brand-red group-hover:text-white transition-colors" />
                <span>hello@kalamaya.in</span>
              </a>
              <a href="tel:+919876543210" className="flex items-center gap-3 text-[#888] hover:text-white transition-colors duration-300 text-sm group">
                <Phone size={16} className="text-brand-red group-hover:text-white transition-colors" />
                <span>+91 98765 43210</span>
              </a>
              <div className="flex items-start gap-3 text-[#888] text-sm mt-1">
                <MapPin size={16} className="text-brand-red shrink-0 mt-0.5" />
                <span className="leading-relaxed">Chennai, Tamil Nadu<br />India</span>
              </div>
            </div>
          </motion.div>

        </motion.div>

        {/* Legal Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#555] font-medium tracking-wide"
        >
          <p>© {new Date().getFullYear()} Kalamaya Cineverse. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </motion.div>

      </div>
    </footer>
  );
};

export default CineverseFooter;
