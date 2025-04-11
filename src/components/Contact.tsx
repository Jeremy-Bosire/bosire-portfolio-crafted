
import React from 'react';
import { Mail, Phone, Linkedin, ExternalLink } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-navy dark:bg-slate-900">
      <div className="section-container">
        <h2 className="section-title text-white">Get In Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div>
            <p className="text-gray-300 mb-8">
              I'm always interested in discussing potential teaching opportunities, speaking engagements, or collaborations. Please feel free to reach out using the form or connect with me directly.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mr-4">
                  <Mail className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-white font-medium">contact@benuelbosire.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mr-4">
                  <Phone className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="text-white font-medium">+254 (0) 700 000000</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mr-4">
                  <Linkedin className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">LinkedIn</p>
                  <a 
                    href="https://linkedin.com/in/" 
                    className="text-white font-medium hover:text-gold flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Benuel Bosire <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-gold">
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                    <path d="M12 11h4"></path>
                    <path d="M12 16h4"></path>
                    <path d="M8 11h.01"></path>
                    <path d="M8 16h.01"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">TeacherOn</p>
                  <a 
                    href="https://www.teacheron.com/" 
                    className="text-white font-medium hover:text-gold flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book a Lesson <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-xl overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4 text-navy dark:text-white">Send Me a Message</h3>
              
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border rounded-md bg-gray-50 dark:bg-slate-700 text-gray-900 dark:text-white"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border rounded-md bg-gray-50 dark:bg-slate-700 text-gray-900 dark:text-white"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border rounded-md bg-gray-50 dark:bg-slate-700 text-gray-900 dark:text-white"
                    placeholder="What is this regarding?"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border rounded-md bg-gray-50 dark:bg-slate-700 text-gray-900 dark:text-white"
                    placeholder="Type your message here..."
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="bg-navy dark:bg-gold hover:bg-opacity-90 text-white dark:text-navy font-medium py-2 px-6 rounded w-full transition-all">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
