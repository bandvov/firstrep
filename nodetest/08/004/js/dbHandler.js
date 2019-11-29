let mssql = require('mssql');

module.exports = {
    config:{
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
    createConnection: function() {
      let connection= new mssql.ConnectionPool(this.config);
      return connection.connect(function(err){
           if (err) console.log(err);            
        })
    }
}