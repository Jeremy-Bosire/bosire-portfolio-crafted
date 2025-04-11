
import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Publications from '@/components/Publications';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';

const Index = () => {
  // Adding animation classes to each section
  React.useEffect(() => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.classList.add('animate-on-scroll');
    });
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
