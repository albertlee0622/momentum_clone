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

function sayHello(name, age) {
    console.log("Hello my name is", name, "and I'm", age);
}

const player = {
    name: "Albert",
    points: 10,
    fat: true,
    sayHello: function(name, age) {
        console.log("Hello my name is", name, "and I'm", age);
    },
};

names = ["Albert", "Nico", "EJ", "Jessie"];
ages = [34, 30, 62, 36];
for(let i = 1; i < names.length; i++) {
    player.sayHello(names[i], ages[i]);
}

