import { randomizeSelection } from "./js_modules/selection_randomizer.js";
// import { rotateOnScroll } from "./js_modules/rotateOnScroll.js";
import { toggleMenu } from "./js_modules/burgermenu.js";

window.addEventListener("DOMContentLoaded", init);

function init() {
  randomizeSelection();
  toggleMenu();
  //   const fpCircles = document.querySelectorAll("#splash .circles span");
  //   fpCircles.forEach((circle) => {
  //     rotateOnScroll(circle);
  //   });
}
