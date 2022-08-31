const text = document.querySelector("#text");
const value = document.querySelector("#font-size-control");

value.addEventListener("change", (event) => {
  text.style.fontSize = `${event.currentTarget.value}px`;
});
