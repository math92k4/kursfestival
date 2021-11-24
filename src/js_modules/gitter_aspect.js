export function gitterAspectRatio() {
  setAspectRatio();
  window.addEventListener("resize", setAspectRatio);
}

function setAspectRatio() {
  const gitters = document.querySelectorAll(".gitter");
  gitters.forEach((elm) => {
    const width = elm.offsetWidth;
    elm.style.height = width + "px";
  });
}
