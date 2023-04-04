var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 3525;

// Convierte una petición recibida (POST-GET...) a objeto JSON
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/', function(req, res){
    var today = new Date();
    var now = today.toLocaleString();
    console.log( now ); // muestra en pantalla la fecha y la hora actuales
	
    res.status(200).send({
		message: 'Hola Sobrino la Fecha actual ' + now
        
	});
});

app.listen(port, function(){
	console.log(`Server running in http://localhost:${port}`);
	console.log('Defined routes:');
	console.log('	[GET] http://localhost:3525/');
});