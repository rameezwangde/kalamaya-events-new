import React from 'react';
import Navbar from '../components/Navbar';
import CaseStudies from '../components/CaseStudies';
import Footer from '../components/Footer';

const PortfolioPage = () => {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '88px', minHeight: '100vh', backgroundColor: '#F8F3EA' }}>
        <CaseStudies />
      </main>
      <Footer />
    </>
  );
};

export default PortfolioPage;
