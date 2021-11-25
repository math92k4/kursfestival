export function modePopUp() {
  const urlParams = new URLSearchParams(window.location.search);
  const eco = urlParams.get("eco");
  if (eco == null) {
    document.querySelector(".mode_pop_up").classList.add("show");
    document.querySelector(".eco_btn").addEventListener("click", function () {
      setHrefParam(1);
    });
    document.querySelector(".normal_btn").addEventListener("click", function () {
      setHrefParam(0);
    });
  }
}

function setHrefParam(param) {
  const href = window.location.href;
  window.location.href = href + "?eco=" + param;
}
