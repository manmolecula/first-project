let str = 'Привет, мир!'
let invertedstr='';

for(let i=str.length-1;i>=0;i--){
    invertedstr += str[i];
}
console.log(invertedstr);