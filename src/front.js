import { moveElm } from "./js_modules/moveonmouse.js";
import { randomizeSelection } from "./js_modules/selection_randomizer.js";
import { rotateOnScroll } from "./js_modules/rotateOnScroll.js";
import { dateDisappear } from "./js_modules/datedisappear.js";
import { toggleMenu } from "./js_modules/burgermenu.js";
import { cursor } from "./js_modules/cursor.js";
import { gitterAspectRatio } from "./js_modules/gitter_aspect.js";
import { loadImgs } from "./js_modules/loadImgs.js";
import { getUrlParam, showModePopUp, addParamsToHrefClick } from "./js_modules/modeSelection.js";

window.addEventListener("DOMContentLoaded", init);

async function init() {
  const eco = getUrlParam("eco");

  if (eco == null) {
    showModePopUp();
  } else {
    addParamsToHrefClick();
    gitterAspectRatio();
    toggleMenu();
    dateDisappear();

    if (eco == 0) {
      loadImgs();

      if (window.innerWidth > 600) {
        cursor();
      }
      moveElm();
      randomizeSelection();
      const fpCircles = document.querySelectorAll("#splash .circles span");
      fpCircles.forEach((circle) => {
        rotateOnScroll(circle);
      });
    } else {
      document.querySelector("body").classList.add("eco");
    }
  }
}
