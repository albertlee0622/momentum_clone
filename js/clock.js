const clock = document.querySelector("h2#clock");
console.dir(clock);
// interval: something that happens every k second
function addLeadingZero(number) {
    if(number < 10) {
        number = '0' + number
    }
    return number
}
function updateTime() {
    const date = new Date();
    const hour = addLeadingZero(date.getHours());
    const minute = addLeadingZero(date.getMinutes());
    const second = addLeadingZero(date.getSeconds());

    clock.innerText = `${hour}:${minute}:${second}`;
}

setInterval(updateTime, 1000);