const pool = require('../bin/postgresNode.js');
//const productModel = require('../models/products.js')
const productController = {};

productController.woodQuery = (req, res, next) => {

  pool.query('SELECT * FROM wood', (err, result) => {
    if (err) {
      throw err
    }
    res.send(result.rows);
  });

}

productController.stainQuery = (req, res, next) => {

  pool.query('SELECT * FROM stain', (err, result) => {
    if (err) {
      throw err
    }
    res.send(result.rows);
  });

}

productController.createCart = (req, res, next) => {
  const woodData = {};
  const stainData = {};

  const imagineBody = {
    'orderID': '',
    'customer': '',
    'wood': 'ash',
    'stain': 'Burgundy',
    'email': '',
    'total': ''
  }
  pool.query('SELECT * FROM wood', (err, result) => {
    woodData = result;
  })
  console.log(woodData);
  const basePrice = 0;
  const woodPrice = 0;
  const stainPrice = 0;
  const total = basePrice + woodPrice + stainPrice;
  

}

module.exports = productController;