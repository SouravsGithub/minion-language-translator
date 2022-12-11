const btn = document.querySelector("button");
const textInput = document.querySelector("#text-input");
const outputDiv = document.querySelector(".output");

btn.addEventListener("click", getTranslation);
const url = "https://api.funtranslations.com/translate/pirate.json";

function urlConstructor(text) {
  return url + "?" + "text=" + text;
}
function getTranslation() {
  const inputText = textInput.value;
  fetch(urlConstructor(inputText))
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      const translatedText = json.contents.translated;
      outputDiv.innerText = translatedText;
    })
    .catch((error) => {
      console.log("error occured: " + error);
      alert("something went wrong with the server! try after some time");
    });
}
