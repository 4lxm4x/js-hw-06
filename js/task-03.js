const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// const createImgEl = function ({ url, alt }) {
//   const listEl = document.createElement("li");
//   listEl.insertAdjacentHTML("beforeend", `<img src=${url} alt=${alt}></img>`);
//   listEl.classList.add("list-item");

//   return listEl;
// };

// const galleryList = images.map((image) => {
//   return createImgEl(image);
// });

// console.log(galleryList);

// const galleryEl = document.querySelector(".gallery");
// galleryEl.append(...galleryList);

const galleryList = images.reduce((acc, { url, alt }) => {
  return (
    acc +
    `<li class="list-item"><img class = "image-item" src="${url} alt="${alt}"></li>`
  );
}, "");

const galleryEl = document.querySelector(".gallery");
galleryEl.insertAdjacentHTML("beforeend", galleryList);
