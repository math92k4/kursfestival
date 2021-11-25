import { randomizeSelection } from "./js_modules/selection_randomizer.js";
// import { rotateOnScroll } from "./js_modules/rotateOnScroll.js";
import { toggleMenu } from "./js_modules/burgermenu.js";
import { cursor } from "./js_modules/cursor.js";
import { gitterAspectRatio } from "./js_modules/gitter_aspect";

window.addEventListener("DOMContentLoaded", init);

function init() {
  gitterAspectRatio();

  if (window.innerWidth > 600) {
    cursor();
  }

  randomizeSelection();
  toggleMenu();
  //   const fpCircles = document.querySelectorAll("#splash .circles span");
  //   fpCircles.forEach((circle) => {
  //     rotateOnScroll(circle);
  //   });
}
