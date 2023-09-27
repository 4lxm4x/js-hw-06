function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  btn: document.querySelector(".change-color"),
  currentColor: document.querySelector(".color"),
  bodyEl: document.querySelector("body"),
  styleEl: document.querySelector("style"),
};

refs.btn.addEventListener("click", onBtnClick);

function onBtnClick() {
  const chosedColor = getRandomHexColor();
  //refs.styleEl.insertAdjacentElement('beforeend',`.body-styles{backg}`)
  refs.bodyEl.style.backgroundColor = chosedColor;
  refs.currentColor.textContent = chosedColor;
}
