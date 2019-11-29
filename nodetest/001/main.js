"use strict";
let evt = require('events');
let fileReader = require('./readfile.js');
let emt = new evt.EventEmitter();
let reader = new fileReader.Reader();
reader.readDataFromFile('file.js', function (response) {
    console.log(response);
});


emt.on('newListener', function (event) {
    if (event == 'myEvent') {
        console.log('new listener was added');

    }
});
emt.on('removeListener', function (event) {
    if (event == 'myEvent') {
        console.log('myEvent have been removed');
    }
});
emt.on('myEvent', test);
console.log(emt.listenerCount('myEvent'));
emt.removeListener('myEvent', test);
console.log(emt.listenerCount('myEvent'));

function test() {
    console.log('test event');
}
emt.on('ev', function () {
    console.log('ordinary');
    console.log(this);
});
exports.x = 10;
emt.on('ev', () => {
    console.log('arrow');
    console.log(this);

});
emt.emit('ev');
for (let i = 0; i < 9; i++) {
    (function () {
        let current = i;
        emt.on('annEvent', function () {
            console.log(current);
        });
    })();
}
console.log('emt has',emt.listenerCount('annEvent'),'listeners');
emt.emit('annEvent');
emt.on('secEvent',function(){
    console.log('text from my second event');
});
emt.on('secEvent',function(){
    console.log('more data from my second event');
});

let listeners= emt.listeners('secEvent');
for (let i=0;i<listeners.length;i++) {
    listeners[i]();
    
}