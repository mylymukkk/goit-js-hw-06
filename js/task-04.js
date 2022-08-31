const value = document.querySelector("#value");
let counterValue = 0;
const btnDecrease = document.querySelector('button[data-action="decrement"]');
const btnIncrease = document.querySelector('button[data-action="increment"]');

btnDecrease.addEventListener("click", () => {
  counterValue -= 1;
  value.textContent = counterValue;
});

btnIncrease.addEventListener("click", () => {
  counterValue += 1;
  value.textContent = counterValue;
});
