'use strict';
let app = require('express')();
let server = require('http').Server(app);
let io = require('socket.io')(server);

let port = 8080;

app.get('/',function(req,res){
res.sendFile(__dirname+'/index.html');
})
let namespace = io.of('/namespace');
namespace.on('connection',function(){
    console.log('connected to namespace');
    namespace.emit('greet',{message:'hello from namespace'});    
})

server.listen(port,function(){
    console.log(`listening port %s...`,port);    
})