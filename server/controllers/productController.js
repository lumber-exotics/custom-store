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
  console.log(req.body)

  // `CREATE TABLE IF NOT EXISTS cart(
  //   "_id" serial PRIMARY KEY NOT NULL,
  //   "orderID" integer NOT NULL,
  //   "customer" varchar,
  //   "wood" varchar,
  //   "stain" varchar(50) NOT NULL,
  //   "email" varchar,
  //   "total" numeric(10,2))`;

  //   pool.query(`INSERT INTO wood ("type", "image", "description", "price", "inStock") VALUES ($1, $2, $3, $4, $5) RETURNING *;`, value, (err, res) => {
  //     if (err) console.log(err);
  //   });

}

module.exports = productController;