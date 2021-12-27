const loginForm = document.querySelector("#login-form");
const loginInput  = document.querySelector("#login-form input");
const link = document.querySelector("a");
// const loginButton  = document.querySelector("#login-form button");

function onLoginSubmit(event) {
    const username = loginInput.value;
    event.preventDefault();
    console.log(username);
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
loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", onLinkClick);

