let count = 42;
let n = -3;
let m = -10;
let a=[];

for(let i=0;i<count;i++){
    a.push(Math.round(Math.random() * Math.abs(n-m)) + Math.min(n,m));
}
console.log(a);