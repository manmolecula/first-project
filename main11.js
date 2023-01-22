let objects = [
    { name: 'Василий', surname: 'Васильев' },
    { name: 'Иван', surname: 'Иванов' },
    { name: 'Пётр', surname: 'Петров' }
    ];

function filtrarionObjects(mas, key, val){
    let filteredMas = [];
    for(let i = 0;i<mas.length;i++){
        if(mas[i][key]==val) filteredMas.push(mas[i]);
    }
    return filteredMas;
}    

let result = filtrarionObjects(objects, 'name', 'Иван');

console.log(result);