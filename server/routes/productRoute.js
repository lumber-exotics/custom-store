// 4) connecting router to controller --- 
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController.js');

router.get('/', (req, res) => {
  //res.send('api route reached');
  productController.createProduct(req, res);
});

router.post('/', (req, res) => {
  console.log('api post reached');
  console.log(req.body);
  //productController.createUser(req, res);
});
  
module.exports = router;