import { useState } from 'react';
const stages = [{
  name: 'Capture',
  label: 'At the boundary',
  detail: 'A camera frame begins as raw data. Its resolution and arrival rate set the bandwidth and memory budget for everything downstream.',
  constraint: 'Input rate × frame size = incoming bandwidth',
  path: 'Camera / sensor'
}, {
  name: 'Compute',
  label: 'Where intelligence runs',
  detail: 'Preprocessing and inference compete for compute and memory. Moving work to the edge reduces network dependence, but creates a tighter resource budget.',
  constraint: 'Latency must fit inside the application’s deadline',
  path: 'Preprocess / inference'
}, {
  name: 'Connect',
  label: 'Across the system',
  detail: 'Useful results move into storage or an application. Buffering and backpressure matter when a producer runs faster than its consumer.',
  constraint: 'A sustained rate mismatch creates an expanding queue',
  path: 'Results / storage'
}];
export default function SignalLab() {
  const [active, setActive] = useState(0);
  return <section id="lab" className="section signal-lab"><div className="section-heading reveal"><div><p className="eyebrow">INTERACTIVE SYSTEM SKETCH</p><h2>Follow the <span>signal.</span></h2></div><p>My interests connect at the system level. Explore the decisions behind an illustrative edge vision pipeline.</p></div><div className="lab-console"><div className="lab-toolbar"><span>EDGE VISION / CONCEPT EXPLORER</span><span>SELECT A STAGE</span></div><div className="lab-stages" role="tablist" aria-label="Edge vision pipeline stages">{stages.map((s, i) => <button key={s.name} id={`stage-${i}`} role="tab" aria-selected={active === i} aria-controls="lab-panel" tabIndex={active === i ? 0 : -1} onClick={() => setActive(i)} onKeyDown={e => {
          let n = active;
          if (e.key === 'ArrowRight') n = (active + 1) % 3;else if (e.key === 'ArrowLeft') n = (active + 2) % 3;else if (e.key === 'Home') n = 0;else if (e.key === 'End') n = 2;else return;
          e.preventDefault();
          setActive(n);
          document.getElementById(`stage-${n}`).focus();
        }}><span className="stage-symbol">{i === 0 ? '◉' : i === 1 ? '▦' : '⌁'}</span><strong>{s.name}</strong><span>{s.path}</span></button>)}</div><div id="lab-panel" role="tabpanel" aria-labelledby={`stage-${active}`} className="lab-panel" tabIndex="0"><div><p className="eyebrow">{stages[active].name.toUpperCase()} / DESIGN CONSIDERATION</p><h3>{stages[active].label}</h3><p>{stages[active].detail}</p></div><div className="lab-constraint"><span>THE CONSTRAINT</span><p>{stages[active].constraint}</p><div className="waveform" aria-hidden="true">{Array.from({
              length: 35
            }, (_, i) => <i key={i} style={{
              height: `${12 + Math.sin(i * .7 + active) * 9 + Math.cos(i * .3) * 8}px`
            }} />)}</div></div></div></div></section>;
}
