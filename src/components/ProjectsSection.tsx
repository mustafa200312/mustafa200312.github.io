import { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { TiltedCard } from './TiltedCard';
import { ProjectVisual } from './ProjectVisual';
import { ArrowUpRight } from 'lucide-react';
const filters=[['all','All Work'],['agent','Multi-Agent'],['rag','RAG & NLP'],['vision','Computer Vision'],['systems','Parallel Systems']];
export function ProjectsSection(){
 const [filter,setFilter]=useState('all');
 const projects=PROJECTS.filter(p=>filter==='all'||p.category===filter||(filter==='rag'&&p.category==='nlp'));
 return <section id="work" className="studio-work"><div className="studio-section-heading"><div><span className="studio-index">01 / SELECTED WORK</span><h2>Ideas, built into systems.</h2></div><p>From learning representations to orchestrating agents.<br/>A selection of collaborative and individual work.</p></div>
 <div className="studio-filters" aria-label="Filter projects">{filters.map(([id,label])=><button key={id} aria-pressed={filter===id} onClick={()=>setFilter(id)}>{label}</button>)}</div>
 <div className="studio-projects">{projects.map(p=><article key={p.id} className="studio-project"><div className="studio-project-copy"><span className="studio-index">{p.number} / {p.id==='slidetutor'?'INDIVIDUAL PROJECT':p.id==='fgaib'?'GRADUATION GROUP PROJECT':'GROUP PROJECT'}</span><h3>{p.title}<span>{p.highlightTitle}</span></h3><p>{p.description}</p>{p.metrics&&<ul className="studio-metrics">{p.metrics.map(m=><li key={m}>{m}</li>)}</ul>}<ul className="studio-tags">{p.tags.map(t=><li key={t}>{t}</li>)}</ul>{p.link&&<a className="studio-repo" href={p.link} target="_blank" rel="noreferrer">Explore repository <ArrowUpRight size={16}/></a>}</div><TiltedCard maxTilt={4}><ProjectVisual type={p.visualType||'rag'}/></TiltedCard></article>)}</div></section>;
}
