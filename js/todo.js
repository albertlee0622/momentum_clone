const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const todoStr = localStorage.getItem("todos");
let todoArray = null;
const todos = [];

function displayTodo() {
    if(todoStr !== null) {
        todoArray = todoStr.split(',');
    }
    todoArray.forEach(addTodo);
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    localStorage.removeItem("todos");
    const todo = li.querySelector("span");
    for(let i = 0; i < todoArray.length; i++) {
        if(todoArray[i] == todo.innerText) {
            console.log(todoArray)
            todoArray.splice(i, 1);
            console.log(todoArray);
            localStorage.setItem("todos", todoArray);
        }
    }
}

function handleButtonClick(event) {
    event.preventDefault();
    deleteTodo(event);
}

function addTodo(newTodo) {
    //creat li for ul
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    li.appendChild(span);
    toDoList.appendChild(li);

    //add button for the li
    const button = document.createElement("button");
    button.innerText = "❌";
    li.appendChild(button);
    toDoList.addEventListener("click", handleButtonClick);

    //save todo in local storage
    todos.push(newTodo);
    localStorage.setItem("todos", todos);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    addTodo(newTodo);
}

if(todoStr !== null) {
    displayTodo();
}
toDoForm.addEventListener("submit", handleToDoSubmit);
