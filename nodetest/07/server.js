let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let displayHandler = require('./js/displayHandler');
let insertHandler = require('./js/insertHandler');
let editHandler = require('./js/editHandler');

let port = 8080;

app.set('views', __dirname+'/pages');
app.set('view engine','ejs');

app.use(express.static(__dirname+'/pages'));
app.use(bodyParser.json());
app.use(bodyParser.text());

app.get('/',displayHandler.displayAllItems);
app.get('/edit',displayHandler.displayAllItems);
app.get('/add',insertHandler.loadAddPage);
app.post('/add/newitem',insertHandler.addRow);
app.get('/edit/:id',editHandler.loadEditPage);
app.put('/edit/:id',editHandler.editItem);
app.delete('/edit/:id',editHandler.removeItem);

app.use(function(err,req,res,next){
    if (err) console.log(err);
    res.status(500).send('ooops... something wrong');
}).listen(port,function(){
    console.log('listen...',port);    
})