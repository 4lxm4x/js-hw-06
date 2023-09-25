const rangeBar = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

rangeBar.addEventListener("input", onBarMove);

function onBarMove() {
  console.dir(textEl);
  textEl.style.fontSize = `${rangeBar.value}px`;
}
