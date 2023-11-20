const key = "dfaddbaaa3d1411895a95255231211";
import { displayWeatherData } from "./dom.js";

const submitLocationBtn = document.getElementById("submitLocation");

async function getWeather(location) {
    await location;

    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${location}`, {mode: 'cors'});
        const weatherData = await response.json();
        processData(weatherData);
    } catch (error) {
        console.log(error);
    };
};

function processData(weatherData) {
    const processedWeatherData = {
        country: weatherData.location.country,
        region: weatherData.location.region,
        cityName: weatherData.location.name,
        localTime: weatherData.location.localtime,
        condition: weatherData.current.condition.text,
        temp_c: weatherData.current.temp_c,
    };

    displayWeatherData(processedWeatherData);
};

function submitLocation() {
    const locationInput = document.getElementById("location");
    getWeather(locationInput.value);
};

submitLocationBtn.addEventListener("click", submitLocation);