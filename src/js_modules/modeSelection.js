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
  const allH = document.querySelectorAll('a:not(a[target="_blank"])');
  allH.forEach((elm) => {
    console.log(elm);
    elm.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(".loading").classList.add("open");
      const hrefUrl = this.getAttribute("href");
      setTimeout(() => {
        setUrlParam(hrefUrl, param);
      }, 1500);
    });
  });
}
