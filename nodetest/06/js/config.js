let mssql = require('mssql');

let config = {
    user:'test',
    password:'12345',
    server:'localhost',
    database:'testdb',
    port:1433,
    pool:{
        max:10,
        min:0,
        idleTimeoutMillis:30000
    }
}

let connection = new mssql.ConnectionPool(config);
let pool =connection.connect(function(err){
    if (err) console.log(err);    
})

module.exports = pool;