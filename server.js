var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public/'));


var routes = require('../WebServerNode/routes/tweetRequestRoutes');
routes(app);

app.listen(port);

console.log('Servidor de Testing - Nazareno en Puerto : ' + port);


