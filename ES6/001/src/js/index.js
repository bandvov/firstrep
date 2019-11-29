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


// ======================= promise =====================

// let promise = new Promise((resolve, reject) => {
//     const a = 5;
//     const b = 10;
//     if (a > b) {
//         resolve();
//     } else {
//         reject();
//     }

// })
// promise.then(() => console.log('a is bigger then b')).catch(()=>console.log('a is smaller then b'));

getData.then((text)=>console.log(text));
