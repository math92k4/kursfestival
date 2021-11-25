import { moveElm } from "./js_modules/moveonmouse.js";
import { randomizeSelection } from "./js_modules/selection_randomizer.js";
import { rotateOnScroll } from "./js_modules/rotateOnScroll.js";
import { dateDisappear } from "./js_modules/datedisappear.js";
import { toggleMenu } from "./js_modules/burgermenu.js";
import { cursor } from "./js_modules/cursor.js";
import { gitterAspectRatio } from "./js_modules/gitter_aspect.js";
import { lazyload } from "./js_modules/lazyload.js";
import { setHrefUrlParams } from "./js_modules/set_href_url_params.js";
import { modePopUp } from "./js_modules/mode_pop_up.js";

window.addEventListener("DOMContentLoaded", init);

async function init() {
  modePopUp();
  setHrefUrlParams();
  gitterAspectRatio();
  toggleMenu();
  dateDisappear();

  const urlParams = new URLSearchParams(window.location.search);
  const eco = urlParams.get("eco");
  if (eco == 0) {
    lazyload();

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
