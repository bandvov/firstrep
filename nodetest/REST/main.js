let express = require('express');
let app = express();

let port = 8080;

let  router = require('./route.js');

app.use('/api',router.rout);

app.listen(port,function(){
    console.log('listen..',port); 
});

// ======================== CORS db ==================

// let express = require('express');
// let app = express();
// let router = express.Router();
// let mssql = require('mssql');

// let port = 8080;

// let config = {
//     user: 'test',
//     password: '12345',
//     database: 'testdb',
//     server: 'localhost',
//     port: 1433,
//     pool: {
//         min: 0,
//         max: 10,
//         idleTimeoutMillis: 30000
//     }
// }
// let connection = new mssql.ConnectionPool(config).connect(function (err) {
//     if (err) console.log(err);
// })

// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

// router.get('/', function (req, res) {
//     let request = new mssql.Request(connection);
//     request.query('SELECT * FROM items', function (err, data) {
//         if (err) console.log(err);
//         res.status(200).send(`selected items : ${JSON.stringify(data.recordset)}`);
//     });
// })

// router.get('/:id', function (req, res) {
//     let ps = new mssql.PreparedStatement(connection);
//     let inserts = {
//         id: parseInt(req.params.id)
//     }
//     ps.input('id', mssql.Int);
//     ps.prepare('SELECT * FROM items WHERE id=@id', function (err) {
//         if (err) console.log(err);
//         ps.execute(inserts, function (err, data) {
//             if (err) console.log(err);
//             console.log('url', req.url);
//             res.status(200).send(`selected item with ID \"${req.params.id}\" - ${JSON.stringify(data.recordsets)}`);
//             console.log(`selected item with ID \"${req.params.id}\" sent`);            
//             ps.unprepare();
//         });
//     });
// });

// router.post('/', function (req, res) {
//     let request = new mssql.Request(connection);
//     request.query('INSERT INTO items (name,description,completed) VALUES (@name,@description,@completed)', function (err, data) {
//         if (err) console.log(err);
//         console.log(`url: ${req.url}`);
//         res.status(200).send('sample item added to database');
//     });
// });
// router.put('/:id', function (req, res) {
//     let ps = new mssql.PreparedStatement(connection);
//     let inserts = {
//         id: parseInt(req.params.id)
//     }
//     ps.input('id', mssql.Int);
//     ps.prepare("UPDATE items SET name='new Name',description='some other text',completed=0 WHERE id=@id", function (err) {
//         if (err) console.log(err);
//         console.log(`url ${req.url}`);
//         ps.execute(inserts, function (err) {
//             if (err) console.log(err);
//             console.log(`PUT ${req.url}`);
//             res.status(200).send(`item by ID : ${req.params.id} changed!`);
//             ps.unprepare();
//         });
//     });
// });

// router.delete('/', function (req, res) {
//     let ps = new mssql.PreparedStatement(connection);
//     let inserts = {
//         id: req.params.id
//     }
//     ps.input('id', mssql.Int);
//     ps.prepare('DELETE * FROM items WHERE id=@id', function (err) {
//         if (err) console.log(err);
//         ps.execute(inserts,function(err,data){
//             if (err) console.log(err);
//             res.status(200).send(`item with ID : ${req.params.id} deleted!`);
//             ps.unprepare();            
//         });
//     });
// });
// app.use('/api',router);

// app.listen(port,function(){
//     console.log('listen...',port);    
// });
