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

inView(".fotogalleryinview", ({ target }) => {
  animate(
    target.querySelectorAll("img"),
    { x: [-2000, 0] },
    { duration: 1, delay: stagger(1, { start: 0.25 }) }
  );
});

document
  .querySelectorAll(".parallaxcontainer_is")
  .forEach((parallaxcontainer) => {
    const elementderskalparallaxes2 =
      parallaxcontainer.querySelector(".her_er_teksten");
    scroll(animate(elementderskalparallaxes2, { y: [-200, 500] }), {
      target: elementderskalparallaxes2,
    });
  });

document.querySelectorAll(".parallaxcontainer").forEach((parallaxcontainer) => {
  const elementderskalparallaxes = parallaxcontainer.querySelector("p");
  scroll(animate(elementderskalparallaxes, { y: [50, 500] }), {
    target: elementderskalparallaxes,
  });
});



// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.addEventListener("click", topFunction);

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}