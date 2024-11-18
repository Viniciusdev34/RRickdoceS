// script.js
const decreaseButton = document.getElementById("decrease");
const increaseButton = document.getElementById("increase");
const quantityDisplay = document.getElementById("quantity");
const menuIcon = document.querySelector(".menu-icon");
function toggleMenu(){
  let menu = document.querySelector(".navbar");
  if(menu.classList.contains('open')){
    menu.classList.remove("open")
  }else{
    menu.classList.add("open")
  }
}
menuIcon.addEventListener("click",toggleMenu)
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
