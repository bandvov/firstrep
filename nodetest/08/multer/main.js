let express = require('express');
let app = express();
let fs = require('fs');
let mssql = require('mssql');
let imageHandler = require('./js/imageHandler');

let port = 8080;

let multer = require('multer');

let upload = multer({dest:__dirname+'/uploads/'});

app.get('/',function(req,res){
    res.sendFile(__dirname+'/pages/upload.html');    
})
app.get('/showall',function(req,res){
  imageHandler.getAllIMages(res);
});
app.post('/upload',upload.single('recfile'),function(req,res){
    let tmpPath = req.file.path;
    let targetPath = req.file.destination+req.file.originalname;

    let src = fs.createReadStream(tmpPath);
    let dest = fs.createWriteStream(targetPath);

    src.pipe(dest);
    src.on('end',function(){
        console.log('file added');
        imageHandler.saveImages(targetPath,res);
        fs.unlink(tmpPath,function(err){
            if (err) console.log(err);            
        });
        res.send('completed');
    });
})

app.listen(port, function () {
    console.log('listen...', port);
})