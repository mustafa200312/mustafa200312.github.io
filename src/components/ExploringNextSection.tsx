import { useState } from 'react';
const topics = [
{name:'Computer Vision',verb:'Perceive.',text:'I’m exploring how intelligent systems interpret visual environments, connecting my experience with vision backbones and medical imaging to richer scene understanding.'},
{name:'Reinforcement Learning',verb:'Learn through interaction.',text:'I’m deepening my understanding of how agents learn from actions and feedback, improve their decisions, and adapt to changing environments.'},
{name:'World Models',verb:'Predict. Then plan.',text:'I’m interested in internal representations that let agents predict what comes next and plan their actions—connecting perception, learning, and decision-making.'}
];
export function ExploringNextSection(){
const [active,setActive]=useState(0);
return <section className="research-studio" id="research"><div><span className="studio-index">07 / FUTURE DIRECTION</span><h2>What I’m<br/>exploring next</h2><p>Learning to connect perception, interaction, and prediction.</p></div><div>
<div role="tablist" aria-label="Research interests" className="research-tabs">{topics.map((t,i)=><button key={t.name} id={'research-tab-'+i} role="tab" aria-selected={active===i} aria-controls={'research-panel-'+i} tabIndex={active===i?0:-1} onClick={()=>setActive(i)} onKeyDown={e=>{let n=i;if(e.key==='ArrowRight')n=(i+1)%3;else if(e.key==='ArrowLeft')n=(i+2)%3;else if(e.key==='Home')n=0;else if(e.key==='End')n=2;else return;e.preventDefault();setActive(n);document.getElementById('research-tab-'+n)?.focus();}}>{t.name}</button>)}</div>
{topics.map((t,i)=><div key={t.name} id={'research-panel-'+i} role="tabpanel" aria-labelledby={'research-tab-'+i} hidden={active!==i} tabIndex={0} className="research-panel"><span className="research-number">0{i+1}</span><h3>{t.verb}</h3><p>{t.text}</p><span className="research-note">Current learning direction</span></div>)}</div></section>;
}
