/* seçildiğinde yeşil border eklesin
başka bir kart seçildiğinde yeşil border bırakılsın
üzerine gelindiğinde indirim eklesin */

const cardsDOM = document.querySelectorAll(".cards");
const chooseButtonDOM = document.querySelectorAll(".choose-button");
const priceDOM = document.querySelectorAll(".price");
const priceAreaDOM = document.querySelectorAll(".price-area");

chooseButtonDOM.forEach((button) => {
  button.addEventListener("click", function () {
    cardsDOM.forEach((card) => {
      card.style.border = "none";
    });
    button.parentElement.parentElement.style.border = "4px solid green";
  });
});

priceDOM.forEach((price) => {
  price.parentElement.parentElement.parentElement.addEventListener(
    "mouseenter",

    function () {
      const currentPriceDOM = this.querySelector(".current-price");
      currentPriceDOM.style.textDecoration = "line-through";

      const discountDOM = document.createElement("span");
      discountDOM.innerHTML = "<br>140 TL/AY";
      discountDOM.className = "discount";
      price.appendChild(discountDOM);
    }
  );
  price.parentElement.parentElement.parentElement.addEventListener(
    "mouseleave",
    function () {
      const currentPriceDOM = this.querySelector(".current-price");
      currentPriceDOM.style.textDecoration = "none";

      const discountDOM = this.querySelector(".discount");
      price.removeChild(discountDOM);
    }
  );
});
