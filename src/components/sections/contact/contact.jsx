import React from 'react';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

export const ContactSection = () => {
  return (
    <section id='contact' className='py-20 px-4 bg-gray-900'>
      <div className='max-w-4xl mx-auto text-center'>
        <h2 className='text-4xl font-bold text-white mb-8'>
          Let's Work Together
        </h2>
        <p className='text-xl text-gray-300 mb-12'>
          I'm always interested in new opportunities and exciting projects.
          Let's discuss how we can collaborate!
        </p>

        <div className='grid md:grid-cols-2 gap-8 mb-12'>
          <a
            href='mailto:pablosebastian.andrada@gmail.com'
            className='bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-purple-500/50 transition-colors group'
          >
            <Mail
              size={40}
              className='text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform'
            />
            <h3 className='text-xl font-bold text-white mb-2'>Email</h3>
            <p className='text-gray-300'>pablosebastian.andrada@gmail.com</p>
          </a>

          <a
            href='tel:+34663415'
            className='bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-purple-500/50 transition-colors group'
          >
            <Phone
              size={40}
              className='text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform'
            />
            <h3 className='text-xl font-bold text-white mb-2'>Phone</h3>
            <p className='text-gray-300'>+34 663 41 55 46</p>
          </a>
        </div>

        <div className='flex justify-center gap-6'>
          <button className='bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-colors flex items-center gap-2'>
            <Github size={20} />
            GitHub
          </button>
          <button className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-colors flex items-center gap-2'>
            <Linkedin size={20} />
            LinkedIn
          </button>
        </div>
      </div>
    </section>
  );
};
