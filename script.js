// Smooth scroll for internal anchors
document.addEventListener('click', (e)=>{
  const a = e.target.closest('a[href^="#"]');
  if(a){
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth'}); }
  }
});