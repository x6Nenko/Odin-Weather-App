const key = "dfaddbaaa3d1411895a95255231211";

async function getWeather(location) {
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
        localtime: weatherData.location.localtime,
        condition: weatherData.current.condition.text,
        temp_c: weatherData.current.temp_c,
    };

    console.log(processedWeatherData);
};

function submitLocation() {
    const locationInput = document.getElementById("location");
    getWeather(locationInput.value);
};

