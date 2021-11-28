export function toggleMenu() {
  const allLi = document.querySelectorAll(".menu-top-menu-container li");
  let delay = 1200;
  allLi.forEach((li) => {
    li.style.setProperty("--delay", delay + "ms");
    delay += 100;
  });

  const menuBtn = document.querySelector("#menu_btn");
  menuBtn.addEventListener("click", () => {
    // Menu btn anim toggle
    if (menuBtn.classList.contains("closed") || menuBtn.classList == "") {
      menuBtn.classList.remove("closed");
      menuBtn.offsetHeight;
      menuBtn.classList.add("open");
      document.querySelector("body").style.overflowY = "hidden";
    } else if (menuBtn.classList.contains("open")) {
      menuBtn.classList.remove("open");
      menuBtn.offsetHeight;
      menuBtn.classList.add("closed");
      document.querySelector("body").style.overflowY = "initial";
    }

    document.querySelector(".menu_list").classList.toggle("open");
    document.querySelector(".header_clr").classList.toggle("open");
  });
}
