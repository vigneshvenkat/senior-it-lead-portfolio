'use client';

import { useState, useEffect, useRef } from 'react';

const experiences = [
  {
    title: "IT Lead - Tech & Transformation",
    company: "WI Energy",
    period: "2024 - Present",
    responsibilities: [
      "Transformed the entire business’s chain by implementing a CRM for their new solar venture which resulted in 40% increase in business flow efficiency.",
      "Developed Single Page UI Components using React.js and TailwindCSS to seamlessly integrate the CRM system with external services such as Fleet Trackers and Fuel Trackers, enhancing operational efficiency and data flow.",
      "Lead the IT team in delivering required front-end components in the form of widgets using latest frameworks like ReactJS, VueJS.",
      "Develop project plans with timelines, milestones, budgets, and resource allocation.",
      "Managed and monitored the project execution according to the plan, ensuring tasks are completed on time and within budget."
    ]
  },
  {
    title: "Technical Lead",
    company: "Zoho Corporation Private Limited",
    period: "2019 - 2022",
    responsibilities: [
      "Worked with stakeholders to understand their IT needs and defined project scope for software implementations.",
      "Collaborated with supporting third-party and inbuilt applications to Integrate with CRM which increased the number of overall integrated apps by 100% which in turn increased our product’s revenue by 30%.",
      "Designed and implemented backend services using Java, Spring Boot, integrating caching methodologies (Redis) to optimize performance and reduce latency by 25%.",
      "Led database design initiatives for CRM modules, ensuring scalability and efficient data retrieval, which improved query response times by 20%.",
      "Provided my team with a streamlined plan for all requirements gathered from clients to help them in completing the requirements on time and streamlining this increased our accuracy in delivering items by 50%."
    ]
  },
  {
    title: "Member Technical Staff",
    company: "Zoho Corporation Private Limited",
    period: "2015 - 2019",
    responsibilities: [
      "Led the modernization of Zoho Vault's architecture, transitioning from legacy systems to a React and Node.js stack that improved performance by 30% while maintaining robust security standards for password management.",
      "Designed and implemented critical features like automatic password rotation and form filling, which contributed to a 20% increase in paid subscriptions through improved user experience.",
      "Consolidated multiple browser extensions into a unified codebase using Node.js, reducing maintenance overhead by 70% through careful architecture design and modular development practices.",
      "Established comprehensive testing protocols that reduced production issues by 40%, combining unit testing with end-to-end validation of security-critical functionality.",
      "Mentored junior team members in modern development practices, particularly around building secure, maintainable web applications with React and TypeScript.",
      "Collaborated with security teams to implement encryption best practices and audit trails, ensuring compliance with enterprise security requirements."
    ]
  },
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
