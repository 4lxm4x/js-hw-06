const refs = {
  nameInput: document.querySelector("#name-input"),
  nameOutput: document.querySelector("#name-output"),
};

console.log(refs.nameInput);
console.log(refs.nameOutput);

refs.nameInput.addEventListener("input", onNameInput);

function onNameInput(event) {
  if (refs.nameInput.value === "") {
    return (refs.nameOutput.textContent = "Anonymous");
  }
  refs.nameOutput.textContent = refs.nameInput.value;

  //console.log(refs.nameInput.value);
}
