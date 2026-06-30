const hero = document.getElementById("hero");
const openSeal = document.getElementById("openSeal");
const fade = document.getElementById("fadeScreen");

openSeal.addEventListener("click", (event) => {
  event.stopPropagation();
  hero.classList.add("opening");
  setTimeout(() => fade.classList.add("active"), 1150);
  setTimeout(() => { window.location.href = "ticket.html"; }, 1850);
});
