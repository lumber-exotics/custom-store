// 4) connecting router to controller --- 
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController.js');

router.get('/wood', (req, res) => {
  //res.send('api route reached');
  productController.woodQuery(req, res);
});

router.get('/stain', (req, res) => {
  //res.send('api route reached');
  productController.stainQuery(req, res);
});

router.post('/cart', (req, res) => {
  //console.log('api post reached');
  //console.log(req.body);
  productController.createCart(req, res);
});
  
module.exports = router;