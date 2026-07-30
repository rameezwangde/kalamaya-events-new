import React from 'react';
import Navbar from '../components/Navbar';
import CorporateEventServices from '../components/CorporateEventServices';
import Footer from '../components/Footer';

const CorporatePage = () => {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '88px', minHeight: '100vh', backgroundColor: '#fff' }}>
        <CorporateEventServices />
      </main>
      <Footer />
    </>
  );
};

export default CorporatePage;
