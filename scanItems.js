function scanItems(items) {
  let itemsInCart = {};
  items.forEach((item) => {
    if (!itemsInCart[item]) {
      itemsInCart[item] = 1;
    } else {
      itemsInCart[item]++;
    }
  });
  console.log(itemsInCart);
  return itemsInCart;
}

module.exports = { scanItems };
