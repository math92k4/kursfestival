const headers = {
  "Content-Type": "application/json",
  "x-apikey": "619634edfc71545b0f5e090f",
  "cache-control": "no-cache",
};

export function post(data, url) {
  const postData = JSON.stringify(data);
  fetch(url, {
    method: "post",
    headers: headers,
    body: postData,
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}
