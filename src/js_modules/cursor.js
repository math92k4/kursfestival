export function cursor() {
  const circle = document.createElement("div");
  circle.classList.add("cursor");
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
