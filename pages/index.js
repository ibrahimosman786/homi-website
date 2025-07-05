import React from 'react';
import Hero from '../components/hero.js';
import About from '../components/about.js';
import FeaturedProjects from '../components/featured-projects.js';
import WhyDubai from '../components/why-dubai.js';
import ConsultationSection from '../components/consultation.js';
import Insights from '../components/insights.js';
import Footer from '../components/footer.js';

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
