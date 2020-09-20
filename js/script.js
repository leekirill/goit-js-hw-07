const liItemAllRef = document.querySelectorAll("li.item");
const liItemCounter = () => `В списке ${liItemAllRef.length} категории.`;
console.log(liItemCounter());

const makeListOperation = function () {
  const liItemEl = document.querySelector("li.item");

  const makeLiItemCategories = () =>
    `Категория: ${liItemEl.firstElementChild.textContent}`;
  console.log(makeLiItemCategories());

  const ulRef = liItemEl.querySelector("ul");

  const liItemNumber = ulRef.children.length;
  const makeListNumber = () => `Количество элементов: ${liItemNumber}`;

  return makeListNumber();
};

console.log(makeListOperation());
