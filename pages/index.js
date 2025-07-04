import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import FeaturedProjects from '../components/FeaturedProjects';
import WhyDubai from '../components/WhyDubai';
import ConsultationSection from '../components/Consultation';
import Insights from '../components/Insights';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <About />
      <FeaturedProjects />
      <WhyDubai />
      <ConsultationSection />
      <Insights />
      <Footer />
    </div>
  );
}
