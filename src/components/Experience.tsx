'use client';

import { useState, useEffect, useRef } from 'react';

const experiences = [
  {
    title: "IT Project Manager - Tech & Transformation",
    company: "Waterford Insulation",
    period: "2024 - Present",
    responsibilities: [
      "Lead a team of developers to work oon projects and deliver them on time",
      "Work with stakeholders to understand their IT needs and define project scope for software implementations",
      "Develop project plans with timelines, milestones, budgets, and resource allocation",
      "Conduct risk assessments and mitigation strategies.",
      "Manage and oversee the project execution according to the plan, ensuring tasks are completed on time and within budget",
      "Monitor project progress, identify and address any roadblocks or delays, and implement corrective actions",
      "Ensure successful project completion by testing, documenting, and training users on new systems or processes",
      "Develop handover documentation for future reference and maintenance",
      "Evaluate project outcomes and collect feedback for continuous improvement"
    ],
  },
  {
    title: "Technical Lead",
    company: "Zoho Corporation Private Limited",
    period: "2019 - 2022",
    responsibilities: [
      "Performed as a Technical Lead by leading my development team to produce quality work",
      "Developed widgets using top Javascript and CSS frameworks to implement client's feature requests",
      "Responsible for on-boarding of new hires, teaching organization's development process and setting them goals",
      "Captured business requirements and designed plans on implementing client's business model with our Zoho CRM",
      "Explore new technologies available and employ them in our product to improve efficiency"
    ],
  },
  {
    title: "Member Technical Staff",
    company: "Zoho Corporation Private Limited",
    period: "2015 - 2019",
    responsibilities: [
      "Performed as an individual contributor in revamping our product using React Framework",
      "Developed a tool in Python language to perform encryption and decryption of the saved passwords",
      "Developed features such as automatic change password for websites, form filling, WebExtensions, etc",
      "Overall in-charge of browser extensions for platforms like Google Chrome, Mozilla Firefox, Microsoft Edge & Opera",
      "Responsible for on-boarding of new hires, teaching the organization's development process and setting them goals"
    ],
  },
  {
    title: "Engineer Trainee",
    company: "Zoho Corporation Private Limited",
    period: "2014 - 2015",
    responsibilities: [
      "Developed feature enhancements based on the list of customer promises",
      "Handled mission critical and emergency situations as part of the technical support team",
      "Updated the vulnerability database periodically by adding latest vulnerabilities revealed by international regulatory bodies like Common Vulnerabilities and Exposures, National Institute of Science and Technology, etc",
      "Updated the patch database by adding the patches released for the respective vulnerabilities exposed on products developed by famous brands like Adobe, Google, Microsoft, etc",
      "Delivered hot-fixes as and when required"
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
