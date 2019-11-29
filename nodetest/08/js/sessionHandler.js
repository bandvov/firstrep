let session = require('express-session');
let MSSQLStore = require('connect-mssql')(session);
let mssql = require('mssql');
module.exports = {
    createStore: function () {
        let config = {
            user: 'test',
            password: '12345',
            server: 'localhost',
            database: 'testdb',
            port: 1433,
            pool: {
                max: 10,
                min: 0,
                idleTimeoutMillis: 30000
            }
        }
        return new MSSQLStore(config);
    }
}