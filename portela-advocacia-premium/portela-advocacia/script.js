const header=document.getElementById('header');
const menuBtn=document.getElementById('menuBtn');
const nav=document.getElementById('nav');

window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>40),{passive:true});
menuBtn?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting) entry.target.classList.add('visible')});
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const cursor=document.querySelector('.cursor');
if(cursor && window.matchMedia('(pointer:fine)').matches){
  document.addEventListener('mousemove',e=>{
    cursor.style.transform=`translate(${e.clientX}px,${e.clientY}px)`;
  });
}
