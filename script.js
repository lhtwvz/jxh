const openSeal=document.getElementById("openSeal");
const fade=document.getElementById("fadeScreen");
openSeal.addEventListener("click",()=>{
  openSeal.classList.add("opening");
  setTimeout(()=>fade.classList.add("active"),1150);
  setTimeout(()=>{window.location.href="ticket.html"},1900);
});