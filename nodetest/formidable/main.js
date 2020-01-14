"use strict";
let http = require("http");
let fs = require("fs");
let formidable = require("formidable");
let path = require("path");
let port = 8888;

// http.createServer(function(req, res) {
//     if (req.url == "/upload") {
//       let form = new formidable.IncomingForm(();
//       form.parse(req, function(err, fields, files) {
//         console.log(files);

//         let oldpath = files.upload.path;
//         let newpath = path.join(__dirname,'/upload'+ files.upload.name);

//         fs.rename(oldpath, newpath, function(err) {
//           if (err) {
//             throw err;
//           }
//           res.write("file sent");
//           res.end();
//         });
//       });
//     } else {
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.write(
//         '<form action="upload" method="post" encType="multipart/form-data">'
//       );
//       res.write('<input type="file" name="upload">');
//       res.write('<input type="submit" value="send file">');
//       res.write("</form>");
//      res.end();
//     }
//   })
//   .listen(port, function() {
//     console.log("listening on port ", port);
//   });

// =====================
