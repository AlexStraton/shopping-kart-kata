const unitPrices = require("./prices");
//const specialPrices = require("./specialPrice");

let itemsInCart = {};

function addToCart(code, quantity) {
  if (!itemsInCart[code]) {
    itemsInCart[code] = quantity;
  } else {
    itemsInCart[code] += quantity;
  }
}

function scanItem(...codes) {
  for (let i = 0; i < codes.length; i++) {
    const code = codes[i];
    if (unitPrices[code]) {
      console.log(unitPrices[code]);
      addToCart(code, unitPrices[code]);
    } else {
      console.log(`Item code ${code} not found.`);
    }
  }
}
scanItem("A", "B", "A");

console.log(itemsInCart);
