'use client';

import { useState, useEffect, useRef } from 'react';

const experiences = [
  {
    title: "IT Lead - Tech & Transformation",
    company: "WI Energy",
    period: "2024 - Present",
    responsibilities: [
      "Lead and manage a team of IT professionals, setting clear objectives, delegating tasks, and ensuring on-time delivery across all IT initiatives.",
      "Architected and implemented a bespoke CRM & ERP system using React, Node.js with REST APIs, PostgreSQL and JWT-based authentication for the company’s multiple businesses, resulting in a 40% increase in business flow efficiency across sales, fleet, and field teams.",
      "Spearheading the company’s ISO 27001 certification programme - architecting security layers including Helmet.js, data encryption, and audit trails, while ensuring full GDPR compliance across all IT systems.",
      "Integrated AI capabilities into business applications, improving workflow automation and decision-making for operational staff.",
      "Developed project plans with defined timelines, milestones, budgets, and resource allocation; monitored execution to ensure on-time, within-budget delivery."
    ]
  },
  {
    title: "Technical Lead",
    company: "Zoho Corporation Private Limited",
    period: "2019 - 2022",
    responsibilities: [
      "Directed the team’s frontend delivery using React.js, Vue.js, TypeScript setting technical standards and guiding architecture decisions across the CRM platform.",
      "Orchestrated the integration of third-party and internal applications with Zoho CRM via REST APIs and Node.js middleware services, doubling the number of integrated apps and driving a 30% increase in product revenue.",
      "Developed bespoke Node.js applications for premium enterprise customers, tailored to their specific business workflows and operational requirements.",
      "Led database design initiatives for CRM modules, improving query response times by 20% through indexing and schema optimisation strategies.",
      "Mentored and managed the team through structured requirement delivery plans, increasing on-time delivery accuracy by 50%."
    ]
  },
  {
    title: "Member Technical Staff",
    company: "Zoho Corporation Private Limited",
    period: "2014 - 2019",
    responsibilities: [
      "Spearheaded the full modernisation of Zoho Vault’s architecture, migrating from a legacy stack to React and Node.js, improving performance by 30% while maintaining enterprise-grade security standards.",
      "Designed and delivered critical security features including automatic password rotation and intelligent form filling, contributing to a 20% increase in paid subscriptions.",
      "Consolidated multiple browser extensions into a single unified Node.js codebase, reducing maintenance overhead by 70% through modular architecture design.",
      "Established comprehensive testing protocols combining Jest unit tests and Selenium end-to-end testing, reducing production incidents by 40%.",
      "Mentored junior team members in modern development practices, particularly around building secure, maintainable web applications with React and JavaScript.",
      "Collaborated with security teams to implement encryption best practices and audit trails, ensuring compliance with enterprise security requirements."
    ]
  }
];
/*
{
  title: "Engineer Trainee",
  company: "Zoho Corporation Private Limited",
  period: "2014 - 2015",
  responsibilities: [
    "Developed feature enhancements based on the list of customer promises.",
    "Handled mission critical and emergency situations as part of the technical support team.",
    "Updated the vulnerability database periodically by adding latest vulnerabilities revealed by international regulatory bodies like Common Vulnerabilities and Exposures, National Institute of Science and Technology, etc",
    "Updated the patch database by adding the patches released for the respective vulnerabilities exposed on products developed by famous brands like Adobe, Google, Microsoft, etc",
    "Delivered hot-fixes as and when required"
  ]
}
*/
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
