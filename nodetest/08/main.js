// let express = require('express');
// let app = express();

// let cookieParser = require('cookie-parser');
// let session = require('express-session');
// let bodyParser = require('body-parser');

// app.use(bodyParser.json());

// let port = 8080;


// let users = [{
//     username: 'admin',
//     password: '12345'
// }, {
//     username: 'foo',
//     password: 'bar'
// }];
// let  sessionHandler= require('./js/sessionHandler');
// let store = sessionHandler.createStore();

// app.use(cookieParser());

// app.use(session({
//     store: store,
//     resave: false,
//     saveUninitialized: true,
//     secret: 'secret'
// }))

// app.get('/', function (req, res) {
//     res.sendFile(__dirname + '/pages/index.html');
// })
// app.post('/login', function (req, res) {
//    console.log(req.body);
//     let foundUser;
//     for (let i = 0; i < users.length; i++) {


//         let u = users[i];
//         if (u.username == req.body.username && u.password==req.body.password) {

//             foundUser=u.username;
//             break;
//         }
//     }
//     if (foundUser!=undefined) {
//         req.session.username= foundUser;
//         console.log('login succeded : ',req.session.username);

//         res.send(`login successful! session ID : ${req.session.id}, user : ${req.session.username}`);
//     }else{
//         console.log('login failed',req.body.username);

//         res.status(401).send('login failed');
//     }
// })

// app.listen(port, function () {
//     console.log('listen...', port);
// })
// ============================

let express = require('express');
let app = express();
let session = require('express-session');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');

let port = 8080;

app.set('views', __dirname + '/pages');
app.set('view engine', 'ejs');

app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static(__dirname + '/pages/'));
let sessionHandler = require('./js/sessionHandler');
let store = sessionHandler.createStore();

app.use(session({
    store: store,
    resave: false,
    saveUninitialized: true,
    secret: 'secret'
}))

let users = [{
    username: 'admin',
    password: '12345'
}, {
    username: 'foo',
    password: 'bar'
}];

app.get('/', function (req, res) {
    res.render('signup');
})
app.post('/signup', function (req, res) {
    let user = {
        username: req.body.username,
        password: req.body.password
    }
    users.push(user);
    console.log(`user : ${req.body.username} added`);
    res.status(200).send('Ok');
})
app.get('/login', function (req, res) {
    res.render('login');
})

app.post('/login', function (req, res) {
    let foundUser;
    for (let i = 0; i < users.length; i++) {
        let u = users[i];
        if (u.username == req.body.username && u.password == req.body.password) {
            foundUser = u.username;
        }
    }
    if (foundUser != undefined) {
        req.session.username = foundUser;
        console.log(`login succeded user ${req.session.username}`);
        res.send(`login successfull! session ID : ${req.session.id}, user ${req.session.username} logged in`);
    } else {
        res.status(401).send('login failed')
    }
})
app.get('/logout', function (req, res) {
    console.log(`user ${req.session.username} logged out`);

    req.session.username = '';
    res.send(`user logged out`);
})
app.get('/admin', function (req, res) {
    if (req.session.username == 'admin') {
        res.render('admin_page');
    } else {
        res.status(403).send('access denied');
    }
})
app.get('/user', function (req, res) {
    let foundUser;
    for (let i = 0; i < users.length; i++) {
        let u = users[i];
        if (req.session.username == u.username) {
            foundUser = u.username;
        }
    }
            if (foundUser != undefined) {

                console.log(`user ${req.session.username} requested user page`);
                res.render('user_page', {
                    data: foundUser
                });
            } else {
                res.send('access denied');
            }
})

app.listen(port, function () {
    console.log('listen...', port);
})