var mongoose = require('mongoose');
var Schema =mongoose.Schema;

var schemaProductos = new Schema({
  code    : {type: String},
  img     : {type: String},
  name    : {type: String},
  price   : {type: Number},
  units   : {type: Number},
  category: {type: String, enum:
    ['Desktop', 'Laptop', 'Smartphone', 'Tablet', 'Accesory' ]
  },
  score   : {type: Number}

});

var models = {
  modelProduct: mongoose.model('products',schemaProductos)
};

module.exports = models;