
import React from 'react';
import { GraduationCap, Award, FileText } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-lightgray dark:bg-slate-900">
      <div className="section-container">
        <h2 className="section-title text-navy dark:text-white">Education & Qualifications</h2>
        
        <div className="mt-12 space-y-10">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-full bg-navy dark:bg-gold flex items-center justify-center">
                <GraduationCap className="h-8 w-8 text-white dark:text-navy" />
              </div>
            </div>
            <div className="card flex-1 dark:bg-slate-700">
              <div className="flex flex-wrap justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-navy dark:text-white">Bachelor's Degree in English and Literature</h3>
                <span className="text-gold font-semibold">2016–2019</span>
              </div>
              <p className="text-gray-500 dark:text-gray-400 mb-4">University of Nairobi</p>
              <div className="bg-lightgray dark:bg-slate-800 py-2 px-4 rounded-md">
                <p className="font-medium text-navy dark:text-white">
                  Grade: <span className="text-gold">A</span>
                </p>
              </div>
              <p className="mt-4 text-gray-700 dark:text-gray-300">
                Comprehensive study of English language and literature, developing advanced analytical and communication skills applicable across various professional contexts.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-full bg-navy dark:bg-gold flex items-center justify-center">
                <Award className="h-8 w-8 text-white dark:text-navy" />
              </div>
            </div>
            <div className="card flex-1 dark:bg-slate-700">
              <div className="flex flex-wrap justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-navy dark:text-white">Professional Diploma in Public Relations</h3>
                <span className="text-gold font-semibold">2020–2021</span>
              </div>
              <p className="text-gray-500 dark:text-gray-400 mb-4">Chartered Institute of Public Relations</p>
              <div className="bg-lightgray dark:bg-slate-800 py-2 px-4 rounded-md">
                <p className="font-medium text-navy dark:text-white">
                  Grade: <span className="text-gold">A</span>
                </p>
              </div>
              <p className="mt-4 text-gray-700 dark:text-gray-300">
                Specialized training in strategic communication, stakeholder engagement, and modern public relations practices in digital and traditional media environments.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-full bg-navy dark:bg-gold flex items-center justify-center">
                <FileText className="h-8 w-8 text-white dark:text-navy" />
              </div>
            </div>
            <div className="card flex-1 dark:bg-slate-700">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-bold text-navy dark:text-white">Research Thesis</h3>
              </div>
              <p className="text-gray-500 dark:text-gray-400 mb-4">Crisis Communication in Corporate Kenya</p>
              <p className="text-gray-700 dark:text-gray-300">
                Conducted in-depth research on crisis communication strategies employed by major corporations in Kenya, analyzing their effectiveness and developing a framework for best practices in the East African context.
              </p>
              <div className="mt-4 flex">
                <button className="btn-secondary text-sm">Request Abstract</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
