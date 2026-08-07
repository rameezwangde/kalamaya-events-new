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
    'HOME', 'ABOUT US', 'FILMS', 'PRODUCTIONS', 'SERVICES', 'TEAM', 'CONTACT'
  ];

  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
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
            const path = isHome ? '/cineverse' : (isAbout ? '/cineverse/about' : (isFilms ? '/cineverse/films' : (isProductions ? '/cineverse/productions' : '#')));
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

        {/* Right: Hamburger */}
        <div className="flex-shrink-0 flex items-center justify-end">
          <button className="text-white z-50 p-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors">
            <Menu size={20} />
          </button>
        </div>
        
      </div>
    </motion.nav>
  );
};
export default CineverseNavbar;
