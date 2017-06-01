"use strict";
  var express = require('express'),
      router = express.Router(),
      modelReport= require('../routes/model/modelReport').modelReport;


  //get all products
  router.get('/generateReport',function(req,res){
    modelReport.find(function(err, sales){
      if(err){
        return res.send('ERROR: '+ err.message);
      }
      else {
        res.status(200).json(sales);
      }
    });
  });

    module.exports = router;