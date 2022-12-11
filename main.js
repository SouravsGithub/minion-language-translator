const btn = document.querySelector("button");
const textInput = document.querySelector("#text-input");
const outputDiv = document.querySelector(".output");

btn.addEventListener("click", getTranslation);
const url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function urlConstructor(text) {
  return url + "?" + "text=" + text;
}
function getTranslation() {
  fetch(urlConstructor(textInput.value))
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      outputDiv.innerText = json.contents.translated;
    })
    .catch((error) => {
      console.log("error occured: " + error);
    });
}
