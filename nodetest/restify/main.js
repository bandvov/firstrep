'use strict';
var restify = require('restify');

function respond(req, res, next) {
  res.send('hello ' + req.params.name);
  next();
}

var server = restify.createServer();
server.get('/hello/:name', respond);
let port = 8080;

server.use(function(req,res,next){
    console.log(`request method : ${req.method}, request url : ${req.url}`);
    next();    
})
server.get('/',function(req,res,next){
   res.send('this is server created with restify! GET');    
   next();
});
server.post('/',function(req,res,next){
    res.send('this is server created with restify! POST');
    next();
});
server.use(function(req,res){
res.send(404);
})

server.listen(port,function(){
    console.log(` %s is listening at %s server...`,server.name,server.url);    
})