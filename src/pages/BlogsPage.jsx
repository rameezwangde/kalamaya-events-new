import React from 'react';
import Navbar from '../components/Navbar';
import BlogsInsights from '../components/BlogsInsights';
import Footer from '../components/Footer';

const BlogsPage = () => {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '88px', minHeight: '100vh', backgroundColor: '#F8F3EA' }}>
        <BlogsInsights />
      </main>
      <Footer />
    </>
  );
};

export default BlogsPage;
