
const images = [
    'img/boston.jpg',
    'img/ohlone.jpg',
    'img/tandon.jpg',
];

const index = Math.floor(Math.random() * images.length);

// document.body.style.backgroundImage = `url(${images[index]})`;
const bgImage = document.createElement("img");
bgImage.src = images[index];
// bgImage.style.height = "80%";
// bgImage.style.width = '100%';
// console.dir(bgImage);
document.body.appendChild(bgImage);
