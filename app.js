const loginForm = document.querySelector("#login-form");
const loginInput  = document.querySelector("#login-form input");
const loginButton  = document.querySelector("#login-form button");

function onLoginBtnClick() {
    const username = loginInput.value;
    const limit = 15;
    if(username === "") {
        alert("Please write your name");
    }
    else if(username.length >= limit) {
        alert(`Username must be less than ${limit}`);
    }
}

loginButton.addEventListener("click", onLoginBtnClick);
//4.1 3:45