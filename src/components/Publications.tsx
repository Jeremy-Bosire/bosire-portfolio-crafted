
import React from 'react';
import { Newspaper, ExternalLink } from 'lucide-react';

const Publications = () => {
  const articles = [
    {
      title: "Building Digital Resilience: Cybersecurity Awareness for All",
      publication: "The Standard",
      date: "October 2023",
      excerpt: "An exploration of the importance of cybersecurity awareness in an increasingly digital world, with practical tips for individuals and organizations to enhance their digital resilience.",
      link: "#",
    },
    {
      title: "Sustainable Agriculture: The Key to Kenya's Food Security",
      publication: "The Standard",
      date: "July 2023",
      excerpt: "Analysis of how sustainable farming practices can address food security challenges in Kenya, with case studies of successful implementations across different regions.",
      link: "#",
    },
    {
      title: "Corporate Social Responsibility: Beyond the PR Exercise",
      publication: "The Standard",
      date: "March 2023",
      excerpt: "A critical examination of CSR practices in East Africa, highlighting the difference between authentic social responsibility and surface-level PR exercises.",
      link: "#",
    },
    {
      title: "The Evolution of English: Language Teaching in the Digital Age",
      publication: "The Standard",
      date: "November 2022",
      excerpt: "Insights on how digital technologies are transforming English language education, with recommendations for educators adapting to this new landscape.",
      link: "#",
    },
  ];

  return (
    <section id="publications" className="py-20 bg-white dark:bg-slate-800">
      <div className="section-container">
        <h2 className="section-title text-navy dark:text-white">Publications</h2>
        
        <p className="mb-8 text-gray-700 dark:text-gray-300">
          My articles have been featured in The Standard newspaper, covering diverse topics including cybersecurity, food security, corporate social responsibility, and education.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <div key={index} className="card dark:bg-slate-700 flex flex-col">
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <Newspaper className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy dark:text-white">{article.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {article.publication} • {article.date}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-gray-700 dark:text-gray-300 flex-grow">
                {article.excerpt}
              </p>
              <div className="mt-4">
                <a 
                  href={article.link}
                  className="inline-flex items-center text-navy dark:text-gold font-medium hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read Article <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Interested in reading more of my published work or collaborating on a publication?
          </p>
          <a href="#contact" className="btn-primary">Get In Touch</a>
        </div>
      </div>
    </section>
  );
};

export default Publications;
