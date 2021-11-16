export function randomizeSelection() {
  const body = document.querySelector("body");

  body.style.setProperty("--selection", "#C1CE9F");
  document.querySelectorAll("li").forEach((elm) => {
    console.log("hej");
    elm.addEventListener("click", () => {
      const rnd = Math.floor(Math.random() * 3) + 1;
      if (rnd === 1) {
        body.style.setProperty("--selection", "#C1CE9F");
      } else if (rnd === 2) {
        body.style.setProperty("--selection", "#F1CDBD");
      } else {
        body.style.setProperty("--selection", "#B9A9D5");
      }
    });
  });
}
