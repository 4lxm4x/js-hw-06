function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  boxesAmount: document.querySelector("input[type=number]"),
  btnCreate: document.querySelector("button[data-create]"),
  btnDestroy: document.querySelector("button[data-destroy]"),
  mainDiv: document.querySelector("div#boxes"),
};

refs.btnCreate.addEventListener("click", onCreateClick);
refs.btnDestroy.addEventListener("click", onDestroyClick);

function onCreateClick() {
  const amount = refs.boxesAmount.value;
  createBoxes(amount);
}

function onDestroyClick() {
  refs.mainDiv.innerHTML = "";
}

function createBoxes(amount) {
  let boxW = 30,
    boxH = 30;
  let boxes = "";
  for (let i = 0; i < amount; i++) {
    boxes =
      boxes +
      `<div  style= 'width: ${boxW + i * 10}px; height: ${
        boxH + i * 10
      }px; display: background-color: ${getRandomHexColor()}'></div>`;
  }
  refs.mainDiv.insertAdjacentHTML("afterbegin", boxes);
  console.log(boxes);
}
