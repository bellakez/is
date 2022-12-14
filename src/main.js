import "./style.css";
/* Import af Motion One bibliotek */
import { animate, stagger, inView, scroll, timeline } from "motion";


const acceptCookie = document.querySelector("#accepter");
const denyCookie = document.querySelector("#afvis");
const cookieboks = document.querySelector("#cookieboks");

acceptCookie.addEventListener("click", fjernCookieBoks);
denyCookie.addEventListener("click", fjernCookieBoks);

function fjernCookieBoks() {
  cookieboks.classList.add("hidden");
  sessionStorage.setItem("fjerncookieboks", true);
  //koden nedenunder, gør at boksen aldrig kommer igen, men ved at fjerne kommer den igen ved reload i browser
  // }
  // if (sessionStorage.getItem("fjerncookieboks")) {;
  // cookieboks.classList.add("hidden");
}

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */

document.querySelector(".navbar").addEventListener("click", myFunction);

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

inView(".fotogalleryinview", ({ target }) => {
  animate(
    target.querySelectorAll("img"),
    { x: [-2000, 0] },
    { duration: 1, delay: stagger(1, { start: 0.25 }) }
  );
});
