import React, { useState } from 'react';

export const DesktopMenu = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className='hidden md:flex space-x-8'>
      {['home', 'about', 'experience', 'skills', 'education', 'contact'].map(
        (item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item)}
            className={`capitalize transition-colors ${
              activeSection === item
                ? 'text-purple-400'
                : 'text-white hover:text-purple-400'
            }`}
          >
            {item}
          </button>
        )
      )}
    </div>
  );
};
