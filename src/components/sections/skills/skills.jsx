import React from 'react';
import { Code } from 'lucide-react';

export const SkillsSection = () => {
  const skills = {
    Frontend: [
      'React',
      'Next.js',
      'Redux',
      'Context API',
      'AngularJS',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Bootstrap',
    ],
    Backend: [
      'C#',
      '.NET Core',
      'Entity Framework',
      'Node.js',
      'RESTful APIs',
      'Microservices',
      'SignalR',
    ],
    Databases: ['SQL Server', 'MySQL', 'Oracle', 'MongoDB', 'Redis'],
    'Cloud & DevOps': ['Azure', 'AWS', 'Docker', 'Kubernetes'],
    'Tools & Others': [
      'Git',
      'Jira',
      'TFS',
      'RabbitMQ',
      'Elastic Search',
      'Cypress',
      'Selenium',
      'Auth0',
    ],
  };

  return (
    <section id='skills' className='py-20 px-4 bg-gray-900'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-4xl font-bold text-white mb-12 text-center'>
          Skills & Technologies
        </h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {Object.entries(skills).map(([category, skillList]) => (
            <div
              key={category}
              className='bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10'
            >
              <h3 className='text-xl font-bold text-purple-400 mb-4 flex items-center gap-2'>
                <Code size={20} />
                {category}
              </h3>
              <div className='space-y-2'>
                {skillList.map((skill, index) => (
                  <div
                    key={index}
                    className='text-gray-300 py-1 px-3 bg-gray-800/30 rounded text-sm'
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
