import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, ExternalLink, Bot, Zap } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'International Institute Of Business Studies',
      location: 'Bangalore, Karnataka',
      period: '2020 - 2024',
      gpa: 'First Class',
      description: 'Focused on software engineering, data structures, algorithms, and web development. Gained practical experience through internships and project work.',
      achievements: [
        'Completed final year project on web application development',
        'Active participation in coding competitions',
        'Internship experience in full-stack development'
      ]
    }
  ];

  const certifications = [
    // {
    //   title: 'AWS Cloud Practitioner',
    //   issuer: 'Amazon Web Services',
    //   date: '2024',
    //   credentialId: 'AWS-CP-123456',
    //   link: '#',
    //   skills: ['AWS EC2', 'AWS S3', 'AWS RDS', 'Cloud Architecture']
    // },
    {
      title: 'React Developer Certificate',
      issuer: 'Jspiders Bangalore',
      date: '2023',
      // credentialId: 'META-RD-789012',
      // link: '#',
      skills: ['React', 'JavaScript', 'Frontend Development', 'Component Design']
    },
    {
      title: ' Python Full StackDevelopment',
      issuer: 'Jspiders Bangalore',
      date: '2023',
      // credentialId: 'FSWEB-345678',
      // link: '#',
      skills: ['React', 'FastAPI', 'Database Design', 'API Development', 'mySQL', 'Python', 'MongoDB']
    }
  ];

  const courses = [
    {
      title: 'React Native Mobile Development',
      provider: 'Online Course Platform',
      duration: '3 months',
      year: '2023',
      skills: ['React Native', 'iOS', 'Android', 'Mobile UI/UX']
    },
    {
      title: 'AWS Cloud Computing Fundamentals',
      provider: 'AWS Training',
      duration: '2 months',
      year: '2024',
      skills: ['EC2', 'S3', 'RDS', 'Cloud Storage']
    }
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
            EDUCATION.LOG
            <span className="text-cyan-400">/&gt;</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-mono">
            My academic journey and professional certifications as a fresh graduate
          </p>
        </div>

        {/* Education Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center font-mono">
            <GraduationCap className="mr-3 text-cyan-400 animate-pulse" />
            ACADEMIC.RECORD
          </h2>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-black/50 backdrop-blur-md rounded-xl p-8 border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-bold text-white mb-2 font-mono">{edu.degree}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-gray-300 mb-4">
                      <span className="flex items-center font-mono">
                        <GraduationCap size={16} className="mr-1 text-cyan-400" />
                        {edu.institution}
                      </span>
                      <span className="flex items-center font-mono">
                        <MapPin size={16} className="mr-1 text-cyan-400" />
                        {edu.location}
                      </span>
                      <span className="flex items-center font-mono">
                        <Calendar size={16} className="mr-1 text-cyan-400" />
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-4">{edu.description}</p>
                    <div className="space-y-2">
                      <h4 className="text-lg font-semibold text-white font-mono">KEY.ACHIEVEMENTS:</h4>
                      <ul className="list-none space-y-1">
                        {edu.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-center text-gray-300">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 animate-pulse"></div>
                            <span className="font-mono">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg p-4 text-center border border-cyan-400/30">
                      <div className="text-2xl font-bold text-cyan-400 mb-1 font-mono">GRADE</div>
                      <div className="text-white font-mono">{edu.gpa}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center font-mono">
            <Award className="mr-3 text-cyan-400 animate-pulse" />
            CERTIFICATIONS.DB
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-black/50 backdrop-blur-md rounded-xl p-6 border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 transform hover:scale-105">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 font-mono">{cert.title}</h3>
                    <p className="text-cyan-400 font-medium font-mono">{cert.issuer}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-gray-300 text-sm font-mono">{cert.date}</div>
                    {/* <a href={cert.link} className="text-cyan-400 hover:text-cyan-300 transition-colors">
                      <ExternalLink size={16} />
                    </a> */}
                  </div>
                </div>
                
                {/* <div className="mb-4"> */}
                  {/* <p className="text-gray-400 text-sm font-mono">ID: {cert.credentialId}</p> */}
                {/* </div> */}
                
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-3 py-1 bg-cyan-400/20 text-cyan-300 text-sm rounded-full border border-cyan-400/30 font-mono">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Courses */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 font-mono flex items-center">
            <Bot className="mr-3 text-cyan-400 animate-pulse" />
            ADDITIONAL.LEARNING
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {courses.map((course, index) => (
              <div key={index} className="bg-black/50 backdrop-blur-md rounded-xl p-6 border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-2 font-mono">{course.title}</h3>
                <div className="flex justify-between items-center mb-4">
                  <p className="text-cyan-400 font-medium font-mono">{course.provider}</p>
                  <div className="text-right text-gray-300 text-sm font-mono">
                    <div>{course.duration}</div>
                    <div>{course.year}</div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {course.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-3 py-1 bg-purple-400/20 text-purple-300 text-sm rounded-full border border-purple-400/30 font-mono">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Fresh Graduate Status */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-8 text-center font-mono flex items-center justify-center">
            <Zap className="mr-3 text-cyan-400 animate-pulse" />
            CURRENT.STATUS
          </h2>
          <div className="bg-black/50 backdrop-blur-md rounded-xl p-8 border border-cyan-400/30 text-center">
            <Bot className="w-16 h-16 text-cyan-400 mx-auto mb-4 animate-pulse" />
            <h3 className="text-2xl font-bold text-white mb-4 font-mono">FRESH.GRADUATE.2024</h3>
            <p className="text-gray-300 max-w-2xl mx-auto font-mono">
              Recently graduated with hands-on experience in full-stack development through internships 
              and personal projects. Ready to contribute to innovative technology solutions and continue 
              learning in a professional environment.
            </p>
            <div className="mt-6 flex justify-center space-x-4">
              <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full border border-green-400/30 font-mono">
                AVAILABLE FOR OPPORTUNITIES
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Education;