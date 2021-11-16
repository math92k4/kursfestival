import { moveElm } from "./js_modules/moveonmouse.js";
import { randomizeSelection } from "./js_modules/selection_randomizer.js";

window.addEventListener("DOMContentLoaded", init);

function init() {
  moveElm();
  randomizeSelection();
}
