import "./style.css";
/* Import af Motion One bibliotek */
import { animate, stagger, inView, scroll, timeline } from "motion";



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