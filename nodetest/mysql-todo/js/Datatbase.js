const mysql = require("mysql");

class Database {
  constructor(config) {
    this.connection = mysql.createConnection(config);
  }
  query(fn,sql){

    return(...args)=> {
      return new Promise((resolve, reject) => {
        fn.query(sql, ...args, (err, rows) => {
          if (err) return reject(err);
          resolve(rows);
        });
      });
    }
  }
  close() {
    return new Promise((resolve, reject) => {
      this.connection.end(err => {
        if (err) return reject(err);
        resolve();
      });
    });
  }
}
const myPromise = con => {
  return (...args) => {
    return new Promise((resolve, reject) => {
        con(...args,(err,data)=>{
            if (err) {
                console.log(err);
                return reject(err)
            }
          return  resolve(data)
        })
    });
  };
};

module.exports ={ Database,myPromise};
