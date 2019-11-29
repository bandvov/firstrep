let bodyParser = require('body-parser');
let express = require('express');
let app = express();
let displayHandler = require('./js/displayHandler');
let insertHandler = require('./js/insertHandler');
let path = require('path');

let port = 8080;

app.set('views',__dirname+'/pages');
app.set('view engine','ejs');

app.use(express.static(path.join(__dirname,'pages')));
app.use(bodyParser.json());
app.use(bodyParser.text());

app.get('/',displayHandler.displayAllItems);
app.get('/add',insertHandler.loadAddPage);
app.post('/add/newitem',insertHandler.addRow);

app.use(function(err,req,res,next){
    if (err) console.log(err.stack);
    res.status(500).send('oops.. something went wrong');
})
app.listen(port,function(){
    console.log('listen..',port);
    
})