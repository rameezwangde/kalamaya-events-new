import React from 'react';
import CineverseNavbar from '../components/CineverseNavbar';
import CineverseHero from '../components/CineverseHero';
import CineverseIntro from '../components/CineverseIntro';
import CineverseWhoWeAre from '../components/CineverseWhoWeAre';
import CineverseTestimonials from '../components/CineverseTestimonials';
import CineverseCTA from '../components/CineverseCTA';
import CineverseFooter from '../components/CineverseFooter';
import '../cineverse.css';

const CineverseHome = () => {
  return (
    <div className="bg-[#050505] min-h-screen text-white">
      <CineverseNavbar />
      <CineverseHero />
      <CineverseIntro />
      <CineverseWhoWeAre />
      <CineverseTestimonials />
      <CineverseCTA />
      <CineverseFooter />
      {/* Rest of the homepage is left intentionally empty for now as requested */}
    </div>
  );
};
export default CineverseHome;
