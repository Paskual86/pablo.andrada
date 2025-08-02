import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

export const EducationSection = () => {
  const courses = [
    'React JS, Golang & Mongo DB (Udemy)',
    'React JS – Complete Guide (Udemy)',
    'Next JS & React (Udemy)',
    'Unit Testing for C# Developers (Udemy)',
    'Docker & Kubernetes (Udemy)',
    'Azure Development and Implementation',
    'AWS Fundamentals (PluralSight)',
  ];

  return (
    <section id='education' className='py-20 px-4 bg-black/20 bg-gray-900'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-4xl font-bold text-white mb-12 text-center'>
          Education & Courses
        </h2>
        <div className='grid lg:grid-cols-2 gap-8'>
          {/* Education */}
          <div className='bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10'>
            <h3 className='text-2xl font-bold text-purple-400 mb-6 flex items-center gap-2'>
              <GraduationCap size={24} />
              Education
            </h3>
            <div className='space-y-4'>
              <div>
                <h4 className='text-lg font-semibold text-white'>
                  Universidad Nacional de La Matanza
                </h4>
                <p className='text-gray-400'>2015 – 2019</p>
              </div>
              <div>
                <h4 className='text-lg font-semibold text-white'>
                  Escuela de Enseñanza Técnica Nro. 6
                </h4>
                <p className='text-gray-400'>March 2000 – December 2004</p>
              </div>
            </div>
          </div>

          {/* Courses */}
          <div className='bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10'>
            <h3 className='text-2xl font-bold text-purple-400 mb-6 flex items-center gap-2'>
              <Award size={24} />
              Professional Courses
            </h3>
            <div className='space-y-3'>
              {courses.map((course, index) => (
                <div
                  key={index}
                  className='text-gray-300 py-2 px-3 bg-gray-800/30 rounded-lg text-sm'
                >
                  {course}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Languages */}
        <div className='mt-8 bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10'>
          <h3 className='text-2xl font-bold text-purple-400 mb-6'>Languages</h3>
          <div className='grid md:grid-cols-2 gap-4'>
            <div className='flex justify-between items-center'>
              <span className='text-white font-medium'>English</span>
              <span className='text-purple-400 bg-purple-600/20 px-3 py-1 rounded-full text-sm'>
                Upper-Intermediate B2
              </span>
            </div>
            <div className='flex justify-between items-center'>
              <span className='text-white font-medium'>Spanish</span>
              <span className='text-purple-400 bg-purple-600/20 px-3 py-1 rounded-full text-sm'>
                Native
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
