// script.js
const decreaseButton = document.getElementById("decrease");
const increaseButton = document.getElementById("increase");
const quantityDisplay = document.getElementById("quantity");

let quantity = 1;

decreaseButton.addEventListener("click", () => {
  if (quantity > 1) {
    quantity--;
    quantityDisplay.textContent = quantity;
  }
});

increaseButton.addEventListener("click", () => {
  quantity++;
  quantityDisplay.textContent = quantity;
});
