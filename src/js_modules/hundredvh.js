export function setHundredVh() {
  const vh = window.innerHeight;
  document.querySelector("body").style.setProperty("--vh", vh + "px");
}
