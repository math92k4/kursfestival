export function getUrlParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

export function showModePopUp() {
  const currentUrl = window.location.href;
  document.querySelector(".mode_pop_up").classList.add("show");
  document.querySelector(".eco_btn").addEventListener("click", function () {
    setUrlParam(currentUrl, 1);
  });
  document.querySelector(".normal_btn").addEventListener("click", function () {
    setUrlParam(currentUrl, 0);
  });
}

function setUrlParam(url, param) {
  window.location.href = url + "?eco=" + param;
}

export function addParamsToHrefClick() {
  const param = getUrlParam("eco");
  const allH = document.querySelectorAll("a");
  allH.forEach((elm) => {
    elm.addEventListener("click", function (e) {
      e.preventDefault();
      const hrefUrl = this.getAttribute("href");
      setUrlParam(hrefUrl, param);
      window.location.href = hrefUrl + "?eco=" + param;
    });
  });
}
