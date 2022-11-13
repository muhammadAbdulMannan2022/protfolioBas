let doc = document.querySelector(".navbar");
let navLink = document.querySelectorAll(".a");
let barger = document.querySelector(".bargar");
let hireMeBtn = document.querySelector(".hireBtn");
hireMeBtn.addEventListener("click", () => {
  window.open("https://www.fiverr.com/a_m_soft", "_blank");
});
barger.addEventListener("click", (e) => {
  let beg = doc.querySelector(".fa-solid");
  beg.classList.toggle("fa-xmark");
  let manu = document.querySelector(".menu");
  manu.classList.toggle("show-nav");
});
window.addEventListener("scroll", (e) => {
  if (scrollY > 20) {
    doc.classList.add("navbar-stky");
    navLink.forEach((a) => {
      a.classList.add("aColer");
      a.classList.remove("a");
    });
  } else {
    doc.classList.remove("navbar-stky");
    navLink.forEach((a) => {
      a.classList.remove("aColer");
      a.classList.add("a");
    });
  }
});
// type

var typed = new Typed(".typed", {
  strings: ["Developer", "Designer"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});
