const country = document.getElementById("country");
const region = document.getElementById("region");
const cityName = document.getElementById("cityName");
const localTime = document.getElementById("localTime");
const condition = document.getElementById("condition");
const tempC = document.getElementById("tempC");

function displayWeatherData(data) {
    country.innerText = data.country;
    region.innerText = data.region;
    cityName.innerText = data.cityName;
    localTime.innerText = data.localTime;
    condition.innerText = data.condition;
    tempC.innerText = data.temp_c;
};



export { displayWeatherData };