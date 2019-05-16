'use strict';
// var nicknames = ['di', 'boo', 'punkeye'];
// nicknames.size=3;
// for (var nickname of nicknames) {
//     alert(nickname);
// }


// var calculator = {
//     sum: function() {
//       return this.a + this.b;
//     },

//     mul: function() {
//       return this.a * this.b;
//     },

//     read: function() {
//       this.a = +prompt('a?', 0);
//       this.b = +prompt('b?', 0);
//     }
//   }

//   calculator.read();
//   alert( calculator.sum() );
//   alert( calculator.mul() );

// //-------------------------------------

// function Calculator() {

//   this.read = function() {
//     this.a = +prompt('a?', 0);
//     this.b = +prompt('b?', 0);
//   };

//   this.sum = function() {
//     return this.a + this.b;
//   };

//   this.mul = function() {
//     return this.a * this.b;
//   };
// }

// var calculator = new Calculator();
// calculator.read();

// alert( "Сумма=" + calculator.sum() );
// alert( "Произведение=" + calculator.mul() );

// //--------------------------------

//   function Accumulator(startingValue) {
//     this.value = startingValue;

//     this.read = function() {
//       this.value += +prompt('Сколько добавлять будем?', 0);
//     };

//   }

//   var accumulator = new Accumulator(1);
//   accumulator.read();
//   accumulator.read();
//   alert( accumulator.value );
// *//*
//   var age = prompt('Сколько вам лет?');

// // var sayHi;

//    if (age >= 18) {
//    sayHi = function(){
//    alert('Прошу Вас!');
//    }
//   } else {
//     sayHi = function(){
//        alert('До 18 нельзя');
//     }
//   }

//   sayHi();
// //---------------------
// function a() {}

// function b(arg) {
//   arg.age = 7;
// };
// b(a);
// console.log(a.age)


// function ask(question, yes, no){
//   if (confirm(question)) yes()
//   else no();
// }
// function showOk(){
//   alert('ви погодились');
// }
// function showCancel(){
//   alert('ви не погодились');
// }
// ask ('ви згодні?', showOk, showCancel);
// */
// /*
// //Коротшмй варіант
// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// ask(
//   "Вы согласны?",
//   function() { alert("Вы согласились."); },
//   function() { alert("Вы отменили выполнение."); }
// );
// //--------------------------------------------------
// function ask(question,yes,no){
// if (confirm(question)) yes()
// else no();
// }
// function yes(){
//   alert('Vy zgodni');
// }function no(){
//   alert('ne zgodni');
// // }

// ask('zgoden??',yes,no);
// var user = {
//   name: 'Василий'
// };

// user.sayHi = function() { // присвоили метод после создания объекта
//   alert('Привет! '+this.name);
// };

// // Вызов метода:
// user.sayHi();

// var user = {
//   name: 'Василий',

//   sayHi: function() {
//     showName(this); // передать текущий объект в showName
//   }
// };

// function showName(namedObj) {
//   alert( namedObj.name );
// }

// user.sayHi(); // Василий

// var user = {
//    firstName: "Вася" };
// var admin = {
//   firstName: "Админ" };

// function func() {
//   alert( this.firstName );
// }
// user.f = func;
// admin.g = func;
// // this равен объекту перед точкой:
// user.f(); // Вася
// admin.g(); // Админ
// admin['g'](); // Админ (не важно, доступ к объекту через точку или квадратные скобки)

// function getFee(isMember){
//   return (isMember ? '2.0' : '10.0');
// }
// alert (getFee(true));

// //------------------------------


// //----------------------------

// function showMessage(from,text){

//   if(text ===undefined){
//     text ='текс не передано';
//   }
//   alert(from+ ':' +text);
// }


// showMessage('Vova ' , ' hello everyone');
// showMessage('vova');

// -------------------------
// function checkAge(age){
// if(age>18){
// return true;
// }else{
//  return confirm('Batky dozvolyly?');
//  }
// }
//  var age= prompt('Skilly vam rokiv?');

//  if (checkAge(age)){
//    alert('dozvoleno');
//    }else{
//      alert('zaboron');

//    }

// //-------------------------------------

// function checkAge(age){
// return (age>18) ? true : confirm('Batky dozv?');
// }
// var age = prompt('Vam rokiv');

// if (checkAge (age)){
//   alert('dozv');
// }else{
//   alert('zaboron');
// // }

// //--------------------------------------------



// function pow(x,n){
//   var result = x;
//   while (n > 1){
//   result = result*x;
//   n--;
//   }
//   return result;
//   }
//   var x = +prompt('Вводи х', '');
//   var n = +prompt('Вводи n', '');
//   if(n <= 0){
//   alert('Lososni');
//   } else{
//   alert(pow(x,n));
// //   }

// //----F------------------------------------

//  function pow() {
//     return alert(Math.pow(x,n));
//  }
//    var x = prompt('vvedy');
//   var n = prompt('stepen');

//   pow();

// -------------------------


// x = prompt('chyslo');
// n = prompt('stepen');

// var a = x**n;

// if(n<=0 ? alert('pomylka') : alert(a));

// --------------------------------------------------

// неявно оголошена переменная message
// function showMessage() {

//    message = 'Привет'; // без var!
// }

// showMessage();

// alert( message );
// }
// ----------------------------------------
// var hello = ('hello');
// var num = 244.444 ;
// alert ( hello.toUpperCase().concat(' vsim'));

// let simpleStr = 'my string';
// let simpleObj = new String('some string object');

// function newline(str) {
//   document.write(str + '<br>>');
//   document.write('=========================<br>');
// }

// newline(simpleStr);
// newline(simpleObj);

// // ==========створення функції-конструктора


// var Friend = function (mood) {
//     this.mood = mood;
//     if (mood === 'nice')
//       this.talk = function () {
//         alert('helo whats up');
//       };
//     else if (mood === 'bad')  {
//         this.talk = function () {
//           alert('Sorry i dont wonna talk with you');
//         };
//       } else {
//         this.talk = function () {
//           alert('Hi');
//         };
//       }
//     }
//     let FriendMood = prompt('Type friend mood(nice/bad)');
//     let David = new Friend(FriendMood);
//     David.talk();


// var double = function (value) {
//   if (double == isNaN) {
//     return NaN;
//   }

//   return value * 2;
// };

// console.log(double(0));
// console.log(double(2));
// console.log(double(5));

// var pools = document.querySelectorAll('.pool');
// var blocks = document.querySelectorAll('.el');

// pools[0].removeChild(blocks[1]);
// pools[1].appendChild(blocks[1]);
// pools[1].appendChild(blocks[4]);
// pools[0].appendChild(blocks[4]);
// pools[0].insertBefore(blocks[4],blocks[5]);
// pools[0].appendChild(blocks[2].cloneNode());
// pools[1].appendChild(blocks[2].cloneNode(true));
// blocks[2].innerHTML = 111;
// =================передача по ссилці=====================

var foo = {
  a: 1
};
var bar = foo;
foo.a++;
// console.log(bar.a);

// foo = null;
// console.log(foo);
// console.log(bar.a);


// let a = [5, 4, 8, 7, 6];


// var i = prompt('введм число');

// function countdown(i) {
//   document.write('залишилось:' + i + '<br>');
//   if (i <= 1) { // base
//     return;
//   } else { // recursive case
//     countdown(i - 1);
//   }
// }
// countdown(i);

// var x = prompt('vvedy chyslo');

// function fac(x) {
//   if (x <= 1) {
//     return 1;
//   } else {
//     return x * fac(x - 1);
//   }
// }
// document.write('factorial chysla' + x + '=' + fac(x) + '<br>');
// fac(x);

// var n = prompt('vvedy chyslo');

// function rec(n) {
//   document.write('sproba' + n + '<br>');
//   if (n <= 0) {
//     return;
//   } else {
//     rec(n - 1);
//   }
// }
// rec(n);
document.querySelector('.alerting').addEventListener('click', alerting);

function alerting() {
  var div = document.createElement('div');
  div.className = 'alert';
  div.innerHTML = "<strong>CHUDOVO</strong> Vy prochytaly ce povidomlennia.";
  var parentElem = document.body;
  parentElem.insertAdjacentElement("afterbegin", div);
  var div2 = div.cloneNode(true);
  div2.className = 'alert1';
  div2.innerHTML = 'second Alert message!!';
  parentElem.insertBefore(div2, div.nextSibling);
}

var list = ['first', 'second', 'third', 'fourth'];
var ul = document.querySelector('ul');
ul.className = 'alert1';
ul.style.width = '300px';
for (var i = 0, ln = list.length; i < ln; i++) {
  var newLi = document.createElement('li');
  ul.appendChild(newLi);
  newLi.innerHTML = list[i];
  // newLi.innerText = '4646bdfg';
}

// function tableIns(arr) {
//   document.write("<table border='1' width='200'>");
//   for (var i = 0; i < arr.length; i++) {
//     document.write('<tr>');
//     for (var j = 0; j < arr[i].length; j++) {
//       document.write('<td>' + arr[i][j] + '</td>');
//     }

//     document.write('<br>');
//     document.write('</tr>');
//   }
//   document.write('</table>');
// }
// var arr1 = new Array(1, 2, 3);
// var arr2 = new Array(4, 5, 6);
// var arr3 = new Array(7, 8, 9);
// var arr = new Array(arr1, arr2, arr3);

// tableIns(arr);

// let a = -1 ? 'foo' ? null : -1 : 1;
// document.write(a);

var arr = [1, 2, 3, 4, 5];

// function getSum(arr){
//   // створюєм пустий масив
//   var result= [];
//   if(!arr.length) return result;
// // берем елементи з масиву
//   arr.reduce(function(sum,item){
//   // добавляємо curentValue як елементи в новий масив
//     result.push(sum);
//     // отримуємо результат дій
//     return sum + item;
//   });
//   // отримуємо новий масив
//   return result;
// }

// document.write(getSum(arr));


window.onload = function () {
  document.getElementById('answerbutton').onclick = function () {
    var radioButtons = document.getElementsByName('answer');
    console.log(radioButtons);
    var res = "";
    for (var i = 0; i < radioButtons.length; i++) {

      res += radioButtons[i].value + ' ' + radioButtons[i].checked + '\r\n';

    }
    alert(res);
  }
};




function selectFirstChild() {
  var list = document.querySelector('#list');
  var node = list.firstChild;
  if (node != null) {
    node.style.color = 'red';
  }
}
document.querySelector('#last').onclick = function () {
  var list = document.querySelector('#list');
  var node = list.lastChild;
  if (node != null) {
    node.style.color = 'plum';
  }
}

var node = null;

document.querySelector('#next').onclick = function () {
  resetColor();
  if (node == null) {
    var list = document.querySelector('#list');
    node = list.firstChild;
    node.style.color = 'black';
  }
  node = node.nextSibling;
  node.style.color = 'orange';
}
var node = null;
document.querySelector('#prev').onclick = function () {
  resetColor();
  if (node == null) {
    var list = document.querySelector('#list');
    node = list.lastChild;
    node.style.color = 'black';
  }
  node = node.previousSibling;
  if (node != null) {
    node.style.color = 'darkorange';
  }
}
document.querySelector('#createitem').onclick = function () {
  var list = document.querySelector('#list');
  var li = document.createElement('li');
  li.innerHTML = "NEW ITEM";
  list.appendChild(li);
}
document.querySelector('#deleteitem').onclick = function () {
  var list = document.querySelector('#list');
  var item = list.lastChild;
  if (item != null) {
    list.removeChild(item);
  }
}




function resetColor() {
  var lilist = document.querySelectorAll('li');
  for (var i = 0; i < lilist.length; i++) {
    lilist[i].style.color = 'black';
  }
}

// var arrbs = ['a', 'b', 'c', 'h', 'f'];
// console.log(Object.keys(arrbs));

var str = "Ослик Иа-Иа посмотрел на виадук"; // ищем в этой строке
var target = "рак"; // цель поиска

var pos = 0;
while (true) {
  var foundPos = str.indexOf(target, pos);
  if (foundPos == -1) break;

  alert(foundPos); // нашли на этой позиции
  pos = foundPos + 1; // продолжить поиск со следующей
}


var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};
// var max = 0;
// var maxName = '';
// for (var name in salaries) {
//   if (max < salaries[name]) {
//     max = salaries[name];
//     maxName = name;
//   }
// }

// alert(maxName||'no workers');


var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250,
  "Коля": 'сто'
};
// функція збільшує числові значення свойст на *2

// function isNumeric(n) {
//   return !isNaN(parseFloat(n)) || isFinite(n);
// }
// function multiply(obj){
//   for (var key in obj) {
//     if(isNumeric(obj[key])) {
//       obj[key] *= 5;
//     }
//   }
// }

// multiply(salaries);

// document.write(salaries['Вася'] + "<br>" + salaries['Петя']);






var btn = document.querySelector('#myBtn');
var modal = document.querySelector('#myModal');
var span = document.querySelector('.close');

btn.onclick = function () {
  modal.style.display = "block";
}
span.onclick = function () {
  modal.style.display = 'none';
  window.open('http://google.com', 'thanks for visiting');
}

// window.onclick = function(event){
//  if(event.target ==modal) {
//    modal.style.display = "none";
//  }
// }



document.querySelector('#in').oninput = function () {
  const mnozhytel = 4;
  let str = this.value;
  let result = '';
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    code += mnozhytel;
    result += String.fromCharCode(code);
  }
  document.querySelector('#out').innerHTML = result;
}


function Counter(root) {
  this.root = root;
  this.val = 0;
  this.step = 1;

  this.create();
  this.initEvents();
}

Counter.prototype.create = function () {
  this.root.innerHTML = '<input type="button" class="plus" value="+"><span class="val">' + this.val + '</span>';
  this.plusEl = document.querySelector('.plus');
  this.valEl = document.querySelector('.val');
};
Counter.prototype.initEvents = function () {

  var self = this;
  this.plusEl.addEventListener('click', function () {
    self.valEl.innerHTML = (self.val += self.step);
  });
};

var root = document.querySelector('#counter');
var counter = new Counter(root);
counter.create();
counter.initEvents();

var counter = 0;
document.querySelector('#counter1').onclick = count;

function count() {
  document.querySelector('#c1').innerHTML = counter;
  return counter++;
}
setInterval(count, 60000);




var a = 51;

switch (a) {
  case 3:
    alert('Маловато');
    break;
  case 4:
    alert('В точку!');
    break;
  case 5:
    alert('Перебор');
    break;
  default:
    alert('Я таких значений не знаю');
}

// var data = [{a : true, b : false}, {a : false, b : true}];
// var result = false;
// var sample;
// while (sample = data.pop()){
//   result = sample.a;
// }
// console.log(result);




var lookup = {
  "alpha": "Adams",
  "bravo": "Boston",
  "charlie": "Chicago",
  "delta": "Denver",
  "echo": "Easy",
  "foxtrot": "Frank"
};
var result = '';

function phoneticLookup(val) {

  result = lookup[val];
  return result;
}
var aa = phoneticLookup('delta');

console.log(aa);





var collection = {
  "2548": {
    "album": "Slippery When Wet",
    "artist": "Bon Jovi",
    "tracks": [
      "Let It Rock",
      "You Give Love a Bad Name"
    ]
  },
  "2468": {
    "album": "1999",
    "artist": "Prince",
    "tracks": [
      "1999",
      "Little Red Corvette"
    ]
  },
  "1245": {
    "artist": "Robert Palmer",
    "tracks": []
  },
  "5439": {
    "album": "ABBA Gold"
  }
};

function updateRecords(id, prop, value) {
  if (prop === "tracks" && value !== "") {
    if (collection[id][prop]) {
      collection[id][prop].push(value);
    } else {
      collection[id][prop] = [value];
    }
  } else if (value !== "") {
    collection[id][prop] = value;
  } else {
    delete collection[id][prop];
  }

  return collection;

}
var x = updateRecords(5439, "artist", "ABBA");
console.log(x);



var contacts = [{
    "firstName": "Akira",
    "lastName": "Laine",
    "number": "0543236543",
    "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
    "firstName": "Harry",
    "lastName": "Potter",
    "number": "0994372684",
    "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
    "firstName": "Sherlock",
    "lastName": "Holmes",
    "number": "0487345643",
    "likes": ["Intriguing Cases", "Violin"]
  },
  {
    "firstName": "Kristian",
    "lastName": "Vos",
    "number": "unknown",
    "likes": ["JavaScript", "Gaming", "Foxes"]
  }
];


function lookUpProfile(name, prop) {
  // Only change code below this line
  for (var i = 0; i < contacts.length; i++) {

    if (contacts[i].firstName === name) {
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";

}

var t = lookUpProfile("Kristian", "likes");
console.log(t);


// function randomRange(myMin, myMax) {
//   return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin; // Change this line
// }

// var myRandom = randomRange(5, 15);
// console.log(myRandom);



// const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
// const squareList = (arr) => {
//   "use strict";
//   // change code below this line
//   var squaredIntegers = arr.filter((num) => num > 0 && num % parseInt(num) === 0).map((num) => Math.pow(num, 2));
//   // change code above this line
//   return squaredIntegers;
// };
// // test your code
// const squaredIntegers = squareList(realNumberArray);
// console.log(squaredIntegers);



var arr = [4, 2.3, -42, 3.9, 2.5, 2];
// запис в масив тільки цілих парних чисел
var squaredIntegers = []; 
arr.map(function(num) {
	while(num % 2 == 0){
    return squaredIntegers.push(Math.pow(num,2));
  }
});
console.log(squaredIntegers);




// задано value значення 1 за замовчуванням
const increment = (function () {
  "use strict";
  return function increment(number, value = 1) {
    return number + value;
  };
})();
// console.log(increment(5, 2)); // returns 7
// console.log(increment(5)); // returns 6+-

var arr = [6, 89, 3, 45];
var maximus = Math.max(...arr);
// console.log(maximus);

document.querySelector('#in').oninput = function () {
  var offset = 5, i, out, str;
  out = '';
  str = this.value;
  for (i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    code = code + offset;
    out += String.fromCharCode(code);
  }
  document.querySelector('#out').innerHTML = out;
}
// var count = 1126;
// // console.log(count);
// var redirect = "#";

// function countDown() {
//   var timer = document.getElementById("timer");

//   if (count > 0) {
//     count--;
//     timer.innerHTML = "This page will redirect in " + count;
//     setTimeout("countDown()", 1000);
//   } else {
//     window.location.href = redirect;
//   }
// }
// countDown();

const keyboard = [49, 50, 51, 52, 53, 54, 55, 56, 57, 48,  113, 119, 101, 114, 116, 121, 117, 105, 111, 112,  97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 122, 120, 99, 118, 98, 110, 109, 44, 46];
 
function init() {
var out = '';
for (var i = 0; i < keyboard.length; i++) {
  if (i === 10 || i === 20 || i === 30) {
    out += '<div class="clearfix"></div>';
  }
  out += '<div class="keyb" data="' + keyboard[i] +'">' + String.fromCharCode(keyboard[i]) + '</div>';
}
document.querySelector('#keyboard').innerHTML = out;
}

init();

document.onkeypress = function(event){
  document.querySelectorAll(".keyb").forEach(function(element){
    element.classList.remove('active');
  }); 
  document.querySelector('.keyb[data="'+ event.keyCode +'"]').classList.add('active');
}
document.onclick = function(event){
  document.querySelectorAll(".keyb").forEach(function(element){
    element.classList.remove('active');
  });
    var target = event.target;
  console.log(event.target);
 if (target.className == 'keyb' ) {
target.classList.add('active');
 }
 }


var arr = [1, 2, 3, 4, 5, 6];
var ar1 = Array.prototype.slice.call(arr, 3);
// console.log(arr);
// console.log(ar1);



function fizzBuzz(data) {
  if (data % 3 === 0 && data % 5 === 0) {

    return "Fizz Buzz";

  } else if (data % 3 === 0 && data % 5 !== 0) {
    return "Fizz";
  } else if (data % 3 !== 0 && data % 5 === 0) {
    return "Buzz";
  } else {
    return data.toString();
  }
}




const getMousePosition = (x, y) => ({
  x,
  y
});

console.log(getMousePosition(11, 33));





let field = document.getElementById('field');
let ball = document.getElementById('ball');
field.addEventListener('click', moveBall);

function moveBall(event) {

  var position = field.getBoundingClientRect();
  var left = event.clientX - position.left - ball.clientWidth / 2;
  var top = event.clientY - position.top - ball.clientWidth / 2;

  var clientHeight = field.clientHeight - ball.clientHeight;

  var clientWidth = field.clientWidth - ball.clientWidth;

  if (top < 0) {
    ball.style.top = 0;
  } else if (top > clientHeight) {
    ball.style.top = clientHeight + "px";
  } else ball.style.top = top + "px";
  if (left < 0) {
    ball.style.left = 0;
  } else if (left > clientWidth) {
    ball.style.left = clientWidth + "px";
  } else ball.style.left = left + "px";
}





// ФУНКЦІЯ ДЛЯ ПОКАЗУ ІНДЕКСА ДРУГОГО ЗНАЙДЕНОГО СИМВОЛА
function secondIndex(text, symbol) {
  let indexes = [];
  let arrStr = text.split('');
  let index = arrStr.indexOf(symbol);
  while (index !== -1) {
    indexes.push(index);
    index = arrStr.indexOf(symbol, index + 1);
  }
  return indexes[1];
}
console.log(secondIndex('abrara', 'r'));



// код збільшує першу букву і перевіряє наявність закінчення
function correctSentence(text) {
  // returns a corrected sentence which starts with capital letter
  // and ends with dot.
  if (!text) {
    return '';
  }
  text = text[0].toUpperCase() + text.slice(1);
  if (text.endsWith('.') !== true) {
    return text + '.';
  }
  // your code here
  return text;
}
console.log(correctSentence('hello'));






// function evenLast(data) {
//   var sum = 0;
//   var totalSum = 0;
//   console.log(data.length-1);
//   for (var i = 0; i < data.length; i+2) {
//     if (data.indexOf(data[i]) % 2 === 0)  {
//       sum += data[i];
//     }
//     totalSum = sum * data[data.length-1] ;
//   }
//   return totalSum || 0;
// }
// console.log(evenLast([0,1,2,3,4,5]));


// function evenLast(data) {
//   return data.filter((item, i) => i % 2 === 0)
//   .reduce((prev, cur) => prev + cur) * data[data.length - 1] || 0;
// }
// console.log(evenLast(1,2,3));



// function evenLast(arr) {
//   return arr.filter((item, i) => i % 2 === 0).reduce((summ, current) => summ + current) * arr[arr.length - 1] || 0;
// }
// console.log(evenLast(0,1,2,3,4,5));

var ar = Array.of(1, 2, 3, 4, 5);

// import  stra2 from './formulas';

// console.log(stra2);
// console.log(stra);
// console.log(evenLast(ar));





var str = "Code Camp".replace(/(\w+)\s(\w+)/, '$2');
console.log(str);

var hello = "Hello, World!";
var wsRegex = /(\w+)\s(\w+)/; // Change this line
var reslt = hello.replace(wsRegex, '$2'); // Change this line
console.log(reslt);


var modalMessage = 'THIS IS A NEW ATTEMPT';
document.querySelector('.alerting').onclick = function () {
  var div = document.createElement('div');
  div.className = 'newalert';
  div.innerHTML = modalMessage;
  document.body.insertAdjacentElement("afterbegin", div);
  // var btn = document.createElement('button');
  // btn.id = "hidbtn";
  // btn.innerHTML = 'hide';
  // document.body.insertAdjacentElement("afterbegin", btn);
var span = document.createElement('span');
span.innerHTML = '&times';
span.id = "spanhide";
document.querySelector('.newalert').appendChild(span);

  document.querySelector('#spanhide').onclick = function() {
    document.querySelector('.newalert').remove();
    document.querySelector('.alert').remove();
    document.querySelector('.alert1').remove();
    document.querySelector('#hidbtn').remove();
  }
};
 
 








var workers = [{
    'name': 'Alex',
    'surname': "Brin",
    'age': 33,
    'skills': ['coding', 'shooting', 'dancing'],
    'relatives': ['father,mother', 'brother']
  },
  {
    'name': 'Mark',
    'surname': "Brin",
    'age': 33,
    'skills': ['tennis', 'football', 'driving'],
    'relatives': ['father,mother', 'brother'],
  }

];

var name = 'Alex';
var surname = 'Brin';
var prop = 'relatives';

function workersLookup(arr, name, surname, prop) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name.toLowerCase() === name.toLowerCase() && arr[i].surname === surname) {
      if (arr[i].hasOwnProperty(prop)) {
        return `${arr[i].name} ${arr[i].surname} : ${arr[i][prop]}`;
      } else {
        return 'no such contact';
      }
    }

  }
  return 'no such contact';
}
console.log(workersLookup(workers, name, surname, prop));

function loopw(arr, name) {
  return arr.find((arr) => arr.name === name).skills;

}
var loopedName = loopw(workers, 'Alex');
console.log(loopedName);


var objArray = [{
    "foo": 1,
    bar: 2
  },
  {
    'foo': 3,
    bar: 4
  },
  {
    'foo': 5,
    bar: 6
  }
];
var foo = objArray.map((a) => a.foo);

console.log(foo);

document.querySelector('.menu').onclick = function() {
this.classList.toggle('open');
}




document.getElementById('nav').onmouseover= function(event) {
  var target = event.target;
  console.log(target);
  if (target.className == 'menu-item') {
    var s=target.getElementsByClassName('submenu');
    closeMenu();
    s[0].style.display='block';
  }
}
function closeMenu() {
  var subm =  document.querySelectorAll('.submenu');
  for (var i = 0; i < subm.length; i++) {
    subm[i].style = 'none';
  }
}
document.onmouseover= function(event) {
var target = event.target;
  if (target.className !== 'menu-item' && target.className !== 'submenu'&& target.className !== 'link') {
    closeMenu();
  }
}
