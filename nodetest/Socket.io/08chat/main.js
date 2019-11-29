'use strict';
let app = require('express')();
let server = require('http').Server(app);
let io = require('socket.io')(server);

let port = 8080;

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/auth.html');
})
app.get('/:id', function (req, res) {
    if (req.params.id === 'client.js') {
        res.sendFile(__dirname + '/client.js');
    }else if(req.params.id ==='favicon.ico'){
        res.sendStatus(404);
    } else {
        res.sendFile(__dirname + '/index.html');
        users.push(req.params.id);
    }
})
let connections = [];
let users = [];
let messages = [];
io.on('connection', function (socket) {
    console.log('connected');
    connections.push(socket);
    console.log(connections.length);

    socket.on('disconnect', function () {
        users.splice(connections.indexOf(socket),1);
        io.sockets.emit('users loaded',{users:users});
    })
    socket.on('send message',function(data){
        messages.push(data);
        io.sockets.emit('chat message',data);
    })
    socket.on('load users',function(){
        io.sockets.emit('users loaded',{users:users});
    })
    socket.on('load messages',function(){
        io.sockets.emit('messages loaded',{messages:messages});
    })
    socket.emit('new user',{name:users[users.length-1]});
})

server.listen(port, function () {
    console.log(`listening port %s`, port);

})