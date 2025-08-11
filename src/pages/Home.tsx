import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Github, Linkedin, Mail, Code, Sparkles, Zap, Bot, Cpu, CircuitBoard } from 'lucide-react';

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [robotText, setRobotText] = useState('');
  const welcomeMessage = "INITIALIZING... WELCOME TO ANKITH'S DIGITAL REALM";

  useEffect(() => {
    setIsLoaded(true);

    // Robot typing effect
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index < welcomeMessage.length) {
        setRobotText(welcomeMessage.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, []);

  return (
    <div className="min-h-screen pt-16 bg-black relative overflow-hidden">
      {/* Futuristic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(0,255,255,0.1)_49%,rgba(0,255,255,0.1)_51%,transparent_52%)] bg-[length:20px_20px] animate-pulse"></div>
      </div>

      {/* Robot Welcome Message */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-10">
        <div className="bg-black/80 backdrop-blur-md border border-cyan-400/50 rounded-lg px-6 py-3">
          <div className="flex items-center space-x-3">
            <Bot className="text-cyan-400 animate-pulse" size={24} />
            <span className="text-cyan-400 font-mono text-sm">
              {robotText}
              <span className="animate-pulse">|</span>
            </span>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <section className="relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`space-y-8 transform transition-all duration-1000 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-cyan-400">
                  <CircuitBoard size={20} className="animate-pulse" />
                  <span className="text-sm font-mono tracking-wider">SYSTEM.PORTFOLIO.INIT()</span>
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="text-white">Hi, I'm </span>
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                    Ankith Mathew AR
                  </span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  A passionate <span className="text-cyan-400 font-semibold">Full-Stack Developer</span> crafting
                  innovative digital experiences with cutting-edge technologies and creative problem-solving.
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-400 font-mono">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                    STATUS: ONLINE
                  </div>
                  <div className="flex items-center">
                    <Cpu size={16} className="mr-2 text-cyan-400" />
                    EXPERIENCE: 1+ YEARS
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/projects"
                  className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
                >
                  <Zap size={20} className="mr-2 group-hover:animate-pulse" />
                  EXPLORE PROJECTS
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="/src/assets/AnkithMathew_Resume.docx"
                  download
                  className="group inline-flex items-center px-6 py-3 border-2 border-cyan-400 text-cyan-400 font-medium rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  <Download size={20} className="mr-2 group-hover:animate-bounce" />
                  DOWNLOAD.RESUME
                </a>
              </div>

              <div className="flex items-center space-x-6">
                <a
                  href="https://github.com/Ankithankey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110 hover:rotate-12"
                >
                  <Github size={28} />
                </a>
                <a
                  href="https://linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110 hover:rotate-12"
                >
                  <Linkedin size={28} />
                </a>
                <a
                  href="mailto:ankithankey8970@gmail.com"
                  className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110 hover:rotate-12"
                >
                  <Mail size={28} />
                </a>
              </div>
            </div>

            <div className={`relative transform transition-all duration-1000 delay-300 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="relative w-80 h-80 mx-auto">
                {/* Holographic Ring */}
                <div className="absolute inset-0 rounded-full border-2 border-cyan-400/30 animate-spin"></div>
                <div className="absolute inset-4 rounded-full border border-purple-400/30 animate-spin" style={{ animationDirection: 'reverse' }}></div>
                <div className="absolute inset-8 rounded-full border border-pink-400/30 animate-spin"></div>

                {/* Profile Image Container */}
                <div className="relative w-full h-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-400/50 flex items-center justify-center backdrop-blur-sm">
                  <img
                    src="/src/assets/Ankith.jpg"
                    alt="Ankith Mathew AR"
                    className="w-64 h-64 rounded-full object-cover border-4 border-cyan-400/50 shadow-lg shadow-cyan-500/25"
                  />
                  {/* Scanning Line Effect */}
                  <div className="absolute inset-0 rounded-full overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute top-1/2 -left-8 w-4 h-4 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '1+', label: 'Years Experience', icon: Zap },
              { number: '8', label: 'Static Projects', icon: Code },
              { number: '5', label: 'React Projects', icon: Bot },
              { number: '2', label: 'Live Applications', icon: CircuitBoard },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-black/50 backdrop-blur-md border border-cyan-400/30 rounded-lg p-6 hover:border-cyan-400/60 transition-all duration-300 transform hover:scale-105">
                  <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3 group-hover:animate-pulse" />
                  <div className="text-3xl font-bold text-white mb-2 font-mono">{stat.number}</div>
                  <div className="text-gray-400 text-sm font-mono">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack Preview */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 font-mono">
              <span className="text-cyan-400">&lt;</span>
              TECH.STACK
              <span className="text-cyan-400">/&gt;</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-mono">
              Specialized in modern technologies for web and mobile development
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Frontend Development',
                description: 'Creating responsive, interactive user interfaces with React and React Native.',
                technologies: ['React', 'React Native', 'Bootstrap', 'JavaScript', 'HTML/CSS', 'Tailwind CSS']
              },
              {
                title: 'Backend Development',
                description: 'Building robust server-side applications and APIs with FastAPI and ASP.NET.',
                technologies: ['FastAPI', 'ASP.NET Web API', 'SQL', 'Python', 'C#']
              },
              {
                title: 'Cloud & Mobile',
                description: 'Deploying scalable applications using AWS services and mobile platforms.',
                technologies: ['AWS EC2', 'AWS S3', 'AWS RDS', 'iOS', 'Android']
              }
            ].map((service, index) => (
              <div key={index} className="group bg-black/50 backdrop-blur-md rounded-xl p-8 border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-6 group-hover:animate-pulse">
                  <Code size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 font-mono">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-cyan-400/20 text-cyan-300 text-sm rounded-full border border-cyan-400/30 font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;