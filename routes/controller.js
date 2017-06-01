var express = require('express');
var router = express.Router();
var modProd= require('../routes/model/modelProducts').modelProduct;
var controller = require ('./products');

router.get('/',controller.allProducts);

router.put('/clickLike',controller.clickLike);

module.exports= router;