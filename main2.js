let n = -3;
let m = -10


let range = Math.abs(n - m);
let min = Math.min(n, m)

let filtredNumber = Math.round(Math.random() * range) + Math.min(n, m);

if(filtredNumber%2==0 && filtredNumber<Math.max(n, m)) filtredNumber++;
if(filtredNumber%2==0 && filtredNumber==Math.max(n, m)) filtredNumber--;
console.log(filtredNumber);


