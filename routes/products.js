"use strict";
var   modProd= require('../routes/model/modelProducts').modelProduct;

module.exports={
  clickLike: function(req,res){

    //console.log(req);
    var result=false;
    var newScore= req.body.score;
    console.log(newScore);
    newScore++;
    console.log(newScore);
    modProd.findOneAndUpdate( { _id : req.body._id},
      {$set:
        {code: req.body.code,
          img     : req.body.img,
          name    : req.body.name,
          price   : req.body.price,
          units   : req.body.units,
          category: req.body.category,
          score   : newScore
        }}
        ,function(err, product) {
          if (err)
          res.send(err);

          modProd.find(function(err, product) {
          if (err)
          res.send(err);

          res.json(product);
        });


      });

    },
    //get all product
    allProducts: function(req,res){
      modProd.find(function(err, productArray){
        if(err){
          return res.send('ERROR: '+ err.message);
        }
        else {
          res.status(200).json(productArray);
        }
      });
    }




  }