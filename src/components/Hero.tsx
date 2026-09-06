import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowDown, Github, Terminal } from 'lucide-react';
import { NeuralScene } from './NeuralScene';
export const Hero: React.FC<{ onOpenTerminal?: () => void }> = ({ onOpenTerminal }) => (
<section className="studio-hero"><div className="studio-hero-grid"><div className="studio-intro">
<h1>I build AI systems that <span>reason,</span> retrieve, and <em>act.</em></h1>
<p>{PERSONAL_INFO.bio}</p><div className="studio-actions">
<a className="studio-primary" href="#work">View Selected Work <ArrowDown size={17}/></a>
<a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a>
</div></div><div className="hero-visual"><NeuralScene/><div className="hero-portrait"><img src={PERSONAL_INFO.photo} alt="Mustafa Sultan, AI/ML engineer and data scientist" width="646" height="864" fetchPriority="high"/><span>{PERSONAL_INFO.name}</span></div></div></div><div className="studio-identity">
<div><strong>{PERSONAL_INFO.name}</strong><span>{PERSONAL_INFO.title} · Cairo, Egypt</span></div>
<a href={PERSONAL_INFO.resume} target="_blank" rel="noreferrer">Read résumé ↗</a>
{onOpenTerminal && <button onClick={onOpenTerminal}><Terminal size={16}/> Explore via terminal</button>}
</div></section>);
