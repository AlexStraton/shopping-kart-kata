const unitPrices = require("./prices");
const specialPrices = require("./specialPrice");
const { scanItems } = require("./scanItems");

function calculateTotal(items) {
  let itemsInCart = scanItems(items);
  let total = 0;
  //set total

  for (const item in itemsInCart) {
    const quantity = itemsInCart[item];
    total += unitPrices[item] * quantity;
  }
  console.log(total);
  return total;
  //destructure unitPrices
  //loop through scanItems
  //access unitprice key using scanItems loop,
  //within that loop check if amount bought is a multiple of 3 or a multiple of 2 for A and B
  //if so, apply discount
  //return total
}
// calculateTotal(["A", "C", "B", "B", "A"]);
module.exports = calculateTotal;
