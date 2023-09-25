const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onInputBlur);
inputEl.addEventListener("focus", onInputFocus);

function onInputBlur() {
  console.log(inputEl.dataset.length);
  if (inputEl.value.length == inputEl.dataset.length) {
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.add("invalid");
  }
}

function onInputFocus() {
  if (inputEl.classList.value != "") {
    inputEl.classList.remove(inputEl.classList.value);
  }
  console.log(inputEl.classList.value);
}
