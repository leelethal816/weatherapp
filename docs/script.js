// API URL for finding weather data
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
// Search box and button
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
// Weather icon for the city
const weatherIcon = document.querySelector(".weather-icon");
// Check the weather condition
async function checkWeather(city) {
    // Waiting for response
    const response = await fetch(apiUrl + city + `&appid=acde81f316ab5cd16099ee512ea5f6a4`);

    // Error message
    if(response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        const data = await response.json();
        console.log(data);
        // Updating HTML with API info
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        document.querySelector(".feelslike").innerHTML = Math.round(data.main.feels_like) + "°C";
        if(data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
        }
        else if(data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
        }
        else if(data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        }
        else if(data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png";
        }
        else if(data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
        }
        else if(data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png";
        }
        else if(data.weather[0].main == "Snow") {
            weatherIcon.src = "images/snow.png";
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}
function clickEvent() {
    checkWeather(searchBox.value);
}
function keydownEvent(event) {
    if (event.key == "Enter") {
        checkWeather(searchBox.value);
    }
}
searchBtn.addEventListener("click", clickEvent);
searchBox.addEventListener("keydown", keydownEvent);