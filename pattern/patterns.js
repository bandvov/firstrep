"use script"


// ========================== namespace ====================
// let App;
// App = App || {};

// App.define = function (namespace) {
//     let parts = namespace.split('.');
//     parent = App;

//     if (parts[0] == 'App') {
//         parts = parts.slice(1);
//     }
//     for (let i = 0; i < parts.length; i++) {
//         if (typeof parent[parts[i]] == 'undefined') {

//             parent[parts[i]] = {};
//         } 
//         parent = parent[parts[i]];

//     }
//     console.log(parent);
//     return parent;
// }
// module = App.define('App.utils.dom');
// module = App.define('App.utils.ajax');
// // ==or=
// module = App.define('utils.dom');

// console.log(module == App.utils.dom);
// console.log(App);



// ======================== pattern module ===============
// let App;

// App = App || {};

// App.define = function (namespace) {
//     let parts = namespace.split('.'),
//         parent = App,
//         i;
//     if (parts[0] == 'App') {
//         parts = parts.slice(1);
//     }
//     for (i = 0; i < parts.length; i++) {
//         if (typeof parent[parts[i]] == 'undefined') {
//             parent[parts[i]] = {};
//         }
//         parent = parent[parts[i]];
//     }
//     return parent;
// }

// App.define('util.calc');
// App.define('util.dom');
// console.log(App);

// App.util.calc = (function () {
//     let x, y;

//     function _setX(val) {
//         x = val;
//     }

//     function _setY(val) {
//         y = val;
//     }

//     function _add() {
//         return x + y;
//     }
//     return {
//         setX: _setX,
//         setY: _setY,
//         add: _add
//     }
// }())


//     var calc = App.util.calc;
//     console.log(calc);

//     calc.setX(3);
//     calc.setY(3);


//     document.write(calc.add());

// =========================== isolated namespace =============

function App() {
    let args = Array.prototype.slice.call(arguments),
        callback = args.pop(),
        key;


    let modules = (args[0] && typeof args[0] == 'string') ? args : args[0];

    if (!(this instanceof App)) {
        return new App(modules, callback);
    }
    this.productName = 'isolated namespace sample';
    this.version = '1.0.0.0';

    if (!modules || modules == "*") {
        modules = [];
        for (key in App.modules) {
            if (App.modules.hasOwnProperty(key)) {
                modules.push(key);
            }
        }
    }
    for (let i = 0; i < modules.length; i++) {
        App.modules[modules[i]](this);
    }
    callback(this);

}
App.modules = {};

App.modules.dom = function (box) {
    box.getElem = function (e) {
        document.write('call from getElem ' + e + '<br>')
    }
    box.create = function (e) {
        document.write('call from create ' + e + '<br>')
    }
}

App('dom', function (box) {
    box.getElem('diiv');
})
App(function (box) {
    let e = box.getElem('dwa');
    box.create('try');
    document.write(box.productName, ' <br>');
    document.write(box.version, '<br>');

})


// ======================================inheritance through Proto ==============
// let base = {
//     name:'John'
// }

// function createObj(obj) {
//     function F(){}
//     F.prototype = obj;
//     return new F();
// }

// let derived = createObj(base);
// console.log(derived.name);


// ===============================inheritance ECMA5==============
// let base = {
//     name: 'John'
// }
// let derived = Object.create(base);

// або з додаванням нового свойства (метода)
// *****************
//  derived = Object.create(base,{surname:{value:'aga'}});

// console.log(derived.name);
// console.log(derived.surname);


// ==============================extend inheritance======================
// innerArray в parent і child спільний

// let base = {
//     name: 'John',
//   say: function() {
//         console.log(this.name);
//     },
//         innerArray:[1,2,3]
// }
// function extend(parent,child) {
//     child = child || {};
//     for (prop in parent) {
//         if (parent.hasOwnProperty(prop)) {
//             child[prop] = parent[prop];
//         }
//     }
//     return child;
// }
// let newObj = {};
// extend(base,newObj);
// newObj.name = 'araq'
// newObj.say();
// newObj.innerArray.push(4);
// console.log(base.innerArray);
// console.log(newObj.innerArray);



// ============================== extend deep =============================

let base = {
    name: 'John',
    say: function () {
        console.log(this.name);
    },
    innerArray: [1, 2, 3]
}

function extendDeep(parent, child) {
    let toString = Object.prototype.toString;
    let asStr = '[object Array]';

    child = child || {};

    for (let i in parent) {
        if (parent.hasOwnProperty(i)) {
            if (typeof parent[i] == 'object') {
                child[i] = (toString(parent[i] == asStr)) ? [] : {};
                extendDeep(parent[i], child[i]);
            } else {
                child[i] = parent[i];
            }
        }
    }
    return child;
}


let newObj = {};
extendDeep(base, newObj);
newObj.name = 'araq'
newObj.say();
newObj.innerArray.push(4);
console.log(base.innerArray);
console.log(newObj.innerArray);

// ============================== mixed inheritance ================

function mix() {
    let args, i, child = {};
    for (args = 0; args < arguments.length; args++) {
        console.log(`arguments[args] : ${arguments[args]}`);

        for (i in arguments[args]) {
            if (arguments[args].hasOwnProperty(i)) {
                child[i] = arguments[args][i];
                console.log(`child[i] : ${arguments[args][i]}`);

            }
        }
    }
    return child;
}
let ingredient1 = {
    egg: 5
};
let ingredient2 = {
    sugar: 'spoon'
};
let ingredient3 = {
    flour: 'cup'
};
let ingredient4 = {
    milk: 'bottle',
    wine: 200
};

console.log(mix(ingredient1, ingredient2, ingredient3, ingredient4));
// ======================================== pattern factory =====================
function Control() {};
Control.prototype.render = function () {
    document.write(`Control : ${this.name}<br>${this.control}`);
}
Control.create = function (type) {
    let newControl;
    if (typeof Control[type] !== 'function') {
        throw {
            name: 'error',
            message: `constructor ${type} not found`
        }
    }
    if (typeof Control[type].prototype.render !== 'function') {
        Control[type].prototype = new Control();
    }
    newControl = new Control[type]();
    return newControl;
}
Control.button = function () {
    this.name = 'button';
    this.control = `<input type="button" value="test button">`;
}
Control.text = function () {
    this.name = 'text';
    this.control = `<input type="text">`;
}
let btn = Control.create('button');
btn.render();
let txt = Control.create('text');
txt.render();

// ================================ pattern factory #2 =================

class Car {
    constructor(options) {

        this.doors = options.doors || 4;
        this.state = options.state || "brand new";
        this.color = options.color || "silver";
    }
}


class Truck {
    constructor(options) {
        this.state = options.state || 'used';
        this.wheelSize = options.wheelSize || 'Big';
        this.color = options.color || 'green';
    }
}

class VehicleFactory extends Car {
    constructor(options) {
        super(options);
    }

    createVechicle(options) {

        switch (options.vechicleType) {
            case 'car':
                this.vechicleClass = Car;
                break;
            case 'truck':
                this.vechicleClass = Truck;
                break;
        }
        return new this.vechicleClass(options);
    }
}





let carFactory = new VehicleFactory({});

let car = carFactory.createVechicle({
    vechicleType: 'car'
});
console.log(car);

console.log(carFactory instanceof Car);



// =============================== pattern iterator ====================


// =========================== pattern strategy ========================

let validator = {
    types: {},
    config: {},
    messages: [],
    validate: function (data) {
        let i, type, msg, invalid, checker;
        for (i in data) {
            if (data.hasOwnProperty(i)) {
                type = this.config[i];
                checker = this.types[type];
                if (!type) {
                    continue;
                }
                if (!checker) {
                    throw {
                        name: 'validator error',
                        message: `validator ${type} not found`
                    }
                }
                invalid = checker.validate(data[i]);
                if (invalid) {
                    msg = `value not correct for ${i}  ${checker.message}`;
                    this.messages.push(msg);
                }
            }
        }
        return this.showError();
    },
    showError: function () {
        return this.messages.length !== 0;
    }
};

validator.types.required = {
    validate: function (value) {
        return value === '';
    },
    message: 'should be filled'
}
validator.types.number = {
    validate: function (value) {
        return !/\d+/.test(value);
    },
    message: 'should be a number'
}

validator.config = {
    firstName: 'required',
    lastName: 'required',
    age: 'number'
}

let data1 = {
    firstName: 'adas',
    lastName: 'sada',
    age: 22
}
if (!validator.validate(data1)) {
    console.log(validator.messages);

}
// ===================================== pattern proxy ===========================
let http = {
    makeRequest: function (id, callback) {
        setTimeout(function () {
            callback(`data from server ${new Date().getTime()}<br>`);
        }, 3000);
    }
}
let proxy = (function () {
    let cache = {};
    return {
        makeRequest: function (id, callback) {
            if (cache[id]) {
                callback(cache[id]);

            } else {
                http.makeRequest(id, function (data) {
                    cache[id] = data;
                    callback(data);
                })
            }
        }
    }
})()

function get(id) {
    return document.getElementById(id);
}

function callback(data) {
    get('loader').style.display = 'none';
    get('output').innerHTML += data + '<br>';
}

get('requestBtn1').addEventListener('click', function () {
    get('loader').style.display = 'block';
    let id = get('forRequest').value;
    http.makeRequest(id, callback);
})
get('requestBtn2').addEventListener('click', function () {
    get('loader').style.display = 'block';
    let id = get('forRequest').value;
    proxy.makeRequest(id, callback);
}, false)
// ===================================== pattern mediator =====================
let mediator = {
    players: {},
    setup: function () {
        this.players.player1 = new Player('player1');
        this.players.player2 = new Player('player2');
        this.players.player3 = new Player('player3');
    },
    updateMediator: function () {
        let score = {
            player1: this.players.player1.points,
            player2: this.players.player2.points,
            player3: this.players.player3.points
        }
        scoreboard.update(score);
    },
    keypress: function (e) {
        e = e || window.event;
        if (e.keyCode == 49) {
            mediator.players.player1.updatePlayer();
            return;
        }
        if (e.keyCode == 50) {
            mediator.players.player2.updatePlayer();
        }
        if (e.keyCode == 51) {
            mediator.players.player3.updatePlayer();
        }
    }
}


let scoreboard = {
    element: null,
    update: function (score) {
        let i, msg = '';
        for (i in score) {
            if (score.hasOwnProperty(i)) {
                msg += `<p>${i} : ${score[i]}</p>`;

            }
        }
        this.element.innerHTML = msg;
    }
}

function Player(name) {
    this.name = name;
    this.points = 0;
}
Player.prototype.updatePlayer = function () {
    this.points++;
    mediator.updateMediator();
}
mediator.setup();
scoreboard.element = document.querySelector('p');

window.onkeypress = mediator.keypress;

// ===================================== pattern observer =====================


// ====================================================
// class Observer {
//     constructor() {
//         this.observers = [];
//     }
//     subscribe(fn) {
//         this.observers.push(fn);
//     }
//     unsubscribe(fn) {
//         this.observers = this.observers.filter((subscriber) => subscriber !== fn);
//     }
//     broadcast(text) {
//         this.observers.forEach((elem) => elem(text));
//     }
// }

// let blogObserver = new Observer();

// blogObserver.subscribe((text) => console.log('broadcast catched'));

// let textField = document.querySelector('.textField');
// let countField = document.querySelector('.countField');

// function getWordsCount(text) {
//     return text ? text.trim().split(/\s+/).length : 0;
// }
// textField.addEventListener('keyup', function () {
//     blogObserver.broadcast(textField.value);
// })

// blogObserver.subscribe(text => {
//     console.log(text);

//     countField.innerHTML = getWordsCount(text);
// })

//  ===================== pattern observer #2 =============

// class Emitter {
//     constructor() {
//         this.events = {};
//         console.log(this.events);

//     }
// }
// Emitter.prototype.on = function (type, listener) {
//     this.events[type] = this.events[type] || [];
//     this.events[type].push(listener);
// }

// Emitter.prototype.emit = function (type) {
//     if (this.events[type]) {
//         this.events[type].forEach((listener) => listener());
//     }
// }
// Emitter.prototype.remove = function (type) {
//     delete this.events[type];
// }

// let emtr = new Emitter();
// console.log(emtr);

// emtr.on('foo', function () {
//     console.log('message from foo');
// })
// emtr.on('bar', function () {
//     console.log('message from bar');

// })

// emtr.emit('foo');
// emtr.emit('bar');

// emtr.remove('bar');
// console.log(emtr);

// ==================== observer №3 ===============

class ObserverList {
    constructor() {
        this.observerList = [];
        console.log(this.observerList);

    }
    add(observer) {
        this.observerList.push(observer);
    }
    remove(name) {
        this.observerList = this.observerList.filter((observer) => observer !== name);
    }
    count() {
        return this.observerList.length;
    }
    get(index) {
        if (index > -1 && index < this.observerList.length) {
            return this.observerList[index];
        }
    }
}
console.log(ObserverList.prototype);

class Subject {
    constructor() {
        this.observers = new ObserverList();

    }
    addObserver = function (observer) {
        this.observers.add(observer);
    }
    removeObserver = function (observer) {
        this.observers.remove(observer);
    }
    notify = function (context) {
        let observersCount = this.observers.count();
        for (let i = 0; i < observersCount; i++) {
            this.observers.get(i).update(context);
        }
    }
}

console.log(Subject.prototype);

class Observer {
    constructor() {
        this.update = function () {
            //...
        }
    }
}

function extend(obj, extentsion) {
    for (let key in extentsion) {
        obj[key] = extentsion[key];
    }
}

var controlCheckbox = document.getElementById("mainCheckbox"),
    addBtn = document.getElementById("addNewObserver"),
    container = document.getElementById("observersContainer");

extend(controlCheckbox, new Subject());


controlCheckbox.onclick = function () {
    controlCheckbox.notify(controlCheckbox.checked);
}
addBtn.onclick = addNewObserver;

function addNewObserver() {
    let check = document.createElement('input');
    check.type = 'checkbox';
    extend(check, new Observer());
    check.update = function (value) {
        this.checked = value;
    }
    controlCheckbox.addObserver(check);
    container.appendChild(check);
}

// ==================== DOM pattern ==============
class Clock {
    constructor(template) {
        this.template = template;
    }

    render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }

    stop() {
        clearInterval(this.timer);
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
}
let clock = new Clock('hms');

// clock.start();


function findLetter(word) {
    let wordObj = {};
    word.split('').forEach((letter) => {

        if (wordObj.hasOwnProperty(letter)) {
            wordObj[letter]++;
        } else {
            wordObj[letter] = 1;
        }
    });
    console.log(wordObj);
    word = word.toLowerCase().split('').map((letter) => {
        if (wordObj[letter] > 1) {
            return ')';
        } else {
            return '(';
        }
    });
    return word.join('');
}
console.log(findLetter('sobaka'));



let x = '';
for (let i = 10; i > 0; i--) {

    for (let k = 0; k < 10; k++) {
        x += Array(i).join('*') + Array(k).join('0')+'\n';

    }    
}
console.log(x);