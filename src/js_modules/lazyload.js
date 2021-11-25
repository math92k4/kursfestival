export function lazyload() {
  const pictures = document.querySelectorAll("picture");
  pictures.forEach((elm) => {
    const webpUrl = elm.dataset.image;
    const fallbackUrl = elm.dataset.fallback;
    elm.querySelector("source").srcset = webpUrl;
    elm.querySelector("img").src = fallbackUrl;
  });
}
