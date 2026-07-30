import React from 'react';
import Navbar from '../components/Navbar';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '88px', minHeight: '100vh', backgroundColor: '#fff' }}>
        <ContactForm />
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
