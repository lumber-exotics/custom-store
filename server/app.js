const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.get('/', (req, res)=>{
  res.send('working');
});



module.exports = app;