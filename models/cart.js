const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'cart.json'
);

module.exports = class Cart {
  static addProduct(id) {
    fs.readFile(p, (err, fileContent) => {
      let cart = {products: [], totalPrice: 0}
      if (!err) {
        cart=JSON.parse(fileContent)
      }

      const existingProduct = cart.products.find(prod => prod.id === id);
      let updateProduct;
      if (existingProduct) {
        updateProduct = { ...existingProduct }
        updateProduct.qty += 1;
      } else {
        updateProduct = { id: id, qty: 1};
      }
      cart.totalPrice = cart.totalPrice + productPrice;

    });
  }
};