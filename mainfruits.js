let fruits = ['Pineapple', 'Peach', 'Banana', 'Apple', 'Pomegranate'];
let mashaLiked = ['Pineapple', 'Peach'];
let antonLiked = ['Pomegranate', 'Apple'];
let dogShit = [];

function bananaDiss_justADogShit (mas1,mas2,mas3) {
    for(let fruit of mas1){
        if((!mas2.includes(fruit))&&(!mas3.includes(fruit))) dogShit.push(fruit);
    }
    return dogShit;
}
console.log(bananaDiss_justADogShit(fruits,mashaLiked,antonLiked));