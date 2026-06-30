const hero=document.getElementById("hero");
const openButton=document.getElementById("openButton");
const fade=document.getElementById("fadeScreen");
openButton.addEventListener("click",(event)=>{
  event.stopPropagation();
  hero.classList.add("opening");
  setTimeout(()=>fade.classList.add("active"),1150);
  setTimeout(()=>{window.location.href="ticket.html";},1850);
});