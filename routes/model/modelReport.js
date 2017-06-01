var mongoose = require('mongoose');
var Schema =mongoose.Schema;

var schemaReport = new Schema({
    CodeSell: {type: Number},
    DateSell : {type: Date, default: Date.now},
    TotalUnits : {type: Number},
    TotalPrice   : {type: Number},
    Document    : {type: Number},
    Address : {type: String},
    Email   : {type: String}

})
;
var models = {
  modelReport: mongoose.model('report',schemaReport)
};

module.exports = models;