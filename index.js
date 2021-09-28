var express = require('express');
var app = express();
var cors = require('cors');

app.use(cors());

var  usuarios = [{
    nombre : 'Rodrigo',
    apellido : 'Contreras'
},{
    nombre : 'Fernando ',
    apellido : 'Alonso'
},{
    nombre : 'Cristiano',
    apellido : 'Ronaldo'
}, ];

app.get('/usuarios', function(req, res){
    res.send(usuarios);
});

app.listen(8889, function(){
    console.log('se levanto servidor');
});