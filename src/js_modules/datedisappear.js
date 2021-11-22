export function dateDisappear() {
  const date = document.querySelector(".date");
  window.addEventListener("scroll", () => {
    const y = window.scrollY;
    date.style.setProperty("--y", 0.6 * y + "px");
    if (y >= 50) {
      date.classList.add("disappear");
      return;
    } else {
      date.classList.remove("disappear");
    }
  });
}
