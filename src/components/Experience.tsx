'use client';

import { useState } from 'react';
import SectionReveal from './SectionReveal';

const experiences = [
  {
    title: 'IT Lead — Tech & Transformation',
    company: 'WI Energy',
    period: '2024 – Present',
    responsibilities: [
      'Lead and manage a team of IT professionals, setting clear objectives, delegating tasks, and ensuring on-time delivery across all IT initiatives.',
      'Architected and implemented a bespoke CRM & ERP system using React, Node.js with REST APIs, PostgreSQL and JWT-based authentication, resulting in a 40% increase in business flow efficiency across sales, fleet, and field teams.',
      'Spearheading the company\'s ISO 27001 certification programme — architecting security layers including Helmet.js, data encryption, and audit trails, while ensuring full GDPR compliance across all IT systems.',
      'Integrated AI capabilities into business applications, improving workflow automation and decision-making for operational staff.',
      'Developed project plans with defined timelines, milestones, budgets, and resource allocation; monitored execution to ensure on-time, within-budget delivery.',
    ],
  },
  {
    title: 'Technical Lead',
    company: 'Zoho Corporation',
    period: '2019 – 2022',
    responsibilities: [
      'Directed the team\'s frontend delivery using React.js, Vue.js, TypeScript — setting technical standards and guiding architecture decisions across the CRM platform.',
      'Orchestrated the integration of third-party and internal applications with Zoho CRM via REST APIs and Node.js middleware services, doubling the number of integrated apps and driving a 30% increase in product revenue.',
      'Developed bespoke Node.js applications for premium enterprise customers, tailored to their specific business workflows and operational requirements.',
      'Led database design initiatives for CRM modules, improving query response times by 20% through indexing and schema optimisation strategies.',
      'Mentored and managed the team through structured requirement delivery plans, increasing on-time delivery accuracy by 50%.',
    ],
  },
  {
    title: 'Member Technical Staff',
    company: 'Zoho Corporation',
    period: '2014 – 2019',
    responsibilities: [
      'Spearheaded the full modernisation of Zoho Vault\'s architecture, migrating from a legacy stack to React and Node.js, improving performance by 30% while maintaining enterprise-grade security standards.',
      'Designed and delivered critical security features including automatic password rotation and intelligent form filling, contributing to a 20% increase in paid subscriptions.',
      'Consolidated multiple browser extensions into a single unified Node.js codebase, reducing maintenance overhead by 70% through modular architecture design.',
      'Established comprehensive testing protocols combining Jest unit tests and Selenium end-to-end testing, reducing production incidents by 40%.',
      'Mentored junior team members in modern development practices, particularly around building secure, maintainable web applications with React and JavaScript.',
    ],
  },
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="py-24 bg-gray-900">
      <div className="w-full px-6 md:px-20">
        <SectionReveal>
          <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">
            Professional Experience
          </h2>
        </SectionReveal>

        <div className="flex flex-col md:flex-row gap-8">

          {/* Timeline sidebar */}
          <div className="md:w-1/3 flex flex-col">
            {experiences.map((exp, index) => (
              <SectionReveal key={index} delay={index * 100}>
                <div className="flex gap-4 mb-2">
                  <div className="flex flex-col items-center">
                    <button
                      onClick={() => setActiveTab(index)}
                      className={`w-3 h-3 rounded-full mt-1 flex-shrink-0 transition-all duration-300 ${
                        activeTab === index ? 'bg-purple-500 scale-125' : 'bg-gray-600 hover:bg-gray-500'
                      }`}
                    />
                    {index < experiences.length - 1 && (
                      <div className="w-px flex-1 bg-gray-700 mt-1 mb-1 min-h-[48px]" />
                    )}
                  </div>
                  <button
                    onClick={() => setActiveTab(index)}
                    className={`text-left pb-6 transition-all duration-300 ${
                      activeTab === index ? 'opacity-100' : 'opacity-50 hover:opacity-75'
                    }`}
                  >
                    <div className={`text-sm font-semibold mb-0.5 ${activeTab === index ? 'text-white' : 'text-gray-400'}`}>
                      {exp.title}
                    </div>
                    <div className="text-xs text-purple-400">{exp.company}</div>
                    <div className="text-xs text-gray-600 mt-0.5">{exp.period}</div>
                  </button>
                </div>
              </SectionReveal>
            ))}
          </div>

          {/* Content panel */}
          <SectionReveal className="md:w-2/3 bg-gray-800/50 border border-gray-700/50 rounded-2xl p-5 md:p-8" delay={200}>
            <h3 className="text-2xl font-bold mb-1 text-white">{experiences[activeTab].title}</h3>
            <p className="text-purple-400 mb-1 text-sm">{experiences[activeTab].company}</p>
            <p className="text-gray-500 text-sm mb-6">{experiences[activeTab].period}</p>
            <ul className="space-y-3">
              {experiences[activeTab].responsibilities.map((resp, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-300 text-sm leading-relaxed">{resp}</span>
                </li>
              ))}
            </ul>
          </SectionReveal>

        </div>
      </div>
    </section>
  );
};

export default Experience;