export function rotateOnScroll(elm) {
  let x = 0;
  let y = 0;

  window.addEventListener("scroll", () => {
    x = window.pageYOffset / 5;
    y = window.pageYOffset / 3;
  });

  let revicedX = 0;
  let revicedY = 0;
  const delay = elm.dataset.delay;
  console.log(delay);

  function calculateRotation() {
    requestAnimationFrame(calculateRotation);
    revicedX += (x - revicedX) / delay;
    revicedY += (y - revicedY) / delay;

    if (revicedX < 0.0001) {
      revicedX = 0;
    }
    if (revicedY < 0.0001) {
      revicedY = 0;
    }
    elm.style.setProperty("--x-value", revicedX + "deg");
    elm.style.setProperty("--y-value", revicedY + "deg");
  }

  calculateRotation();
}
