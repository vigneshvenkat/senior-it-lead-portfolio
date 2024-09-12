'use client';

import { useState, useEffect, useRef } from 'react';

const experiences = [
  {
    title: "Senior IT Team Lead",
    company: "Waterford Insulation",
    period: "2024 - Present",
    responsibilities: [
      "Lead a team of 15 IT professionals across multiple projects",
      "Implement Agile methodologies, resulting in 30% faster project delivery",
      "Oversee the migration of legacy systems to cloud-based solutions",
      "Reduce operational costs by 25% through process optimization and automation",
    ],
  },
  {
    title: "IT Tech Lead",
    company: "Zoho Corporation Private Limited",
    period: "2019 - 2022",
    responsibilities: [
      "Managed end-to-end delivery of 10+ large-scale IT projects",
      "Improved client satisfaction scores by 40% through enhanced communication strategies",
      "Implemented a new project management tool, increasing team productivity by 20%",
    ],
  },
  {
    title: "Member Technical Staff",
    company: "Zoho Corporation Private Limited",
    period: "2015 - 2019",
    responsibilities: [
      "Analyzed and optimized business processes for efficiency gains",
      "Developed and maintained relationships with key stakeholders",
      "Contributed to the successful implementation of a new ERP system",
    ],
  },
  {
    title: "Engineer Trainee",
    company: "Zoho Corporation Private Limited",
    period: "2014 - 2015",
    responsibilities: [
      "Analyzed and optimized business processes for efficiency gains",
      "Developed and maintained relationships with key stakeholders",
      "Contributed to the successful implementation of a new CRM",
    ],
  },
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  const experienceRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
          } else {
            entry.target.classList.remove('animate-slide-up');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => {
      if (experienceRef.current) {
        observer.unobserve(experienceRef.current);
      }
    };
  }, []);

  return (
    <section
      id="experience"
      ref={experienceRef}
      className="py-16 bg-gray-900 opacity-0 transition duration-700 ease-in-out"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">
          Professional Experience
        </h2>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 mb-4 md:mb-0">
            {experiences.map((exp, index) => (
              <button
                key={index}
                className={`w-full text-left p-4 border-l-4 ${
                  activeTab === index
                    ? 'border-purple-500 bg-gray-800 text-white'
                    : 'border-gray-700 text-gray-400 hover:bg-gray-800 hover:text-white'
                } transition-all duration-300`}
                onClick={() => setActiveTab(index)}
              >
                {exp.title}
              </button>
            ))}
          </div>
          <div className="md:w-2/3 md:pl-8">
            <h3 className="text-2xl font-bold mb-2 text-white">
              {experiences[activeTab].title}
            </h3>
            <p className="text-purple-400 mb-2">
              {experiences[activeTab].company}
            </p>
            <p className="text-gray-400 mb-4">{experiences[activeTab].period}</p>
            <ul className="space-y-2">
              {experiences[activeTab].responsibilities.map((resp, idx) => (
                <li key={idx} className="flex items-start">
                  <svg
                    className="w-6 h-6 text-purple-500 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-gray-300">{resp}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
