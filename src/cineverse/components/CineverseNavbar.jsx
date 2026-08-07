import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import cineverseLogo from '../../assets/cineverse logo transparent.png';

const CineverseNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    'HOME', 'ABOUT US', 'FILMS', 'PRODUCTIONS', 'NEWS', 'FESTIVALS', 'COLLABORATE', 'TEAM', 'CONTACT'
  ];

  return (
    <motion.nav 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-[#050505] ${scrolled ? 'shadow-lg border-b border-white/5' : 'border-b border-transparent'}`}
      style={{ height: '90px' }}
    >
      <div className="w-full max-w-[1440px] mx-auto h-full flex justify-between items-center" style={{ paddingInline: 'clamp(32px, 5vw, 80px)' }}>
        
        {/* Left: Logo */}
        <div className="flex-shrink-0 flex items-center h-full">
          <img src={cineverseLogo} alt="Kalamaya Cineverse" className="h-[45px] w-auto object-contain cursor-pointer" />
        </div>
        
        {/* Center: Links */}
        <div className="hidden xl:flex items-center h-full" style={{ gap: 'clamp(28px, 2.5vw, 36px)' }}>
          {navLinks.map((link) => {
            const isHome = link === 'HOME';
            const isAbout = link === 'ABOUT US';
            const isFilms = link === 'FILMS';
            const isProductions = link === 'PRODUCTIONS';
            const isFestivals = link === 'FESTIVALS';
            const isNews = link === 'NEWS';
            const isCollaborate = link === 'COLLABORATE';
            const isTeam = link === 'TEAM';
            const isContact = link === 'CONTACT';
            const path = isHome ? '/cineverse' : (isAbout ? '/cineverse/about' : (isFilms ? '/cineverse/films' : (isProductions ? '/cineverse/productions' : (isFestivals ? '/cineverse/festivals' : (isNews ? '/cineverse/news' : (isCollaborate ? '/cineverse/collaborate' : (isTeam ? '/cineverse/team' : (isContact ? '/cineverse/contact' : '#'))))))));
            const isActive = location.pathname === path;
            
            return (
              <Link 
                key={link} 
                to={path}
                className={`uppercase transition-colors relative group py-2 ${isActive ? 'text-brand-red' : 'text-[#a0a0a0] hover:text-white'}`}
                style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.12em' }}
              >
                {link}
                {isActive ? (
                  <span className="absolute bottom-0 left-0 h-[2px] bg-brand-red w-full"></span>
                ) : (
                  <span className="absolute bottom-0 left-0 h-[2px] bg-brand-red transition-all duration-300 w-0 group-hover:w-full"></span>
                )}
              </Link>
            );
          })}
        </div>

        {/* Right: Exit to Landing */}
        <div className="flex-shrink-0 flex items-center justify-end">
          <Link 
            to="/"
            className="text-white z-50 px-5 py-2.5 rounded-full border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all duration-300 flex items-center gap-2 group"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform duration-300">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            <span className="uppercase text-[11px] font-bold tracking-[0.1em]">Main Menu</span>
          </Link>
        </div>
        
      </div>
    </motion.nav>
  );
};
export default CineverseNavbar;
