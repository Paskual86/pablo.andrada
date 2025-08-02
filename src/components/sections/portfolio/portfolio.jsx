import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { HeroSection } from '../hero/hero';
import { AboutSection } from '../about/about';
import { ExperienceSection } from '../experience/experience';
import { SkillsSection } from '../skills/skills';
import { EducationSection } from '../education/education';
import { ContactSection } from '../contact/contact';
import { Footer } from '../footer/footer';

export const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'home',
        'about',
        'experience',
        'skills',
        'education',
        'contact',
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div>
      <nav className='fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center py-4'>
            <div className='text-2xl font-bold text-white'>
              Pablo S. Andrada
            </div>

            {/* Desktop Menu */}
            <div className='hidden md:flex space-x-8'>
              {[
                'home',
                'about',
                'experience',
                'skills',
                'education',
                'contact',
              ].map((item) => (
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
              ))}
            </div>
            {/* Mobile Menu Button */}
            <button
              className='md:hidden text-white'
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className='md:hidden pb-4'>
              {[
                'home',
                'about',
                'experience',
                'skills',
                'education',
                'contact',
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className='block w-full text-left py-2 px-4 text-white hover:text-purple-400 capitalize'
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>
      {/* Es necesario pasarle informacion a este component. */}
      <HeroSection scrollToSection={scrollToSection}></HeroSection>

      <AboutSection></AboutSection>
      <ExperienceSection></ExperienceSection>
      <SkillsSection></SkillsSection>
      <EducationSection></EducationSection>
      <ContactSection></ContactSection>
      <Footer></Footer>
    </div>
  );
};
