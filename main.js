// reference to the DOM elements
const button = document.querySelector("button");
const textInput = document.querySelector("#text-input");
const textOutput = document.querySelector(".output");

// event listener on the button to listen to click events and fire the translate function when it happens
button.addEventListener("click", translate);

// the function to do all the work starting from constructing the right url to fetch, getting the translated response from the server and then shwoing it in the output div
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
  const getTranslation = async () => {
    const response = await fetch(constructURL(inputText));
    if (response.status !== 200) {
      throw new Error("could not fetch the data from the server");
    }
    const data = await response.json();
    return data;
  };
  // showing the translated text if the promise is resolved or showing the error message if the promise is rejected
  getTranslation()
    .then((data) => (textOutput.innerText = data.contents.translated))
    .catch((error) => console.log("error occured : ", error));
}

// Without using async and await
/*
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
*/
