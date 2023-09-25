const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsAll = [];

ingredients.forEach(function (ingredient) {
  //console.log(ingredient);
  let ingredientsEl = document.createElement("li");
  ingredientsEl.classList.add("item");
  ingredientsEl.textContent = `${ingredient}`;
  ingredientsAll.push(ingredientsEl);
  //console.log(ingredientsEl);
});

document.querySelector("#ingredients").append(...ingredientsAll);
console.log(...ingredientsAll);
console.log(ingredientsAll);
