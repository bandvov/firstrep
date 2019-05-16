var money = document.getElementById('money').value;
// var money = 111;
var time = document.getElementById('time').value;

var appData = {
  budget: money,
  expenses: {},
  timeData: time,
  optExpenses: {},
};
// ===================цей код працює неправильно. дані з форм бкруться тільки один раз============

// var n1 = parseInt(document.getElementById('expAns1').value);
// var n2 = parseInt(document.getElementById('expAns2').value);

// function res1() {
//   document.getElementById('result').value = n1 + n2;
// }
// =============================================================

// ================== функція працює правильно================================
function res1() {
var n1 = parseInt(document.getElementById('expAns1').value);
var n2 = parseInt(document.getElementById('expAns2').value);
var res = n1 + n2;
document.getElementById('result1').innerHTML = res;
document.getElementById('result').value = n1 + n2;
  // document.getElementById('result').value = +expAns1.value + +expAns2.value;
}

document.getElementById('res3').onclick = res1;
console.log(typeof (expAns1.value));

res2.onclick = function () {
  result.value = +expAns1.value + +expAns2.value;

};

// alert(0 || null || 2 && 3 || 4);

// a = [1, 2, 3]; b = [1, 2, 3]; 
// alert(a == b); 

// var a = 0 || "" || 2 || undefined || true || falsе;
// alert(a);

// ==================================РЕКУРСІЯ==================================
function f(counter) {
  counter--;
  document.write("<p style='background-color: lightblue;'>перша половина метода " + counter);
  if (counter != 0)

    f(counter);

  document.write("<p style='background-color: lightyellow;'>друга половина метода " + counter + '</p>');

}
// f(3);
// ===============================================================================
// var input = prompt('введіть число:');

function factorial(x) {
  if (x <= 1) {
    return 1;
  }
  return x * factorial(x - 1);
}
document.write('<br> факторіал ' + input + '=' + factorial(input));



// var xn1 = parseInt(document.getElementById('expAns1').value);
// alert(typeof(xn1));


// // ==========================================================
var a = new Array(1, 2, 3, 4, null, 7);
// a.reverse();
// document.write(a.join());
// // ==========================================================


// var a = [1,2,3.4,6];
// alert('номер ' +a[1]);

// те ж саме

// var b = Array (5);
// b[0] = 1;
// b[1] = 2;
// b[2] = 3;
// b[3] = 4;
// b[4] = 5;
// alert('номер' +b[2]);

// var array = ['h', 'e', 'l', 'l', 'o'];
// var ar = array[1];

alert(ar);





