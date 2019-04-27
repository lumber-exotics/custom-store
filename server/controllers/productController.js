const pool = require('../bin/postgresNode.js');
const productModel = require('../models/products.js')
const productController = {};

productController.createProduct = (req, res, next) => {
  res.send('p controller reached');
}

module.exports = productController;