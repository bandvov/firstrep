'use strict'

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
// ====================================


function tableIns(arr) {
  document.write("<table border='1' width='200'>");
  for (var i = 0; i < arr.length; i++) {
    document.write('<tr>');
    for (var j = 0; j < arr[i].length; j++) {
      document.write('<td>' + arr[i][j] + '</td>');
    }

    document.write('<br>');
    document.write('</tr>');
  }
  document.write('</table>');
}
var arr1 = new Array(1, 2, 3);
var arr2 = new Array(4, 5, 6);
var arr3 = new Array(7, 8, 9);
var arr = new Array(arr1, arr2, arr3);

tableIns(arr);
// =================================


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
// ===============================


var arr = [6, 89, 3, 45];
var maximus = Math.max(...arr);
console.log(maximus);

// =============================
document.onkeydown = function (e) {
  if (e.keyCode == 9) {
    alert('pressed TAB');
  }
}