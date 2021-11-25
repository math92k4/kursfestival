export function toggleMenu() {
  const allLi = document.querySelectorAll(".menu-top-menu-container li");
  let delay = 1200;
  allLi.forEach((li) => {
    li.style.setProperty("--delay", delay + "ms");
    delay += 100;
  });

  const menuBtn = document.querySelector("#menu_btn");
  menuBtn.addEventListener("click", (e) => {
    e.target.classList.toggle("open");
    document.querySelector(".menu_list").classList.toggle("open");
    document.querySelector(".header_clr").classList.toggle("open");

    if (menuBtn.classList.contains("open")) {
      document.querySelector("body").style.overflowY = "hidden";
    } else {
      document.querySelector("body").style.overflowY = "initial";
    }
  });
}
