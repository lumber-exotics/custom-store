// 1) connect to DB
const { Pool } = require('pg');
const config = require('../../config/config.json');

const pool = new Pool({
  user: config.username,
  host: 'localhost',
  database: 'store',
  password: config.password,
  port: 5432,
});

// create array of values to insert into database
const woodValuesToInsert = [
  {
    TYPE: 'ash',
    IMAGEURL: 'https://imgur.com/1aIZHue',
    DESCRIPTION: 'Tough hardwood imported from southeastern states',
    PRICE: 19.99,
    IN_STOCK: true
  }, {
    TYPE: 'birch',
    IMAGEURL: 'https://imgur.com/sQmjwrT',
    DESCRIPTION: 'Hard, heavy wood imported from northeastern states',
    PRICE: 25.99,
    IN_STOCK: true
  }, {
    TYPE: 'cherry',
    IMAGEURL: 'https://imgur.com/nfYqw34',
    DESCRIPTION: 'One of our premium wood imported from northeastern states',
    PRICE: 19.99,
    IN_STOCK: true
  }, {
    TYPE: 'maple',
    IMAGEURL: 'https://imgur.com/6mF8cnY',
    DESCRIPTION: 'Most popular and durable wood imported from southeastern states',
    PRICE: 29.99,
    IN_STOCK: true
  }, {
    TYPE: 'pine',
    IMAGEURL: 'https://imgur.com/hCoZu9C',
    DESCRIPTION: 'Imported from eastern states',
    PRICE: 15.99,
    IN_STOCK: true
  }, {
    TYPE: 'redoak',
    IMAGEURL: 'https://imgur.com/KACe4VK',
    DESCRIPTION: 'Top of the line, solid wood imported from western states',
    PRICE: 29.99,
    IN_STOCK: true
  }
];
const stainValuesTOInsert = [
  {
    TYPE: 'Burgundy',
    IMAGEURL: 'https://imgur.com/Ybv96C6',
    DESCRIPTION: 'Water-resistant and durable',
    PRICE: 19.99,
    IN_STOCK: true
  }, {
    TYPE: 'Cherry-Blossom',
    IMAGEURL: 'https://imgur.com/q3OvhO5',
    DESCRIPTION: 'economical and durable',
    PRICE: 15.99,
    IN_STOCK: true
  }, {
    TYPE: 'Honeydew',
    IMAGEURL: 'https://imgur.com/lWjpnzx',
    DESCRIPTION: 'Water-resistant and durable',
    PRICE: 19.99,
    IN_STOCK: true
  }, {
    TYPE: 'Island-Water',
    IMAGEURL: 'https://imgur.com/n50UxsO',
    DESCRIPTION: 'High quality, water-resistant and durable',
    PRICE: 25.99,
    IN_STOCK: true
  }, {
    TYPE: 'Pure-white',
    IMAGEURL: 'https://imgur.com/x1vj3JB',
    DESCRIPTION: 'Water-resistant and durable',
    PRICE: 20.99,
    IN_STOCK: true
  }, {
    TYPE: 'Slate',
    IMAGEURL: 'https://imgur.com/l8VkEXM',
    DESCRIPTION: 'High demand, high quality, water-resistant and durable',
    PRICE: 25.99,
    IN_STOCK: true
  }
];

// DB insert queries
const createWoodTable =
  `CREATE TABLE IF NOT EXISTS wood("_id" serial PRIMARY KEY NOT NULL, "TYPE" varchar(50) NOT NULL, "IMAGEURL" varchar, "DESCRIPTION" varchar, "PRICE" numeric(10,2) NOT NULL, "IN_STOCK" boolean)`;
const stainTableInsertQuery =
  `CREATE TABLE IF NOT EXISTS stain(
  "_id" serial PRIMARY KEY NOT NULL,
  "TYPE" varchar(50) NOT NULL,
  "IMAGEURL" varchar,
  "DESCRIPTION" varchar,
  "PRICE" numeric(10,2) NOT NULL,
  "IN_STOCK" boolean)`;


function createWoodTableAndInsertValues() {
  pool.query(createWoodTable, (err, res) => {
    if (err) console.log(err);
    // console.log(res);
    const woodValues = [];
    for (let i = 0; i < woodValuesToInsert.length; i++) {
      woodValues.push(Object.values(woodValuesToInsert[i]));
    }
    woodValues.forEach(value => {
      pool.query(`INSERT INTO wood ("TYPE", "IMAGEURL", "DESCRIPTION", "PRICE", "IN_STOCK") VALUES ($1, $2, $3, $4, $5) RETURNING *;`, value, (err, res) => {
        if (err) console.log(err);
      });
    });
  });
}

function createStainTableAndInsertValues() {
  pool.query(stainTableInsertQuery, (err, res) => {
    if (err) console.log(err);
    const stainValues = [];
    for (let i = 0; i < stainValuesTOInsert.length; i++) {
      stainValues.push(Object.values(stainValuesTOInsert[i]));
    }
    stainValues.forEach(value => {
      pool.query(`INSERT INTO stain ("TYPE", "IMAGEURL", "DESCRIPTION", "PRICE", "IN_STOCK") VALUES ($1, $2, $3, $4, $5) RETURNING *;`, value, (err, res) => {
        if (err) console.log(err);
      });
    })
  });
}

// createWoodTableAndInsertValues();
// createStainTableAndInsertValues();

module.exports = pool;
  
