var express = require('express');
var app = express();
var server = require('http').createServer(app);
var serveIndex = require('serve-index');
var io = require('socket.io')(server);
var port = process.env.PORT || ((process.argv.indexOf("-p") != -1) ? process.argv[process.argv.indexOf("-p") + 1] : 3000);
console.log(port);
var srcpath = (process.argv.indexOf("-s") != -1) ? process.argv[process.argv.indexOf("-s") + 1] : "..";
console.log(srcpath);

var path = require('path');

console.log("params -p  port, process.env.PORT, default 3000");
console.log("params -s  source path ralative to execution point.\n");
console.log("Example: node server -s ../my-app/ -p 4545\n")

server.listen(port, function () {
  console.log('Server listening at %d - '+__dirname+srcpath, port);
});

// Routing
app.use(express.static(path.join(__dirname, srcpath)));
app.use(serveIndex(path.join(__dirname, srcpath)));
