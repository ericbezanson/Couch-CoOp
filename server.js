// server.js

const express = require('express');
const app = express();

// const http = require('http').Server(app);
// const io = require('socket.io')(http);

// Set the files that the user will be provided with
app.use(express.static('app'));

app.get('*', function(request, response){
    response.sendFile(__dirname + '/app/index.html');
});

/*
io.on('connection', function(socket){
    console.log('a user connected');

    socket.on('chat message', function(msg){
        console.log('message: ' + msg);

        io.emit('chat message', msg);
    });

    socket.on('disconnect', function(){
    console.log('user disconnected');
    });
});
*/

app.listen(3000, function(){
    console.log('App listening on port 3000');
});