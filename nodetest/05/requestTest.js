let http = require('http');
let port = 8088;

let options = {
    port:port,
    host:'localhost',
    method:'POST',
    path:'/?a=1',
    headers:{'Content-Type':'text/plain'}
}

http.get(options);