const hero = document.getElementById("hero");
const seal = document.getElementById("openSeal");
const fade = document.getElementById("fadeScreen");

seal.addEventListener("click", (event) => {
  event.stopPropagation();
  hero.classList.add("opening");
  setTimeout(() => fade.classList.add("active"), 1550);
  setTimeout(() => { window.location.href = "ticket.html"; }, 2350);
});
