'use strict';
let app = require('express')();
let server = require('http').Server(app);
let io = require('socket.io')(server);

let port = 8080;

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
})
app.get('/client.js', function (req, res) {
    res.sendFile(__dirname + '/client.js');
})
let connections = [];
io.on('connection', function (socket) {
    connections.push(socket);
    console.log(`connected. %s sockets connected`, connections.length);

    socket.on('disconnect', function () {
        connections.splice(connections.indexOf(socket), 1);
        console.log(`disconnected. %s sockets connected`, connections.length);
    })
    socket.on('send message', function (data) {
        io.sockets.emit('chat message', data);
    })
});

server.listen(port, function () {
    console.log(`listening port%s...`, port);
})