// alert("hi");
// var a = 6;
// var b = 3;

// let myName = "Albert";

// console.log(a + b);
// console.log(a * b);
// console.log(a / b);
// console.log("hello " + myName);

// myName = "Seung-jun";
// console.log("hello " + myName);

// const amIFat = null;
// let something;
// console.log(something, amIFat);

// const mon = "mon";
// const tue = "tue";
// const wed = "wed";
// const thu = "thu";
// const fri = "fri";
// const sat = "sat";
// const sun = "sun";

// const daysOfWeek = [mon, tue, wed, thu, fri, sat];
// console.log(daysOfWeek);
// daysOfWeek.push(sun);
// console.log(daysOfWeek);
// const nonsense = ["Albert", 3, false, null];
// console.log(nonsense);

//assignment is now allowed for const, but const array can be appended an item
// const toBuy = ["coffee"];
// toBuy.push("banana");
// console.log(toBuy);

const playerName = "albert";
const playerPoints = 121212;
const playerHandsome = false;
const playerFat = "little bit";

//want to do 
/*
player.name
player.points
player.handsome
better than array because the array doesn't give much meaning to each element
*/

//defining an object
// const player = {
//     name: "Albert",
//     points: 10,
//     fat: true,
// };
//const object ref variable is not allowed to be assigned to point to a new obj adderss, 
//but its element value can be modified. 
// player.fat = false;
// console.log(player);
// console.log(player["name"]);
// console.log(player.fat);

// player["lastName"] = "Lee";
// console.log(player.lastName);

// player.points += 10
// console.log(player.points);

// function sayHello(name, age) {
//     console.log("Hello my name is", name, "and I'm", age);
// }

// const player = {
//     name: "Albert",
//     points: 10,
//     fat: true,
//     sayHello: function(name, age) {
//         console.log("Hello my name is", name, "and I'm", age);
//     },
// };

// names = ["Albert", "Nico", "EJ", "Jessie"];
// ages = [34, 30, 62, 36];
// for(let i = 1; i < names.length; i++) {
//     player.sayHello(names[i], ages[i]);
// }

// console.log(console);

// const calculator = {
//     add: function(a, b) {
//         console.log(a + b);
//     },
//     subtract: function(a, b) {
//         console.log(a - b);
//     },
//     divide: function(a, b) {
//         console.log(a / b);
//     },
//     multiply: function(a, b) {
//         console.log(a * b);
//     },
//     power: function(a, b) {
//         console.log(a**b);
//     }
// }

// const a = 10, b = 5;
// calculator.add(a, b);
// calculator.subtract(a, b);
// calculator.divide(a, b);
// calculator.multiply(a, b);
// calculator.power(a, b);

// const age = 96;
// function calculateKrAge(ageOfForeigner) {
//     return ageOfForeigner + 2; 
// }

// const krAge = calculateKrAge(age);
// console.log(krAge + 2);

// const age = parseInt(prompt("how old are you?"));

// console.log(isNaN(age));

// if(age > 100) {
//     console.log("You are wise!");
// }
// else if (age > 80) {
//     console.log("You are getting old...");
// }
// else if (age > 50) {
//     console.log("Keep working!!!");
// }
// else {
//     console.log("Thank you for writing your age");
// }
//now I understnad why it is called DOM in HTML
const h1 = document.querySelector("div.text-class h1");
// console.log(title);
// // title.autofocus = true;
// // title[0].innerText= "Got you!";

//listen for event: event listener
//want to know about a particular event

function handleTitleClick() {
    // console.log("title was clicked!")
    h1.style.color = "blue";
}

function handleMouseEnter() {
    // console.log("mouse is here");
    h1.innerText = "mouse";
}

function handleMouseLeave() {
    // console.log("mouse is gone");
    h1.innerText = "mouse is gone";
}

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
    alert("copied!");
}

function handlewWindowOffline() {
    console.log("SOS on WIFI");
}

function handlewWindowOnline() {
    console.log("WIFI Connected");
}

//when click event happens execute handleTitleClick
// title.addEventListener("click", handleTitleClick);
console.dir(h1);
h1.onclick = handleTitleClick; 
h1.addEventListener("mouseenter", handleMouseEnter); //mouseenter
h1.addEventListener("mouseleave", handleMouseLeave); //mouseleave
window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handlewWindowOffline);
window.addEventListener("online", handlewWindowOnline);
