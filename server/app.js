// 2nd connecting up express to PG
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

//routes

const productRoute = require('./routes/productRoute.js');

app.get('/', (req, res)=>{
  res.send('working');
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser())


// app.use('/build', express.static(path.join(__dirname, '../build')));
app.use('/api/products', productRoute);

app.use('/', (req, res) => {
  //res.sendFile(path.join(__dirname, 'index.html'));
  res.send('reached root route');
});


module.exports = app;