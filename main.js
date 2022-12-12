const button = document.querySelector("button");
const textInput = document.querySelector("#text-input");
const textOutput = document.querySelector(".output");

button.addEventListener("click", translate);

function translate() {
  // taking the input
  const inputText = textInput.value;

  // processing
  // making the correct url
  function constructURL(text) {
    let url = "https://api.funtranslations.com/translate/pirate.json";
    return url + "?" + "text=" + text;
  }
  // getting the response
  fetch(constructURL(inputText))
    .then((response) => {
      return response.json();
    })
    .then((jsonFile) => {
      // output
      // showing the translated text in the output box
      textOutput.innerText = jsonFile.contents.translated;
    })
    .catch((error) => {
      // showing the error in the console
      console.log("error : ", error);
    });
}
