import React from 'react';
import { Code, Database, Cloud, Smartphone, Palette, Zap, Bot, Cpu, CircuitBoard } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      color: 'from-cyan-500 to-blue-600',
      skills: [
        { name: 'React', level: 75, experience: '1+ years' },
        { name: 'JavaScript', level: 80, experience: '1+ years' },
        { name: 'HTML/CSS', level: 85, experience: '1+ years' },
        { name: 'Bootstrap', level: 80, experience: '1+ years' },
        { name: 'React Native', level: 70, experience: '6+ months' }
      ]
    },
    {
      title: 'Backend Development',
      icon: Database,
      color: 'from-purple-500 to-pink-600',
      skills: [
        { name: 'FastAPI', level: 75, experience: '1+ years' },
        { name: 'ASP.NET Web API', level: 80, experience: '1+ years' },
        { name: 'Python', level: 75, experience: '1+ years' },
        { name: 'C#', level: 80, experience: '1+ years' },
        { name: 'SQL Server', level: 75, experience: '1+ years' }
      ]
    },
    {
      title: 'Cloud & AWS',
      icon: Cloud,
      color: 'from-green-500 to-teal-600',
      skills: [
        { name: 'AWS EC2', level: 70, experience: '6+ months' },
        { name: 'AWS S3', level: 75, experience: '6+ months' },
        { name: 'AWS RDS', level: 70, experience: '6+ months' },
        { name: 'Cloud Storage', level: 75, experience: '6+ months' }
      ]
    },
    {
      title: 'Mobile Development',
      icon: Smartphone,
      color: 'from-orange-500 to-red-600',
      skills: [
        { name: 'React Native', level: 70, experience: '6+ months' },
        { name: 'iOS Development', level: 65, experience: '6+ months' },
        { name: 'Android Development', level: 65, experience: '6+ months' },
        { name: 'Cross-Platform', level: 70, experience: '6+ months' }
      ]
    }
  ];

  const softSkills = [
    'Problem Solving',
    'Team Collaboration',
    'Communication',
    'Quick Learning',
    'Adaptability',
    'Time Management',
    'Critical Thinking',
    'Project Planning'
  ];

  return (
    <div className="min-h-screen pt-16 bg-black relative overflow-hidden">
      {/* Futuristic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(0,255,255,0.1)_49%,rgba(0,255,255,0.1)_51%,transparent_52%)] bg-[length:20px_20px] animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6 font-mono">
            <span className="text-cyan-400">&lt;</span>
            SKILLS.MATRIX
            <span className="text-cyan-400">/&gt;</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-mono">
            Technical competencies acquired during my journey as a developer
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-black/50 backdrop-blur-md rounded-xl p-8 border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4`}>
                  <category.icon size={24} className="text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white font-mono">{category.title}</h2>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium font-mono">{skill.name}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-400 font-mono">{skill.experience}</span>
                        <span className="text-sm text-cyan-400 font-medium font-mono">{skill.level}%</span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out relative`}
                        style={{ width: `${skill.level}%` }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center font-mono flex items-center justify-center">
            <Bot className="mr-3 text-cyan-400 animate-pulse" />
            SOFT.SKILLS
          </h2>
          <div className="grid md:grid-cols-4 gap-4">
            {softSkills.map((skill, index) => (
              <div key={index} className="bg-black/50 backdrop-blur-md rounded-lg p-4 border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 text-center transform hover:scale-105">
                <span className="text-white font-medium font-mono">{skill}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Highlights */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center font-mono flex items-center justify-center">
            <Zap className="mr-3 text-cyan-400 animate-pulse" />
            EXPERIENCE.STATS
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black/50 backdrop-blur-md rounded-xl p-8 border border-cyan-400/30 text-center">
              <Cpu className="w-12 h-12 text-cyan-400 mx-auto mb-4 animate-pulse" />
              <div className="text-4xl font-bold text-cyan-400 mb-2 font-mono">8</div>
              <div className="text-white font-medium mb-2 font-mono">Total Projects</div>
              <div className="text-gray-400 text-sm font-mono">Including static and dynamic applications</div>
            </div>
            <div className="bg-black/50 backdrop-blur-md rounded-xl p-8 border border-purple-400/30 text-center">
              <CircuitBoard className="w-12 h-12 text-purple-400 mx-auto mb-4 animate-pulse" />
              <div className="text-4xl font-bold text-purple-400 mb-2 font-mono">2</div>
              <div className="text-white font-medium mb-2 font-mono">Live Applications</div>
              <div className="text-gray-400 text-sm font-mono">Production-ready web applications</div>
            </div>
            <div className="bg-black/50 backdrop-blur-md rounded-xl p-8 border border-pink-400/30 text-center">
              <Bot className="w-12 h-12 text-pink-400 mx-auto mb-4 animate-pulse" />
              <div className="text-4xl font-bold text-pink-400 mb-2 font-mono">1+</div>
              <div className="text-white font-medium mb-2 font-mono">Years Experience</div>
              <div className="text-gray-400 text-sm font-mono">As intern and freelance developer</div>
            </div>
          </div>
        </section>

        {/* Learning Journey */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-8 text-center font-mono">LEARNING.JOURNEY</h2>
          <div className="bg-black/50 backdrop-blur-md rounded-xl p-8 border border-cyan-400/30">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4 font-mono flex items-center">
                  <Zap className="mr-2 text-cyan-400" />
                  CURRENT.FOCUS
                </h3>
                <div className="space-y-3">
                  {[
                    'Advanced React Patterns',
                    'AWS Cloud Architecture',
                    'Mobile App Optimization',
                    'API Security Best Practices'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 animate-pulse"></div>
                      <span className="text-gray-300 font-mono">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4 font-mono flex items-center">
                  <Bot className="mr-2 text-purple-400" />
                  NEXT.TARGETS
                </h3>
                <div className="space-y-3">
                  {[
                    'Machine Learning Integration',
                    'DevOps & CI/CD Pipelines',
                    'Microservices Architecture',
                    'Advanced Database Design'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 animate-pulse"></div>
                      <span className="text-gray-300 font-mono">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skills;