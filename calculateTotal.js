const products = require("./products");

const cart = [
  { code: "A", quantity: 3 },
  // { code: "B", quantity: 3 },
  // { code: "C", quantity: 1 },
  // { code: "D", quantity: 2 },
];

function calculateTotal(cart) {
  if (cart.length === 0) {
    return 0;
  }
  let total = 0;
  cart.forEach((item) => {
    const product = products[item.code];
    total += product.unit_price * item.quantity;
    console.log(product);
  });

  return total;
}
const totalCost = calculateTotal(cart);
console.log(totalCost);
module.exports = calculateTotal;
