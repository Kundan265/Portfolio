import { experience, featured, projects } from './data';

const resumeUrl = `${import.meta.env.BASE_URL}CV_K.pdf`;
const githubUrl = 'https://github.com/Kundan265';
const linkedinUrl = 'https://www.linkedin.com/in/kundankrd';
const email = 'kundan.k@rutgers.edu';

function CircuitHero() {
  return (
    <section className="circuit-hero" aria-label="Thinker and Engineer">
      <div className="circuit-hero-role circuit-hero-thinker">
        <h2>Thinker</h2>
        <p>Bridging the horizons, theoretical with deeper thoughts of curiosity.</p>
      </div>
      <img
        className="circuit-hero-art"
        src={`${import.meta.env.BASE_URL}circuit-portrait.webp`}
        alt="Two adjoining circuit boards, one with exposed copper traces and one with mounted electronics."
        width="800"
        height="1000"
        fetchPriority="high"
      />
      <div className="circuit-hero-role circuit-hero-engineer">
        <h2>Engineer</h2>
        <p>Tinkering with the possibilities of building things and learning through iterations.</p>
      </div>
    </section>
  );
}

function ExternalLink({ href, children }) {
  return (
    <a className="external-link" href={href}>
      {children}
    </a>
  );
}

function RobotNotes() {
  return (
    <article className="case-study">
      <div className="case-intro">
        <p className="case-label">Featured project <span>·</span> {featured.period}</p>
        <h3>{featured.title}</h3>
        <p className="case-summary">{featured.summary}</p>
        <div className="case-notes">
          {featured.notes.map(({ title, detail }) => (
            <details key={title}>
              <summary>{title}<span className="disclosure-mark" aria-hidden="true" /></summary>
              <p>{detail}</p>
            </details>
          ))}
        </div>
      </div>
      <figure className="system-flow">
        <figcaption>From camera to servo</figcaption>
        <ol>
          <li><strong>Camera</strong><span>Capture live frames</span></li>
          <li><strong>YOLO + NCNN</strong><span>Detect people in the frame</span></li>
          <li><strong>Serial link</strong><span>Send detection output to motion control</span></li>
          <li><strong>Gait controller</strong><span>Use inverse kinematics to drive 12 servos</span></li>
        </ol>
      </figure>
    </article>
  );
}

export default function App() {
  return (
    <div className="page" id="top">
      <a className="skip-link" href="#content">Skip to content</a>
      <header className="site-header">
        <a className="site-name" href="#top">Kundan Kumar Reddy</a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#bench">Workbench</a>
          <a href="#experience">Experience</a>
          <a href={resumeUrl}>Résumé</a>
        </nav>
      </header>

      <main id="content" tabIndex={-1}>
        <CircuitHero />
        <section className="intro" aria-labelledby="intro-title">
          <div className="intro-main">
            <h1 id="intro-title">I build embedded systems and <em>study how they behave.</em></h1>
            <p>
              I’m an electrical and computer engineering graduate student at Rutgers.
              Building a Raspberry Pi robot got me interested in how sensing, computation,
              and motion fit together. With professional challenge of building data pipelines at Bank of America,
              alongside production requirements for near-constant uptime and adapting to new technologies.
            </p>
            <div className="intro-links">
              <a className="work-link" href="#work">View my work</a>
              <a href={`mailto:${email}`}>Email me</a>
            </div>
          </div>
          <aside className="current-work" aria-labelledby="current-work-title">
            <h2 id="current-work-title">On the workbench</h2>
            <p>
              I’m exploring where a vision model should run when memory and time are limited.
            </p>
            <a href="#bench">Read the experiment plan</a>
          </aside>
        </section>

        <section className="content-section" id="work" aria-labelledby="work-title">
          <h2 className="section-title section-entry" id="work-title">Selected work</h2>
          <div className="section-entry"><RobotNotes /></div>
          <div className="project-list">
            {projects.map(({ title, category, summary, url }) => (
              <article className="project-row" key={title}>
                <p className="project-topic">{category}</p>
                <div>
                  <h3>{title}</h3>
                  <p>{summary}</p>
                </div>
                <ExternalLink href={url}>View repository<span className="sr-only"> for {title}</span></ExternalLink>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section bench-section" id="bench" aria-labelledby="bench-title">
          <div className="bench-intro section-entry">
            <h2 className="section-title" id="bench-title">Workbench</h2>
            <h3>Where should inference run?</h3>
            <p>
              I’m designing an edge AI platform to compare CPU, GPU, and FPGA targets.
              I want to understand what changes when the same workload moves between them.
            </p>
          </div>
          <div className="bench-plan section-entry">
            <h3>What I plan to measure</h3>
            <dl>
              <div><dt>Latency</dt><dd>How long does one frame take?</dd></div>
              <div><dt>Throughput</dt><dd>How many frames can the system process in a second?</dd></div>
              <div><dt>Memory</dt><dd>How much memory does inference use on each target?</dd></div>
            </dl>
          </div>
        </section>

        <section className="content-section" id="experience" aria-labelledby="experience-title">
          <h2 className="section-title section-entry" id="experience-title">Experience</h2>
          <div className="role-list">
            {experience.map(({ role, organization, period, detail }) => (
              <details className="role" key={organization + role}>
                <summary>
                  <span className="role-title">{role}<span>{organization}</span></span>
                  <span className="role-period">{period}</span>
                  <span className="disclosure-mark" aria-hidden="true" />
                </summary>
                <p>{detail}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer" id="contact">
        <div className="footer-contact">
          <h2>Let’s talk Engineering or Anything 
            curious in the surrounding.✌🏼</h2>
          <a className="email" href={`mailto:${email}`}>{email}</a>
        </div>
        <div className="footer-links">
          <ExternalLink href={githubUrl}>GitHub</ExternalLink>
          <ExternalLink href={linkedinUrl}>LinkedIn</ExternalLink>
          <a href={resumeUrl}>Résumé</a>
        </div>
      </footer>
    </div>
  );
}
