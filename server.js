var express = require('express');
var app = express();
var server = require('http').createServer(app);
var serveIndex = require('serve-index');
var io = require('socket.io')(server);
var port = process.env.PORT || 3000;
var path = require('path');
var servepath = "..";

console.log(process.env.PORT);

server.listen(port, function () {
  console.log('Server listening at port %d - '+__dirname+servepath, port);
});

// Routing 
app.use(express.static(path.join(__dirname, servepath)));
app.use(serveIndex(path.join(__dirname, servepath)));
