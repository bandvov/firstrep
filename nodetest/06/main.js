"use strict";
let mongoClient = require("mongodb").MongoClient;
let persons = require("./persons");
let assert = require("assert");
let express = require("express");
let mssql = require("mssql");
let app = express();
let port = 8080;

// let url = "mongodb://localhost:27017";
// let dbName = "collectionDB";
// let user = {
//   firstName: "Adam",
//   lastName: "Smith"
// };

// mongoClient.connect(url, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true

// }, function (err, client) {

//     if (err) throw err;
//     console.log('successfully connected');
//     let db = client.db(dbName);
//    db.collection('newUser').insertOne(user,function(err,result){
// if (err) throw err;
// console.log(result.ops);
//    });
// });

// =================================

// let user = {
//   firstName: 'Adam',
//   lastName: 'Smith'
// };
// let url = 'mongodb://localhost:27017';
// let dbName = 'thirdDB';
// mongoClient.connect(url, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }, function (err, client) {
//   console.log('sucessfully connected to thirdDB...');
//   let db = client.db(dbName);
//   let collection = db.collection('users');
//   collection.insertOne(user, function (err, result) {
//     console.log('succesfully inserted...');
//     console.log(result.ops);
//   });
//   client.close();
// });

// ==================================

// let url = 'mongodb://localhost:27017';
// let dbName = 'thirdDB';

// function addUsers(db, callback) {
//   db.collection('users').insertMany(persons, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   }, function (err, result) {
//     console.log('users added...');
//     console.log(result);
//     callback(result);
//   });
// }

// mongoClient.connect(url, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }, function (err, client) {
//   if (err) throw err;
//   console.log('suceffully connected...');
//   let db = client.db(dbName);
//   addUsers(db,function(){
//     client.close();
//   });
// });
// =============================

// let url = 'mongodb://localhost:27017';
// let dbName = 'thirdDB';

// mongoClient.connect(url, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }, function (err, client) {
//     console.log('successfully connected...');
//     if (err) throw err;
//     let db = client.db(dbName);
//     console.log(db);
//     let collection = db.collection('users');
//     collection.find({
//         age:{$gt:30}
//     }).toArray(function (err, result) {
//         if (err) throw err;
//         console.log('found the following...');
//         console.log(result);
//     });
//     client.close();
// });
// =====================================

let url = 'mongodb://localhost:27017';
let dbName = 'collectionDB';

function findUsers(db, prop, callback) {
    db.collection('users').find(prop).toArray(function (err, result) {
        if (err) throw err;
        console.log('*********found the folowing*********');
        console.log(result);
        callback(result);
    });
}
mongoClient.connect(url,{useNewUrlParser:true,useUnifiedTopology:true},function(err,client){
    let db = client.db(dbName);
    findUsers(db,{},function(){
client.close();
    });
});

// ==================================

// let url = 'mongodb://localhost:27017';
// let dbName = 'thirdDB';

// mongoClient.connect(url, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }, function (err, client) {
//     let collection = client.db(dbName).collection('users');
//     collection.find().toArray(function (err, result) {
//         if (err) throw err;
//         console.log('*******all collection \'users\'**********');
//         console.log(result);
//         console.log('*****************************************');
//         collection.deleteOne({
//             name: 'Sergey',
//             age: 37
//         }, function (err, result) {
//             if (err) throw err;
//             console.log('proз deleted...');
//             client.close();
//         });
//         collection.deleteMany({
//             name: 'Sergey'
//         }, function (err, result) {
//             if (err) throw err;
//             client.close();
//         });
//     });
// });

// =========================================
// ========================================= SQL connection =============================

// let config = {
//     user: 'test',
//     password: '12345',
//     server: 'localhost',
//     database: 'testdb',
//     port: 1433,
//     pool: {
//         max: 10,
//         min: 0,
//         idleTimeoutMillis: 30000
//     }
// }
// app.use(function (req, res) {
//     let connection = new mssql.ConnectionPool(config).connect(function (err) {
//         let request = new mssql.Request(connection);
//         request.query("SELECT * FROM items ", function (err, data) {
//             console.log(data.recordset);
//             res.send(data.recordset);
//         });
//     })
// }).listen(port, function () {
//     console.log('listen..', port);
// })
// ========================================== SQL query =====================================

// let config = {
//     user: 'test',
//     password: '12345',
//     server: 'localhost',
//     database: 'testdb',
//     port: 1433,
//     pool: {
//         max: 10,
//         min: 0,
//         idleTimeoutMillis: 3000
//     }
// }
// app.use(function (req, res) {
//     let connection = new mssql.ConnectionPool(config);
//     connection.connect(function (err) {
//         let request = new mssql.Request(connection);
//         request.query('SELECT * FROM items', function (err, data) {
//             if (err) {
//                 console.log(err);
//             } else {
//                 let html = '';
//                 data.recordset.forEach((elem) => {

//                     html += `${elem.id} | ${elem.name} | ${elem.description} | ${elem.completed?'yes':'no'} <br>`;

//                 });
//                 res.send(html);
//                 connection.close();
//             }
//         })
//     })
// }).listen(port,function(){
//     console.log('listen...',port);
// })

// =========================================== SQL Stream =======================

// let config = {
//     user: 'test',
//     password: '12345',
//     server: 'localhost',
//     database: 'testdb',
//     port: 1433,
//     pool: {
//         max: 10,
//         min: 0,
//         idleTimeoutMillis: 30000
//     }
// }
// app.use(function (req, res) {
//     mssql.connect(config, function (err) {
//         let html = '';
//         let request = new mssql.Request();
//         request.stream = true;
//         request.query('SELECT * FROM items');
//         request.on('recordset', function (recordset) {
//             console.log(recordset);

//         })
//         request.on('row', function (row) {
//             html += `<h2> ${row.id} ${row.name} ${row.description}`;
//         });
//         request.on('done', function (affected) {
//             console.log(affected);
//             res.send(html);
//         });
//         request.on('error', function (err) {
//             console.log(err);
//         });
//     });
// }).listen(port, function () {
//     console.log('listen..', port);
// })
// ======================================= SQL configured query =============================

// let config = {
//     user: 'test',
//     password: '12345',
//     server: 'localhost',
//     database: 'testdb',
//     port: 1433,
//     pool: {
//         max: 10,
//         min: 0
//     }
// }

// app.use(function(req,res){
//     let connection = new mssql.ConnectionPool(config).connect(function(err){
//         let ps = new mssql.PreparedStatement(connection);
//         ps.input('param',mssql.Int);
//         ps.prepare('SELECT * FROM items WHERE id=@param',function(err){
//             if (err) {console.log(err);
//             }else{
//                 ps.execute({param:2},function(err,data){
//                     console.log(data.recordset);
//                    res.send(data.recordset);
//                 });
//             }
//         })
//     })
// }).listen(port,function(){
//     console.log('listen...',port);
// });
// ============================================= SQL transaction =====================

// let config = {
//     user: 'test',
//     password: '12345',
//     server: 'localhost',
//     database: 'testdb',
//     port: 1433,
//     pool: {
//         max: 10,
//         min: 0
//     }
// }

// app.use(function (req, res) {
//     let connection = new mssql.ConnectionPool(config).connect(function (err) {
//         if (err) {
//             console.log(err);
//         } else {
//             let transaction = new mssql.Transaction(connection);
//             transaction.begin(function (err) {
//                 let request = new mssql.Request(transaction);
//                 request.query(" INSERT INTO items (id,name,description) VALUES (4,'test','testvalue')", function (err, data) {
//                     if (err) {
//                         console.log(err);
//                         transaction.rollback(function (err) {
//                             console.log('rollback successful');
//                         })
//                     } else {
//                         transaction.commit(function (err, data) {
//                             console.log('successfully commited');
//                             res.end('successfully commited');
//                         });
//                     }
//                 });
//             });
//         }
//     })
// }).listen(port, function () {
//     console.log('listen...', port);
// })
// ==================================== TO DO APP ====================
