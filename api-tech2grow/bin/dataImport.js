/* eslint-disable strict */
var server = require('../server/server');

var fs = require('fs');
var productData = JSON.parse(fs.readFileSync('../data-sample/products.json', 'utf8'));

var models = server.models();
var productModel = null;

models.forEach(function(Model) {
  if (Model.modelName == 'product') {
    productModel = Model;
  }
  console.log(Model.modelName); // color
});

productModel.create(productData);
console.log('product created');
