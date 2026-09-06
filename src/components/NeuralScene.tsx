import { useEffect, useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';

export function NeuralScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    const canvas = canvasRef.current, ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;
    const media = matchMedia('(prefers-reduced-motion: reduce), (max-width: 767px)');
    let frame = 0, angle = .3, width = 500, height = 500, visible = true;
    let pointer = { x: 0, y: 0 };
    const points = Array.from({ length: 125 }, (_, i) => {
      const y = 1-i/124*2, r = Math.sqrt(1-y*y), a=i*Math.PI*(3-Math.sqrt(5));
      return {x:Math.cos(a)*r,y,z:Math.sin(a)*r};
    });
    const edges: [number,number][] = [];
    points.forEach((a,i)=>points.forEach((b,j)=>{
      if(j>i && Math.hypot(a.x-b.x,a.y-b.y,a.z-b.z)<.39)edges.push([i,j]);
    }));
    function draw() {
      if(!ctx)return;
      ctx.clearRect(0,0,width,height);
      const radius=Math.min(width,height)*.35;
      const projected=points.map(p=>{
        const a=angle+pointer.x,x=p.x*Math.cos(a)+p.z*Math.sin(a),z=-p.x*Math.sin(a)+p.z*Math.cos(a);
        const b=-.2+pointer.y,y=p.y*Math.cos(b)-z*Math.sin(b),depth=p.y*Math.sin(b)+z*Math.cos(b),scale=3.5/(3.5-depth);
        return {x:width/2+x*radius*scale,y:height/2+y*radius*scale,depth,scale};
      });
      ctx.lineWidth=.7;
      edges.forEach(([i,j])=>{
        const a=projected[i],b=projected[j];
        ctx.strokeStyle='rgba(141,182,164,'+(.10+(a.depth+b.depth+2)/4*.32)+')';
        ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke();
      });
      projected.forEach((p,i)=>{
        ctx.globalAlpha=.3+(p.depth+1)*.35;ctx.fillStyle=i%4===0?'#c8f43d':'#63a9cf';
        ctx.shadowColor=ctx.fillStyle;ctx.shadowBlur=p.depth>.3?10:0;
        ctx.beginPath();ctx.arc(p.x,p.y,(i%9===0?3:1.6)*p.scale,0,Math.PI*2);ctx.fill();
      });
      ctx.shadowBlur=0;ctx.globalAlpha=1;ctx.strokeStyle='rgba(99,169,207,.2)';ctx.lineWidth=.8;
      ctx.beginPath();ctx.ellipse(width/2,height/2,radius*1.35,radius*.37,-.4,0,Math.PI*2);ctx.stroke();
    }
    function tick(){angle+=.0018;draw();frame=requestAnimationFrame(tick);}
    function sync(){cancelAnimationFrame(frame);draw();if(!paused&&!media.matches&&visible&&!document.hidden)frame=requestAnimationFrame(tick);}
    const resize=new ResizeObserver(()=>{
      const rect=canvas.getBoundingClientRect();width=rect.width;height=rect.height;
      const dpr=Math.min(devicePixelRatio,2);canvas.width=width*dpr;canvas.height=height*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);sync();
    });
    const observer=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;sync();});
    const move=(e:PointerEvent)=>{if(media.matches||paused)return;const r=canvas.getBoundingClientRect();pointer={x:(e.clientX-r.left)/r.width-.5,y:((e.clientY-r.top)/r.height-.5)*.5};};
    const leave=()=>{pointer={x:0,y:0};};
    resize.observe(canvas);observer.observe(canvas);media.addEventListener('change',sync);document.addEventListener('visibilitychange',sync);canvas.addEventListener('pointermove',move);canvas.addEventListener('pointerleave',leave);
    return ()=>{cancelAnimationFrame(frame);resize.disconnect();observer.disconnect();media.removeEventListener('change',sync);document.removeEventListener('visibilitychange',sync);canvas.removeEventListener('pointermove',move);canvas.removeEventListener('pointerleave',leave);};
  },[paused]);
  return <div className="neural-scene"><canvas ref={canvasRef} role="img" aria-label="Three-dimensional neural network illustration"/><div className="scene-caption"><span>Connected ideas. Intelligent systems.</span><button onClick={()=>setPaused(!paused)} aria-label={paused?'Play animation':'Pause animation'} aria-pressed={paused}>{paused?<Play size={14}/>:<Pause size={14}/>}</button></div></div>;
}
