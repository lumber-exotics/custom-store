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
};

productController.stainQuery = (req, res, next) => {

  pool.query('SELECT * FROM stain', (err, result) => {
    if (err) {
      throw err
    }
    res.send(result.rows);
  });
};

productController.createCart = (req, res) => {
  const regBody = {
    'customer': 'Mike',
    'wood': 'redoak',
    'stain': 'Honeydew',
    'email': ''
  }

  function getTotal() {
    let woodPrice = 0;
    let stainPrice = 0;
    let basePrice = 19.99;
    pool.query(`SELECT price FROM wood WHERE type='${regBody.wood}'`, (err, result) => {
      woodPrice = result.rows["0"].price;
      pool.query(`SELECT price FROM stain WHERE type='${regBody.stain}'`, (err, result2) => {
        stainPrice = result2.rows["0"].price;
        console.log(woodPrice, stainPrice);
      })
    })
  };

  function getOrderID() {
    let name = regBody.customer;
    let ranNum = Math.floor(1000 + Math.random() * 9000); 
    let orderID = name + ranNum;
    console.log(orderID);
  };

  // function insertOrder(){



  // }

  getTotal();
  getOrderID();
  // insertOrder();



}


module.exports = productController;