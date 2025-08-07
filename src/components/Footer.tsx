import React from 'react';
import { Github, Linkedin, Mail, Bot, Zap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/50 backdrop-blur-md border-t border-cyan-400/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <a
              href="https://github.com/Ankithankey"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/ankithmathew"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:ankithmathew@example.com"
              className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>
          
          <div className="flex items-center text-gray-400 text-sm font-mono">
            <span>CRAFTED.WITH</span>
            <Zap size={16} className="mx-1 text-cyan-400 animate-pulse" />
            <span>BY ANKITH MATHEW AR</span>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-cyan-400/30 text-center text-gray-400 text-sm font-mono">
          <div className="flex items-center justify-center space-x-2">
            <Bot className="animate-pulse text-cyan-400" size={16} />
            <p>&copy; 2024 ANKITH.MATHEW.AR - ALL.RIGHTS.RESERVED</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;