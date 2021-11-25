export function setHrefUrlParams() {
  const allH = document.querySelectorAll("a");
  allH.forEach((elm) => {
    elm.addEventListener("click", addUrlParams);
  });
}

function addUrlParams(e) {
  e.preventDefault();
  const url = e.target.getAttribute("href");

  const urlParams = new URLSearchParams(window.location.search);
  const eco = urlParams.get("eco");
  setHref(url, eco);
}

function setHref(url, eco) {
  window.location.href = url + "?eco=" + eco;
}
