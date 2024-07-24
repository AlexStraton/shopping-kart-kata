const products = require("./products");

const cart = [
  { code: "A", quantity: 3 },
  { code: "B", quantity: 3 },
  { code: "C", quantity: 1 },
  { code: "D", quantity: 2 },
];

function calculateTotal(cart) {
  if (cart.length === 0) {
    return 0;
  }
  let total = 0;
  cart.forEach((item) => {
    const product = products[item.code];
    let quantity = item.quantity;
    if (!product) {
      console.log("Product code is not in cart");
      return;
    }
    if (product.special_price && quantity >= product.special_price.amount) {
      const specialPriceCount = Math.floor(
        quantity / product.special_price.amount
      );

      total += specialPriceCount * product.special_price.total;
      quantity = quantity % product.special_price.amount;
    }

    total += product.unit_price * quantity;
  });

  return total;
}
const totalCost = calculateTotal(cart);

module.exports = calculateTotal;
