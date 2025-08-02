import React from 'react';
import { Download, User, ChevronDown } from 'lucide-react';

export const HeroSection = ({ scrollToSection }) => {
  return (
    <section
      id='home'
      className='min-h-screen flex items-center justify-center text-center px-4 bg-gray-900'
    >
      <div className='max-w-4xl mx-auto'>
        <div className='mb-8'>
          <div className='w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center'>
            <img
              src='/pablo.andrada/Images/Profile.jpg'
              alt='Foto de perfil'
              className='w-28 h-28 rounded-full border border-purple-500'
            />
          </div>
          <h1 className='text-5xl md:text-7xl font-bold text-white mb-4'>
            Pablo S. Andrada
          </h1>
          <p className='text-xl md:text-2xl text-purple-300 mb-6'>
            Full Stack Developer & Software Engineering Professional
          </p>
          <p className='text-lg text-gray-300 mb-8 max-w-2xl mx-auto'>
            Proactive technology-driven professional with expertise in React,
            C#, and cloud services. Currently exploring AI and Crypto projects
            while delivering innovative solutions.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <button
              onClick={() => scrollToSection('contact')}
              className='bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-colors'
            >
              Get In Touch
            </button>
            <button className='border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-3 px-8 rounded-lg transition-colors flex items-center justify-center gap-2'>
              <Download size={20} />
              Download CV
            </button>
          </div>
        </div>
        <div className='animate-bounce'>
          <ChevronDown size={32} className='text-purple-400 mx-auto' />
        </div>
      </div>
    </section>
  );
};
