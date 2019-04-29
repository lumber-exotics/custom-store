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

let wood = [{ TYPE : 'ash', 
                IMAGEURL: 'https://imgur.com/1aIZHue',
                DESCRIPTION: 'Tough hardwood imported from southeastern states',
                PRICE: 19.99,
                IN_STOCK: true},
              
              {TYPE : 'birch',
              IMAGEURL: 'https://imgur.com/sQmjwrT',
              DESCRIPTION: 'Hard, heavy wood imported from northeastern states',
              PRICE: 25.99,
              IN_STOCK: true},

              {TYPE : 'cherry',
              IMAGEURL: 'https://imgur.com/nfYqw34',
              DESCRIPTION: 'One of our premium wood imported from northeastern states',
              PRICE: 19.99,
              IN_STOCK: true},

              {TYPE : 'maple',
              IMAGEURL: 'https://imgur.com/6mF8cnY',
              DESCRIPTION:  'Most popular and durable wood imported from southeastern states',
              PRICE: 29.99,
              IN_STOCK: true},
              
              {TYPE: 'pine',
                IMAGEURL: 'https://imgur.com/hCoZu9C',
                DESCRIPTION:  'Imported from eastern states',
                PRICE: 15.99,
                IN_STOCK: true},

              {TYPE : 'redoak',
              IMAGEURL: 'https://imgur.com/KACe4VK',
              DESCRIPTION: 'Top of the line, solid wood imported from western states',
              PRICE: 29.99,
              IN_STOCK: true}];


let stain = [{TYPE: 'Burgundy',
                IMAGEURL: 'https://imgur.com/Ybv96C6',
                DESCRIPTION: 'Water-resistant and durable',
                PRICE:  19.99,
                IN_STOCK: true},

                {TYPE:'Cherry-Blossom',
                IMAGEURL: 'https://imgur.com/q3OvhO5',
                DESCRIPTION: 'economical and durable',
                PRICE: 15.99,
                IN_STOCK: true},

                {TYPE : 'Honeydew',
                IMAGEURL: 'https://imgur.com/lWjpnzx',
                DESCRIPTION:  'Water-resistant and durable',
                PRICE: 19.99,
                IN_STOCK: true},
                
                {TYPE : 'Island-Water',
                IMAGEURL: 'https://imgur.com/n50UxsO',
                DESCRIPTION: 'High quality, water-resistant and durable',
                PRICE: 25.99,
                IN_STOCK: true},

                {TYPE : 'Pure-white',
                IMAGEURL: 'https://imgur.com/x1vj3JB',
                DESCRIPTION: 'Water-resistant and durable',
                PRICE: 20.99,
                IN_STOCK: true},

                {TYPE: 'Slate',
                IMAGEURL: 'https://imgur.com/l8VkEXM',
                DESCRIPTION: 'High demand, high quality, water-resistant and durable',
                PRICE: 25.99,
                IN_STOCK: true}];

const tableQuery =
  `CREATE TABLE IF NOT EXISTS wood(
"_id" serial PRIMARY KEY NOT NULL,
  "TYPE" varchar(50) NOT NULL,
    "IMAGEURL" varchar,
      "DESCRIPTION" varchar,
        "PRICE" numeric(10,2) NOT NULL,
          "IN_STOCK" true)`;

for(let i = 0; i < wood.length; i++){
  let values = [];
  values.push(wood[i]['TYPE'])
  values.push(wood[i]['IMAGEURL'])
  values.push(wood[i]['DESCRIPTION'])
  values.push(wood[i]['PRICE'])
  values.push(wood[i]['IN_STOCK'])

  pool.query(`INSERT INTO wood ("TYPE", "IMAGEURL", "DESCRIPTION", "PRICE", "IN_STOCK") VALUES ($1, $2, $3, $4, $5) RETURNING *;`, values, (err, res) => {
    if (err) {
      console.log(err)
    }
  })


const tableQuery =
`CREATE TABLE IF NOT EXISTS stain(
"_id" serial PRIMARY KEY NOT NULL,
"TYPE" varchar(50) NOT NULL,
  "IMAGEURL" varchar,
    "DESCRIPTION" varchar,
      "PRICE" numeric(10,2) NOT NULL,
        "IN_STOCK" true)`;

for(let i = 0; i < stain.length; i++){
let values = [];
values.push(stain[i]['TYPE'])
values.push(stain[i]['IMAGEURL'])
values.push(stain[i]['DESCRIPTION'])
values.push(stain[i]['PRICE'])
values.push(stain[i]['IN_STOCK'])

pool.query(`INSERT INTO wood ("TYPE", "IMAGEURL", "DESCRIPTION", "PRICE", "IN_STOCK") VALUES ($1, $2, $3, $4, $5) RETURNING *;`, values, (err, res) => {
  if (err) {
    console.log(err)
  }
})
}
}


module.exports = pool;
  
