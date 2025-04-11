
import React from 'react';
import { ChevronUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white dark:bg-slate-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-300">
              &copy; {year} Benuel Bosire. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#about" className="text-sm text-gray-300 hover:text-gold">About</a>
            <a href="#education" className="text-sm text-gray-300 hover:text-gold">Education</a>
            <a href="#publications" className="text-sm text-gray-300 hover:text-gold">Publications</a>
            <a href="#services" className="text-sm text-gray-300 hover:text-gold">Services</a>
            <a href="#portfolio" className="text-sm text-gray-300 hover:text-gold">Portfolio</a>
            <a href="#contact" className="text-sm text-gray-300 hover:text-gold">Contact</a>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="mt-6 md:mt-0 bg-gold/20 hover:bg-gold/30 rounded-full p-2 transition-colors"
          >
            <ChevronUp className="h-5 w-5 text-gold" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
