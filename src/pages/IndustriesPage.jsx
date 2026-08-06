import React from 'react';
import Navbar from '../components/Navbar';
import IndustriesWeServe from '../components/IndustriesWeServe';
import Footer from '../components/Footer';

const IndustriesPage = () => {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '88px', minHeight: '100vh', backgroundColor: '#F8F3EA' }}>
        <IndustriesWeServe />
      </main>
      <Footer />
    </>
  );
};

export default IndustriesPage;
