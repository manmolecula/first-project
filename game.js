let arr = [];
let arr1 = [];
let card;
let counter = 2;
let win;
let beforeNumber;
let beforeTarget;

document.addEventListener('click', (event) => {
    if(event.target.classList.value == 'card' || event.target.classList.value == 'card white')  {event.target.classList.toggle('white'); --counter;};
    if(counter==0 && event.target.textContent==beforeNumber) {event.target.classList.toggle('green'); beforeTarget.classList.toggle('green'); counter=2;win--; console.log(win);}
    else if(counter==0 && event.target.textContent!=beforeNumber) {counter=2; setTimeout(function() { event.target.classList.toggle('white'); }, 200); beforeTarget.classList.toggle('white');}
    beforeNumber = event.target.textContent;
    beforeTarget = event.target;
    if(win==0) { setTimeout(function() { alert("Вы выиграли! Сыграть еще раз?");}, 50); win= -1;};
})
document.addEventListener('DOMContentLoaded', function() {
    let cardsNumber = document.getElementById('input');
    let btn = document.getElementById('btn');
    let timerBlock = document.getElementById('timer');
    cardsNumber.addEventListener('input', () => {
        document.getElementById('div').innerHTML = '';
        cardsNumber.value ? btn.disabled = false : btn.disabled = true;
    }) 
    btn.addEventListener('click', () => {
        if(!(cardsNumber.value%2==0)) {
            alert ('Введите четное число карточек');
            cardsNumber.value = '';
        }
        let length = cardsNumber.value/2;
        arr1.length = cardsNumber.value/2;
        if(cardsNumber.value) win = cardsNumber.value/2;
        for (let i = 0; i<length;i++) {
            arr.push(Math.round(Math.random() * 7) + 1);
        }
        for(let i = 0; i<arr.length;i++){
            arr1[i]=arr[i];
        }
        arr = arr.concat(arr1);
        for (let i = arr.length - 1; i > 0; i--) { // Перемешиваем значения в массиве по методу Фишера-Йетса
            let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i
            let t = arr[i];
            arr[i] = arr[j];
            arr[j] = t;
          }
          for (const number of arr) {
            card = document.createElement('div');
            card.classList.add('card');
            card.append(number);
            document.getElementById('div').append(card);
          }
          arr = [];
          arr1 = [];
          cardsNumber.value = '';
         btn.disabled = true;
    });
});