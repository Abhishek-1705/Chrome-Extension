const api = "https://api.quotable.io/random";

const quote = document.getElementById("quote");

getQuote();
function getQuote() {
  fetch(api)
    .then((res) => res.json())
    .then((data) => {
      quote.innerHTML = `"${data.content}"`;
    });
}