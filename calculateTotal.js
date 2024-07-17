const unitPrices = require("./prices");
const specialPrices = require("./specialPrice");
const { scanItems } = require("./scanItems");

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

module.exports = calculateTotal;
