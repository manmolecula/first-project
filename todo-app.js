(function() {
    function createAppTitle(title) {
        let appTitle = document.createElement('h2');
        appTitle.innerHTML = title;
        return appTitle;
    }
    function createToDoItemForm() {
        let form = document.createElement('form');
        let input = document.createElement('input');
        let buttonWrapper = document.createElement('div');
        let button = document.createElement('button');
        
        form.classList.add('input-group', 'mb-3');
        input.classList.add('form-control');
        input.placeholder = 'Введите название нового дела';
        buttonWrapper.classList.add('input-group-append');
        button.classList.add('btn', 'btn-primary');
        button.disabled=true;
        button.textContent = 'Добавить дело';

        buttonWrapper.append(button);
        form.append(input);
        form.append(buttonWrapper);

        return{
            form,
            input,
            button,
        };
    }
    function createToDoList() {
        let list = document.createElement('ul');
        list.classList.add('list-group');
        return list;
    }
    function createToDoItem(name, done) {
        let item = document.createElement('li');
        let buttonGroup = document.createElement('div');
        let doneButton = document.createElement('button');
        let deleteButton = document.createElement('button');

        item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        item.textContent = name;

        if(done) item.classList.add('list-group-item-success');
        else item.classList.remove('list-group-item-success');

        buttonGroup.classList.add('btn-group', 'btn-group-sm');
        doneButton.classList.add('btn', 'btn-success');
        doneButton.textContent = 'Готово';
        deleteButton.classList.add('btn', 'btn-danger');
        deleteButton.textContent = 'Удалить';

        buttonGroup.append(doneButton);
        buttonGroup.append(deleteButton);
        item.append(buttonGroup);

        return{
            item,
            doneButton,
            deleteButton,
        };
    }
    function createToDoApp(container, title = 'Список дел', arr, key){
        let todoAppTitle = createAppTitle(title);
        let todoItemForm = createToDoItemForm();
        let todoList = createToDoList();


        container.append(todoAppTitle);
        container.append(todoItemForm.form);
        container.append(todoList);
        todoItemForm.input.addEventListener('input', function() {
            if(!todoItemForm.input.value) todoItemForm.button.disabled=true;
            else todoItemForm.button.disabled=false;
        })
        if(arr){
            arr.map(item=>{
                let todoItem = createToDoItem(item.name);
                todoList.append(todoItem.item);
                todoItem.doneButton.addEventListener('click', function(){
                   todoItem.item.classList.toggle('list-group-item-success')
               })
               todoItem.deleteButton.addEventListener('click', function(){
                   if(confirm('Вы уверены?')){
                       todoItem.item.remove();
                       if (data !== null && data !== '') {
                        itemList = JSON.parse(data);
                    }
                   }
               })
                if(item.done){
                    todoItem.item.classList.add('list-group-item-success')
                }
            })
         }
        let data = localStorage.getItem(key);
        let itemList = [];
         if (data !== null && data !== '') {
            itemList = JSON.parse(data);
            for (let i = 0;i<itemList.length; i++) {
                let todoItem = createToDoItem(itemList[i]);
                todoList.append(todoItem.item);
                todoItem.doneButton.addEventListener('click', function(){
                    todoItem.item.classList.toggle('list-group-item-success');
                });
                todoItem.deleteButton.addEventListener('click', function(){
                    if(confirm('Вы уверены?')){
                        todoItem.item.remove();
                        itemList.splice(i, 1);
                        localStorage.setItem(key, JSON.stringify(itemList));
                    };
                });
            }
          }
            todoItemForm.form.addEventListener('submit', function(e) {
            e.preventDefault();
            if(!todoItemForm.input.value) return;
            let todoItem = createToDoItem(todoItemForm.input.value);
            itemList.push(todoItemForm.input.value);
            localStorage.setItem(key, JSON.stringify(itemList));
            todoItem.doneButton.addEventListener('click', function() {
                todoItem.item.classList.toggle('list-group-item-success');
            }); for (let i = 0;i<itemList.length; i++) {
            todoItem.deleteButton.addEventListener('click', function() {
                if(confirm('Вы уверены?')) todoItem.item.remove();
                itemList.splice(i, 1);
                localStorage.setItem(key, JSON.stringify(itemList));
            })
        };
            todoList.append(todoItem.item);
            todoItemForm.input.value = '';
            todoItemForm.button.disabled=true;
        })
        
    }
    
    window.createTodoApp = createToDoApp;
})();