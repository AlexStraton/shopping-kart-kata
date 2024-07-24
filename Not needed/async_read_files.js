function calculateTotal(items) {
  return fs.readFile("./Data/products.json", "utf8").then((data) => {
    const productsArray = JSON.parse(data);
    const unitPrices = {};
    const specialPrices = {};
    productsArray.forEach((product) => {
      const productCode = Object.keys(product)[0];
      unitPrices[productCode] = product[productCode].unit_price;
      specialPrices[productCode] = product[productCode].special_price;
    });
    return fs.readFile("./Data/cart.json", "utf8").then((cartData) => {
      const itemsInCart = JSON.parse(cartData);
      console.log(unitPrices, specialPrices, itemsInCart);
      return itemsInCart;
    });
  });
}
