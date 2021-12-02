import { randomizeSelection } from "./js_modules/selection_randomizer.js";
import { toggleMenu } from "./js_modules/burgermenu.js";
import { cursor } from "./js_modules/cursor.js";
import { gitterAspectRatio } from "./js_modules/gitter_aspect";
import { loadImgs } from "./js_modules/loadImgs.js";
import { setHundredVh } from "./js_modules/hundredvh.js";
import { getUrlParam, showModePopUp, addParamsToHrefClick } from "./js_modules/modeSelection.js";

window.addEventListener("DOMContentLoaded", init);

function init() {
  const eco = getUrlParam("eco");
  setHundredVh();
  window.addEventListener("resize", setHundredVh);

  if (eco == null) {
    showModePopUp();
  } else {
    addParamsToHrefClick();
    gitterAspectRatio();
    toggleMenu();
    document.querySelector(".loading").classList.remove("open");

    if (eco == 0) {
      if (window.innerWidth > 600) {
        cursor();
      }
      loadImgs();
      randomizeSelection();
    } else {
      document.querySelector("body").classList.add("eco");
    }
  }
}
