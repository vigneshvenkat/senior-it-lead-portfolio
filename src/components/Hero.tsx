'use client';

import { useEffect, useState } from 'react';

const roles = [
  'Principal Software Developer',
  'IT Lead & Tech Transformer',
  'Enterprise Systems Architect',
  'Digital Transformation Leader',
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, 60);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, 30);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  const handleScrollDown = () => {
    document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center bg-black text-white pt-24 pb-16 px-6 md:px-20">

      {/* Mobile: stacked layout, Desktop: side by side */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* Text — always first */}
        <div>
          <p className="text-xs md:text-sm uppercase tracking-widest text-purple-400 mb-4 md:mb-6">
            IT Lead · Tech &amp; Transformation
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none mb-3 md:mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
              Vignesh
            </span>
            <br />
            Venkatraman
          </h1>
          <div className="text-base md:text-xl text-gray-300 mb-4 md:mb-6 h-7 flex items-center">
            <span>{displayed}</span>
            <span className="ml-0.5 inline-block w-0.5 h-4 md:h-5 bg-purple-400 animate-pulse" />
          </div>
          <p className="text-gray-500 text-sm leading-relaxed mb-8 md:mb-10 max-w-lg">
            Building enterprise systems and leading high-performance teams for over a decade.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="bg-purple-700 hover:bg-purple-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 inline-block"
            >
              Get in Touch
            </a>
            <a
              href="/CV-VigneshVenkatraman.docx"
              download
              className="bg-gray-800 hover:bg-gray-700 text-gray-300 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 inline-block"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-3 md:gap-6">
          {[
            { num: '10+', label: 'Years experience' },
            { num: '40%', label: 'Efficiency delivered' },
            { num: '3', label: 'Leadership roles' },
            { num: '15+', label: 'Enterprise projects' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-5 md:p-8 hover:border-purple-800 transition-colors duration-300"
            >
              <div className="text-3xl md:text-5xl font-bold text-purple-400 mb-1 md:mb-2">{stat.num}</div>
              <div className="text-xs text-gray-500 tracking-widest uppercase">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>

      {/* Scroll prompt */}
      <div className="flex flex-col items-center mt-12 md:mt-16 cursor-pointer group" onClick={handleScrollDown}>
        <span className="text-xs text-gray-600 tracking-widest uppercase mb-2 group-hover:text-gray-400 transition-colors duration-200">Scroll to explore</span>
        <div className="w-8 h-8 rounded-full border border-gray-700 group-hover:border-purple-500 flex items-center justify-center transition-colors duration-200">
          <span className="text-gray-600 group-hover:text-purple-400 transition-colors duration-200 animate-bounce text-sm">↓</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;