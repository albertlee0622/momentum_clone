function onGeoSuccess(position) {
    const api_key = "3e07b843a5215a82d7eda27845511910";
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`
    console.log(url);
    fetch(url).then(response => response.json())
                .then(data => {
                    console.log(data);
                    const weather = document.querySelector("#weather span:first-child");
                    const city = document.querySelector("#weather span:last-child");
                    city.innerText = data.name;
                    weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
                });
}

function onGeoException() {
    alert("Your location cannot be detected.")
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoException)