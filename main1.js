let n = 3;
let a = 13.890123;
let b = 2.891564;


let drob = Math.floor(a % 1 * Math.pow(10, n));
let drob1 = Math.floor(b % 1 * Math.pow(10, n));

console.log(drob);
console.log(drob1);
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(a === b);
console.log(a !== b);