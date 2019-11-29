let mssql = require('mssql');

let config = {
    user:'test',
    passwort:'12345',
    server:'localhost',
    database:'testdb',
    port:1433,
    pool:{
        max:10,
        min:0
    }
}