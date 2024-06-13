import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import AnimatedSection from './AnimatedSection';
import Footer from './Footer';
import About from './About';

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AnimatedSection/>
      <Footer />
    </>
  );
}

export default Home;
