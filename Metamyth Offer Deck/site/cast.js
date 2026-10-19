(function(){
const band=document.querySelector('.cast-band'),track=band&&band.querySelector('.cast-track');if(!track)return;
if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
const BASE=0.45;let x=0,v=0,half=0,last=performance.now(),drag=null;
const measure=()=>{half=track.scrollWidth/2};measure();addEventListener('resize',measure);addEventListener('load',measure);
function tick(t){const dt=Math.min(50,t-last)/16.67;last=t;
 if(!drag){x-= (BASE+v)*dt;v*=Math.pow(.94,dt);if(Math.abs(v)<.01)v=0}
 if(half){while(x<=-half)x+=half;while(x>0)x-=half}
 track.style.transform='translate3d('+x+'px,0,0)';requestAnimationFrame(tick)}
requestAnimationFrame(tick);
band.addEventListener('wheel',e=>{const d=Math.abs(e.deltaX)>Math.abs(e.deltaY)?e.deltaX:e.deltaY;v=Math.max(-40,Math.min(40,v+d*0.06));if(Math.abs(e.deltaX)>Math.abs(e.deltaY))e.preventDefault()},{passive:false});
band.addEventListener('pointerdown',e=>{drag={x0:e.clientX,p:x,t:performance.now(),lx:e.clientX};band.classList.add('drag');band.setPointerCapture(e.pointerId)});
band.addEventListener('pointermove',e=>{if(!drag)return;const now=performance.now();v=-(e.clientX-drag.lx)/Math.max(1,(now-drag.t)/16.67);drag.lx=e.clientX;drag.t=now;x=drag.p+(e.clientX-drag.x0)});
const end=()=>{if(!drag)return;drag=null;band.classList.remove('drag');v=Math.max(-40,Math.min(40,v))};
band.addEventListener('pointerup',end);band.addEventListener('pointercancel',end);
})();
