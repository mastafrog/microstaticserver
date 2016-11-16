/*
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var serveIndex = require('serve-index');
var io = require('socket.io')(server);
var port = process.env.PORT || 3000;

server.listen(port, function () {
  console.log('Server listening at port %d'+__dirname, port);
});
// Routing
app.use(express.static(__dirname + "/"));
app.use('/', serveIndex(__dirname + '/'));
*/

var serveIndex = require('serve-index');
var express = require('express');
var https = require('https');
var http = require('http');
var fs = require('fs');

var options = {
  key: fs.readFileSync('./ssl-keys/key.pem'),
  cert: fs.readFileSync('./ssl-keys/cert.pem')
};

// Create a service (the app object is just a callback).
var app = express();

// Create an HTTP service.
http.createServer(app).listen(8000);

// Create an HTTPS service identical to the HTTP service.
https.createServer(options, app).listen(433);

app.use(express.static(__dirname + "/"));
app.use('/', serveIndex(__dirname + '/'));
