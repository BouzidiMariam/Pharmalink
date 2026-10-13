const P=[['index.html','Home'],['solution.html','Solution'],['ecosystem.html','Ecosystem'],['events.html','Events'],['team.html','Team & Contact']],cur=document.body.dataset.p;
document.body.insertAdjacentHTML('afterbegin',`<header><a class="brand" href="index.html"><img src="assets/logo.png" alt="Pharma Link"></a><button id="mb" aria-label="Menu">☰</button><nav id="nv">${P.map(p=>`<a href="${p[0]}" class="${p[0]==cur?'on':''}">${p[1]}</a>`).join('')}</nav></header>`);
document.body.insertAdjacentHTML('beforeend',`<footer><img src="assets/logo.png" alt=""><br>Pharma Link — Connecting pharmaceutical expertise, trusted knowledge, and intelligent technology.<br>© 2026 Pharma Link · Tunisian startup · Startup Act label</footer>`);
document.getElementById('mb').onclick=()=>document.getElementById('nv').classList.toggle('open');
// Media slots: show image/video if the file exists, otherwise a labeled placeholder
document.querySelectorAll('.media').forEach(m=>{const l=m.dataset.label||'Media',s=m.dataset.img||m.dataset.video||m.dataset.embed||'',ph=()=>{m.classList.add('empty');m.innerHTML=`<span>📷 ${l}<br><small>${s||'(set data-embed URL)'}</small></span>`};
if(m.dataset.img){const i=new Image();i.alt=l;i.onerror=ph;i.src=s;m.append(i)}
else if(m.dataset.video){const v=document.createElement('video');v.controls=true;v.preload='metadata';v.onerror=ph;v.src=s;m.append(v)}
else if(s.startsWith('http')){m.innerHTML=`<iframe src="${s}" allowfullscreen loading="lazy"></iframe>`}else ph()});
const io=new IntersectionObserver(e=>e.forEach(x=>x.isIntersecting&&x.target.classList.add('in')),{threshold:.1});
document.querySelectorAll('.card,section h2').forEach(e=>{e.classList.add('rv');io.observe(e)});
