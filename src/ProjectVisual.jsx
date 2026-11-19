const nodes = {
  edge: [[65, 95, 'CAPTURE'], [200, 65, 'EDGE'], [330, 110, 'STORE']],
  warehouse: [[60, 70, 'INGEST'], [190, 110, 'MODEL'], [325, 65, 'QUERY']]
};
export default function ProjectVisual({
  kind
}) {
  if (kind === 'robot') return <svg className="system-visual" viewBox="0 0 400 240" role="img" aria-label="Illustration of a quadruped robot and its joint geometry">
    <defs><linearGradient id="robot-body" x2="1" y2="1"><stop stopColor="#254a60" /><stop offset="1" stopColor="#102534" /></linearGradient></defs>
    <ellipse cx="203" cy="196" rx="139" ry="22" className="visual-shadow" />
    <g className="robot-body"><path d="M 132 80 L 240 60 L 290 99 L 178 125 Z" fill="url(#robot-body)" /><path d="M 132 80 V 109 L 178 152 L 290 125 V 99 L 178 125 Z" fill="#132c3a" />
    <path d="M 152 101 L 108 130 L 83 191 M 180 131 L 145 166 L 156 205 M 259 92 L 309 119 L 331 178 M 267 129 L 296 158 L 283 204" fill="none" stroke="#5b8b9d" strokeWidth="9" strokeLinejoin="round" />
    {[[152, 101], [108, 130], [180, 131], [145, 166], [259, 92], [309, 119], [267, 129], [296, 158]].map(([x, y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r="6" fill="#0c1c27" stroke="#79efec" strokeWidth="2" />)}
    <path d="M 166 84 L 239 71 L 263 89 L 190 106 Z" fill="#142f3d" stroke="#6ad9d6" strokeWidth="1" /><circle cx="160" cy="105" r="3" fill="#7affef" /><circle cx="168" cy="113" r="3" fill="#7affef" /></g>
    <g className="visual-annotation"><path d="M 107 130 H 55 V 105 M 296 157 H 359 V 135" /><text x="25" y="97">JOINT SPACE</text><text x="310" y="128">IK / GAIT</text><path d="M 118 135 A 30 30 0 0 1 100 163" strokeDasharray="3 3" /></g>
  </svg>;
  return <svg className="system-visual" viewBox="0 0 400 240" role="img" aria-label={kind === 'edge' ? 'Data flow illustration from capture through edge processing to storage' : 'Data warehouse illustration from ingestion through modeling to queries'}>
    <defs><linearGradient id={`flow-${kind}`}><stop stopColor="#31586d" /><stop offset=".5" stopColor="#80fff0" /><stop offset="1" stopColor="#31586d" /></linearGradient></defs>
    <path className="visual-flow" d={kind === 'edge' ? 'M 65 115 V 157 H 200 V 85 M 200 85 V 179 H 330 V 130' : 'M 60 90 V 160 H 190 V 130 M 190 130 V 185 H 325 V 85'} stroke={`url(#flow-${kind})`} />
    {nodes[kind].map(([x, y, label], i) => <g key={label} className="visual-module" style={{
      '--module-delay': `${i * .3}s`
    }}><path d={`M ${x - 28} ${y - 12} L ${x} ${y - 28} L ${x + 28} ${y - 12} L ${x} ${y + 5} Z`} fill="#264e60" /><path d={`M ${x - 28} ${y - 12} V ${y + 17} L ${x} ${y + 34} L ${x + 28} ${y + 17} V ${y - 12} L ${x} ${y + 5} Z`} fill="#102938" stroke="#63c8cc" /><path d={`M ${x} ${y + 5} V ${y + 34}`} stroke="#376b7c" /><text x={x} y={y + 57} textAnchor="middle">{label}</text></g>)}
    {[0, 1, 2, 3, 4, 5, 6].map(i => <g key={i} opacity={.15 + i * .08}><path d={`M 30 ${200 + i * 5} H 370`} stroke="#3d6979" strokeWidth=".5" /></g>)}
  </svg>;
}
