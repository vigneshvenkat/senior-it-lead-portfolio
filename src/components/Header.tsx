'use client';

import { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const menuItems = [
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-md border-b border-gray-800/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="w-full px-6 md:px-20 flex items-center justify-between">
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500"
        >
          VV
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {menuItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="/CV-VigneshVenkatraman.docx"
            download
            className="hidden md:inline-block text-sm bg-purple-700 hover:bg-purple-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
          >
            Download CV
          </a>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-gray-300 transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-gray-300 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-gray-300 transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-black/95 backdrop-blur-md border-t border-gray-800/50`}
      >
        <ul className="flex flex-col px-6 pt-4 pb-2 gap-1">
          {menuItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block py-3 text-sm text-gray-400 hover:text-white transition-colors duration-200 border-b border-gray-800/40 last:border-0"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="px-6 pb-5">
          <a
            href="/CV-VigneshVenkatraman.docx"
            download
            className="inline-block text-sm bg-purple-700 hover:bg-purple-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
          >
            Download CV
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
