const btn = document.querySelector("button");
const textInput = document.querySelector("#text-input");
const outputDiv = document.querySelector(".output");

function clickEventHandler() {
  console.log(textInput.value);
  outputDiv.innerText = "ajajajajajaja " + textInput.value;
}
