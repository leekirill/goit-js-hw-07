const liItemAllRef = document.querySelectorAll("li.item");
const liItemCounter = () => `В списке ${liItemAllRef.length} категории.`;
console.log(liItemCounter());

// const makeListOperation = function () {
//   const liItemEl = document.querySelector("li.item");

//   const makeLiItemCategories = () =>
//     `Категория: ${liItemEl.firstElementChild.textContent}`;
//   console.log(makeLiItemCategories());

//   const ulRef = liItemEl.querySelector("ul");

//   const liItemNumber = ulRef.children.length;
//   const makeListNumber = () => `Количество элементов: ${liItemNumber}`;

//   return makeListNumber();
// };

// console.log(makeListOperation());

const liItem = document.querySelectorAll("li.item");
// const liItemTitle = document.querySelector("li h2");
// const liItemUl = liItem.querySelectorAll("li");

// console.log(`Категория: ${liItemTitle.textContent}`);
// console.log(`Количество элементов: ${liItemUl.length}`);

liItem.forEach((element) => {
  console.log(
    `Категория: ${element.childNodes[1].textContent}
Количество элементов: ${element.childNodes[3].children.length}`
  );
});
