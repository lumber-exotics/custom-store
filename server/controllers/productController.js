const pool = require('../bin/postgresNode.js');
//const productModel = require('../models/products.js')
const productController = {};

productController.createProduct = (req, res, next) => {

  pool.query('SELECT * FROM wood', (err, result) => {
    if (err) {
      throw err
    }
    //console.log(result);
    res.send(result);
  });
  
}

module.exports = productController;