const apiKey = "2a917b714cf915c300aff2226986d801";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".serach input");
const searchBtn = document.querySelector(".serach button");
const WeatherIcon = document.querySelector(".weather-icon");

async function Checkweather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
   
    var data = await response.json();


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){
        WeatherIcon.src = "clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        WeatherIcon.src = "clear.png"
    }
    else if(data.weather[0].main == "Rain"){
        WeatherIcon.src = "rain.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        WeatherIcon.src = "drizzle.png"
    }
    else if(data.weather[0].main == "Mist"){
        WeatherIcon.src = "mist(1).png"
    }

    document.querySelector(".weather").style.setProperty("display", "block", "important");


}

searchBtn.addEventListener("click", ()=> {
    Checkweather(searchBox.value);
})