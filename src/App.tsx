import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { WhyUs } from './components/WhyUs'; // Verwijs naar het nieuwe bestand
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppWidget } from './components/WhatsAppWidget';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-olive-200 selection:text-olive-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <WhyUs /> {/* De nieuwe 'Wat ons uniek maakt' sectie */}
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}