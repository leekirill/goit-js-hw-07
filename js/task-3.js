const images = [
  {
    src:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    src:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    src:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const imagesObj = images.forEach((img) => {
  const ulRef = document.querySelector("ul#gallery");
  const liRef = document.createElement("li");
  ulRef.prepend(liRef);
  const entries = Object.entries(img);
  for (const entry of entries) {
    const key = entry[0];
    const value = entry[1];
    liRef.insertAdjacentHTML(
      "afterbegin",
      `<img ${key}='${value}'width="500px" height="auto"> `
    );
  }
});

// const ulRef = document.querySelector("ul#gallery");
// const liRef = document.createElement("li");
// ulRef.prepend(liRef);

// liRef.insertAdjacentHTML("afterbegin", `<img ${images[0]}>`);

// const a = images.forEach((a) => {
//   console.log(a);
// });
