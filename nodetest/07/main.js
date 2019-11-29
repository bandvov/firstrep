'use strict';
let http = require('http');
let Cookies = require('cookies');
let cookieParser = require('cookie-parser');
let cookieSession = require('cookie-session');
let express = require('express');
// let expressSession = require('express-session');
let app = express();

let port = 8080;

app.use(express.static(`${__dirname}`));

// app.use(function(req,res){
// console.log(req.headers.cookie);
// res.sendFile(`${__dirname}${"/test.html"}`);

// }).listen(port,function(){
//   console.log('listen...',port);  
// })
// ============================== set cookie ==========

// app.use('/',function(req,res){
//   console.log(`cookies from client : ${req.headers.cookie}`);
//   res.setHeader('Set-Cookie','first cookie= cookievalue;Max-Age=77777');  
//   // res.setHeader('Set-Cookie',['1cookie=val','2cookie=val2','3cookie=val3;Max-Age=77777']);
// console.log(`method \'get cookie\': ${res.getHeader('Set-Cookie')}`);
// res.sendFile(`${__dirname}${'/test.html'}`);
// }).listen(port,function(){
//   console.log('listen...',port);  
// });
// =============================== module cookies =================

// http.createServer(function(req,res){
//  let cookies = new Cookies(req,res);
//   cookies.set('adm','val val');
//   res.write(cookies.get('adm'));
//   res.end();  
// }).listen(port,function(){console.log('listen',port);
// });
// =============================== signed cookies =============

// http.createServer(function(req,res){
//   let cookies = new Cookies(req,res,{keys:['secretString']});
//   console.log(cookies.get('login',{signed:true}));

//   let options = {
//     maxAge: 12000,
//     path:'/admin',
//     secure:false,
//     signed:true
//   }
//   cookies.set('login','adm@aa.com',options);
//   res.end('cookie set');
// }).listen(port,function(){
//   console.log('listen..',port);  
// });
// =============================== cookie-parser ====================

// app.use(cookieParser('secret'));

// app.get('/1', function (req, res) {
//   res.cookie('frst', 'notfrst', {
//     maxAge: new Date(Date.now() + 7),
//     path: '/1',
//     signed: true
//   });
//   console.log('req.headers.cookie',req.headers.cookie);
//   console.log('*********************');

//   console.log('req.cookies',req.cookies);

//   res.end();
// }).listen(port, function () {
//   console.log('listen..', port);
// });
// =============================== cookie-session ================

// app.use(cookieSession({name:"session",keys:['key1','key2'],maxAge:12000,signed:true}));

// app.get('/',function(req,res){
// console.log(req.ip);
// console.log(req.query);
//   if (req.session.isNew){
//     console.log('session created'); 
//   }
//   req.session.views = (req.session.views||0)+1;
// res.end(`page visited : ${req.session.views}`);

// }).listen(port,function(){
// console.log('listen...',port);
// });
// ================================= express-session ====================

// let  secretStr ='secretStr';
// app.use(expressSession({resave:false,saveUninitialized:false,secret:secretStr}));

// app.use('/',function(req,res){
//   if (!req.session.flag) {
//     console.log('session created');
//     req.session.flag=true;    
//     req.session.userName= 'Alex';
//    console.log(req.session);
//   }
// res.end(req.session.userName);
// }).listen(port,function(){
//   console.log('listen',port);  
// });
// =====================================  connect-mssql ================

var session = require('express-session');

let MSSQLStore = require('connect-mssql')(session);

let config = {
    user: 'test',
    password: '12345',
    server: 'localhost',
    database: 'testdb',
    port: 1433,
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 1000
    }
}
app.use(session({
    store: new MSSQLStore(config),
    resave: false,
    saveUninitialized: true,
    secret: 'secret'
}));
app.get('/', function (req, res) {
    console.log(req.session);
    req.session.numberOfRequests = req.session.numberOfRequests + 1;

    function reguestsCont() {
        return isNaN(req.session.numberOfRequests) ? 0 : req.session.numberOfRequests;
    }
    res.end('number of requests :' + reguestsCont() + '\n\r for more requests please refresh');
}).listen(port, function () {
    console.log('app running on port ' + port);
})