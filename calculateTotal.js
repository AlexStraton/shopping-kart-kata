const fs = require("fs/promises");
const { scanItems } = require("./scanItems");

// function calculateTotal(items) {
// return fs.readFile("./Data/products.json", "utf8").then((data) => {
//   const productsArray = JSON.parse(data);
//   const unitPrices = {};
//   const specialPrices = {};
//   productsArray.forEach((product) => {
//     const productCode = Object.keys(product)[0];
//     unitPrices[productCode] = product[productCode].unit_price;
//     specialPrices[productCode] = product[productCode].special_price;
//   });
//   return fs.readFile("./Data/cart.json", "utf8").then((cartData) => {
//     const itemsInCart = JSON.parse(cartData);
//     console.log(unitPrices, specialPrices, itemsInCart);
//     return itemsInCart;
//   });

function calculateTotal(items) {
  let itemsInCart = scanItems(items);
  let total = 0;

  for (const item in itemsInCart) {
    const quantity = itemsInCart[item];
    if (item === "A") {
      const numOfOfers = Math.floor(quantity / 3);
      total += unitPrices[item] * quantity - numOfOfers * 10;
    } else if (item === "B") {
      const numOfOfers = Math.floor(quantity / 2);
      total += unitPrices[item] * quantity - numOfOfers * 10;
    } else {
      total += unitPrices[item] * quantity;
    }
  }
  console.log(total);
  return total;
}
calculateTotal();
module.exports = calculateTotal;
