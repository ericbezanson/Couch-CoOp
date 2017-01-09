// server.js

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

// Set the files that the user will be provided with
app.use(express.static(__dirname + '/app'));
app.get('/', function(req, res, next){
    res.sendfile(__dirname + '/index.html');
})


io.sockets.on('connection', function(client){

    // Update the socket session with the new room information
    // Also notify other members in this room a new user has joined
    client.on('join:room', function(data){
        client.room = data.room;
        client.join(data.room);
        client.broadcast.to(client.room)
        .emit('send:message', {user:'SERVER', text:'A new user has joined this room'} );
    });

    // When a user sends a message send it to all users in the same room
    client.on('send:message', function(data){
        client.broadcast.to(client.room).emit('send:message', data);
    });

    // Disconnect
    client.on('disconnect', function(){
        // Do stuff
    });
});

server.listen(3000, function(){
    console.log('App listening on port 3000');
});