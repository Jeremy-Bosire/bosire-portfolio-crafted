
import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-lightgray dark:bg-slate-900 pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-navy/10 to-transparent"></div>
      </div>
      
      <div className="section-container relative z-10 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-navy dark:text-white">
            Benuel Bosire
          </h1>
          <p className="text-lg md:text-xl font-medium text-gray-600 dark:text-gray-300 mb-8">
            English Educator & Public Relations Professional
          </p>
          <p className="text-xl md:text-2xl font-medium mb-8 text-navy dark:text-white italic">
            "Empowering minds through English and impactful communication."
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary">
              Book a Lesson
            </a>
            <a href="#publications" className="btn-secondary">
              Read My Work
            </a>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gold">
            <img 
              src="/avatar.jpeg" 
              alt="Benuel Bosire" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown size={32} className="text-navy dark:text-white" />
      </button>
    </section>
  );
};

export default Hero;
