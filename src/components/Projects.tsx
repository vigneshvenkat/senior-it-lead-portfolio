'use client'; // Mark component as client-side

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import projectImage1 from '/src/public/project-1.png';
import projectImage2 from '/src/public/project-2.png';
import projectImage3 from '/src/public/project-3.png';

const projects = [
  {
    title: "Enterprise Resource Planning System Overhaul",
    description: "Led the migration of a legacy ERP system to a modern, cloud-based solution, improving efficiency by 40% and reducing operational costs by 30%.",
    image: projectImage1
  },
  {
    title: "Cybersecurity Enhancement Initiative",
    description: "Spearheaded a company-wide cybersecurity upgrade, implementing advanced threat detection systems and training programs, resulting in a 70% reduction in security incidents.",
    image: projectImage2
  },
  {
    title: "Agile Transformation",
    description: "Guided the organization's transition to Agile methodologies, leading to a 35% increase in project delivery speed and improved team satisfaction scores.",
    image: projectImage3
  }
];

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null); // Type the ref

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
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    // Add null check before accessing sectionRef.current
    if (sectionRef.current) {
      const section = sectionRef.current;
      const children = section.querySelectorAll('.project-card');
      children.forEach((child) => observer.observe(child));
    }

    return () => {
      // Safely unobserve if sectionRef.current exists
      if (sectionRef.current) {
        const section = sectionRef.current;
        const children = section.querySelectorAll('.project-card');
        children.forEach((child) => observer.unobserve(child));
      }
    };
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">
          Key Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card bg-gray-800 rounded-lg overflow-hidden shadow-lg transform opacity-0 transition duration-700 ease-in-out"
            >
              <div className="relative h-48 group">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-600 opacity-20"></div>
                <div className="absolute inset-0 bg-purple-500 opacity-0 group-hover:opacity-25 transition duration-300 ease-in-out"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-400">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
