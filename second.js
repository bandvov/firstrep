// var nicknames = ['di', 'boo', 'punkeye'];
// nicknames.size=3;
// for (var nickname of nicknames) {
//     alert(nickname);
// }

/*
var calculator = {
    sum: function() {
      return this.a + this.b;
    },
  
    mul: function() {
      return this.a * this.b;
    },
  
    read: function() {
      this.a = +prompt('a?', 0);
      this.b = +prompt('b?', 0);
    }
  }
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );
*/
//-------------------------------------

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

//--------------------------------

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

// var sayHi; 

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
// *//*---------------------
// function a() {}

// function b(arg) {
//   arg.age = 7;
// };
// b(a);
// console.log(a.age)

/*
function ask(question, yes, no){
  if (confirm(question)) yes()
  else no();
}
function showOk(){
  alert('ви погодились');
}
function showCancel(){
  alert('ви не погодились');
}
ask ('ви згодні?', showOk, showCancel);
*//*
//Коротшмй варіант
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
);*/
//--------------------------------------------------
// function ask(question,yes,no){
// if (confirm(question)) yes()
// else no();
// }
// function yes(){
//   alert('Vy zgodni');
// }function no(){
//   alert('ne zgodni');
// }

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

//------------------------------


//----------------------------

// function showMessage(from,text){
  
//   if(text ===undefined){
//     text ='текс не передано';
//   }
//   alert(from+ ':' +text);
// }

// showMessage('Vova ' , ' hello everyone');
// showMessage('vova');

//-------------------------
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
  
//-------------------------------------

// function checkAge(age){
// return (age>18) ? true : confirm('Batky dozv?');
// }
// var age = prompt('Vam rokiv');

// if (checkAge (age)){
//   alert('dozv');
// }else{
//   alert('zaboron');
// }

//--------------------------------------------



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
  //   }

//----------------------------------------

    // function pow() {
    //    return alert(Math.pow(x,n));
    // }
    //   var x = prompt('vvedy');
    //   var n = prompt('stepen'); 
      
    //   pow();
      
//-------------------------      


// x = prompt('chyslo');
// n = prompt('stepen');

// var a = x**n;

// if(n<=0 ? alert('pomylka') : alert(a));

//--------------------------------------------------

// неявно оголошена переменная message
// function showMessage() {

//    message = 'Привет'; // без var!
// }

// showMessage();

// alert( message );

//----------------------------------------
// var hello = ('hello');
// var num = 244.444 ;
// alert ( hello.toUpperCase().concat(' vsim'));
