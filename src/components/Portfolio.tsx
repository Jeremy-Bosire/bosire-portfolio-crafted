
import React, { useState } from 'react';
import { FileText, Video, ImageIcon } from 'lucide-react';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('writing');

  const portfolioItems = {
    writing: [
      {
        title: "Advanced Essay Writing Guide",
        description: "A comprehensive guide for A-Level students covering advanced essay structures, argumentation techniques, and analytical approaches.",
        type: "PDF Document",
        icon: FileText,
      },
      {
        title: "Literary Analysis: Shakespeare's Tragedies",
        description: "In-depth analysis of key themes and character development in Shakespeare's major tragedies, with examples for student reference.",
        type: "PDF Document",
        icon: FileText,
      },
      {
        title: "Crisis Communication Framework",
        description: "A strategic framework for corporate communication during crisis situations, based on research and case studies.",
        type: "PDF Document",
        icon: FileText,
      },
    ],
    lessons: [
      {
        title: "Mastering Literary Devices",
        description: "A recorded lecture explaining advanced literary devices with examples from classical and contemporary literature.",
        type: "Video",
        icon: Video,
      },
      {
        title: "Essay Structure Workshop",
        description: "A workshop recording demonstrating effective essay planning and structure for Cambridge A Level students.",
        type: "Video",
        icon: Video,
      },
    ],
    resources: [
      {
        title: "English Literature Resource Pack",
        description: "A compilation of study materials, reading lists, and essay templates for Cambridge curriculum students.",
        type: "Resource Collection",
        icon: ImageIcon,
      },
      {
        title: "Public Speaking Presentation",
        description: "Visual aids and handouts from a workshop on effective public speaking techniques for advanced students.",
        type: "Presentation Slides",
        icon: ImageIcon,
      },
    ]
  };

  const tabs = [
    { id: 'writing', label: 'Writing Samples' },
    { id: 'lessons', label: 'Lecture Videos' },
    { id: 'resources', label: 'Learning Resources' },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-slate-800">
      <div className="section-container">
        <h2 className="section-title text-navy dark:text-white">Portfolio</h2>
        
        <p className="mb-8 text-gray-700 dark:text-gray-300">
          Browse through samples of my academic writing, teaching resources, and recorded lectures that demonstrate my approach to English education.
        </p>
        
        <div className="mb-8">
          <div className="flex flex-wrap border-b border-gray-200 dark:border-gray-700">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 font-medium text-sm ${
                  activeTab === tab.id 
                    ? 'border-b-2 border-gold text-navy dark:text-white' 
                    : 'text-gray-500 dark:text-gray-400 hover:text-navy dark:hover:text-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems[activeTab as keyof typeof portfolioItems].map((item, index) => (
            <div key={index} className="card dark:bg-slate-700 h-full flex flex-col">
              <div className="bg-lightgray dark:bg-slate-600 rounded-lg p-8 mb-4 flex items-center justify-center">
                <item.icon className="h-12 w-12 text-navy dark:text-gold" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-navy dark:text-white">{item.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{item.type}</p>
              <p className="text-gray-700 dark:text-gray-300 flex-grow">{item.description}</p>
              <div className="mt-4">
                <button className="btn-secondary text-sm">View Sample</button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-lightgray dark:bg-slate-700 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4 text-navy dark:text-white">Custom Resources</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Need specialized learning resources for your students or organization? I create custom educational materials tailored to specific learning objectives and curriculum requirements.
          </p>
          <a href="#contact" className="btn-primary">Inquire About Custom Resources</a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
