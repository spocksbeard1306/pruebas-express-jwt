'use strict';
var express = require('express');
var jwt = require('jsonwebtoken');
var bodyParser = require('body-parser');

const SECRET = 'holamundo'; 

var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.json());
app.post('/login', function(req, res){
	var token;
	var result;
	var pyl;
	
	if(req.body.email == "jlbedrillana@gmail.com" && req.body.password == "jorge"){
		pyl = {sesid: Math.floor(Math.random()*5000) ,id: 1234, nombre: 'Jorge Bedrillana', rol: 'editor'};
		token = jwt.sign(pyl, SECRET);
		result = {
			success: true,
			token: token,
			err_msg: ""
		};
	}else if(req.body.email == "elvistorres0306@gmail.com" && req.body.password == "torres"){
		pyl = {sesid: Math.floor(Math.random()*5000) ,id: 1235, nombre: 'Elvis Torres', rol: 'admin'};
		token = jwt.sign(pyl, SECRET);
		result = {
			success: true,
			token: token,
			err_msg: ""
		};
	}else{
		result = {
			success: false,
			token: "",
			err_msg: "Usuario o password inválidos."
		};
	}
	res.send(result);
});

app.listen(8080, function(){
	console.log("Servidor Login corriendo en 8080");
});