const input = document.querySelector("input");

const isCorrect = (event) => {
  input.classList.add("invalid", "valid");
  event.currentTarget.value.length == input.dataset.length
    ? input.classList.replace("invalid", "valid")
    : input.classList.replace("valid", "invalid");
};

input.addEventListener("blur", isCorrect);
