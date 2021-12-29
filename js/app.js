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
    localStorage.setItem(USERNAME_KEY, username);
}

function onLinkClick(event) {
    event.preventDefault();
}

// loginButton.addEventListener("click", onLoginBtnClick);
//4.1 3:45
//I want to stop the form submitted after carriage return because it refreshes the entire webpage(slow)
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

//display random quote
function getRandomQuote(event) {
    const quotes = [
        {
            quote: "Great things are not done by impulse, but by a series of small things brought together.",
            author: "George Eliot"  
        },
        {
            quote: "Keep on going and the chances are you will stumble on something, perhaps when you are least expecting it. I have never heard of anyone stumbling on something sitting down.",
            author: "Charles F. Kettering"  
        },
        {
            quote: "There is no better than adversity. Every defeat, every heartbreak, every loss, contains its own seed, its own lesson on how to improve your performance the next time.",
            author: "Og Mandino"
     
        },
        {
            quote: "Live out your imagination instead of out of your memory.",
            author: "Les Brown"
        },
        {
            quote: "You can accomplish virtually anything if you want it badly enough and if you are willing to work long enough and hard enough.",
            author: "Brian Tracy"
        },
        {
            quote: "All men make mistakes, but only wise men learn from their mistakes.",
            author: "Winston Churchill"
        },
        {
            quote: "When you believe in a thing, believe in it all the way, implicitly and unquestionable.",
            author: "Walt Disney"
        },
        {
            quote: "There isn't a person anywhere that isn't capable of doing more than he thinks he can.",
            author: "Henry Ford"
        },
        {
            quote: "Opportunities are like sunrises - if you wait too long, you miss them.",
            author: "William Arthur Ward"
        },
        {
            quote: "People with goals succeed because they know where they're going.",
            author: "Earl Nightingale"
        },
    ];
    const index = Math.floor(Math.random() * quotes.length);
    const quote = document.querySelector("#quote q:nth-child(1)");
    const author = document.querySelector("#quote span:nth-child(2)");
    quote.innerText = quotes[index].quote;
    author.innerText += quotes[index].author;
}

getRandomQuote();






























