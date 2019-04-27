// 1) connect to DB
const { Pool } = require('pg');
const config = require ('../../config/config.json');

const pool = new Pool({
  user: config.username,
  host: 'localhost',
  database: 'store',
  password: config.password,
  port: 5432,
})

// const WOOD = [ash, birch, cherry, maple, pine, redoak];
// const Stain = [];

// pool.query(`INSERT INTO wood ("TYPE", "IMAGEURL", "DESCRIPTION", "PRICE", "QUANTITY") VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;`, values, (err, res) => {
//   if (err) {
//     console.log(err)
//   }

// })

module.exports = pool;
  
  