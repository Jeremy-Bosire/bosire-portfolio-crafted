
import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Cambridge AS & A Level English",
      description: "Specialized instruction in Cambridge curriculum, focusing on advanced literary analysis, critical thinking, and effective written expression.",
      rate: "KSh 10,000 (US$77.50) per hour",
      topics: ["Literary analysis", "Critical essays", "Language analysis", "Comparative study", "Examination preparation"]
    },
    {
      title: "English Conversation (Grades 9-12)",
      description: "Structured conversation practice designed to build confidence and fluency in spoken English for secondary school students.",
      rate: "KSh 5,000 (US$38.75) per hour",
      topics: ["Fluency development", "Pronunciation", "Discussion techniques", "Presentation skills", "Interview preparation"]
    },
    {
      title: "Academic Writing (Grades 9-12)",
      description: "Comprehensive instruction in academic writing conventions, essay structure, and argumentation for secondary school students.",
      rate: "KSh 6,000 (US$46.50) per hour",
      topics: ["Essay structure", "Analytical writing", "Research papers", "Grammar & syntax", "Citation methods"]
    },
    {
      title: "Junior English (Grades 7-8)",
      description: "Foundational English skills with emphasis on building strong grammatical knowledge and writing capabilities.",
      rate: "KSh 3,000 (US$23.25) per hour",
      topics: ["Grammar fundamentals", "Paragraph writing", "Reading comprehension", "Vocabulary building", "Creative writing"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-lightgray dark:bg-slate-900">
      <div className="section-container">
        <h2 className="section-title text-navy dark:text-white">Teaching Services</h2>
        
        <p className="mb-8 text-gray-700 dark:text-gray-300">
          I offer specialized online tutoring services for students at various levels, with a focus on Cambridge curriculum and development of essential language skills.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card dark:bg-slate-700">
              <h3 className="text-xl font-bold mb-2 text-navy dark:text-white">{service.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{service.description}</p>
              
              <div className="bg-navy/10 dark:bg-navy/20 p-4 rounded-md mb-4">
                <p className="font-medium text-navy dark:text-white">Rate: <span className="text-gold">{service.rate}</span></p>
              </div>
              
              <h4 className="font-semibold mb-2 text-navy dark:text-white">Key Topics:</h4>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                {service.topics.map((topic, i) => (
                  <li key={i}>{topic}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white dark:bg-slate-700 rounded-lg shadow-md overflow-hidden">
          <div className="bg-navy p-6">
            <h3 className="text-xl font-bold text-white">Book a Consultation</h3>
            <p className="text-gray-200 mt-2">
              Interested in my tutoring services? Schedule a free 15-minute consultation to discuss your educational needs.
            </p>
          </div>
          
          <form className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border rounded-md bg-white dark:bg-slate-800 text-gray-900 dark:text-white"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-md bg-white dark:bg-slate-800 text-gray-900 dark:text-white"
                  placeholder="Your email"
                  required
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Service Interested In
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-2 border rounded-md bg-white dark:bg-slate-800 text-gray-900 dark:text-white"
                  required
                >
                  <option value="">Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="grade" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Student's Grade/Level
                </label>
                <input
                  type="text"
                  id="grade"
                  className="w-full px-4 py-2 border rounded-md bg-white dark:bg-slate-800 text-gray-900 dark:text-white"
                  placeholder="e.g., Grade 9, A Level"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Additional Information
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border rounded-md bg-white dark:bg-slate-800 text-gray-900 dark:text-white"
                  placeholder="Please share any specific needs or questions you have"
                ></textarea>
              </div>
            </div>
            <div className="mt-6">
              <button type="submit" className="btn-primary w-full">
                Request Consultation
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Services;
