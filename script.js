const button=document.getElementById('openEnvelope');
const fade=document.getElementById('fadeScreen');
button.addEventListener('click',()=>{
  button.classList.add('opening');
  setTimeout(()=>fade.classList.add('active'),700);
  setTimeout(()=>{window.location.href='ticket.html'},1200);
});