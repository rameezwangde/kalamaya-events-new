import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import leftBackground from '../../left side new.png';
import rightBackground from '../../right side new.png';
import darkLeftBackground from '../assets/left side image.png';
import darkRightBackground from '../assets/right side image.png';
import eventsLogo from '../assets/events logo transparent.png';
import cineverseLogo from '../assets/cineverse logo transparent.png';
import portalRing from '../../white ring.png';

const Divider = () => (
  <div className="portal-divider" aria-hidden="true"><span /><i /><span /></div>
);

const AngularButton = ({ children, tone, onClick }) => (
  <button className={`light-landing__cta light-landing__cta--${tone}`} onClick={onClick}>
    <span>{children}</span>
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 18 18 6M8 6h10v10" /></svg>
  </button>
);

const ThemeMenu = ({ theme, onThemeChange }) => (
  <button 
    className={`theme-toggle-btn ${theme === 'dark' ? 'dark-mode' : 'light-mode'}`} 
    onClick={() => onThemeChange(theme === 'light' ? 'dark' : 'light')}
    aria-label="Toggle theme"
  >
    {theme === 'light' ? (
      <svg className="theme-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
    ) : (
      <svg className="theme-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
    )}
  </button>
);

const LightLanding = ({ theme, setTheme }) => {
  const navigate = useNavigate();

  return (
    <main className="light-landing">
      <div className="light-landing__ambient-bg" aria-hidden="true" />
      <div className="light-landing__world light-landing__left-world" aria-hidden="true"><img src={leftBackground} alt="" /></div>
      <div className="light-landing__world light-landing__right-world" aria-hidden="true"><img src={rightBackground} alt="" /></div>
      <div className="light-landing__center-portal" aria-hidden="true"><img src={portalRing} alt="" /></div>
      <div className="light-landing__particles" aria-hidden="true">
        {Array.from({ length: 10 }, (_, index) => <i key={index} />)}
      </div>

      <header className="light-landing__header">
        <button className="light-landing__events-logo" type="button" onClick={() => navigate('/events')}>
          <img src={eventsLogo} alt="Kalamaya Events India" />
        </button>
        <div className="light-landing__cineverse-top-logo">
          <img src={cineverseLogo} alt="Kalamaya Cineverse" />
        </div>
      </header>

      <div className="light-landing__headline">
        <p className="light-landing__eyebrow">ONE LEGACY.</p>
        <h1>TWO WORLDS.</h1>
        <p className="light-landing__script"><span>Infinite</span> <span>Possibilities.</span></p>
      </div>

      <section className="light-landing__left-content" aria-label="Kalamaya Events">
        <p>EVENTS THAT <strong>CONNECT.</strong><br />EXPERIENCES THAT <strong>LAST.</strong></p>
        <AngularButton tone="blue" onClick={() => navigate('/events')}>EXPLORE EVENTS</AngularButton>
      </section>

      <section className="light-landing__right-content" aria-label="Explore Kalamaya Cineverse">
        <p>FILMS THAT <strong>INSPIRE.</strong><br />STORIES THAT <strong>STAY.</strong></p>
        <AngularButton tone="red">EXPLORE CINEVERSE</AngularButton>
      </section>

      <div className="light-landing__center-label">
        <Divider />
        <p><span>CHOOSE</span> YOUR</p>
        <strong>EXPERIENCE</strong>
        <Divider />
      </div>

      <div className="light-landing__scroll-indicator" aria-hidden="true">
        <span className="light-landing__mouse"><i /></span>
        <svg viewBox="0 0 16 22"><path d="M8 1v18m-5-5 5 5 5-5" /></svg>
      </div>
      <ThemeMenu theme={theme} onThemeChange={setTheme} />
    </main>
  );
};

const DarkLanding = ({ theme, setTheme }) => {
  const navigate = useNavigate();

  return (
    <section className="hero-landing">
      <div className="hero-panel left-panel">
        <div className="bg-image left-bg" style={{ backgroundImage: `url("${darkLeftBackground}")` }} />
        <div className="overlay left-overlay" />
        <div className="top-left-logo"><img src={eventsLogo} alt="Kalamaya Events" /></div>
        <div className="bottom-content left-content">
          <h2 className="headline">EVENTS THAT <span className="highlight-blue">CONNECT.</span><br />EXPERIENCES THAT <span className="highlight-blue">LAST.</span></h2>
          <button className="btn btn-blue" onClick={() => navigate('/events')}>EXPLORE EVENTS <span className="arrow">&#x2197;</span></button>
        </div>
      </div>
      <div className="hero-panel right-panel">
        <div className="bg-image right-bg" style={{ backgroundImage: `url("${darkRightBackground}")` }} />
        <div className="overlay right-overlay" />
        <div className="top-right-logo"><img src={cineverseLogo} alt="Kalamaya Cineverse" className="center-logo cineverse-logo" /></div>
        <div className="bottom-content right-content">
          <h2 className="headline">FILMS THAT <span className="highlight-red">INSPIRE.</span><br />STORIES THAT <span className="highlight-red">STAY.</span></h2>
          <button className="btn btn-red">EXPLORE CINEVERSE <span className="arrow">&#x2197;</span></button>
        </div>
      </div>
      <img src="/ring.png" alt="" aria-hidden="true" className="hero-energy-ring" />
      <div className="top-center-heading">
        <h3 className="legacy-text">ONE LEGACY.</h3><h1 className="worlds-text">TWO WORLDS.</h1>
        <div className="infinite-text"><span className="inf-red">Infinite</span> <span className="inf-blue">Possibilities.</span></div>
      </div>
      <div className="center-glow" />
      <div className="center-brand-area">
        <img src={eventsLogo} alt="" aria-hidden="true" className="center-logo events-logo events-logo-slot" />
        <div className="center-divider-group"><div className="vertical-line" /><div className="diamond" /><div className="vertical-line" /></div>
        <img src={cineverseLogo} alt="" aria-hidden="true" className="center-logo cineverse-logo cineverse-logo-slot" />
      </div>
      <div className="scroll-indicator"><div className="mouse"><div className="wheel" /></div><div className="arrow-down">&#x2193;</div></div>
      <ThemeMenu theme={theme} onThemeChange={setTheme} />
    </section>
  );
};

const HeroLanding = () => {
  const [theme, setThemeState] = useState(() => localStorage.getItem('kalamaya-landing-theme') || 'light');
  const setTheme = (nextTheme) => {
    setThemeState(nextTheme);
    localStorage.setItem('kalamaya-landing-theme', nextTheme);
  };

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return theme === 'light'
    ? <LightLanding theme={theme} setTheme={setTheme} />
    : <DarkLanding theme={theme} setTheme={setTheme} />;
};

export default HeroLanding;
