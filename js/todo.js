const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
let todoStr = localStorage.getItem("todos");
let todoArray = [];
const todos = [];

function updateTodoArray() {
    todoStr = localStorage.getItem("todos");
    if(todoStr !== null) {
        todoArray = todoStr.split(',');
    }
    else {
        todoArray = [];
    }
}

function displayTodo(newTodo) {
    //add button for the li
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    li.appendChild(span);
    toDoList.appendChild(li);
    const button = document.createElement("button");
    button.innerText = "❌";
    li.appendChild(button);
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    const todo = li.querySelector("span");
    updateTodoArray();
    for(let i = 0; i < todoArray.length; i++) {
        if(todoArray[i] == todo.innerText) {
            console.log(todoArray)
            todoArray.splice(i, 1);
            console.log(todoArray);
            localStorage.removeItem("todos");
            localStorage.setItem("todos", todoArray);
        }
    }
}

function handleButtonClick(event) {
    // event.preventDefault();
    deleteTodo(event);
}

function saveTodo() {
    //save todo in local storage using JSON.stringify
    localStorage.setItem("todos", JSON.stringify(todos));
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    todos.push(newTodo);
    displayTodo(newTodo);
    saveTodo();
}

// if(todoStr !== null) {
//     displayTodo();
// }

toDoForm.addEventListener("submit", handleToDoSubmit);
toDoList.addEventListener("click", handleButtonClick);

//I need to find the right data structure to save todos in local storage
//JSON.stringify();
//now how to retrieve array from stringified data in local storage