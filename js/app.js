const loginForm = document.querySelector("#login-form");
const loginInput  = document.querySelector("#login-form input");
// const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// const loginButton  = document.querySelector("#login-form button");
function displayGreeting(username) {
    greeting.innerText = `Hello ${username}!`;
    greeting.classList.remove("hidden");
}

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    displayGreeting(username);
    // greeting.classList.remove(HIDDEN_CLASSNAME);
    // greeting.innerText = `Hello ${username}`;
    localStorage.setItem(USERNAME_KEY, username);
    // const limit = 15;
    // if(username === "") {
    //     alert("Please write your name");
    // }
    // else if(username.length >= limit) {
    //     alert(`Username must be less than ${limit}`);
    //     loginInput.value = "";
    // }
}

function onLinkClick(event) {
    event.preventDefault();
    console.log(event);
}



// loginButton.addEventListener("click", onLoginBtnClick);
//4.1 3:45
//we want to stop the form submitted after carriage return because it refreshes the entire webpage(slow)
//get the input value when submitted
const savedUsername = localStorage.getItem(USERNAME_KEY);
if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}
else {
    displayGreeting(savedUsername);
}
// link.addEventListener("click", onLinkClick);

