export function cursor() {
  const circle = document.createElement("div");
  circle.classList.add("cursor");
  circle.innerHTML = `<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="95.56" height="95.54" viewBox="0 0 95.56 95.54"><path d="M47.63,0A47.38,47.38,0,0,1,95.56,47.3c.12,27-20.93,48.26-47.79,48.24A47.53,47.53,0,0,1,0,48,47.38,47.38,0,0,1,47.63,0Zm.23,4.66A42.77,42.77,0,0,0,4.67,47.3a43.11,43.11,0,1,0,86.22.54A42.77,42.77,0,0,0,47.86,4.66Z"/><path d="M27.5,59.11c12.58,14,28.76,14,40.41,0l2.88,1.56C68,68.46,59.09,75.94,48.26,76c-10.15.08-19.86-6-23.52-15.22Z"/><path d="M37,36.24a6.08,6.08,0,1,1-5.86-6.08A6,6,0,0,1,37,36.24Z"/><path d="M64.64,42.3a6.08,6.08,0,1,1,6.14-5.85A6.13,6.13,0,0,1,64.64,42.3Z"/></svg>`;
  document.querySelector("body").appendChild(circle);

  const cursor = document.querySelector(".cursor");

  let x = 0;
  let y = 0;
  let radius = cursor.offsetHeight / 2;

  document.addEventListener("mousemove", function (e) {
    x = e.clientX;
    y = e.clientY;
  });

  const delay = 15;
  let revisedX = 0;
  let revisedY = 0;

  function animateCursor() {
    requestAnimationFrame(animateCursor);
    radius = cursor.offsetHeight / 2;
    revisedX += (x - revisedX) / delay;
    revisedY += (y - revisedY) / delay;

    cursor.style.setProperty("--new-x", revisedX - radius + 50 + "px");
    cursor.style.setProperty("--new-y", revisedY - radius + 50 + "px");
  }

  animateCursor();

  const allATags = document.querySelectorAll("a, #menu_btn, input");

  allATags.forEach((a) => {
    a.addEventListener("mouseover", expandMouse);
    function expandMouse() {
      cursor.classList.add("expand");
    }
  });
  allATags.forEach((a) => {
    a.addEventListener("mouseout", expandMouse);
    function expandMouse() {
      cursor.classList.remove("expand");
    }
  });
}
