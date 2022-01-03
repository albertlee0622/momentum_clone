const TODOS_KEY = "todos";

const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
let todos = [];

function displayTodo(newTodoObj) {
    //add button for the li
    const li = document.createElement("li");
    li.id = newTodoObj.id;
    const span = document.createElement("span");
    span.innerText = newTodoObj.text;
    li.appendChild(span);
    toDoList.appendChild(li);
    const button = document.createElement("button");
    button.innerText = "❌";
    li.appendChild(button);
}

function displaySavedTodos() {
    const savedTodos = localStorage.getItem(TODOS_KEY);
    if(savedTodos !== null) {
        const parsedTodos = JSON.parse(savedTodos);
        todos = parsedTodos;
        parsedTodos.forEach(displayTodo);
    }
}

function deleteTodo(event) {

    const li = event.target.parentElement;
    console.log(typeof li.id);
    todos = todos.filter((todo) => todo.id !== parseInt(li.id));
    console.log(todos);
    li.remove();
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function handleButtonClick(event) {
    event.preventDefault();
    deleteTodo(event);
}

function saveTodo() {
    //save todo in local storage using JSON.stringify
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodoObj = {
        text: toDoInput.value, 
        id: Date.now(),
    };
    toDoInput.value = "";
    todos.push(newTodoObj);
    displayTodo(newTodoObj);
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

displaySavedTodos();

