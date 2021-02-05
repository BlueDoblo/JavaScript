const express = require('express');
var http = require('http')
const app = express();

app.listen('3000', function() {
  console.log('Servidor web escuchando en el puerto 3000');
});


app.get('/hola', (req, res) => {
  res.send("Api Contestando a metodo GET")
});
