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

// //----------------------------------------

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


//     var double = function (value) { 
//       if (double == isNaN) { 
//         return NaN; 
//       } 

//       return value * 2; 
//     }; 

//     console.log(double(0)); 
//     console.log(double(2)); 
//     console.log(double(5)); 

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

var increaseBy2 = function (obj) {
  obj.prop += 2;
  return obj;
};
var myObj = {
  prop: 8
};

console.log(increaseBy2(myObj));
console.log(myObj.prop);

// =================================================================

var foo = {
  a: 1
};
var bar = foo;
foo.a++;
console.log(bar.a);

foo = null;
console.log(foo);
console.log(bar.a);

// ==================== функція для сортування чисел масива по розміру=============
var sortArr = function (a, b) {
  return a - b;
}
var fruits = [];

fruits[0] = 7;
fruits[1] = 40;
fruits[2] = 300;
fruits[3] = 10;
fruits[4] = 1;
fruits.sort(sortArr); // тут треба вставляти назву функції
console.log(fruits);
// =================================END================================

// ===================аналогічний спосіб сортування масива=============
var myarray = [25, 8, 7, 41];
myarray.sort(function (a, b) {
  return a - b;
});
console.log(myarray);
// =================================END================================

// let a = [5, 4, 8, 7, 6];

// for ( let i = 0; i < a.length; i++){
//   for ( let j = i; j < a.length; j++){
//     if (a[i] > a[j]){
//       let temp = a[i];
//       a[i] = a[j];
//       a[j] = temp;
//     }
//     console.log(a);
//   }
// }

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

var x = prompt('vvedy chyslo');

function fac(x) {

  if (x <= 1) {
    return 1;
  } else {
    return x * fac(x - 1);
  }
}
document.write('factorial chysla' + x + '=' + fac(x) + '<br>');
fac(x);

var n = prompt('vvedy chyslo');

function rec(n) {
  document.write('sproba' + n + '<br>');
  if (n <= 0) {
    return;
  } else {
    rec(n - 1);
  }
}
rec(n);
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

var ul = document.querySelector('ul');
var newLi = document.createElement('li');
ul.className = 'alert1';
ul.style.width = '300px';
newLi.innerHTML = '465435';
ul.appendChild(newLi);
