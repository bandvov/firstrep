'use strict';
let app = require('express')();
let server= require('http').Server(app);
let io = require('socket.io')(server);

let port = 8080;

app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
})
let namespace = io.of('/namespace');
namespace.on('connection',function(socket){
    console.log('connected to namespace');
    
    let room = '';
    socket.on('btn_click',function(data){
        if (data.btn === 1) {
            room = 'demo room 1';
            socket.join(room);
            socket.emit('join_room',{roomname:1});
        } else if (data.btn ===2) {
            room = 'demo room 2';
            socket.join(room);
            socket.emit('join_room',{roomname:2});
        }
    })
    socket.on('get_greeting',function(){
        namespace.to('demo room 1').emit('greet',{message:'hello from room 1'});
        namespace.to('demo room 2').emit('greet',{message:'hello from room 2'});
    })
})
server.listen(port,function(){
    console.log(`listening on port %s...`,port);    
})