import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  const scrollToConsultation = () => {
    document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&h=1080&fit=crop&crop=entropy&auto=format&q=80")'
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-12 py-6">
        <div className="flex items-center">
          <img 
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/7c53b1b2e_HOMIlogo.png" 
            alt="HOMI Real Estate"
            className="h-8 w-auto"
          />
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-white hover:text-orange-400 transition-colors font-medium">About</a>
          <a href="#projects" className="text-white hover:text-orange-400 transition-colors font-medium">Projects</a>
          <a href="#insights" className="text-white hover:text-orange-400 transition-colors font-medium">Insights</a>
          <Button 
            onClick={scrollToConsultation}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Book Consultation
          </Button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 lg:px-12 max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
          Your Gateway to{' '}
          <span className="text-orange-500">Dubai</span>{' '}
          Real Estate
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto font-light">
          Luxury. ROI. Global Access.
        </p>
        <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
          Canada's premier fintech-powered real estate platform connecting global investors to Dubai's most exclusive pre-construction opportunities.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={scrollToConsultation}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
          >
            Book Free Consultation
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button 
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center gap-2"
          >
            <Play className="w-5 h-5" />
            Watch Video
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
