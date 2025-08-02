import React from 'react';

export const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Full Stack Developer (Consultant)',
      company: 'XM',
      period: 'March 2023 – Current',
      description:
        'Analysis and development of new features in the KYC (Know Your Customer) application. Leading AI integration using .NET libraries to optimize automated processes.',
      technologies: [
        'C#',
        'SQL Server',
        'Entity Framework',
        'AWS',
        'New Relic',
        'PagerDuty',
        '.NET',
        'AI Integration',
      ],
    },
    {
      title: 'Full Stack Developer (Consultant)',
      company: 'Studiclix',
      period: 'October 2022 – March 2023',
      description:
        'Leading system refactoring to transition to microservices architecture using RESTful APIs. Implementing Azure SignalR and designing system architecture following SOLID principles.',
      technologies: [
        'C#',
        '.NET Core',
        'Entity Framework',
        'Umbraco CMS',
        'Identity Server',
        'SQL Server 2022',
        'SignalR',
        'Docker',
        'Redis',
        'React',
        'Next.js',
        'Redux',
        'Azure',
      ],
    },
    {
      title: 'Full Stack Developer (Consultant)',
      company: 'SciLeads',
      period: 'September 2021 – September 2022',
      description:
        'Analysis, development, and testing of core system features. Integrated system tools with Slack, optimizing workflows and reducing operation time significantly.',
      technologies: [
        'C#',
        '.NET Core',
        'ServiceStack',
        'MySQL',
        'RabbitMQ',
        'Redis',
        'Docker',
        'AWS',
        'React',
        'JavaScript',
        'Cypress',
      ],
    },
    {
      title: 'Full Stack Developer (Consultant Support)',
      company: 'Kin and Carta',
      period: 'March 2021 – September 2021',
      description:
        'Refinery Software refactoring for U.S.-based company. Led knowledge transfer sessions and developed core cross-components, reducing code duplication.',
      technologies: [
        'C#',
        'Oracle',
        'IMediator',
        'Entity Framework',
        '.NET Core',
        'React',
        'Slice Architecture',
      ],
    },
    {
      title: 'Software Development',
      company: 'KAPSCH Traffic Com Argentina',
      period: 'October 2017 – March 2021',
      description:
        'Participated in design and architecture, development of new functionalities for international projects (United States and Arab Emirates). Normalized and documented entire database for microservices architecture.',
      technologies: [
        'C#',
        'SQL Server',
        'RabbitMQ',
        'NHibernate',
        'REST APIs',
        'Auth0',
        'Selenium',
        'AngularJS',
        'Microservices',
      ],
    },
  ];

  return (
    <section id='experience' className='py-20 px-4 bg-black/20 bg-gray-900'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-4xl font-bold text-white mb-12 text-center'>
          Experience
        </h2>
        <div className='space-y-8'>
          {experiences.map((exp, index) => (
            <div
              key={index}
              className='bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-purple-500/50 transition-colors'
            >
              <div className='flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4'>
                <div>
                  <h3 className='text-xl font-bold text-white mb-1'>
                    {exp.title}
                  </h3>
                  <h4 className='text-lg text-purple-400 mb-2'>
                    {exp.company}
                  </h4>
                </div>
                <span className='text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full text-sm lg:ml-4'>
                  {exp.period}
                </span>
              </div>
              <p className='text-gray-300 mb-4 leading-relaxed'>
                {exp.description}
              </p>
              <div className='flex flex-wrap gap-2'>
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className='bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
