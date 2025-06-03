'use client';

import { useEffect, useRef } from 'react';

const skills = [
  { category: "Leadership", items: ["Team Management", "Mentoring", "Strategic Planning", "Agile Methodologies", "Conflict Resolution"] },
  { category: "Frontend", items: ["ReactJS", "VueJS", "NextJS", "JavaScript", "TypeScript", "Bootstrap", "Tailwind"]},
  { category: "Project Management", items: ["Scrum", "Kanban", "Risk Management", "Change Management", "Budgeting"] },
  { category: "Backend", items: ["Java", "Spring Boot", "NodeJS", "ExpressJS", "MongoDB", "MySQL"] }
]

const Skills = () => {
  const skillsRef = useRef<HTMLDivElement | null>(null);

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
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={skillsRef}
      id="skills"
      className="py-16 bg-black opacity-0 transition duration-700 ease-in-out"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillSet, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <h3 className="text-xl font-bold mb-4 text-white">{skillSet.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillSet.items.map((skill, idx) => (
                  <span key={idx} className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills;
