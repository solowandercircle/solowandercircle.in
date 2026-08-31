const menu=document.querySelector('.menu'),nav=document.querySelector('nav');menu.onclick=()=>nav.classList.toggle('open');document.querySelectorAll('nav a').forEach(a=>a.onclick=()=>nav.classList.remove('open'));
document.querySelector('#form').onsubmit=e=>{e.preventDefault();const f=new FormData(e.target);const text=`Hi SoloWanderCircle! I want to join the community.\n\nName: ${f.get('name')}\nWhatsApp: ${f.get('phone')}\nCity: ${f.get('city')}\nTraveller type: ${f.get('type')}\nInterests: ${f.get('interest')||'Not specified'}`;document.querySelector('#ok').style.display='block';/* Replace 919177890696 with your real WhatsApp number */window.open('https://wa.me/919177890696?text='+encodeURIComponent(text),'_blank')};

// Auto-scroll event list
const elist = document.querySelector('.event-list');
if(elist) {
  let sdir = 1;
  let paused = false;
  setInterval(() => {
    if(paused) return;
    if(elist.scrollLeft + elist.clientWidth >= elist.scrollWidth - 1) {
      sdir = -1;
    } else if(elist.scrollLeft <= 0) {
      sdir = 1;
    }
    elist.scrollLeft += sdir;
  }, 30);
  
  // Pause scrolling on interaction
  elist.addEventListener('mouseenter', () => paused = true);
  elist.addEventListener('mouseleave', () => paused = false);
  elist.addEventListener('touchstart', () => paused = true, {passive: true});
  elist.addEventListener('touchend', () => paused = false);
}
