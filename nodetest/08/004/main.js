let express = require('express');
let app = express();
let cookieParser = require('cookie-parser');
let session = require('express-session');
let bodyParser = require('body-parser');

let port= 8080;

let sessionHandler = require('./js/sessionHandler');
let store = sessionHandler.createStore();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static(__dirname+'/pages/'));

app.set('views',__dirname+'/pages');
app.set('view engine','ejs');

app.use(session({
    store:store,
    resave:false,
    saveUninitialized:true,
    secret:'secret'
}))

let handlers = require('./js/queries');
var signup = require('./js/signup'); 

app.get('/',function(req,res){
    res.render('sign_up');
})
app.get('/login',function(req,res){
    res.render('login');
})
app.post('/login',handlers.checkUser);
app.post('/login',handlers.checkPass);

app.get('/all',handlers.getUsers);
app.post('/signup',handlers.addUser);

app.listen(port,function(){
    console.log('listen...',port);    
})