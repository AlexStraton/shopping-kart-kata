const unitPrices = require("./prices");
const specialPrices = require("./specialPrice");
const { scanItems } = require("./scanItems");

function calculateTotal(items) {
  let itemsInCart = scanItems(items);
  let total = 0;

  for (const item in itemsInCart) {
    const quantity = itemsInCart[item];
    if (
      (item === "A" && quantity % 3 === 0) ||
      (item === "B" && quantity % 2 === 0)
    ) {
      total += unitPrices[item] * quantity - 10;
    } else {
      total += unitPrices[item] * quantity;
    }
  }
  console.log(total);
  return total;

  //access unitprice key using scanItems loop,
  //within that loop check if amount bought is a multiple of 3 or a multiple of 2 for A and B
  //if so, apply discount
  //return total
}
// calculateTotal(["A", "C", "B", "B", "A"]);
module.exports = calculateTotal;
