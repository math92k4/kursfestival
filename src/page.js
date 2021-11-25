import { randomizeSelection } from "./js_modules/selection_randomizer.js";
import { toggleMenu } from "./js_modules/burgermenu.js";
import { cursor } from "./js_modules/cursor.js";
import { gitterAspectRatio } from "./js_modules/gitter_aspect";
import { lazyload } from "./js_modules/lazyload.js";
import { setHrefUrlParams } from "./js_modules/set_href_url_params.js";
import { modePopUp } from "./js_modules/mode_pop_up.js";

window.addEventListener("DOMContentLoaded", init);

function init() {
  modePopUp();
  setHrefUrlParams();
  gitterAspectRatio();
  toggleMenu();

  const urlParams = new URLSearchParams(window.location.search);
  const eco = urlParams.get("eco");

  if (eco == 0) {
    if (window.innerWidth > 600) {
      cursor();
    }
    lazyload();
    randomizeSelection();
  } else {
    document.querySelector("body").classList.add("eco");
  }
}
