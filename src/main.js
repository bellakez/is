import "./style.css";
/* Import af Motion One bibliotek */
import { animate, stagger, inView, scroll, timeline } from "motion";

/* _________________________________burger menu til mobil__________________________________________ */
window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");
  document
    .querySelector("#menuknap_mobil")
    .addEventListener("click", toggleMenu);
}

function toggleMenu() {
  console.log("toggleMenu");
  document.querySelector("#menu").classList.toggle("hidden");

  let erSkjult = document.querySelector("#menu").classList.contains("hidden");

  if (erSkjult == true) {
    document.querySelector("menuknap_mobil").textContent = "☰";
  } else {
    document.querySelector("menuknap_mobil").textContent = "X";
  }
}

