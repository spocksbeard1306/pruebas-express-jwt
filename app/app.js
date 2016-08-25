var express = require('express');
var jwt_veri = require('express-jwt');

var app = express();
const SECRET = 'holamundo';


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(jwt_veri({ secret: SECRET }));
app.post('/server', function(req, res){
	console.log('ñañaña');
	var result = {
		success: true,
		data: {
			saludo: "Hola mundo!"
		},
		err_msg: ""
	};
	res.status(200).send(result);
});

app.listen(8000, function(){
	console.log('Servidor de aplicación corriendo en puerto 8000');
});