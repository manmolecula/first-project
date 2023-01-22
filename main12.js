let arr = [
    {value: 'Russia', label: 'Russia'},
    {value: 'USA', label: 'USA'},
    {value: 'Germany', label: 'Germany'},
    {value: 'England', label: 'England'},
  ];
  
  function createSelect(arr, value) {   //функция с 2мя аргументами название массива и значение селекта по умолчанию
    const body = document.body;                //ссылка какая то на документ
    let select = document.createElement('select');   //создадим селект тег в переменную
    body.append(select);              //переместим селект в боди
    
    for (let selectArr of arr) {
      let option = document.createElement('option');
      option.value = selectArr.value;
      option.innerHTML = selectArr.label;
      select.append(option);
      if (option.value == value) {
        option.setAttribute('selected', true);
      } 
    }
    return select
  }
  
  let selected = createSelect(arr, 'Russia');

  console.log(selected);