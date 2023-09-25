const categories = document.querySelectorAll(".item");
console.log(`Number of Categories ${categories.length}`);

categories.forEach((category) => {
  console.log(category.querySelector("h2").textContent);
  const numberOfItems = category.children.length;
  console.log(`Elements: ${numberOfItems}`);
});
