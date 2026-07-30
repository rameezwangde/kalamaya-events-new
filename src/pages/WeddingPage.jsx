import React from 'react';
import Navbar from '../components/Navbar';
import WeddingServices from '../components/WeddingServices';
import Footer from '../components/Footer';

const WeddingPage = () => {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '88px', minHeight: '100vh', backgroundColor: '#fff' }}>
        <WeddingServices />
      </main>
      <Footer />
    </>
  );
};

export default WeddingPage;
