let mssql = require('mssql');

let session = require('express-session');
let MSSQLStore = require('connect-mssql')(session);

module.exports  = {
    config: {
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
    },
    createStore:function(){
        return new MSSQLStore(this.config);
    }
}