const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function deleteTodo(event) {
    console.dir(event);
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
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    addTodo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
