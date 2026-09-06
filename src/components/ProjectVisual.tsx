import { UltrasoundVisual } from './UltrasoundVisual';
export function ProjectVisual({type}:{type:string}){
 if(type==='ultrasound') return <UltrasoundVisual/>;
 return <figure className={'project-figure figure-'+type}>
 <figcaption>{type==='finance'?'Concept illustration':'Architecture illustration'} <span>↗</span></figcaption>
 {type==='finance'?<><div className="finance-phone-scene" role="img" aria-label="Stylized FGaiB phone with abstract finance graphics; not an actual app screen">
 <div className="finance-phone-depth" aria-hidden="true"/>
 <div className="finance-phone" aria-hidden="true"><div className="phone-camera"/><div className="phone-brand">FGaiB<span>Personal finance</span></div>
 <div className="phone-chart"><svg viewBox="0 0 160 80"><path d="M0 65L30 48L55 57L85 25L110 36L140 12L160 20" fill="none" stroke="currentColor" strokeWidth="2.5"/><path d="M0 65L30 48L55 57L85 25L110 36L140 12L160 20V80H0Z" fill="currentColor" opacity=".08"/></svg></div>
 <div className="phone-bars"><i/><i/><i/></div><div className="phone-message"><span>✦</span><div>AI-assisted<br/>finance</div></div><div className="phone-home"/></div>
 </div><p className="visual-footer">A clearer view of your finances.</p></>:
 type==='dialect'?<><div className="dialect-flow"><span lang="ar" dir="rtl" className="arabic-sample">كيف نفهم اللغة؟</span><span className="flow-line"/><strong>MARBERTv2</strong><span className="flow-line"/><div className="dialect-outputs" aria-label="Seven output groups">{Array.from({length:7},(_,i)=><span key={i}>{String(i+1).padStart(2,'0')}</span>)}</div></div><p className="visual-footer">Text → Tokens → Representation → Seven groups</p></>:
 <><div className="pipeline-illustration">{(type==='slides'?['PowerPoint','Slide context','Study conversation']:type==='code'?['Sequential code','Dependency analysis','Parallel execution']:['Arabic sources','Hybrid retrieval','Cited response']).map((s,i)=><div key={s}><span>0{i+1}</span><strong>{s}</strong></div>)}</div><p className="visual-footer">Conceptual workflow · Not a live model output</p></>}
 </figure>;
}
