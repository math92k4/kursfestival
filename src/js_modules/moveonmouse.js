export function moveElm() {
  const brush = document.querySelector("#splash img");
  const brushWidth = 0;
  const originalX = brush.getBoundingClientRect().x + brushWidth;
  const originalY = brush.getBoundingClientRect().y + brushWidth;

  let mouseY = 0;
  let mouseX = 0;

  window.addEventListener("mousemove", (e) => {
    mouseX = (e.clientX - originalX) / 25;
    mouseY = (e.clientY - originalY) / 25;
  });
  const delay = 100;
  let revisedX = 0;
  let revisedY = 0;

  function animateBrush() {
    requestAnimationFrame(animateBrush);

    revisedX += (mouseX - revisedX) / delay;
    revisedY += (mouseY - revisedY) / delay;

    brush.style.setProperty("--new-x", revisedX + "px");
    brush.style.setProperty("--new-y", revisedY + "px");
  }

  animateBrush();
}
