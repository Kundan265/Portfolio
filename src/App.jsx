import { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Menu, X, Download, Pause, Play, Cpu, Database, CircuitBoard, Mail } from 'lucide-react';
import { experience, projects, skills } from './data';
import ProjectVisual from './ProjectVisual';
import SignalLab from './SignalLab';
function SignalField({
  paused
}) {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current,
      ctx = canvas.getContext('2d');
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    let width,
      height,
      frame,
      time = 0,
      isVisible = true,
      pointer = {
        x: -1000,
        y: -1000
      };
    function resize() {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = Math.min(devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    function move(e) {
      const r = canvas.getBoundingClientRect();
      pointer = {
        x: e.clientX - r.left,
        y: e.clientY - r.top
      };
    }
    function draw() {
      ctx.clearRect(0, 0, width, height);
      for (let lane = 0; lane < (width < 720 ? 18 : 30); lane++) {
        const points = [];
        for (let x = -20; x < width + 20; x += 8) {
          const ratio = x / width;
          let y = height * (.76 + lane * .008) + Math.sin(ratio * 7 + lane * .085 + time * .3) * height * .13 - Math.pow(ratio, 2) * height * .48;
          const dx = x - pointer.x,
            dy = y - pointer.y,
            distance = Math.hypot(dx, dy);
          if (distance < 170) y += dy / (distance || 1) * (170 - distance) * .32;
          points.push([x, y]);
        }
        ctx.beginPath();
        points.forEach(([x, y], i) => i ? ctx.lineTo(x, y) : ctx.moveTo(x, y));
        ctx.strokeStyle = `rgba(55,219,245,${.07 + lane % 4 * .035})`;
        ctx.lineWidth = lane % 5 === 0 ? 1.2 : .6;
        ctx.stroke();
        for (let dot = 0; dot < 6; dot++) {
          const i = Math.floor((dot / 6 + time * .035 + lane * .019) % 1 * points.length);
          const [x, y] = points[i];
          ctx.beginPath();
          ctx.arc(x, y, lane % 3 === 0 ? 2 : 1.1, 0, Math.PI * 2);
          ctx.shadowBlur = 12;
          ctx.shadowColor = '#52edff';
          ctx.fillStyle = lane % 4 === 0 ? '#e6ffff' : '#46d9ee';
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }
      if (!paused && !reduced && isVisible && !document.hidden) {
        time += .016;
        frame = requestAnimationFrame(draw);
      }
    }
    const redraw = () => {
      cancelAnimationFrame(frame);
      if (isVisible && !document.hidden) draw();
    };
    resize();
    draw();
    const observer = new ResizeObserver(() => {
      resize();
      redraw();
    });
    observer.observe(canvas);
    const visibility = new IntersectionObserver(entries => {
      isVisible = entries[0].isIntersecting;
      redraw();
    });
    visibility.observe(canvas);
    document.addEventListener('visibilitychange', redraw);
    window.addEventListener('pointermove', move, {
      passive: true
    });
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      visibility.disconnect();
      document.removeEventListener('visibilitychange', redraw);
      window.removeEventListener('pointermove', move);
    };
  }, [paused]);
  return <canvas ref={ref} className="signal-field" aria-hidden="true" />;
}
function Processor() {
  return <div className="processor-scene" aria-hidden="true"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="board">
    <svg viewBox="0 0 600 600" className="traces"><defs><linearGradient id="trace"><stop stopColor="#24778a" /><stop offset=".5" stopColor="#8bf7ff" /><stop offset="1" stopColor="#33949f" /></linearGradient></defs>
      {Array.from({
          length: 12
        }, (_, i) => {
          const n = 185 + i * 21;
          return <g key={i}><path d={`M ${n} 245 V ${150 - i % 3 * 18} L ${n - 65} ${85 - i % 3 * 18} V 25`} /><path d={`M ${n} 355 V ${440 + i % 3 * 18} L ${n + 45} ${485 + i % 3 * 18} V 575`} /><path d={`M 245 ${n} H ${150 - i % 3 * 18} L ${85 - i % 3 * 18} ${n + 55} H 25`} /><path d={`M 355 ${n} H ${440 + i % 3 * 18} L ${485 + i % 3 * 18} ${n - 55} H 575`} /><circle cx={n} cy="25" r="4" /><circle cx="575" cy={n - 55} r="4" /></g>;
        })}
    </svg><div className="chip-base"><div className="chip"><Cpu size={42} /><span>KUNDAN</span><small>SYSTEMS / ENGINEERING</small></div></div>
    <div className="component c1" /><div className="component c2" /><div className="component c3" /><div className="component c4" />
  </div><span className="scene-label label-top">HARDWARE × SOFTWARE</span><span className="scene-label label-bottom">FROM SIGNAL TO SYSTEM.</span></div>;
}
export default function App() {
  const [menu, setMenu] = useState(false),
    [paused, setPaused] = useState(false),
    [filter, setFilter] = useState('All');
  const nav = ['Work', 'Lab', 'Experience', 'About', 'Contact'];
  const visible = projects.filter(p => filter === 'All' || p.category === filter);
  const heroRef = useRef(null);
  useEffect(() => {
    const hero = heroRef.current;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches || matchMedia('(pointer: coarse)').matches) return;
    const move = e => {
      const r = hero.getBoundingClientRect();
      hero.style.setProperty('--pointer-x', `${(e.clientX - r.left) / r.width * 100}%`);
      hero.style.setProperty('--pointer-y', `${(e.clientY - r.top) / r.height * 100}%`);
      hero.style.setProperty('--tilt-x', `${((e.clientX - r.left) / r.width - .5) * 7}deg`);
      hero.style.setProperty('--tilt-y', `${((e.clientY - r.top) / r.height - .5) * -7}deg`);
    };
    const reset = () => {
      hero.style.setProperty('--tilt-x', '0deg');
      hero.style.setProperty('--tilt-y', '0deg');
    };
    hero.addEventListener('pointermove', move, {
      passive: true
    });
    hero.addEventListener('pointerleave', reset);
    return () => {
      hero.removeEventListener('pointermove', move);
      hero.removeEventListener('pointerleave', reset);
    };
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in-view');
        observer.unobserve(e.target);
      }
    }), {
      threshold: .08
    });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const close = e => {
      if (e.key === 'Escape') setMenu(false);
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);
  return <div className={paused ? 'app motion-paused' : 'app'}>
    <a className="skip-link" href="#main">Skip to content</a>
    <header><a className="brand" href="#home">K<span className="brand-dot">.</span><span className="brand-sub">KUNDAN / ENGINEER</span></a><nav aria-label="Main navigation" className={menu ? 'nav open' : 'nav'}>{nav.map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenu(false)}>{item}</a>)}<a className="nav-contact" href="mailto:kundan.k@rutgers.edu">Let’s talk</a></nav><button className="menu-toggle icon-button" aria-label={menu ? 'Close menu' : 'Open menu'} aria-expanded={menu} onClick={() => setMenu(!menu)}>{menu ? <X /> : <Menu />}</button></header>
    <main id="main"><section ref={heroRef} id="home" className="hero"><div className="grid-background" /><SignalField paused={paused} /><div className="hero-content"><div className="eyebrow"><span /> DATA. INTELLIGENCE. HARDWARE.</div><p className="intro">Hi, I’m Kundan Kumar Reddy.</p><h1>Intelligence.<br />From data<br /><span>to device.</span></h1><p className="hero-description">From production data systems to intelligent edge devices. I connect software, data, and hardware to build systems that work in the real world.</p><div className="hero-actions"><a className="button primary" href="#work">Explore my work</a><a className="button secondary" href={`${import.meta.env.BASE_URL}CV_K.pdf`} target="_blank" rel="noreferrer"><Download size={16} /> View résumé</a></div><div className="hero-social"><a href="https://github.com/Kundan265" aria-label="GitHub"><Github size={18} /></a><a href="https://www.linkedin.com/in/kundankrd" aria-label="LinkedIn"><Linkedin size={18} /></a><span>M.S. ECE · Rutgers University</span></div></div><Processor /><div className="hero-telemetry" aria-hidden="true"><span>ENGINEERING FOCUS</span><div><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div><p>SOFTWARE × HARDWARE</p></div><div className="hero-bottom"><span className="mono">BUILT AT THE INTERSECTION</span><a href="#work">Scroll to explore <span className="scroll-line" /></a><button onClick={() => setPaused(!paused)} className="motion-toggle" aria-pressed={paused}>{paused ? <Play size={13} /> : <Pause size={13} />} {paused ? 'Resume motion' : 'Pause motion'}</button></div></section>
    <div className="discipline-bar"><span><Database size={18} /> DATA ENGINEERING</span><i>+</i><span><Cpu size={18} /> EDGE INTELLIGENCE</span><i>+</i><span><CircuitBoard size={18} /> EMBEDDED SYSTEMS</span></div>
    <section id="work" className="section"><div className="section-heading reveal"><div><p className="eyebrow">SELECTED WORK</p><h2>Ideas into<br /><span>working systems.</span></h2></div><p>A few places where software meets the physical world, and data becomes something useful.</p></div><div className="filters" aria-label="Filter projects">{['All', 'Hardware', 'Data systems'].map(f => <button aria-pressed={filter === f} className={filter === f ? 'active' : ''} key={f} onClick={() => setFilter(f)}>{f}</button>)}</div><div className="project-grid">{visible.map(proj => <article className="project" key={proj.title}><div className={`project-art ${proj.title.includes('Robot') ? 'robot' : proj.title.includes('Warehouse') ? 'warehouse' : 'edge'}`}><div className="art-grid" /><ProjectVisual kind={proj.visual} /><span>{proj.tags[0].toUpperCase()} / SYSTEM DESIGN</span></div><div className="project-copy"><div className="tags">{proj.tags.map(t => <span key={t}>{t}</span>)}</div><h3>{proj.title}</h3><p>{proj.desc}</p><details className="project-details"><summary>Inside the system <span>+</span></summary><div><h4>Engineering focus</h4><p>{proj.focus}</p><h4>Architecture sketch</h4><ol>{proj.pipeline.map(stage => <li key={stage}>{stage}</li>)}</ol><p className="architecture-note">Conceptual view based on the project description.</p></div></details></div></article>)}</div></section>
    <SignalLab />
    <section id="experience" className="section experience"><div className="section-heading reveal"><div><p className="eyebrow">THE EXPERIENCE BEHIND THE WORK</p><h2>Built on<br /><span>real-world experience.</span></h2></div><p>Production data engineering, interdisciplinary research, and a foundation in electrical engineering.</p></div><div className="timeline">{experience.map(exp => <details className="experience-row reveal" key={exp.company}><summary><span className="period">{exp.period}</span><span className="role"><strong>{exp.role}</strong><span>{exp.company}</span></span><span className="expand">+</span></summary><div className="experience-detail"><p>{exp.desc}</p><ul>{exp.contributions.map(c => <li key={c}>{c}</li>)}</ul><div className="tags">{exp.tags.map(t => <span key={t}>{t}</span>)}</div></div></details>)}</div></section>
    <section id="about" className="section about"><div className="about-copy reveal"><p className="eyebrow">THE PERSON BEHIND THE SYSTEMS</p><h2>Curiosity, down<br />to the <span>circuit.</span></h2><p>I’m an engineer with more than three years of experience in production data systems in financial services, now pursuing an M.S. in Electrical and Computer Engineering at Rutgers.</p><p>My focus is moving intelligence closer to the physical world: embedded systems, computer vision, and efficient edge computing. I enjoy understanding the whole system—from how data moves to how hardware executes.</p><a className="text-link" href={`${import.meta.env.BASE_URL}CV_K.pdf`} target="_blank" rel="noreferrer">Read my résumé <Download size={16} /></a></div><div className="skill-stack reveal">{skills.map(s => <div className="skill-group" key={s.category}><div>{s.icon}<h3>{s.category}</h3></div><p>{s.items.join(' · ')}</p></div>)}</div></section>
    <section id="contact" className="section contact reveal"><p className="eyebrow">NEXT CONNECTION</p><h2>Let’s build<br />something <span>that matters.</span></h2><p>Have a challenging problem, a research idea, or an engineering opportunity? I’d love to hear about it.</p><a className="button primary" href="mailto:kundan.k@rutgers.edu"><Mail size={18} /> Get in touch</a><a className="email" href="mailto:kundan.k@rutgers.edu">kundan.k@rutgers.edu</a></section></main><footer><a className="brand" href="#home">K<span className="brand-dot">.</span></a><span>Designed with curiosity. Built by Kundan.</span><div><a href="https://github.com/Kundan265">GitHub</a><a href="https://www.linkedin.com/in/kundankrd">LinkedIn</a></div></footer>
  </div>;
}
