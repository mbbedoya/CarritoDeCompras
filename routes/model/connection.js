var mongoose = require('mongoose');


// Conexión con la base de datos ... la base de datos se llama productos

  mongoose.connect('mongodb://admin:admin@ds017070.mlab.com:17070/carritocompras', function(err,res){
  if(err) console.log('Error: conexion BD: '+ err);
  else console.log('MongoDB connection successful');
});

module.exports= mongoose;