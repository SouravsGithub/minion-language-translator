// references to html elements
const btn = document.querySelector("button");
const textInput = document.querySelector("#text-input");
const outputDiv = document.querySelector(".output");

// event listener on the button to listen to click event and fire the getTranslation function
btn.addEventListener("click", getTranslation);
const url = "https://api.funtranslations.com/translate/pirate.json";

// function to construct the URL with the correct value
function urlConstructor(text) {
  return url + "?" + "text=" + text;
}
// function to get the translated text from the mock server using the api endpoint and show the output
function getTranslation() {
  // taking input from the div
  const inputText = textInput.value;

  // calling server for processing
  fetch(urlConstructor(inputText))
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      const translatedText = json.contents.translated;

      // showing the processed output in the output div
      outputDiv.innerText = translatedText;
    })
    .catch((error) => {
      console.log("error occured: " + error);
      alert("something went wrong with the server! try after some time");
    });
}
