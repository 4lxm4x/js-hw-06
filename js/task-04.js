const incrementBtn = document.querySelector(`button[data-action="increment"]`);
const decrementBtn = document.querySelector(`button[data-action="decrement"]`);
console.log(incrementBtn);
console.log(decrementBtn);

const valueEl = document.querySelector("#value");
console.log(valueEl.textContent);
let i = 0;
function incrementValue() {
  i++;
  valueEl.textContent = i;
  console.log(i);
}

function decrementValue() {
  i--;
  return (valueEl.textContent = i);
}

decrementBtn.addEventListener("click", decrementValue);
incrementBtn.addEventListener("click", incrementValue);
