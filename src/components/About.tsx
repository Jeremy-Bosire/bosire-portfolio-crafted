
import React from 'react';
import { BookOpen, Users, Globe } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-800">
      <div className="section-container">
        <h2 className="section-title text-navy dark:text-white">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="card dark:bg-slate-700">
            <BookOpen className="h-10 w-10 text-gold mb-4" />
            <h3 className="text-xl font-bold mb-3 text-navy dark:text-white">English Educator</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Specializing in Cambridge AS & A Level English with over 14 years of experience enhancing student performance through tailored learning strategies.
            </p>
          </div>
          
          <div className="card dark:bg-slate-700">
            <Users className="h-10 w-10 text-gold mb-4" />
            <h3 className="text-xl font-bold mb-3 text-navy dark:text-white">PR Professional</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Skilled in strategic public relations and stakeholder engagement, with expertise in crisis communication within corporate Kenya.
            </p>
          </div>
          
          <div className="card dark:bg-slate-700">
            <Globe className="h-10 w-10 text-gold mb-4" />
            <h3 className="text-xl font-bold mb-3 text-navy dark:text-white">Global Communicator</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Bridging educational excellence with effective communication strategies to empower students and organizations alike.
            </p>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-4 text-navy dark:text-white">Professional Journey</h3>
          <div className="bg-lightgray dark:bg-slate-700 p-6 rounded-lg">
            <p className="text-gray-700 dark:text-gray-200 mb-4">
              Since 2010, I have been teaching English at Braeburn Imani International School, where I specialize in Cambridge AS & A Level English. My teaching philosophy centers on creating tailored learning experiences that enhance student performance and foster a deep appreciation for language and literature.
            </p>
            
            <p className="text-gray-700 dark:text-gray-200 mb-4">
              Beyond the classroom, I offer online tutoring for English Conversation and Writing from Grades 9 to A2 level. My approach combines academic rigor with practical communication skills, preparing students for success in both academic and professional environments.
            </p>
            
            <p className="text-gray-700 dark:text-gray-200">
              In addition to my teaching career, I bring valuable experience in public relations and strategic communication, allowing me to offer unique insights into the practical applications of effective language use in professional contexts.
            </p>
          </div>
        </div>
        
        <div className="mt-12 p-6 border-l-4 border-gold bg-lightgray dark:bg-slate-700 rounded-r-lg">
          <h4 className="text-xl font-bold mb-2 text-navy dark:text-white">Online Tutoring Services</h4>
          <p className="text-gray-700 dark:text-gray-200">
            I provide personalized online tutoring for English Conversation and Writing from Grades 9 to A2 level. My hourly rates range from KSh 3,000 to 10,000 (US$23.25–77.50), depending on the level and specific needs of the student.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
