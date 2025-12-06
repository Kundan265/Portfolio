'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  FileText, 
  ExternalLink, 
  Code, 
  Database, 
  Terminal, 
  Cpu, 
  Server,
  Layers,
  Monitor,
  X,
  Copy,
  Check
} from 'lucide-react';

// --- Assets / Icons ---
// A custom SVG component to mimic the "Developer at Desk" illustration common in these portfolios
const DeveloperIllustration = () => (
  <svg viewBox="0 0 500 400" className="w-full h-full text-cyan-400" fill="none" xmlns="http://www.w3.org/2000/svg">
    <motion.g 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1 }}
    >
      {/* Table */}
      <rect x="50" y="300" width="400" height="20" rx="5" fill="#1e293b" />
      <rect x="80" y="320" width="20" height="80" rx="2" fill="#334155" />
      <rect x="400" y="320" width="20" height="80" rx="2" fill="#334155" />
      
      {/* Laptop Base */}
      <path d="M130 290 L370 290 L360 300 L140 300 Z" fill="#94a3b8" />
      {/* Laptop Screen */}
      <rect x="140" y="150" width="220" height="140" rx="10" fill="#0f172a" stroke="#94a3b8" strokeWidth="4" />
      
      {/* Screen Content (Animated Code Lines) */}
      <motion.g 
        animate={{ opacity: [0.5, 1, 0.5] }} 
        transition={{ duration: 2, repeat: Infinity }}
      >
        <rect x="160" y="170" width="100" height="8" rx="2" fill="#22d3ee" />
        <rect x="160" y="190" width="140" height="8" rx="2" fill="#3b82f6" />
        <rect x="160" y="210" width="120" height="8" rx="2" fill="#a855f7" />
        <rect x="160" y="230" width="80" height="8" rx="2" fill="#22d3ee" />
      </motion.g>

      {/* Developer Body */}
      <path d="M250 240 C 220 240, 200 280, 200 350 L 300 350 C 300 280, 280 240, 250 240" fill="#3b82f6" opacity="0.8" />
      {/* Head */}
      <circle cx="250" cy="200" r="35" fill="#cbd5e1" />
    </motion.g>
    
    {/* Floating Elements */}
    <motion.circle cx="100" cy="100" r="10" fill="#22d3ee" animate={{ y: [0, -20, 0] }} transition={{ duration: 3, repeat: Infinity }} />
    <motion.circle cx="400" cy="80" r="15" fill="#a855f7" animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }} />
    <motion.rect x="50" y="150" width="20" height="20" fill="#3b82f6" animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} />
  </svg>
);

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleCopyEmail = () => {
    const email = "kundan.k@rutgers.edu";
    // Using older execCommand for better iframe compatibility
    const textArea = document.createElement("textarea");
    textArea.value = email;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
    document.body.removeChild(textArea);
  };

  const experience = [
    {
      company: 'Bank of America',
      role: 'Data Engineer',
      period: 'Sept 2022 - Aug 2025',
      desc: 'Engineered data archiving lifecycles using IBM Infosphere. Administered enterprise SQL/Oracle databases for high-volume transactions.',
      logo: <Database className="w-8 h-8 text-blue-400" />
    },
    {
      company: 'TGGENCO',
      role: 'Engineering Intern',
      period: 'Jan 2021 - Feb 2021',
      desc: 'Analyzed synchronous static generator excitation systems in 815 MW hydropower plant. Optimized efficiency protocols.',
      logo: <Cpu className="w-8 h-8 text-yellow-400" />
    },
  ];

  const projects = [
    {
      title: 'Hybrid Edge-Cloud IoT',
      desc: 'A robust pipeline for IoT data processing using Tesseract OCR and PostgreSQL.',
      tags: ['Python', 'Tesseract', 'PostgreSQL'],
      icon: <Layers className="w-6 h-6" />
    },
    {
      title: 'E-Commerce Warehouse',
      desc: 'Scalable ETL processes and data modeling for high-traffic e-commerce platforms.',
      tags: ['PostgreSQL', 'ETL', 'Data Modeling'],
      icon: <Server className="w-6 h-6" />
    },
    {
      title: 'Quadruped Robot',
      desc: 'Autonomous movement control using Raspberry Pi and Python servo libraries.',
      tags: ['Raspberry Pi', 'Python', 'Robotics'],
      icon: <Cpu className="w-6 h-6" />
    },
  ];

  const socialLinks = [
    { 
      icon: <Github size={24} />, 
      href: "https://github.com/Kundan265/", 
      color: "hover:text-gray-100",
      label: "GitHub",
      external: true
    },
    { 
      icon: <Linkedin size={24} />, 
      href: "https://www.linkedin.com/in/kundankrd", 
      color: "hover:text-blue-500",
      label: "LinkedIn",
      external: true
    },
    { 
      icon: <Mail size={24} />, 
      href: "#", 
      color: "hover:text-red-400",
      label: "Email",
      external: false,
      onClick: (e) => {
        e.preventDefault();
        setShowEmailModal(true);
      }
    },
    { 
      icon: <FileText size={24} />, 
      href: "https://drive.google.com/file/d/14cnUviRfkqDQje9v5PiCET5CsgeY7O0C/view?usp=sharing", 
      color: "hover:text-green-400", 
      label: "Resume",
      download: false,
      external: true
    },
  ];

  const skills = [
    { name: 'Python', icon: <Code /> },
    { name: 'SQL / NoSQL', icon: <Database /> },
    { name: 'Terraform', icon: <Server /> },
    { name: 'Ansible', icon: <Terminal /> },
    { name: 'PostgreSQL', icon: <Database /> },
    { name: 'Tableau', icon: <Monitor /> },
    { name: 'C++', icon: <Code /> },
    { name: 'Linux', icon: <Terminal /> },
  ];

  return (
    <div className="relative min-h-screen bg-[#0f172a] text-slate-200 font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      
      {/* --- Ambient Background --- */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] opacity-30" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[100px] opacity-30" />
      </div>

      {/* --- Mouse Follower (Subtle) --- */}
      <motion.div
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{ type: 'spring', damping: 25, mass: 0.5, stiffness: 200 }}
        className="fixed w-6 h-6 bg-cyan-400/30 rounded-full blur-md pointer-events-none z-50 mix-blend-screen hidden md:block"
      />

      {/* --- Navbar --- */}
      <nav className="fixed top-0 w-full z-40 backdrop-blur-lg bg-[#0f172a]/80 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold font-mono bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent cursor-pointer"
          >
            &lt;Kundan /&gt;
          </motion.div>
          <ul className="hidden md:flex space-x-8">
            {['Skills', 'Work', 'Experience'].map((item, i) => (
              <motion.li 
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <a href={`#${item.toLowerCase()}`} className="text-sm font-medium hover:text-cyan-400 transition-colors">
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center w-full">
          {/* Hero Text */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Hi all, I'm <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Kundan
              </span>
              <motion.span 
                className="inline-block ml-4"
                animate={{ rotate: [0, 20, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              >
                👋
              </motion.span>
            </h1>
            
            <p className="text-xl text-slate-400 mb-8 leading-relaxed max-w-lg">
              A passionate <span className="text-cyan-400 font-semibold">Computing Engineer</span> and Data Architect. 
              Bridging the gap between distributed systems and complex data infrastructures.
            </p>

            {/* Social Links */}
            <div className="flex gap-5 mb-10">
              {socialLinks.map((link, idx) => (
                <a 
                  key={idx} 
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  download={link.download}
                  onClick={link.onClick}
                  className={`p-3 bg-slate-800 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] ${link.color} text-slate-300 cursor-pointer`}
                  title={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>

            <div className="flex gap-4">
              <button 
                className="px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg font-semibold text-white shadow-lg hover:shadow-cyan-500/25 transition-all hover:-translate-y-1"
                onClick={() => setShowEmailModal(true)}
              >
                Contact Me
              </button>
              <button className="px-8 py-3 bg-slate-800 border border-slate-700 rounded-lg font-semibold text-slate-300 hover:bg-slate-700 transition-all">
                See My Work
              </button>
            </div>
          </motion.div>

          {/* Hero Illustration */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative hidden md:block"
          >
            <DeveloperIllustration />
          </motion.div>
        </div>
      </section>

      {/* --- Skills Section --- */}
      <section id="skills" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">
          What I <span className="text-cyan-400">Do</span>
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 rounded-xl flex flex-col items-center gap-4 group transition-colors"
            >
              <div className="text-slate-400 group-hover:text-cyan-400 transition-colors transform scale-125">
                {skill.icon}
              </div>
              <span className="font-semibold text-lg">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- Experience Section --- */}
      <section id="experience" className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">
          Work <span className="text-blue-500">Experience</span>
        </h2>
        
        <div className="relative border-l-2 border-slate-700 ml-3 md:ml-6 space-y-12">
          {experience.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-cyan-500 rounded-full border-4 border-[#0f172a]" />
              
              <div className="bg-slate-800/40 p-6 rounded-xl border border-slate-700/50 hover:border-cyan-500/30 transition-all hover:bg-slate-800/60">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-slate-900 rounded-lg">{exp.logo}</div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-100">{exp.role}</h3>
                      <p className="text-cyan-400 font-medium">{exp.company}</p>
                    </div>
                  </div>
                  <span className="text-slate-500 text-sm mt-2 md:mt-0 font-mono">{exp.period}</span>
                </div>
                <p className="text-slate-400 leading-relaxed">{exp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- Projects Section --- */}
      <section id="work" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">
          Featured <span className="text-purple-500">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-slate-900 border border-slate-800 hover:border-purple-500/50 rounded-2xl p-8 transition-all duration-300 shadow-xl hover:shadow-purple-500/10"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400 group-hover:text-purple-300 transition-colors">
                  {proj.icon}
                </div>
                <div className="flex gap-3">
                  <a href={socialLinks[0].href} target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5 text-slate-500 hover:text-white cursor-pointer" />
                  </a>
                  <ExternalLink className="w-5 h-5 text-slate-500 hover:text-white cursor-pointer" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                {proj.title}
              </h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                {proj.desc}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {proj.tags.map((tag) => (
                  <span key={tag} className="text-xs font-mono px-3 py-1 bg-slate-800 rounded-full text-slate-300 border border-slate-700">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="py-8 text-center text-slate-500 text-sm bg-slate-900/50 border-t border-slate-800">
        <p>
          Made <span className="text-red-500 animate-pulse"></span> by Kundan Kumar Reddy D
        </p>
      </footer>

      {/* --- Email Modal --- */}
      <AnimatePresence>
        {showEmailModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={() => setShowEmailModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-2xl max-w-md w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setShowEmailModal(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>

              <h3 className="text-2xl font-bold mb-2 text-white">Get in Touch</h3>
              <p className="text-slate-400 mb-6">You can reach me at my university email address.</p>
              
              <div className="bg-slate-900 p-4 rounded-lg border border-slate-700 flex items-center justify-between gap-4 mb-6">
                <code className="text-cyan-400 font-mono text-sm sm:text-base truncate">kundan.k@rutgers.edu</code>
                <button 
                  onClick={handleCopyEmail}
                  className="p-2 hover:bg-slate-800 rounded-md text-slate-400 hover:text-white transition-colors relative"
                  title="Copy to clipboard"
                >
                  {copied ? <Check size={18} className="text-green-400" /> : <Copy size={18} />}
                </button>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => setShowEmailModal(false)}
                  className="px-6 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-white font-medium transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}