import { moveElm } from "./js_modules/moveonmouse.js";
import { randomizeSelection } from "./js_modules/selection_randomizer.js";
import { rotateOnScroll } from "./js_modules/rotateOnScroll.js";
import { dateDisappear } from "./js_modules/datedisappear.js";
import { toggleMenu } from "./js_modules/burgermenu.js";
import { cursor } from "./js_modules/cursor.js";
import { gitterAspectRatio } from "./js_modules/gitter_aspect";
import { lazyload } from "./js_modules/lazyload";

window.addEventListener("DOMContentLoaded", init);

async function init() {
  gitterAspectRatio();

  lazyload();

  if (window.innerWidth > 600) {
    cursor();
  }

  moveElm();
  randomizeSelection();
  dateDisappear();
  toggleMenu();

  const fpCircles = document.querySelectorAll("#splash .circles span");
  fpCircles.forEach((circle) => {
    rotateOnScroll(circle);
  });
}
