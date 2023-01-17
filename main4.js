let name = 'Anton';
let surname = 'Kuchev';

let upperName = name.toUpperCase();
let lowerName = name.toLowerCase();

let upperSurname = surname.toUpperCase();
let lowerSurname = surname.toLowerCase();

let normalName = upperName.substr(0,1) + lowerName.substr(1);
let normalSurname = upperSurname.substr(0,1) + lowerSurname.substr(1);

normalName == name ? console.log('Имя осталось без изменений') : console.log('Имя было преобразовано');
normalSurname == surname ? console.log('Фамилия осталась без изменений') : console.log('Фамилия была преобразована');