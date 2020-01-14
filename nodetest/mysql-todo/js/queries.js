const dbConfig = require("./dbConfig");
const mysql = require("mysql");
const mysql2 = require("mysql2");
const Database = require("./Datatbase").Database;
const database = new Database(dbConfig);

let html = "";
let myPromisify = fn => {
  return (...args) => {
    return new Promise((resolve, reject) => {
      fn.query(...args, (err, data) => {
        if (err) {
          console.log(err);

          return reject(err);
        }
        return resolve(data);
      });
    });
  };
};

let getAllItems = async (req, res) => {
  html = "";
  let connection = await mysql.createConnection(dbConfig);
  myPromisify(connection)("SELECT * FROM todo").then(result => {
    console.log(result.fields);

    result.map(item => {
      if (req.url === "/") {
        html += `<tr><td>${item.name}</td><td>${item.description}</td><td>${
          item.completed ? "yes" : "no"
        }</td></tr>`;
      } else {
        return (html += `<tr><td><span class="glyphicon glyphicon-pencil" id=${
          item.id
        }>&nbsp;</span>${item.name}</td><td>${item.description}</td><td>${
          item.completed ? "yes" : "no"
        }</td></tr>`);
      }
    });
    if (req.url === "/") {
      res.render("index", { data: html,buttons:true });
    } else {
      res.render("index", { data: html,buttons:false });
    }
  });
};

module.exports = getAllItems;
