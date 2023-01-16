let form = document.querySelector('form');
let newTask = document.querySelector('#new-task');
let incompleteTask = document.querySelector('#items');
let completeTask = document.querySelector('.complete-list ul');


let createTask = function(task){
   let listItem = document.createElement('li');
   let checkBox = document.createElement('input');
   let label = document.createElement('label');

    label.innerText =task;
    checkBox.type ='checkbox';
    listItem.appendChild(checkBox);
    listItem.appendChild(label);

    return listItem;
}

let addTask = function(event){
event.preventDefault();
let listItem = createTask(newTask.value);
incompleteTask.appendChild(listItem);
newTask.value = "";
// bindIncompleteTask(listItem, completeItem);
}

// let completeItem = function(){
//     let listItem = this.parentNode;
//     let deleteButton =document.createElement('button');
//     deleteButton.innerText ='Delete';
//     deleteButton.className = 'delete';
//     listItem.appendChild(deleteButton);

//     let checkBox = listItem.querySelector('input[type="checkbox"]');
//     checkBox.remove();
//     completeTask.appendChild(listItem);
//     bindcompleteTask(listItem,deleteTask)
// }

// let bindIncompleteTask = function(taskItem, checkBoxClick){
//     let checkBox = taskItem.querySelector('inpute[type="checkbox"]');
//     checkBox.onchange = checkBoxClick;
// }

// let bindCompleteTask = function(taskItem, deleteButtonClick){
//     let deleteButton = taskItem.querySelector('.delete');
//     deleteButton.onClick = deleteButtonClick;
// }

// let deleteTask = function(){
//     let listItem = this.parentNode;
//     let ui = listItem.parentNode;
//     ui.removeChild(listItem);

// }

// for(let i = 0; i < completeTask.children.length; i++){
//     bindCompleteTask(completeTask.children[i]);
// }

// for(let i = 0; i<incompleteTask.children.length; i++){
//     bindIncompleteTask(incompleteTask.children[i],deleteTask);
// }



form.addEventListener('submit', addTask);