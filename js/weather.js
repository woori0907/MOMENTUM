const API_KEY = "e624cfe13d5384545872f83e1779948d";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then((response) => response.json()).then((data) =>{
        const weather = document.querySelector("#weather .weather");
        const icon = document.querySelector("#weather .icon");
        const weatherIcon = data.weather[0].icon;
        icon.setAttribute('src', `http://openweathermap.org/img/w/${weatherIcon}.png`);
        weather.innerText = `${data.name} / ${data.main.temp}℃`;
    });

}
function onGeoError(){
    const weather = document.querySelector("#weather .weather");
    weather.innerText = "undefined. please allow location.";
} 



navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);