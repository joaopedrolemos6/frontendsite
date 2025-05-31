import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Services from './sections/Services';
import About from './sections/About';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  // Update document title
  useEffect(() => {
    document.title = "LICITUM Technology Solutions";
    
    // Also update any title elements that have a data-default attribute
    const defaultTitleElements = document.querySelectorAll('[data-default]');
    defaultTitleElements.forEach(element => {
      if (element.tagName.toLowerCase() === 'title') {
        element.textContent = "LICITUM Technology Solutions";
      }
    });
  }, []);

  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;