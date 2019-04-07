function count_rabbits() {
for(var i=1; i<=3; i++) {
// оператор + соединяет строки 
 alert("Із шляпи дістали "+i+" кролика!");
   }
  } 
//alert(new Array(5).join("ха"));
/*
var names = 'Катя, Вася, Міша';
var arr = names.split(', ');
for (var i=0;i<arr.length;i++){
    alert('Ваше повідомлення'+arr[i]);
}*/

/*var year;
var age = prompt('How old are you?','');
if (age>18){
    year=true;
}else {
    year=false;
}
alert(year);
*//*
var arr = [1,2];
var newArr = arr.concat(5,6);
alert(newArr);*/
/*function calcD(a,b,c){
    return b*b-4*a*c;
}var test =calcD(4,2,2);
alert (test);

var myFriend={
    "name": "Alex",
    "leg" : 2,
    "friends" : 50
};
var name = myFriend.name;
alert(name);
*/
// function domImplementationTest(){
//     var featureArray = ['HTML', 'XML', 'Core', 'Views',
//     'StyleSheets', 'CSS', 'CSS2', 'Events',
//     'UIEvents', 'MouseEvents', 'HTMLEvents',
//     'MutationEvents', 'Range', 'Traversal'];
//     var versionArray = ['1.0','2.0','3.0'];
//     var i;
//     var j;
//     if (document.implementation && document.implementation.hasFeature){
//         document.write('<table border = "1" cellpadding ="3" style ="border-collapse:collapse;">');
    
    
// document.write('<tr>');
//     document.write('<Td>' + 'Підтримка доповнень ' + '</Td>')
//         for (j = 0;j < versionArray.length; j++){
//         document.write('<td>' + 'Версія ' + versionArray[j] + '</td>');
//         }
//     document.write('</tr>');

         
// //зміст таблиці
// for (i=0; i<featureArray.length; i++){
//     document.write('<tr>');
//     document.write('<th>'+featureArray[i]+'</th>');
//     for (j=0;j<versionArray.length;j++){
      
//     }

//     for (j=0;j<versionArray.length;j++){
//         var res = document.implementation.hasFeature(featureArray[i],versionArray[j]);
//         document.write('<td style="background-color:' + (res ? 'white' : 'red') + '; color:black;">'+ res + '</td>');
//       }
//     document.write('</tr>');
//     }
// document.write('</table');
//   }
// }    

// var user = {
//     name: 'Василий',
  
//     // метод
//     sayHi: function() {
//       alert( 'Привет '+user.name );
//     }
  
//   };
  
//   // Вызов
//   user.sayHi();

//   var user = { firstName: "Вася" };
// var admin = { firstName: "Админ" };

// function func() {
//   alert( this.firstName );
// }

// user.f = func;
// admin.g = func;

// // this равен объекту перед точкой:
// user.f(); // Вася
// admin.g(); // Админ
// admin['g'](); // Админ (не важно, доступ к объекту через точку или квадратные скобки)

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
  // Создайте калькулятор
// var calculator = {
//     read: function() {
//     var a = prompt('Введите a: ', '2');
//     var b = prompt('Введите b: ', '6');
    
//     this.a = +a;
//     this.b = +b;
//     },
    
//     sum: function() {
//     return this.a + this.b;
//     },
    
//     mul: function() {
//     return this.a * this.b;
//     
//     };
    
//     calculator.read();
//     alert( calculator.sum() );
//     alert( calculator.mul() );

elem.addEventListener('click', function (){
  alert('robyt');
});

elem1.addEventListener('click', function (){
  console.log('robyt');
});
// -----------------простіший варіант-------------------

// function tableCreate(){
//   var body = document.body,
//       tbl  = document.createElement('table');
//   tbl.style.width  = '100px';
//   tbl.style.border = '1px solid black';

//   for(var i = 0; i < 10; i++){
//       var tr = tbl.insertRow();
//       for(var j = 0; j < 2; j++){
//           if(i == 2 && j == 1){
//               break;
//           } else {
//               var td = tr.insertCell();
//               td.appendChild(document.createTextNode('Cell'));
//               td.style.border = '1px solid black';
//               if(i == 1 && j == 1){
//                   td.setAttribute('rowSpan', '2');
//               }
//           }
//       }
//   }
//   body.appendChild(tbl);
// }
// tableCreate();

// 0000000000000000000000000000000000000000000000000000000000000000000000

// var student;
// for (var j = 0; j < 10; j++) {
//     student = {
//         name: "Name" + j,
//         rank: "Rank" + j,
//         stuclass: "Class" + j,
//     };
//     var table = document.getElementById("myTable");
//     var row = table.insertRow(j);
//     var cell1 = row.insertCell(0);
//     var cell2 = row.insertCell(1);
//     var cell3 = row.insertCell(2);

//     cell1.innerHTML = student.name,
//     cell2.innerHTML = student.rank,
//     cell3.innerHTML = student.stuclass;



function fun(){
  var chkb = document.getElementById('one');
  if (chkb.checked){
    alert('Vybrano');
  } else {
    alert ('ne Vybrano');
  }
}
// ---------переводить слова в верхній регістр-------------------
function myFunction() {
  document.getElementById("fname").value = document.getElementById("fname").value.toUpperCase();
}
// -----------------------------------------------------------------
function fun1(){
var rad1 = document.getElementsByName('rad1'); 
  for(var i=0;i<rad1.length;i++){
    if(rad1[i].checked){
      alert('Vybrano '+i+' element');
    }
  }
}
function fun2(){
    var sel = document.getElementById('myselect').selectedIndex;
    var options = document.getElementById('myselect').options;  
    alert('Vybrano ' +options[sel].text);
}

// var counter = 0;
// while (counter < 10) {
//   counter++;
//   document.write('<br>' + counter);
// }

// var counter = 0;
// do {
//   counter++;
//   document.write('<br>' + counter);
// } while (counter < 10);
// 0----------------------------------------------------

 
function res() {
 var t1 = document.getElementById('t1').value;
  var t1 = parseInt(t1);
  var t2 = document.getElementById('t2').value;
  var t2 = parseInt(t2);
  document.getElementById('t3');
  result = t1 + t2;
  document.getElementById('t3').value = result;
}

