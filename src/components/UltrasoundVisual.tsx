import { useId, useState } from 'react';
import './UltrasoundVisual.css';

const STAGES = [
  { title: 'Overview', detail: '' },
  { title: 'Two ultrasound views', detail: 'Longitudinal and transverse grayscale scans are resized to 224 × 224, repeated across three channels, and normalized for DINOv3.' },
  { title: 'Shared frozen encoder', detail: 'The same DINOv3 encoder processes each view separately, producing a CLS token and spatial patch features. Its weights are frozen.' },
  { title: 'Per-view segmentation', detail: 'A shared head predicts background, vessel, and plaque. Coarse predictions are upsampled and refined with guidance from the original scan.' },
  { title: 'Plaque-aware fusion', detail: 'Plaque probabilities weight the spatial features. After pooling and projection, these features join the projected CLS token for each view. Both view embeddings are then concatenated.' },
  { title: 'Binary classification', detail: 'The fused representation passes through a classification head to produce one case-level binary logit. This illustration does not show an actual prediction.' },
];

function Scan({ x, y, transverse, texture }: { x: number; y: number; transverse?: boolean; texture: string }) {
  return <g transform={`translate(${x} ${y})`}>
    <g transform="matrix(1 .16 -.52 .65 -47 10)">
      <rect width="108" height="83" fill="#11181b" />
      <rect width="108" height="83" filter={`url(#${texture})`} opacity=".62" />
      {transverse ? <><ellipse cx="55" cy="43" rx="29" ry="24" fill="#14191b" stroke="#adb8bc" strokeWidth="6" opacity=".8"/><ellipse cx="55" cy="43" rx="20" ry="16" fill="#080d10"/></> : <><path d="M0 31 Q30 14 58 28 T108 25 M0 60 Q35 44 60 54 T108 49" fill="none" stroke="#b6bec0" strokeWidth="6" opacity=".6"/><path d="M0 44 Q30 28 58 40 T108 38" fill="none" stroke="#070d0f" strokeWidth="16"/></>}
      <rect width="108" height="83" fill="none" stroke="#c0c9cc" strokeWidth="1.2" />
    </g>
  </g>;
}

function Encoder({ x, y, gradient }: { x: number; y: number; gradient: string }) {
  return <g transform={`translate(${x} ${y})`}>
    {[72, 54, 36, 18, 0].map(offset => <g key={offset} transform={`translate(0 ${offset})`}>
      <path d="M-48 0 L0 22 L48 0 L48 11 L0 34 L-48 11Z" fill="#285679" stroke="#71aed7" strokeWidth=".7" />
      <path d="M-48 0 L0 -24 L48 0 L0 23Z" fill={`url(#${gradient})`} stroke="#86bee3" strokeWidth=".9" />
      <path d="M0 23V33" stroke="#78b6df" strokeWidth=".7" />
    </g>)}
    <text y="133" className="uv-label">DINOv3</text>
    <text y="152" className="uv-small">Shared · Frozen</text>
  </g>;
}

function Masks({ x, y }: { x: number; y: number }) {
  return <g transform={`translate(${x} ${y})`}>
    {[-42, 27].map((offset, i) => <g key={offset} transform={`translate(${offset} 0) rotate(6)`}>
      <rect x="-25" y="-25" width="53" height="64" fill="#0b141a" stroke="#63a9cf" strokeWidth="1.5" />
      <path d={i ? 'M-12 -10 C10 -30 28 -4 9 4 S0 28 -14 25 S-20 6 -12 -10Z' : 'M-15 -13 C-6 -28 8 -5 15 -4 S21 11 7 15 S-12 34 -18 18 S-5 2 -15 -13Z'} fill="#63a9cf12" stroke="#94c7e6" strokeWidth="1.2" />
      <path d={i ? 'M-9 11 Q4 4 8 11 Q2 16 -4 22Z' : 'M0 9 Q10 3 13 11 Q9 19 2 19Z'} fill="#c8f43d" opacity=".8" />
    </g>)}
    <text y="67" className="uv-label">Segmentation</text>
    <text y="85" className="uv-small">Background · Vessel · Plaque</text>
  </g>;
}

function Fusion({ x, y }: { x: number; y: number }) {
  return <g transform={`translate(${x} ${y})`}>
    {[-72, 9].map(offset => <g key={offset} transform={`translate(${offset} 0)`}>
      <rect width="63" height="25" rx="2" fill="#101e28" stroke="#63a9cf" />
      {[0, 1, 2, 3].map(i => <rect key={i} x={6 + i * 13} y="6" width="10" height="13" fill="#79aed3" opacity={.6 + i * .1} />)}
    </g>)}
    <text y="50" className="uv-label">Plaque-aware fusion</text>
    <text y="69" className="uv-small">CLS + weighted features</text>
    <text y="86" className="uv-small">Both views</text>
  </g>;
}

function Classification({ x, y }: { x: number; y: number }) {
  return <g transform={`translate(${x} ${y})`} className="uv-classification">
    <rect x="-19" y="-8" width="38" height="38" rx="4" fill="#c8f43d08" stroke="currentColor" strokeWidth="1.5" />
    <circle cy="11" r="7" fill="currentColor" />
    <text y="52" className="uv-small">Binary</text><text y="69" className="uv-small">classification</text>
  </g>;
}

function ModelDiagram({ mobile, stage }: { mobile?: boolean; stage: number }) {
  const id = useId().replace(/:/g, '');
  const active = (index: number) => `uv-stage${stage === index ? ' is-active' : ''}`;
  const paths = mobile
    ? ['M86 93V109H170V135', 'M254 93V109H170V135', 'M170 330V338H108V342 M170 338H232V342', 'M170 466V479H108V485 M170 479H232V485', 'M222 201H306V475H251V494', 'M170 594V606']
    : ['M124 92L180 137 M124 244L180 203', 'M285 143H314V55H352', 'M285 143H314V239H337', 'M423 148V179H407V214', 'M487 239H518'];
  return <svg className={mobile ? 'uv-diagram uv-mobile' : 'uv-diagram uv-desktop'} viewBox={mobile ? '0 0 340 706' : '0 0 600 345'} role="img" aria-labelledby={`${id}-title ${id}-desc`}>
    <title id={`${id}-title`}>Two views. One model.</title>
    <desc id={`${id}-desc`}>Longitudinal and transverse scans use a shared frozen DINOv3 encoder. Spatial features produce three-class segmentation per view. Plaque probabilities weight the features, which join CLS tokens from both views for binary classification. Schematic, not a medical prediction.</desc>
    <defs>
      <linearGradient id={`${id}-layer`} x2="1" y2="1"><stop stopColor="#6caada"/><stop offset="1" stopColor="#3978a9"/></linearGradient>
      <filter id={`${id}-scan`} x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency=".08 .6" numOctaves="3" seed="12"/><feColorMatrix type="saturate" values="0"/><feComponentTransfer><feFuncR type="gamma" amplitude="1" exponent="1.7"/><feFuncG type="gamma" amplitude="1" exponent="1.7"/><feFuncB type="gamma" amplitude="1" exponent="1.7"/></feComponentTransfer></filter>
      <marker id={`${id}-arrow`} viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0L8 4L0 8Z" fill="#bac8ce"/></marker>
    </defs>
    <g className="uv-connectors" markerEnd={`url(#${id}-arrow)`}>{paths.map((d, i) => <path key={i} d={d} />)}</g>
    <g className={active(1)}>
      <Scan x={mobile ? 91 : 86} y={mobile ? 20 : 40} texture={`${id}-scan`} />
      <text x={mobile ? 86 : 82} y={mobile ? 18 : 30} className="uv-input-label">Longitudinal</text>
      <Scan x={mobile ? 259 : 86} y={mobile ? 20 : 206} transverse texture={`${id}-scan`} />
      <text x={mobile ? 254 : 82} y={mobile ? 18 : 304} className="uv-input-label">Transverse</text>
    </g>
    <g className={active(2)}><Encoder x={mobile ? 170 : 233} y={mobile ? 166 : 117} gradient={`${id}-layer`} /></g>
    <g className={active(3)}><Masks x={mobile ? 177 : 423} y={mobile ? 369 : 47} /></g>
    <g className={active(4)}><Fusion x={mobile ? 170 : 411} y={mobile ? 493 : 227} /></g>
    <g className={active(5)}><Classification x={mobile ? 170 : 551} y={mobile ? 619 : 227} /></g>
  </svg>;
}

export function UltrasoundVisual() {
  const [stage, setStage] = useState(0);
  const detailId = useId();
  return <figure className="project-figure figure-ultrasound">
    <h4 className="uv-heading">Two views. One model.</h4>
    <div className="uv-canvas"><ModelDiagram stage={stage} /><ModelDiagram mobile stage={stage} /></div>
    <div className="uv-footer"><p>Notebook architecture · Illustrative, not a prediction</p><button type="button" aria-controls={detailId} onClick={() => setStage(current => (current + 1) % STAGES.length)}>{stage === 0 ? 'Explore stages' : stage === 5 ? 'Back to overview' : 'Next stage'}</button></div>
    <div id={detailId} className="uv-detail" aria-live="polite" aria-atomic="true" hidden={stage === 0}>
      <strong>{stage} / 5 · {STAGES[stage].title}</strong><p>{STAGES[stage].detail}</p>
    </div>
  </figure>;
}
