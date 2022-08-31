function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const color = document.querySelector("span.color");
const btn = document.querySelector("button.change-color");

const changeColor = (event) => {
  color.textContent = getRandomHexColor();
  body.style.backgroundColor = color.textContent;
};

btn.addEventListener("click", changeColor);
