import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, Filter, Search, Zap, Bot, Smartphone, Globe } from 'lucide-react';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const projects = [
    {
      id: 1,
      title: 'DateNow Dating platform',
      description: 'A comprehensive Dating platform connecting NRI community worldwide with advanced matching algorithms and secure communication features.',
      image: '/assets/Login.png',
      category: 'Full-Stack',
      technologies: ['React', 'ASP.NET Web API', 'SQL Server', 'Bootstrap', 'C#'],
      liveDemo: 'https://nrimarriage.in',
      // github: 'https://github.com/Ankithankey/nri-marriage',
      featured: true,
      status: 'Live Production'
    },
    {
      id: 2,
      title: 'HomeCookT Food Platform',
      description: 'A food delivery platform connecting home chefs with customers, featuring real-time order tracking and payment integration.',
      image: '/assets/Homecookt.png',
      category: 'Full-Stack',
      technologies: ['React', 'FastAPI', 'AWS EC2', 'AWS S3', 'AWS RDS'],
      liveDemo: 'https://www.homecookt.com',
      // github: 'https://github.com/Ankithankey/homecookt',
      featured: true,
      status: 'Live Production'
    },
    {
      id: 3,
      title: 'MarryUp Mobile App',
      description: 'Cross-platform matrimonial mobile application for iOS and Android with advanced matching and chat features.',
      image: '/assets/Mob.png',
      category: 'Mobile',
      technologies: ['React Native', 'ASP.NET Web API', 'SQL Server', 'iOS', 'Android'],
      // github: 'https://github.com/Ankithankey/marryup-mobile',
      featured: true,
      status: 'Mobile App'
    },
    {
      id: 4,
      title: 'Ott platform',
      description: 'A static OTT streaming website inspired by Netflix, featuring a modern UI for browsing and previewing movies and TV shows. Built for demonstration and portfolio purposes.',
      image: '/assets/Ott.png',
      category: 'Frontend',
      technologies: ['React', 'Bootstrap', 'Chart.js', 'JavaScript'],
      github: 'https://github.com/Ankithankey/websites-static-',
      featured: false,
      status: 'Static Project'
    },
    {
      id: 5,
      title: 'Health & Fitness Blog',
      description: 'A modern health and fitness blog sharing tips, workout routines, nutrition advice, and wellness articles to inspire a healthy lifestyle.',
      image: '/assets/H1.png',
      category: 'Frontend',
      technologies: ['React', 'Bootstrap', 'CSS3', 'JavaScript'],
      github: 'https://github.com/Ankithankey/portfolio',
      featured: false,
      status: 'Static Project'
    },
   {
      id: 6,
      title: 'MovieInfo Website',
      description: 'A React-based movie information website with API integration. Users can search for movies and instantly view details, posters, and ratings fetched from a live movie database.',
      image: '/assets/movieinfo.png',
      category: 'Frontend',
      technologies: ['React', 'The Movie DB API', 'CSS3', 'JavaScript'],
      github: 'https://github.com/Ankithankey/websites-react-/tree/main/movies-info',
      featured: false,
      status: 'Static Project'
    },
    {
      id: 7,
      title: 'Weather Dashboard',
      description: 'Interactive weather dashboard with location-based forecasts and data visualization.',
      image: '/assets/weathercast.png',
      category: 'Frontend',
      technologies: ['React', 'Weather API', 'Chart.js', 'Bootstrap'],
      github: 'https://github.com/Ankithankey/websites-react-/tree/main/weather-forecast',
      featured: false,
      status: 'Static Project'
    },
    {
      id: 8,
      title: 'Todo List',
      description: 'A simple Todo List application with full CRUD operations. Users can add, edit, delete, and mark tasks as complete, all with a clean and responsive React UI.',
      image: '/assets/Todo.png',
      category: 'Frontend',
      technologies: ['React', 'Bootstrap', 'Local Storage', 'JavaScript'],
      github: 'https://github.com/Ankithankey/todo-list',
      featured: false,
      status: 'Static Project'
    }
   
  ];

  const categories = ['All', 'Full-Stack', 'Frontend', 'Mobile'];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredProjects = projects.filter(project => project.featured);

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Live Production':
        return <Globe className="w-4 h-4 text-green-400" />;
      case 'Mobile App':
        return <Smartphone className="w-4 h-4 text-blue-400" />;
      default:
        return <Bot className="w-4 h-4 text-cyan-400" />;
    }
  };

  return (
    <div className="min-h-screen pt-16 bg-black relative overflow-hidden">
      {/* Futuristic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6 font-mono">
            <span className="text-cyan-400">&lt;</span>
            MY.PROJECTS
            <span className="text-cyan-400">/&gt;</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-mono">
            A showcase of my technical skills through various web and mobile applications
          </p>
        </div>

        {/* Featured Projects */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 font-mono flex items-center">
            <Zap className="mr-3 text-cyan-400 animate-pulse" />
            FEATURED.PROJECTS
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.id} className="group bg-black/50 backdrop-blur-md rounded-xl overflow-hidden border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 transform hover:scale-105">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute top-4 right-4 flex items-center space-x-2">
                    <span className="flex items-center px-3 py-1 bg-cyan-500/80 text-white text-sm rounded-full font-mono">
                      {getStatusIcon(project.status)}
                      <span className="ml-1">{project.status}</span>
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 font-mono">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-cyan-400/20 text-cyan-300 text-sm rounded-full border border-cyan-400/30 font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <Link
                      to={`/projects/${project.id}`}
                      className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors font-mono"
                    >
                      VIEW.DETAILS →
                    </Link>
                    <div className="flex space-x-3">
                      {project.liveDemo && (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex items-center space-x-2">
            <Filter size={20} className="text-cyan-400" />
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg transition-all duration-200 font-mono ${
                    selectedCategory === category
                      ? 'bg-cyan-500 text-black border border-cyan-400'
                      : 'bg-black/50 text-gray-300 border border-cyan-400/30 hover:border-cyan-400/60'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <div className="relative">
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 bg-black/50 text-white rounded-lg border border-cyan-400/30 focus:border-cyan-400 focus:outline-none transition-colors font-mono"
            />
          </div>
        </div>

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group bg-black/50 backdrop-blur-md rounded-xl overflow-hidden border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 transform hover:scale-105">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="flex items-center px-3 py-1 bg-black/80 text-cyan-400 text-sm rounded-full border border-cyan-400/30 font-mono">
                    {project.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="flex items-center px-2 py-1 bg-black/80 text-white text-xs rounded-full border border-cyan-400/30 font-mono">
                    {getStatusIcon(project.status)}
                    <span className="ml-1">{project.status}</span>
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 font-mono">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span key={index} className="px-2 py-1 bg-cyan-400/20 text-cyan-300 text-xs rounded-full border border-cyan-400/30 font-mono">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-600/50 text-gray-300 text-xs rounded-full border border-gray-600/30 font-mono">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <Link
                    to={`/projects/${project.id}`}
                    className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors text-sm font-mono"
                  >
                    VIEW.DETAILS →
                  </Link>
                  <div className="flex space-x-2">
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110"
                    >
                      <Github size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <Bot className="w-16 h-16 text-cyan-400 mx-auto mb-4 animate-pulse" />
            <p className="text-gray-400 text-lg font-mono">NO.PROJECTS.FOUND</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;