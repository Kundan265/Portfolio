import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Canvas from 'react-webgl-fluid-play';
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
  Check,
  ChevronDown,
  MapPin,
  Phone,
  ArrowDown,
  Menu,
  Download,
} from 'lucide-react';

const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
};

export default function Home() {
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [expandedExp, setExpandedExp] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const navBg = useTransform(scrollYProgress, [0, 0.05], ['rgba(255,255,255,0)', 'rgba(255,255,255,0.95)']);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const handleCopyEmail = () => {
    const email = 'kundan.k@rutgers.edu';
    const textArea = document.createElement('textarea');
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

  const navItems = ['About', 'Experience', 'Skills', 'Projects', 'Contact'];

  const experience = [
    {
      company: 'Bank of America',
      role: 'Data Engineer',
      period: 'Sept 2022 – Aug 2025',
      status: 'Completed',
      desc: 'Engineered data archiving lifecycles using IBM Infosphere. Administered enterprise SQL/Oracle databases for high-volume transactions.',
      contributions: [
        'Engineered data archiving lifecycles using IBM Infosphere for enterprise-scale data management and compliance.',
        'Administered enterprise SQL/Oracle databases handling high-volume financial transactions with 99.9% uptime.',
        'Built automated ETL pipelines processing millions of records daily across distributed data systems.',
        'Optimized query performance on large-scale data warehouses, reducing execution time by 60%.',
      ],
      tags: ['IBM Infosphere', 'SQL', 'Oracle', 'ETL', 'Python'],
      icon: <Database className="w-6 h-6" />,
    },
    {
      company: 'TGGENCO',
      role: 'Engineering Intern',
      period: 'Jan 2021 – Feb 2021',
      status: 'Completed',
      desc: 'Analyzed synchronous static generator excitation systems in 815 MW hydropower plant. Optimized efficiency protocols.',
      contributions: [
        'Analyzed synchronous static generator excitation systems in an 815 MW hydropower plant.',
        'Optimized efficiency protocols for power generation systems.',
        'Documented technical findings and presented recommendations to engineering team.',
      ],
      tags: ['Power Systems', 'Data Analysis', 'Engineering'],
      icon: <Wrench className="w-6 h-6" />,
    },
    {
      Project: 'Rutgers – New Brunswick Laureate Program',
      role: 'AI Data Engineer',
      period: 'Dec 2025 – Mar 2026',
      status: 'Completed',
      desc: 'An interdisciplinary art and science project bringing “botanical ghosts” back into cultural consciousness through critical design.',
      contributions: [
        'Co-designed and developed a dedicated digital platform to highlight the Chrysler Herbarium, expanding public recognition of archival botanical work.',
        'Translated complex ecological loss and scientific data into accessible visual narratives using critical and speculative design frameworks.',
        'Assisted in exploring ways to use historical language and material explorations to reintroduce vanished ecologies into contemporary culture.',
      ],
      tags: ['Data Engineering', 'Machine Learning Pipelines', '3D Reconstruction'],
      icon: <Cpu className="w-6 h-6" />,
    },
  ];

  const projects = [
    {
      title: 'Hybrid Edge-Cloud IoT',
      desc: 'A robust pipeline for IoT data processing using Tesseract OCR and PostgreSQL. Implements edge computing for real-time data ingestion with cloud-based analytics.',
      tags: ['Python', 'Tesseract', 'PostgreSQL'],
      icon: <Layers className="w-6 h-6" />,
      github: 'https://github.com/Kundan265/',
    },
    {
      title: 'E-Commerce Warehouse',
      desc: 'Scalable ETL processes and data modeling for high-traffic e-commerce platforms. Features star-schema design and automated data quality checks.',
      tags: ['PostgreSQL', 'ETL', 'Data Modeling'],
      icon: <Server className="w-6 h-6" />,
      github: 'https://github.com/Kundan265/',
    },
    {
      title: 'Quadruped Robot',
      desc: 'Autonomous movement control using Raspberry Pi and Python servo libraries. Implements inverse kinematics for stable walking gaits.',
      tags: ['Raspberry Pi', 'Python', 'Robotics'],
      icon: <Cpu className="w-6 h-6" />,
      github: 'https://github.com/Kundan265/',
    },
  ];

  const skills = [
    {
      category: 'Languages & Data',
      icon: <Code className="w-6 h-6" />,
      items: ['Python', 'SQL', 'C++', 'PostgreSQL', 'NoSQL', 'PL/SQL'],
    },
    {
      category: 'Cloud & DevOps',
      icon: <Server className="w-6 h-6" />,
      items: ['Terraform', 'Ansible', 'AWS', 'Docker', 'Linux', 'CI/CD'],
    },
    {
      category: 'Data & Analytics',
      icon: <Database className="w-6 h-6" />,
      items: ['Tableau', 'ETL Pipelines', 'Data Modeling', 'Spark', 'Airflow', 'IBM Infosphere'],
    },
  ];

  const basePath = import.meta.env.BASE_URL;

  return (
    <div className="relative min-h-screen bg-[#f8f9fc] text-slate-800 font-sans selection:bg-blue-500/20 overflow-x-hidden">

      {/* Fluid Water Background - fixed behind everything */}
      <div className="fixed inset-0 z-0 opacity-30 pointer-events-none">
        <Canvas
          initialAnimation={{ path: 'wave', options: { maxLoops: Infinity } }}
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Navigation */}
      <motion.nav
        style={{ backgroundColor: navBg }}
        className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-slate-200/50"
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.a
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold tracking-tight text-slate-800"
          >
            <span className="text-blue-600">&lt;</span>
            KD
            <span className="text-blue-600"> /&gt;</span>
          </motion.a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300" />
                </a>
              </motion.li>
            ))}
            <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
              <button
                onClick={() => setShowEmailModal(true)}
                className="px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
              >
                Contact
              </button>
            </motion.li>
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/95 backdrop-blur-lg border-t border-slate-200"
            >
              <div className="px-6 py-4 space-y-3">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-slate-700 hover:text-blue-600 font-medium py-2"
                  >
                    {item}
                  </a>
                ))}
                <button
                  onClick={() => { setShowEmailModal(true); setMobileMenuOpen(false); }}
                  className="w-full px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg"
                >
                  Contact
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* ====== HERO ====== */}
      <section ref={heroRef} className="relative min-h-screen flex items-center pt-20 px-6">
        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative z-10"
          >
            <p className="text-blue-600 font-medium tracking-wide uppercase text-sm mb-4">
              Hello! I'm
            </p>
            <h1 className="text-5xl md:text-7xl font-bold mb-2 tracking-tight text-slate-900 leading-[1.1]">
              Kundan
              <br />
              <span className="text-blue-600">Kumar Reddy</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 mt-4 mb-8 leading-relaxed max-w-lg">
              Computing Engineer & Data Architect. Bridging the gap between
              distributed systems and complex data infrastructures.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <button
                onClick={() => setShowEmailModal(true)}
                className="px-7 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 hover:-translate-y-0.5"
              >
                Get in Touch
              </button>
              <a
                href={`${basePath}CV_K.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3 border-2 border-slate-300 text-slate-700 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all flex items-center gap-2 hover:-translate-y-0.5"
              >
                <FileText size={18} />
                Download CV
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="https://github.com/Kundan265/" target="_blank" rel="noopener noreferrer"
                className="p-3 rounded-full bg-white border border-slate-200 text-slate-500 hover:text-slate-900 hover:border-slate-400 transition-all shadow-sm hover:shadow-md">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/kundankrd" target="_blank" rel="noopener noreferrer"
                className="p-3 rounded-full bg-white border border-slate-200 text-slate-500 hover:text-blue-600 hover:border-blue-300 transition-all shadow-sm hover:shadow-md">
                <Linkedin size={20} />
              </a>
              <button
                onClick={() => setShowEmailModal(true)}
                className="p-3 rounded-full bg-white border border-slate-200 text-slate-500 hover:text-red-500 hover:border-red-300 transition-all shadow-sm hover:shadow-md">
                <Mail size={20} />
              </button>
            </div>
          </motion.div>

          {/* Hero Visual - Abstract Tech Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative hidden md:flex items-center justify-center"
          >
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              {/* Concentric rings */}
              {[1, 2, 3, 4].map((ring) => (
                <motion.div
                  key={ring}
                  className="absolute inset-0 rounded-full border border-blue-200/40"
                  style={{
                    inset: `${ring * 20}px`,
                  }}
                  animate={{ rotate: ring % 2 === 0 ? 360 : -360 }}
                  transition={{ duration: 20 + ring * 5, repeat: Infinity, ease: 'linear' }}
                >
                  <div
                    className="absolute w-3 h-3 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50"
                    style={{ top: '0', left: '50%', transform: 'translate(-50%, -50%)' }}
                  />
                </motion.div>
              ))}
              {/* Center icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-xl shadow-blue-500/30">
                  <Code className="w-10 h-10 text-white" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <ArrowDown size={16} />
        </motion.div>
      </section>

      {/* ====== ABOUT ====== */}
      <motion.section
        id="about"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="relative z-10 py-24 px-6"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-slate-900">
            About <span className="text-blue-600">Me</span>
          </h2>
          <div className="w-16 h-1 bg-blue-600 rounded mb-8" />

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-slate-200 shadow-lg">
            <h3 className="text-lg font-semibold text-slate-800 mb-4">Background & Focus</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Data Engineer with 3+ years of experience at Bank of America, building production data
              systems, scalable infrastructure, and automated pipelines across the full data lifecycle.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Skilled in engineering enterprise-grade ETL pipelines using IBM Infosphere, administering
              SQL/Oracle databases for high-volume financial transactions, and optimizing data warehouse
              performance. Passionate about distributed systems, cloud infrastructure (Terraform, AWS),
              and turning complex data challenges into elegant engineering solutions.
            </p>
          </div>
        </div>
      </motion.section>

      {/* ====== EXPERIENCE ====== */}
      <motion.section
        id="experience"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="relative z-10 py-24 px-6"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-slate-900">
            Professional <span className="text-blue-600">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-blue-600 rounded mb-4" />
          <p className="text-slate-500 mb-12">Click a card to see details</p>

          <div className="space-y-6">
            {experience.map((exp, idx) => (
              <motion.div
                key={idx}
                custom={idx}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group"
              >
                <div
                  onClick={() => setExpandedExp(expandedExp === idx ? null : idx)}
                  className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 border cursor-pointer transition-all duration-300 shadow-sm hover:shadow-lg ${
                    expandedExp === idx
                      ? 'border-blue-300 shadow-lg shadow-blue-500/5'
                      : 'border-slate-200 hover:border-blue-200'
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
                        {exp.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                        <p className="text-blue-600 font-medium">{exp.company}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-slate-400 text-sm font-mono">{exp.period}</span>
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        exp.status === 'Current'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-slate-100 text-slate-600'
                      }`}>
                        {exp.status.toUpperCase()}
                      </span>
                      <ChevronDown
                        size={18}
                        className={`text-slate-400 transition-transform duration-300 ${
                          expandedExp === idx ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                  </div>

                  <AnimatePresence>
                    {expandedExp === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-6 pt-6 border-t border-slate-100">
                          <h4 className="font-semibold text-slate-800 mb-3">Key Contributions</h4>
                          <ul className="space-y-2 mb-6">
                            {exp.contributions.map((c, i) => (
                              <li key={i} className="flex items-start gap-2 text-slate-600 text-sm leading-relaxed">
                                <span className="mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0" />
                                {c}
                              </li>
                            ))}
                          </ul>
                          <div className="flex flex-wrap gap-2">
                            {exp.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-xs font-medium px-3 py-1 bg-blue-50 text-blue-700 rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ====== SKILLS ====== */}
      <motion.section
        id="skills"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="relative z-10 py-24 px-6"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-slate-900">
            Technical <span className="text-blue-600">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-blue-600 rounded mb-4" />
          <p className="text-slate-500 mb-12">Tools, platforms, and languages</p>

          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((group, idx) => (
              <motion.div
                key={idx}
                custom={idx}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-blue-200"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 bg-blue-50 rounded-xl text-blue-600">{group.icon}</div>
                  <h3 className="font-bold text-slate-900">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-sm font-medium px-3 py-1.5 bg-slate-50 text-slate-700 rounded-lg border border-slate-200 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ====== PROJECTS ====== */}
      <motion.section
        id="projects"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="relative z-10 py-24 px-6"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-slate-900">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-blue-600 rounded mb-12" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((proj, idx) => (
              <motion.div
                key={idx}
                custom={idx}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group hover:border-blue-200"
              >
                <div className="flex justify-between items-start mb-5">
                  <div className="p-3 bg-blue-50 rounded-xl text-blue-600 group-hover:bg-blue-100 transition-colors">
                    {proj.icon}
                  </div>
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-slate-400 hover:text-slate-700 transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {proj.title}
                </h3>
                <p className="text-sm text-slate-500 mb-5 leading-relaxed">{proj.desc}</p>

                <div className="flex flex-wrap gap-2">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-3 py-1 bg-slate-50 text-slate-600 rounded-full border border-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ====== CONTACT ====== */}
      <motion.section
        id="contact"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="relative z-10 py-24 px-6"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-slate-900">
            Get in <span className="text-blue-600">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-blue-600 rounded mb-4" />
          <p className="text-slate-500 mb-12">Open to opportunities</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: <Mail size={22} />, label: 'Email', value: 'kundan.k@rutgers.edu', action: () => setShowEmailModal(true) },
              { icon: <Phone size={22} />, label: 'Phone', value: 'On request', action: null },
              { icon: <Linkedin size={22} />, label: 'LinkedIn', value: 'kundankrd', action: null, href: 'https://www.linkedin.com/in/kundankrd' },
              { icon: <MapPin size={22} />, label: 'Location', value: 'United States', action: null },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                custom={idx}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all text-center cursor-pointer hover:border-blue-200"
                onClick={item.action || undefined}
              >
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="block">
                    <div className="inline-flex p-3 bg-blue-50 rounded-xl text-blue-600 mb-3">
                      {item.icon}
                    </div>
                    <p className="font-semibold text-slate-800 text-sm">{item.label}</p>
                    <p className="text-slate-500 text-sm mt-1">{item.value}</p>
                  </a>
                ) : (
                  <>
                    <div className="inline-flex p-3 bg-blue-50 rounded-xl text-blue-600 mb-3">
                      {item.icon}
                    </div>
                    <p className="font-semibold text-slate-800 text-sm">{item.label}</p>
                    <p className="text-slate-500 text-sm mt-1">{item.value}</p>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ====== FOOTER ====== */}
      <footer className="relative z-10 py-8 text-center border-t border-slate-200 bg-white/60 backdrop-blur-sm">
        <p className="text-slate-500 text-sm">
          Designed & Built by <span className="font-semibold text-slate-700">Kundan Kumar Reddy D</span>
        </p>
      </footer>

      {/* ====== EMAIL MODAL ====== */}
      <AnimatePresence>
        {showEmailModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4"
            onClick={() => setShowEmailModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-white p-8 rounded-2xl border border-slate-200 shadow-2xl max-w-md w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowEmailModal(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 transition-colors"
              >
                <X size={20} />
              </button>

              <h3 className="text-2xl font-bold mb-2 text-slate-900">Get in Touch</h3>
              <p className="text-slate-500 mb-6">Reach me at my university email address.</p>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-center justify-between gap-4 mb-6">
                <code className="text-blue-600 font-mono text-sm sm:text-base truncate">
                  kundan.k@rutgers.edu
                </code>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 hover:bg-slate-200 rounded-lg text-slate-500 hover:text-slate-700 transition-colors"
                  title="Copy to clipboard"
                >
                  {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                </button>
              </div>

              <div className="flex justify-end gap-3">
                <a
                  href="mailto:kundan.k@rutgers.edu"
                  className="px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition-colors text-sm"
                >
                  Send Email
                </a>
                <button
                  onClick={() => setShowEmailModal(false)}
                  className="px-5 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-slate-700 font-medium transition-colors text-sm"
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
