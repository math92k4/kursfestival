export function toggleMenu() {
  const menuBtn = document.querySelector("#menu_btn");
  menuBtn.addEventListener("click", (e) => {
    e.target.classList.toggle("open");
    document.querySelector(".menu-top-menu-container").classList.toggle("open");
  });
}
