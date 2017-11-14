var express = require("express");

var app = express();

var server = require('http').createServer(app);

var io = require('socket.io')(server);

var port = process.env.PORT || 3000;

// Listening Clients request
server.listen(port, function () {
  console.log('Server listening at port: ', port);
});

// Listening clients socket connections
io.on('connection', function(socket){

  console.log('Client connected...');

  // when the user disconnects...
  socket.on('disconnect', function () {
    console.log('Client disconnected...');

  });
});