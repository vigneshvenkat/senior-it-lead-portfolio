'use client';

import SectionReveal from './SectionReveal';

const skills = [
  {
    category: 'Leadership',
    color: 'purple',
    items: ['Team Management', 'Mentoring', 'Strategic Planning', 'Agile Methodologies', 'Conflict Resolution', 'Change Management'],
  },
  {
    category: 'Frontend',
    color: 'blue',
    items: ['ReactJS', 'VueJS', 'NextJS', 'JavaScript', 'TypeScript', 'Bootstrap', 'Tailwind'],
  },
  {
    category: 'Backend & Cloud',
    color: 'green',
    items: ['NodeJS', 'Java', 'Spring Boot', 'ExpressJS', 'PostgreSQL', 'MongoDB', 'MySQL', 'AWS Lambda', 'API Gateway'],
  },
  {
    category: 'Security & Compliance',
    color: 'amber',
    items: ['ISO 27001', 'GDPR', 'Data Encryption', 'Audit Trails', 'Helmet.js', 'JWT Auth', 'Security Architecture'],
  },
];

const tagStyles: Record<string, string> = {
  purple: 'bg-purple-950 text-purple-300 border border-purple-800/60',
  blue: 'bg-blue-950 text-blue-300 border border-blue-800/60',
  green: 'bg-green-950 text-green-300 border border-green-800/60',
  amber: 'bg-amber-950 text-amber-300 border border-amber-800/60',
};

const headerStyles: Record<string, string> = {
  purple: 'text-purple-400',
  blue: 'text-blue-400',
  green: 'text-green-400',
  amber: 'text-amber-400',
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-black">
      <div className="w-full px-6 md:px-20">
        <SectionReveal>
          <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">
            Skills & Expertise
          </h2>
        </SectionReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skillSet, index) => (
            <SectionReveal key={index} delay={index * 100}>
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-colors duration-300 h-full">
                <h3 className={`text-sm font-semibold mb-4 uppercase tracking-widest ${headerStyles[skillSet.color]}`}>
                  {skillSet.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillSet.items.map((skill, idx) => (
                    <span key={idx} className={`px-3 py-1 rounded-md text-xs font-medium ${tagStyles[skillSet.color]}`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;