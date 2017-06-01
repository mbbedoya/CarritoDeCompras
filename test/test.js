var chai =require ('chai'),
product= require('../routes/products'),
assert=chai.assert;

it('prueba clickLike',function(){
  var producto={body:{
    _id: '570ba8c0e4b0a33a2d7a7428',
    code: '1',
    img: '../images/products/ipad-mini-16gb.jpg',
    name: 'Ipad mini 16GB',
    price: 695200,
    units: 50,
    category: 'tablet',
    score: 76
  }};
  assert.typeOff(product.clickLike(producto),'json');
});