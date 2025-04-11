
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Publications from '@/components/Publications';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';

const Index = () => {
  // Adding animation classes and fixing section visibility
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.classList.add('animate-on-scroll');
      // Ensure sections are visible
      section.style.display = 'block';
    });

    // Add animation styles if not already in CSS
    const style = document.createElement('style');
    style.innerHTML = `
      .animate-on-scroll {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
      }
      .animate-on-scroll.show {
        opacity: 1;
        transform: translateY(0);
      }
    `;
    document.head.appendChild(style);

    // Initial check to show elements in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
      document.head.removeChild(style);
    };
  }, []);

  return (
    <Layout>
      <Hero />
      <About />
      <Education />
      <Publications />
      <Services />
      <Portfolio />
      <Contact />
    </Layout>
  );
};

export default Index;
