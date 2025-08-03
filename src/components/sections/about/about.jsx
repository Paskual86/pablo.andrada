import React from 'react';
import { Mail, Phone, User } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id='about' className='py-20 px-4 bg-gray-900'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-4xl font-bold text-white mb-12 text-center'>
          About Me
        </h2>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <div>
            <div className='w-full h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center border border-purple-500/30'>
              {/*<User size={120} className='text-purple-400' />*/}
              <img
                src='/pablo.andrada/Images/AboutMe1.jpg'
                alt='About Me'
              ></img>
            </div>
          </div>
          <div className='text-gray-300 space-y-6'>
            <p className='text-lg leading-relaxed'>
              I am a proactive and technology-driven professional with a strong
              sense of responsibility and commitment to achieving both company
              and personal objectives.
            </p>
            <p className='text-lg leading-relaxed'>
              Currently, I work primarily with React, C#, and SQL Server,
              leveraging Azure services. I have extensive experience with
              various technologies including Delphi and AngularJS.
            </p>
            <p className='text-lg leading-relaxed'>
              I am an active listener who understands expectations and acts
              accordingly. I am always eager to learn new technologies and
              embrace challenges with confidence.
            </p>
            <p className='text-lg leading-relaxed'>
              Additionally, I am currently working on AI and Crypto projects,
              expanding my expertise in these cutting-edge fields.
            </p>
            <div className='flex gap-4 pt-4'>
              <div className='flex items-center gap-2 text-purple-400'>
                <Mail size={20} />
                <span>pablosebastian.andrada@gmail.com</span>
              </div>
            </div>
            <div className='flex gap-4'>
              <div className='flex items-center gap-2 text-purple-400'>
                <Phone size={20} />
                <span>+34 663 415 XXX</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
