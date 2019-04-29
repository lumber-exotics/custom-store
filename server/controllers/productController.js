const pool = require('../bin/postgresNode.js');
//const productModel = require('../models/products.js')
const productController = {};

productController.woodQuery = (req, res, next) => {

  pool.query('SELECT * FROM wood', (err, result) => {
    if (err) {
      throw err
    }
    //console.log(result);
    res.send(result.rows);
  });
  
}

productController.stainQuery = (req, res, next) => {

  pool.query('SELECT * FROM stain', (err, result) => {
    if (err) {
      throw err
    }
    //console.log(result);
    res.send(result.rows);
  });
  
}

module.exports = productController;