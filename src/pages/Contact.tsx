import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Mail, Phone, MapPin, Github, Linkedin, Send, Download, Bot, Zap, X } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    emailjs.send(
      'service_zrp7n08',
      'template_y62t6k9',
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message
      },
      'xngP_o5K8s1_S5hap'
    )
    .then(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 3000);
    })
    .catch(() => {
      setIsSubmitting(false);
      setSubmitStatus('error');
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ankithankey8970@gmail.com',
      href: 'mailto:ankithankey8970@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8431 XXXXX',
      href: 'tel:+918431247742'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'India',
      href: 'https://www.google.com/maps/place/Bengaluru'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Ankithankey',
      color: 'hover:text-cyan-400'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/ankithmathew',
      color: 'hover:text-blue-400'
    },
    {
      icon: X,
      label: 'Twitter',
      href: 'https://x.com/AnkeyAnkith?t=eW9YA9GX8xCvEWpn3pfLTw&s=08 ',
      color: 'hover:text-cyan-400'
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
            CONTACT.INTERFACE
            <span className="text-cyan-400">/&gt;</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-mono">
            Ready to collaborate on exciting projects and opportunities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 font-mono flex items-center">
                <Bot className="mr-3 text-cyan-400 animate-pulse" />
                CONNECT.WITH.ME
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed font-mono">
                As a fresh graduate with 1+ years of internship experience, I'm excited to take on 
                new challenges and contribute to innovative projects. Let's build something amazing together!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  target="_blank"
                  key={index}
                  href={info.href}
                  className="flex items-center p-4 bg-black/50 backdrop-blur-md rounded-lg border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 group transform hover:scale-105"
                >
                  <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg mr-4 group-hover:animate-pulse">
                    <info.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 font-mono">{info.label}</div>
                    <div className="text-white font-medium font-mono">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4 font-mono flex items-center">
                <Zap className="mr-2 text-cyan-400" />
                SOCIAL.NETWORKS
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-black/50 backdrop-blur-md rounded-lg border border-cyan-400/30 text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-110 hover:border-cyan-400/60`}
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </div>

            {/* Resume Download */}
            <div className="p-6 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl border border-cyan-400/30">
              <h3 className="text-xl font-bold text-white mb-3 font-mono">DOWNLOAD.RESUME</h3>
              <p className="text-gray-300 mb-4 font-mono">
                Get a detailed overview of my experience, skills, and projects.
              </p>
              <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-200 font-mono">
                <Download size={20} className="mr-2" />
                DOWNLOAD.CV
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-black/50 backdrop-blur-md rounded-xl p-8 border border-cyan-400/30">
            <h2 className="text-3xl font-bold text-white mb-6 font-mono">SEND.MESSAGE</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2 font-mono">
                    NAME.REQUIRED *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/70 text-white rounded-lg border border-cyan-400/30 focus:border-cyan-400 focus:outline-none transition-colors font-mono"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 font-mono">
                    EMAIL.REQUIRED *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/70 text-white rounded-lg border border-cyan-400/30 focus:border-cyan-400 focus:outline-none transition-colors font-mono"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2 font-mono">
                  SUBJECT.REQUIRED *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/70 text-white rounded-lg border border-cyan-400/30 focus:border-cyan-400 focus:outline-none transition-colors font-mono"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2 font-mono">
                  MESSAGE.REQUIRED *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-black/70 text-white rounded-lg border border-cyan-400/30 focus:border-cyan-400 focus:outline-none transition-colors resize-none font-mono"
                  placeholder="Tell me about your project or opportunity!"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center px-6 py-3 font-medium rounded-lg transition-all duration-200 font-mono ${
                  isSubmitting
                    ? 'bg-gray-600 cursor-not-allowed'
                    : submitStatus === 'success'
                    ? 'bg-green-600 hover:bg-green-700'
                    : 'bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600'
                } text-white`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    TRANSMITTING...
                  </>
                ) : submitStatus === 'success' ? (
                  'MESSAGE.SENT!'
                ) : (
                  <>
                    <Send size={20} className="mr-2" />
                    SEND.MESSAGE
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-900/20 border border-green-700/30 rounded-lg">
                  <p className="text-green-300 text-sm font-mono">
                    MESSAGE.RECEIVED! I'll get back to you as soon as possible.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-20 text-center">
          <div className="bg-black/50 backdrop-blur-md rounded-xl p-8 border border-cyan-400/30">
            <Bot className="w-16 h-16 text-cyan-400 mx-auto mb-4 animate-pulse" />
            <h3 className="text-2xl font-bold text-white mb-4 font-mono">RESPONSE.TIME</h3>
            <p className="text-gray-300 max-w-2xl mx-auto font-mono">
              I typically respond to messages within 24 hours. For urgent inquiries, 
              feel free to reach out via phone or connect with me on LinkedIn for faster communication.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;