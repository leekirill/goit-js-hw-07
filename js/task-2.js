const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

for (let i = 0; i < ingredients.length; i += 1) {
  const liRef = document.createElement("li");
  liRef.textContent = ingredients[i];
  const ulRef = document.querySelector("ul#ingredients");
  ulRef.prepend(liRef);
}
