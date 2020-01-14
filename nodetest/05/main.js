let express = require('express');
let http = require('http');
let path = require('path');
let fs = require('fs');
let url = require('url');
let bodyParser = require('body-parser');
let app = express();

let port = 8080;

// app.all('*', function (req, res) {
// console.log('method : ', req.method);
// console.log('query : ', req.query);
// console.log('protocol : ', req.protocol);
// console.log('accepts : ', req.accepts(['text/html','application/json']));
// console.log('content type header : ',req.get('Content-Type'));
// res.locals.prop1 ='this is response property';

// res.cookie('cookie','cookie val u e',{maxAge:9000,httpOnly:true});
// res.append('warning','aaabbbbbaa');
// res.send();
// }).listen(port, function () {
//     console.log('listening...',port);
// });
// ====================

// app.get('/cat/:catId/product/:productId',function(req,res){
//     console.log(req.params);    
// res.write(`category ${req.params['catId']} \r`);
// res.write(`product : ${req.params['productId']}`);
// res.end();
// }).listen(port,function(){
// console.log('listening',port );
// });
// =================================

// let cookieParser = {
//     getCookie: function (req, res, next) {
//         let rc, pos, key, value, parts;
//         rc = req.get('cookie').split(';');
//         let list = {};
//         for (let i = 0; i < rc.length; i++) {
//             pos = rc[i].indexOf('=');
//             if (pos != -1) {
//                 key = rc[i].substr(0, pos);
//                 value = rc[i].substr(pos + 1);
//                 list[key] = decodeURI(value);
//             }
//         }
//         req.cookies = list;
//         next();
//     }
// };
// app.use('/', cookieParser.getCookie);


// app.get('/', function (req, res) {
//     console.log(req.cookies);
//     res.end();
// });
// app.get('/index', function (req, res) {
//     res.cookie('some-cookie', 'some cookie value', {
//         maxAge: 60*60*1000
//     });
//     res.cookie('some-cookie1', 'some cookie value1', {
//         maxAge: 60*60*1000
//     });
//     res.cookie('some-cookie2', 'some cookie value1', {
//         maxAge: 60*60*1000
//     });
//     res.cookie('another-cookie', 'another cookie value');
//     res.clearCookie('another-cookie');
//     res.end('cookie received');
// }).listen(port, function () {
//     console.log('server start op port :', port);
// });

// ================================

// let path = 'logger.txt';

// app.use(function(req,res){
// let data= `------------------------ \n address : ${req.ip}, url : ${req.url}, date : ${new Date().toLocaleString()} \n`;

// fs.appendFile(path,data,function(error){
//     if (error) throw error;
//     console.log('data written');
//     res.end();
// });
// app.get('/',function(req,res){
//     console.log('main handler');
//     res.end('from main handler');
// });
// }).listen(port,function(){
//     console.log('server started at port : ',port);
// });
// ====================================

// let router = express.Router();
// router.route('/')
// .get(function(req,res){
//     res.send('list of product. method GET');
// })
// .post(function(req,res){
//     res.send('list created. method POST');
// });
// router.route('/logger.txt')
// .get(function(req,res){

//     fs.readFile('logger.txt',function(err,data){
//         res.send(data);

//         console.log('file sent');        
//     });
// });
// router.route('/:id')
// .get(function(req,res){
//     let data = `address : ${req.ip} | url : ${req.url} | date : ${new Date().getFullYear()}`;
//     fs.appendFile('logger.txt',data,{flag:'a+'},function(err){
//         console.log('file written');     
//         if (err) throw err;
//     });
//     res.send(`product : ${req.params.id}`);
// });
// app.use('/product',router);
// app.listen(port,function(){
//     console.log('listening port : ',port);    
// });
// ==========================================

// app = express();
// let admin = express();
// let user = express();

// app.get('/',function(req,res){
// res.write('<a href="/admin">admin</a>');
// res.write('<br>');
// res.write('<a href="/user">urer</a>');
// res.end();
// });
// admin.get('/',function(req,res){
//     console.log(admin.mountpath);    
//     res.send('admin page');

// });
// admin.on('mount',function(){
//     console.log('admin page...');

// });
// user.get('/',function(req,res){
//     console.log(user.mountpath);    
//     fs.readFile('test.html',function(err,data){
//         if (err) throw err;       
//         res.write(data);
//         res.end();
//     });
// });
// user.on('mount',function(){
// console.log('user page...');

// });
// app.use('/admin',admin);
// app.use('/user',user);
// app.listen(port,function(){
// console.log('listening...',port);
// });

// ================================

// app.use(function(req,res,next){
// if (req.url=='/') {
//     res.send('hello');
// }
// next();
// });
// app.use(function(req,res,next){
// if (req.url=='/forbiden') {
//     next(new Error('access forbiden'));
// }else{
//     next();
// }
// })
// app.use(function(err,req,res,next){
//     res.status(500).send('oops... something wrong');
//     next(err.message);
// }).listen(port,function(){
//     console.log('listen...',port);    
// })
// ==========================

// app.use(express.static(__dirname));
// app.use(bodyParser.urlencoded({
//     extended: true
// }));

// app.route('/')
//     .all(function (req, res) {
//         res.writeHead(301, {
//             'Location': 'test.html'
//         });
//         res.end();
//     });
// app.route('/test')
//     .get(function (req, res) {
//         res.writeHead(200, {
//             'Content-Type': 'text/html'
//         });
//         let data = url.parse(req.url, true).query;
//         console.log(`${data.text}`);
//         res.end(data.text);
//     })
//     .post(function (req, res) {
//         res.writeHead(200, {
//             'Content-Type': 'text/html'
//         });
//         let data = req.body.text;
//         res.end(data);
//         console.log(data);
        
//     });
//     app.listen(port, function () {
//     console.log('listen...', port);
// });