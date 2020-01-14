import calc from './calc.js';
import {
    str,
    age
} from './calc.js';
import getData from './getData.js';
let a = 6;
let b = 4;

let sum = calc.sum(a, b);
console.log(sum);
console.log(str);
console.log(age);

getData.then((text)=>console.log(text));
