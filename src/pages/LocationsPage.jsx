import React from 'react';
import Navbar from '../components/Navbar';
import Locations from '../components/Locations';
import Footer from '../components/Footer';

const LocationsPage = () => {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '88px', minHeight: '100vh', backgroundColor: '#F8F3EA' }}>
        <Locations />
      </main>
      <Footer />
    </>
  );
};

export default LocationsPage;
