import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

export const Projects = () => {
  const [activeProjectCategory, setActiveProjectCategory] = useState('Cloud');
  const projects = {
    Cloud: [
      {
        title: 'Azure Cloud Solutions',
        description:
          'Experience with Azure services including App Services, Functions, Blob Storage, and SignalR. Implemented cloud-native applications with scalable architecture.',
        technologies: [
          'Azure App Services',
          'Azure Functions',
          'Blob Storage',
          'Azure SignalR',
          'Azure DevOps',
        ],
        icon: '☁️',
        links: [
          {
            name: 'Azure Projects',
            url: 'https://github.com/yourusername/azure-projects',
          },
        ],
      },
      {
        title: 'AWS Infrastructure',
        description:
          'Worked with AWS services for KYC applications, integrating with New Relic and PagerDuty for monitoring and alerting solutions.',
        technologies: [
          'AWS Lambda',
          'EC2',
          'S3',
          'RDS',
          'CloudWatch',
          'New Relic',
          'PagerDuty',
        ],
        icon: '🚀',
        links: [
          {
            name: 'AWS Examples',
            url: 'https://github.com/yourusername/aws-solutions',
          },
        ],
      },
    ],
    'Backend Development': [
      {
        title: 'RESTful APIs in C#',
        description:
          'Developed robust APIs using .NET Core, Entity Framework, and microservices architecture. Implemented authentication, caching, and real-time features.',
        technologies: [
          'C#',
          '.NET Core',
          'Entity Framework',
          'SignalR',
          'Identity Server',
          'Redis',
        ],
        icon: '⚙️',
        links: [
          {
            name: 'C# API Projects',
            url: 'https://github.com/Paskual86/monos-ia',
          },
          {
            name: 'Microservices Demo',
            url: 'https://github.com/Paskual86/monos-ia',
          },
        ],
      },
      {
        title: 'Golang Backend Services',
        description:
          'Built high-performance backend services using Go, with focus on concurrency and efficient data processing.',
        technologies: ['Go', 'Gin Framework', 'MongoDB', 'Docker', 'gRPC'],
        icon: '🐹',
        links: [
          {
            name: 'Go APIs',
            url: 'https://github.com/Paskual86/travel-agency-backend-go',
          },
          {
            name: 'Go Microservices',
            url: 'https://github.com/Paskual86/travel-agency-backend-go',
          },
          {
            name: 'Go Algorithms',
            url: 'https://github.com/Paskual86/go-algorithms-and-data-structure',
          },
          {
            name: 'Hacker Rank Algorithms',
            url: 'https://github.com/Paskual86/hackerrank-go-30DaysOfCoding',
          },
        ],
      },
    ],
    Security: [
      {
        title: 'Authentication & Authorization',
        description:
          'Implemented secure authentication systems using OAuth, JWT tokens, and Identity Server for enterprise applications.',
        technologies: [
          'OAuth 2.0',
          'JWT',
          'Identity Server',
          'Auth0',
          'HTTPS',
          'Encryption',
        ],
        icon: '🔐',
        links: [
          {
            name: 'Auth Examples',
            url: 'https://github.com/Paskual86/monos-ia',
          },
        ],
      },
      {
        title: 'KYC Security Implementation',
        description:
          'Developed secure Know Your Customer applications with data encryption, audit trails, and compliance features.',
        technologies: [
          'Data Encryption',
          'Audit Logging',
          'Compliance',
          'Secure APIs',
          'PCI DSS',
        ],
        icon: '🛡️',
        links: [
          {
            name: 'Security Patterns',
            url: 'https://github.com/yourusername/security-patterns',
          },
        ],
      },
    ],
    Web: [
      {
        title: 'React Applications',
        description:
          'Modern web applications built with React, Redux, and Next.js. Implemented responsive designs and optimized performance.',
        technologies: [
          'React',
          'Next.js',
          'Redux',
          'Context API',
          'Tailwind CSS',
          'TypeScript',
        ],
        icon: '🌐',
        links: [
          {
            name: 'React Exercises',
            url: 'https://github.com/Paskual86/react-the-complete-guide',
          },
          {
            name: 'Next.js Apps',
            url: 'https://github.com/yourusername/nextjs-applications',
          },
        ],
      },
      {
        title: 'Full-Stack Web Solutions',
        description:
          'Complete web solutions combining React frontends with .NET Core backends, including real-time features and database integration.',
        technologies: [
          'React',
          'C#',
          '.NET Core',
          'SignalR',
          'SQL Server',
          'Entity Framework',
        ],
        icon: '💻',
        links: [
          {
            name: 'Full-Stack Projects',
            url: 'https://github.com/yourusername/fullstack-solutions',
          },
        ],
      },
    ],
    Mobile: [
      {
        title: 'Xamarin Forms Development',
        description:
          'Cross-platform mobile applications for Android and iOS using Xamarin Forms with C# and XAML.',
        technologies: [
          'Xamarin Forms',
          'C#',
          'XAML',
          'SQLite',
          'REST APIs',
          'Cross-platform',
        ],
        icon: '📱',
        links: [
          {
            name: 'Playing with Xamarin',
            url: 'https://github.com/Paskual86/playing-with-xamarin',
          },
        ],
      },
      {
        title: 'Safety Mobile App',
        description:
          'Mobile applications with seamless API integration, offline capabilities, and real-time synchronization.',
        technologies: [
          'Mobile APIs',
          'Offline Storage',
          'Push Notifications',
          'Data Sync',
        ],
        icon: '🔄',
        links: [
          {
            name: 'Mobile API Examples',
            url: 'https://github.com/Paskual86/safety',
          },
        ],
      },
    ],
    Windows: [
      {
        title: 'Desktop Applications',
        description:
          'Windows desktop applications built with C# and WPF, including legacy Delphi applications for traffic systems.',
        technologies: [
          'C#',
          'WPF',
          'Windows Forms',
          'Delphi',
          'Desktop UI',
          'Windows Services',
        ],
        icon: '🖥️',
        links: [
          {
            name: 'Desktop Apps',
            url: 'https://github.com/Paskual86/friend-organizer',
          },
        ],
      },
      {
        title: 'Traffic Management Systems',
        description:
          'Intelligent Traffic Systems with CRM, payment processing, and tolling transaction validation for enterprise clients.',
        technologies: [
          'C#',
          'Delphi',
          'SQL Server',
          'Oracle',
          'SOAP Services',
          'Enterprise Integration',
        ],
        icon: '🚦',
        links: [
          {
            name: 'Traffic Systems',
            url: 'https://github.com/yourusername/traffic-management',
          },
        ],
      },
    ],
  };
  return (
    <div>
      <section id='projects' className='py-20 px-4 bg-gray-900'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-4xl font-bold text-white mb-12 text-center'>
            Projects & Expertise
          </h2>

          {/* Project Categories */}
          <div className='flex flex-wrap justify-center gap-4 mb-12'>
            {Object.keys(projects).map((category) => (
              <button
                key={category}
                onClick={() => setActiveProjectCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeProjectCategory === category
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/25'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Project Content */}
          <div className='grid md:grid-cols-2 gap-8'>
            {projects[activeProjectCategory].map((project, index) => (
              <div
                key={index}
                className='bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 group'
              >
                <div className='flex items-start gap-4 mb-4'>
                  <div className='text-4xl'>{project.icon}</div>
                  <div>
                    <h3 className='text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors'>
                      {project.title}
                    </h3>
                  </div>
                </div>

                <p className='text-gray-300 mb-4 leading-relaxed'>
                  {project.description}
                </p>

                <div className='flex flex-wrap gap-2 mb-6'>
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className='bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30'
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className='flex flex-wrap gap-3'>
                  {project.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center gap-2 bg-gray-800/50 hover:bg-purple-600/20 text-gray-300 hover:text-purple-400 px-4 py-2 rounded-lg transition-all duration-300 border border-gray-700 hover:border-purple-500/50'
                    >
                      <Github size={16} />
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
