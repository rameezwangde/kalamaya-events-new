import React from 'react';
import leftBackground from '../assets/left side image.png';
import rightBackground from '../assets/right side image.png';
import eventsLogo from '../assets/events logo.jpeg';
import cineverseLogo from '../assets/cineverse logo.jpeg';
import ringImage from '../assets/ring_reference.png';

const HeroLanding = () => {
  return (
    <section className="hero-landing">
      {/* Left side panel */}
      <div className="hero-panel left-panel">
        <div
          className="bg-image left-bg"
          style={{ backgroundImage: `url("${leftBackground}")` }}
        ></div>
        <div className="overlay left-overlay"></div>

        {/* Top Left Logo */}
        <div className="top-left-logo">
          <img src={eventsLogo} alt="Kalamaya Events" />
        </div>

        {/* Left Bottom Content */}
        <div className="bottom-content left-content">
          <h2 className="headline">
            EVENTS THAT <span className="highlight-blue">CONNECT.</span><br />
            EXPERIENCES THAT <span className="highlight-blue">LAST.</span>
          </h2>
          <button className="btn btn-blue">
            EXPLORE EVENTS <span className="arrow">&#x2197;</span>
          </button>
        </div>
      </div>

      {/* Right side panel */}
      <div className="hero-panel right-panel">
        <div
          className="bg-image right-bg"
          style={{ backgroundImage: `url("${rightBackground}")` }}
        ></div>
        <div className="overlay right-overlay"></div>

        {/* Right Bottom Content */}
        <div className="bottom-content right-content">
          <h2 className="headline">
            FILMS THAT <span className="highlight-red">INSPIRE.</span><br />
            STORIES THAT <span className="highlight-red">STAY.</span>
          </h2>
          <button className="btn btn-red">
            EXPLORE CINEVERSE <span className="arrow">&#x2197;</span>
          </button>
        </div>
      </div>

      {/* Top-centre heading */}
      <div className="top-center-heading">
        <h3 className="legacy-text">ONE LEGACY.</h3>
        <h1 className="worlds-text">TWO WORLDS.</h1>
        <div className="infinite-text">
          <span className="inf-red">Infinite</span> <span className="inf-blue">Possibilities.</span>
        </div>
      </div>

      {/* Subtle center ambient glow */}
      <div className="center-glow"></div>

      {/* Centre brand area */}
      <div className="center-brand-area">
        <img src={eventsLogo} alt="Kalamaya Events" className="center-logo events-logo" />

        <div className="center-divider-group">
          <div className="vertical-line"></div>
          <div className="diamond"></div>
          <div className="vertical-line"></div>
        </div>

        <img src={cineverseLogo} alt="Kalamaya Cineverse" className="center-logo cineverse-logo" />
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrow-down">&#x2193;</div>
      </div>
    </section>
  );
};

export default HeroLanding;
