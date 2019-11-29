let http = require('http');
let util = require('util');
let fs = require('fs');
let url = require('url');
let path = require('path');

// let server =http.createServer();
// server.on('request',function(request,response){
//   console.log('connection established');
//   console.log(request.method);
//   response.end('server response',"utf-8",function(){
//     console.log('finish');

//   });
// });
// server.listen(8080);
// server.on('listening',function(){
//   console.log('server listening on port 8080');
// ===============================
// http.createServer(function(request,response){
//   response.writeHead(200,{"Content-Type":"text/plain"});
// console.log(response.statusMessage);
//   response.end('hello world','utf-8');
// }).listen(8080,function(){
//   console.log('listening on port 8080');
// });
// http.createServer(function(req,res){
//   let reqInfo = util.format(`version: %s,\nmethod: %s,\nstatusCode: %s\nurl: %s,\nhost: %s`,req.httpVersionMajor,req.method,req.statusCode,req.url,req.headers.host);
// console.log(reqInfo);
// for (let key in req.headers){
//   console.log(key,':',req.headers[key]);
// }
// res.end('hello from reqInfo');
// }).listen(8080);
// ========================

// http.createServer(function(req,res){
//   let path = url.parse(req.url).pathname;
//   path='../04/'+path.substr(1);
//   fs.readFile(path,function(error,data){
//     if (error) {
//       res.writeHead(404,{"Content-Type":"text/plain"});
//       console.log(error);
//       res.end('not found');
//     }else{
//       res.writeHead(200,{"Content-Type":"text/html"});
//       res.write(data);
//       console.log('data sebt');
//       res.end();
//     }
//   });
// }).listen(7080,function(){
//   console.log('lostening port 7080');

// });
// ========================

// http.createServer(function(req,res){
//   let query= url.parse(req.url,true).query;
//   console.log(query);
//   res.end('get param:'+JSON.stringify(query));
// }).listen(7080,function(){
//   console.log('listening port 7080');
// });
// ===============================

// http.createServer(function(req,res){
//   switch(req.method) {
//     case 'GET': {
//       let responseText = 'GET request to path'+ req.url;
//       res.end(responseText);
//       break;
//     }
//       case 'POST':{
//         let responseText= 'POST request to path'+req.url;
//      res.end(responseText);
//         break;
//       }
//   }
// }).listen(7080,function(){console.log('listening on port 7080');
// });
// =========================================

// http.createServer(function(req,res){
//     req.on('error',function(){
//         console.log(error);
//     });
//     if (req.url=='/') {
//         let pathFile = path.join(__dirname,'index.html');
//         fs.readFile(pathFile,function(error,data){

//             if (error) {
//                 console.log(error);
//                 res.writeHead(404,{"Content-Type":"text/plain"});
//                 res.end(error);
//             }else{
//                 console.log('file sent');
//                 res.writeHead(200,{'Content-Type':"text/html"});
//                 res.write(data);
//                 res.end();
//             }
//             });
//     }else if (req.url=='/request') {
//         res.writeHead(200,{"Contentt-Type":"text/html"});
//         res.write('data from server');
//         console.log('data from server sent');
//         res.end();
//     }else {
//         res.writeHead(200,{"Content-Type":"text/plain"});
//         res.end('data not found');
//     }
// }).listen(8080,function(){
//     console.log('listening port 8080');
// });
// ===============================================
// let data = [{
//     'name': "sony",
//     'price': 10
// }, {
//     'name': "oreo",
//     'price': 20
// }, {
//     'name': "benz",
//     'price': 555
// }];
// fs.writeFile('pro.json',util.format('%j',data),function(error){
// if (error) {
//     console.log(error);    
// }
// });

// http.createServer(function(req,res){
//     if (req.url=='/') {
//         let pathFile =path.join(__dirname,'index.html');
// fs.readFile(pathFile,function(error,data){
//     if (error) {
//         console.log(error);
//         res.writeHead(404,{"Content-Type":"text/plain"});
//         res.write(error);
//         res.end();        
//     }else{
//         res.writeHead(200,{"Content-Type":"text/html"});
//         res.write(data.toString());
//         res.end();
//     }
// });
//     }else if (req.url=="/data") {
//         req.on('data',function(){
// res.writeHead(200,{"Content-Type":"application/json"});
// res.write(JSON.stringify(data));
// res.end();
//         })
//     }
// }).listen(8080,function(){
//     console.log('listening port 8080');    
// });
// =====================================
let config = {
    host:'localhost',
    port:8080,
    path:'/textConnection'
}
let body='';
http.request(config,function(response){
    response.on('data',function(data){
body +=data;
        });
response.on('end',function(){
    console.log(body);
    
});
}).end();