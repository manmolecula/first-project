let numbers = [];
let days = ['Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье','Понедельник'];

for(let i = 0;i<31;i++){
    numbers.push(i);
}
for(let i = 0;i<31;i++){
    if(numbers[i%7]==i%7) console.log(`${parseInt(i) + 1} января ${days[i%7]}`);
}