import { moveElm } from "./js_modules/moveonmouse.js";
import { randomizeSelection } from "./js_modules/selection_randomizer.js";
// import { toggleMenu } from "./js_modules/burgermenu.js";

window.addEventListener("DOMContentLoaded", init);

function init() {
  moveElm();
  randomizeSelection();
  // toggleMenu();
}
