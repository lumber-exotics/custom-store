const { Pool } = require('pg');
const config = require ('../../config/config.json');

const pool = new Pool({
  user: config.username,
  host: 'localhost',
  database: 'store',
  password: config.password,
  port: 5432,
})
// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   pool.end()
// })

module.exports = pool;
  
  