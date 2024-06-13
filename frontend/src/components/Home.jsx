import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import AnimatedSection from './Services';
import Footer from './Footer';
import About from './About';
import AboutUs from './Aboutus';
import Contact from './Contact';

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AnimatedSection/>
      <AboutUs/>
      <Contact/>

      <Footer />
    </>
  );
}

export default Home;
