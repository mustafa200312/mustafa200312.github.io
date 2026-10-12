import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowDown, Github, Terminal } from 'lucide-react';
export const Hero: React.FC<{ onOpenTerminal?: () => void }> = ({ onOpenTerminal }) => (
<section className="studio-hero"><div className="studio-hero-grid"><div className="studio-intro">
<h1>I turn <span>data</span> into models and <em>intelligent systems.</em></h1>
<p>{PERSONAL_INFO.bio}</p><div className="studio-actions">
<a className="studio-primary" href="#work">View Selected Work <ArrowDown size={17}/></a>
<a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a>
</div></div><div className="hero-visual"><div className="hero-portrait"><img src="images/portrait-cutout.png" alt={`Mustafa Sultan, ${PERSONAL_INFO.title}`} width="1083" height="1453" fetchPriority="high"/></div></div></div><div className="studio-identity">
<div><strong>{PERSONAL_INFO.name}</strong><span>{PERSONAL_INFO.title} · Cairo, Egypt</span></div>
<a href={PERSONAL_INFO.resume} target="_blank" rel="noreferrer">Read résumé ↗</a>
{onOpenTerminal && <button onClick={onOpenTerminal}><Terminal size={16}/> Explore via terminal</button>}
</div></section>);
