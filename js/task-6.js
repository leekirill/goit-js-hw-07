const input = document.getElementById("validation-input");

input.addEventListener("blur", (form) => {
  const validLenght = input.getAttribute("data-length");
  if (
    form.currentTarget.value.length > validLenght ||
    form.currentTarget.value.length < validLenght
  ) {
    form.currentTarget.classList.add("invalid");
  } else {
    form.currentTarget.classList.replace("invalid", "valid");
  }

  if (form.currentTarget.value.length === 0) {
    form.currentTarget.classList.remove("invalid", "valid");
  }
});
