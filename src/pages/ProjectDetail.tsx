import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Star } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams();

  const projects = {
    '1': {
      title: 'DateNow Dating platform',
      description: 'A comprehensive Dating platform connecting NRI community worldwide with advanced matching algorithms and secure communication features.',
      longDescription: `DateNow is a full-stack dating platform designed to connect the NRI community worldwide. It features advanced matching algorithms, secure communication, and a user-friendly interface for seamless connections.

Key highlights include robust user authentication, real-time chat, profile management, and a scalable backend built with ASP.NET Web API and SQL Server. The platform is optimized for both desktop and mobile devices, ensuring accessibility and performance for all users.

Challenges addressed include implementing secure user data handling, optimizing matchmaking logic, and creating a modern, responsive UI with React and Bootstrap.`,
      image: '/assets/Login.png',
      category: 'Full-Stack',
      technologies: ['React', 'ASP.NET Web API', 'SQL Server', 'Bootstrap', 'C#'],
      liveDemo: 'https://nrimarriage.in',
      // github: 'https://github.com/Ankithankey/nri-marriage',
      featured: true,
      status: 'Live Production',
      duration: '6 months',
      team: 'Team Project',
      features: [
        'Advanced matching algorithms',
        'Secure user authentication',
        'Real-time chat',
        'Profile management',
        'Responsive design',
        'Scalable backend',
        'NRI community focus',
        'Modern UI'
      ],
      gallery: [
        '/assets/dReg.png',
        '/assets/otp.png',
        '/assets/dash.png',
      ],
      challenges: [
        'Implementing secure user data handling',
        'Optimizing matchmaking logic',
        'Creating a modern, responsive UI'
      ],
      learnings: [
        'Full-stack development',
        'User authentication best practices',
        'UI/UX design for matchmaking platforms'
      ]
    },
    '2': {
      title: 'HomeCookT Food Platform',
      description: 'A food delivery platform connecting home chefs with customers, featuring real-time order tracking and payment integration.',
      longDescription: `HomeCookT is a full-stack food delivery platform that bridges home chefs and customers. It offers real-time order tracking, secure payment integration, and a scalable cloud-based backend using AWS services.

The platform supports chef onboarding, menu management, and customer reviews, all within a modern React interface. FastAPI powers the backend, ensuring fast and reliable API responses.

Key challenges included integrating multiple AWS services, ensuring secure payment flows, and building a responsive, intuitive UI for both chefs and customers.`,
      image: '/assets/Homecookt.png',
      category: 'Full-Stack',
      technologies: ['React', 'FastAPI', 'AWS EC2', 'AWS S3', 'AWS RDS'],
      liveDemo: 'https://www.homecookt.com',
      // github: 'https://github.com/Ankithankey/homecookt',
      featured: true,
      status: 'Live Production',
      duration: '5 months',
      team: 'Team Project',
      features: [
        'Real-time order tracking',
        'Payment integration',
        'Chef onboarding',
        'Menu management',
        'Customer reviews',
        'Cloud-based backend',
        'Responsive UI',
        'AWS integration'
      ],
      gallery: [
        '/assets/c1.png',
        '/assets/c2.png',
        '/assets/c3.png',
      ],
      challenges: [
        'Integrating multiple AWS services',
        'Ensuring secure payment flows',
        'Building a responsive, intuitive UI'
      ],
      learnings: [
        'Cloud service integration',
        'API development with FastAPI',
        'UI/UX for food delivery platforms'
      ]
    },
    '3': {
      title: 'MarryUp Mobile App',
      description: 'Cross-platform matrimonial mobile application for iOS and Android with advanced matching and chat features.',
      longDescription: `MarryUp is a cross-platform matrimonial app for iOS and Android, built with React Native and ASP.NET Web API. It features advanced matchmaking, secure chat, and a modern mobile UI.

The app supports profile creation, photo uploads, and real-time notifications. It is optimized for performance and user experience on both platforms.

Challenges included implementing real-time chat, ensuring data security, and creating a seamless experience across devices.`,
      image: '/assets/Mob.png',
      category: 'Mobile',
      technologies: ['React Native', 'ASP.NET Web API', 'SQL Server', 'iOS', 'Android'],
      // github: 'https://github.com/Ankithankey/marryup-mobile',
      featured: true,
      status: 'Mobile App',
      duration: '4 months',
      team: 'Solo Project',
      features: [
        'Advanced matchmaking',
        'Secure chat',
        'Profile creation',
        'Photo uploads',
        'Real-time notifications',
        'Optimized for iOS and Android',
        'Modern mobile UI',
        'Performance optimization'
      ],
      gallery: [
        '/assets/Mob.png',
        // '/assets/M1.png',
        // '/assets/Marryup2.png',
      ],
      challenges: [
        'Implementing real-time chat',
        'Ensuring data security',
        'Seamless cross-device experience'
      ],
      learnings: [
        'React Native development',
        'Mobile UI/UX',
        'Real-time communication'
      ]
    },
    '4': {
      title: 'Ott platform',
      description: 'A static OTT streaming website inspired by Netflix, featuring a modern UI for browsing and previewing movies and TV shows. Built for demonstration and portfolio purposes.',
      longDescription: `This OTT platform is a static website inspired by Netflix, allowing users to browse and preview a curated selection of movies and TV shows. Built with React and Bootstrap, it features a visually appealing, responsive interface.

The project demonstrates frontend skills in UI design, component architecture, and state management, with mock data for demonstration purposes.

Key challenges included creating a Netflix-like layout, optimizing for responsiveness, and ensuring smooth navigation between content sections.`,
      image: '/assets/Ott.png',
      category: 'Frontend',
      technologies: ['React', 'Bootstrap', 'Chart.js', 'JavaScript'],
      github: 'https://github.com/Ankithankey/websites-static-',
      featured: false,
      status: 'Static Project',
      duration: '2 months',
      team: 'Solo Project',
      features: [
        'Netflix-inspired UI',
        'Movie and TV show previews',
        'Responsive design',
        'Component-based architecture',
        'Mock data integration',
        'Smooth navigation',
        'Portfolio demonstration',
        'Modern frontend stack'
      ],
      gallery: [
        '/assets/Ott.png',
        '/assets/N1.png',
        '/assets/N2.png',
      ],
      challenges: [
        'Creating a Netflix-like layout',
        'Optimizing for responsiveness',
        'Smooth navigation between sections'
      ],
      learnings: [
        'Frontend component design',
        'UI/UX for streaming platforms',
        'State management in React'
      ]
    },
    '5': {
      title: 'Health & Fitness Blog',
      description: 'A modern health and fitness blog sharing tips, workout routines, nutrition advice, and wellness articles to inspire a healthy lifestyle.',
      longDescription: `This Health & Fitness Blog is a modern web application dedicated to promoting wellness and healthy living. Built with React and Bootstrap, it features engaging articles, workout routines, nutrition tips, and motivational content for users at all fitness levels.

Key features include categorized blog posts, interactive comment sections, responsive design for all devices, and a clean, inviting UI. The project demonstrates frontend development, content organization, and user engagement strategies.`,
      image: '/assets/H1.png',
      category: 'Frontend',
      technologies: ['React', 'Bootstrap', 'CSS3', 'JavaScript'],
      github: 'https://github.com/Ankithankey/healthandfitness',
      featured: false,
      status: 'Static Project',
      duration: '1 month',
      team: 'Solo Project',
      features: [
        'Wellness and fitness articles',
        'Workout routines and plans',
        'Nutrition and diet tips',
        'Interactive comment section',
        'Responsive layout',
        'Clean and inviting UI',
        'Content categorization',
        'Frontend deployment'
      ],
      gallery: [
        '/assets/H1.png',
        '/assets/H2.png',
        '/assets/Hcontact.png',
      ],
      challenges: [
        'Organizing diverse content types',
        'Ensuring mobile responsiveness',
        'Engaging users with interactive features'
      ],
      learnings: [
        'Content-driven frontend design',
        'User engagement strategies',
        'Responsive web development'
      ]
    },
    '6': {
      title: 'MovieInfo Website',
      description: 'A React-based movie information website with API integration. Users can search for movies and instantly view details, posters, and ratings fetched from a live movie database.',
      longDescription: `MovieInfo is a dynamic React website that fetches movie data from The Movie DB API. Users can search for movies, view posters, ratings, and detailed information in real time.

The project highlights API integration, search functionality, and responsive UI design. It demonstrates skills in asynchronous data fetching, state management, and user experience optimization.`,
      image: '/assets/movieinfo.png',
      category: 'Frontend',
      technologies: ['React', 'The Movie DB API', 'CSS3', 'JavaScript'],
      github: 'https://github.com/Ankithankey/websites-react-/tree/main/movies-info',
      featured: false,
      status: 'Static Project',
      duration: '2 months',
      team: 'Solo Project',
      features: [
        'Movie search functionality',
        'API integration',
        'Real-time data fetching',
        'Responsive UI',
        'Movie posters and ratings',
        'Modern React stack',
        'User experience optimization',
        'State management'
      ],
      gallery: [
        '/assets/movieinfo.png',
        '/assets/Mo1.png',
        '/assets/Mo2.png',
      ],
      challenges: [
        'Integrating external APIs',
        'Handling asynchronous data',
        'Optimizing search performance'
      ],
      learnings: [
        'API integration',
        'React hooks for data fetching',
        'UI/UX for search interfaces'
      ]
    },
    '7': {
      title: 'Weather Dashboard',
      description: 'Interactive weather dashboard with location-based forecasts and data visualization.',
      longDescription: `Weather Dashboard is a React application that provides real-time weather forecasts and data visualization using external weather APIs. Users can search for locations and view detailed weather statistics.

The project demonstrates API integration, charting with Chart.js, and responsive design. It showcases frontend skills in data visualization and user interaction.`,
      image: '/assets/weathercast.png',
      category: 'Frontend',
      technologies: ['React', 'Weather API', 'Chart.js', 'Bootstrap'],
      github: 'https://github.com/Ankithankey/websites-react-/tree/main/weather-forecast',
      featured: false,
      status: 'Static Project',
      duration: '2 months',
      team: 'Solo Project',
      features: [
        'Location-based weather search',
        'Data visualization with Chart.js',
        'API integration',
        'Responsive design',
        'Weather statistics',
        'Modern React stack',
        'User-friendly interface',
        'Real-time updates'
      ],
      gallery: [
        '/assets/weathercast.png',
        '/assets/W1.png',
        '/assets/W2.png',
      ],
      challenges: [
        'Integrating weather APIs',
        'Visualizing data effectively',
        'Ensuring responsive design'
      ],
      learnings: [
        'Data visualization',
        'API data handling',
        'React charting libraries'
      ]
    },
    '8': {
      title: 'Todo List',
      description: 'A simple Todo List application with full CRUD operations. Users can add, edit, delete, and mark tasks as complete, all with a clean and responsive React UI.',
      longDescription: `Todo List is a React application that allows users to manage tasks with full CRUD functionality. Tasks can be added, edited, deleted, and marked as complete, with all data stored locally in the browser.

The project demonstrates React component design, state management, and responsive UI development. It is ideal for learning and demonstrating CRUD operations in a frontend context.`,
      image: '/assets/Todo.png',
      category: 'Frontend',
      technologies: ['React', 'Bootstrap', 'Local Storage', 'JavaScript'],
      github: 'https://github.com/Ankithankey/websites-react-/tree/main/todolist-react',
      featured: false,
      status: 'Static Project',
      duration: '1 month',
      team: 'Solo Project',
      features: [
        'Add, edit, delete tasks',
        'Mark tasks as complete',
        'Local storage persistence',
        'Responsive UI',
        'CRUD operations',
        'Modern React stack',
        'Simple and clean design',
        'Learning project'
      ],
      gallery: [
        '/assets/Todo.png',
        '/assets/t2.png',
      ],
      challenges: [
        'Managing state for CRUD',
        'Ensuring data persistence',
        'Designing a user-friendly UI'
      ],
      learnings: [
        'React state management',
        'CRUD in frontend',
        'UI/UX for productivity apps'
      ]
    }
  };

  const project = projects[id as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-purple-400 hover:text-purple-300">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Back Button */}
        <Link
          to="/projects"
          className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Projects
        </Link>

        {/* Project Header */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="mb-6">
              <span className="px-3 py-1 bg-purple-600 text-white text-sm rounded-full">
                {project.category}
              </span>
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">{project.title}</h1>
            <p className="text-xl text-gray-300 mb-8">{project.description}</p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200"
                >
                  <ExternalLink size={20} className="mr-2" />
                  Live Demo
                </a>
              )}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-purple-400 text-purple-400 font-medium rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-200"
              >
                <Github size={20} className="mr-2" />
                View Code
              </a>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center text-gray-300">
                <Calendar size={20} className="mr-3 text-purple-400" />
                <div>
                  <div className="text-sm text-gray-400">Duration</div>
                  <div>{project.duration}</div>
                </div>
              </div>
              <div className="flex items-center text-gray-300">
                <Users size={20} className="mr-3 text-purple-400" />
                <div>
                  <div className="text-sm text-gray-400">Team</div>
                  <div>{project.team}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-96 object-cover rounded-xl shadow-2xl"
            />
            <div className="absolute top-4 right-4">
              <span className="flex items-center px-3 py-1 bg-green-600 text-white text-sm rounded-full">
                <Star size={16} className="mr-1" />
                {project.status}
              </span>
            </div>
          </div>
        </div>

        {/* Technologies */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, index) => (
              <span key={index} className="px-4 py-2 bg-slate-800 text-purple-300 rounded-lg border border-purple-400/30">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Project Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Project Overview</h2>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50">
            <div className="prose prose-invert max-w-none">
              {project.longDescription.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-300 mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {project.features.map((feature, index) => (
              <div key={index} className="flex items-center p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Project Gallery</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {project.gallery.map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-xl">
                <img
                  src={image}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Challenges & Learnings */}
        <div className="grid lg:grid-cols-2 gap-12">
          <section>
            <h2 className="text-3xl font-bold text-white mb-6">Challenges Overcome</h2>
            <div className="space-y-4">
              {project.challenges.map((challenge, index) => (
                <div key={index} className="p-4 bg-red-900/20 border border-red-700/30 rounded-lg">
                  <p className="text-gray-300">{challenge}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-6">Key Learnings</h2>
            <div className="space-y-4">
              {project.learnings.map((learning, index) => (
                <div key={index} className="p-4 bg-green-900/20 border border-green-700/30 rounded-lg">
                  <p className="text-gray-300">{learning}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;