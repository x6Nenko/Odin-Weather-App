const country = document.getElementById("country");
const region = document.getElementById("region");
const cityName = document.getElementById("cityName");
const localTime = document.getElementById("localTime");
const condition = document.getElementById("condition");
const conditionIcon = document.getElementById("conditionIcon");
const tempC = document.getElementById("tempC");
const feelslikeC = document.getElementById("feelslikeC");
const humidity = document.getElementById("humidity");
const windKph = document.getElementById("windKph");

function displayWeatherData(data) {
    country.innerText = data.country;
    region.innerText = data.region;
    cityName.innerText = data.cityName;
    localTime.innerText = data.localTime;
    condition.innerText = data.condition;
    conditionIcon.src = data.conditionIcon;
    tempC.innerText = `${data.temp_c}`;
    feelslikeC.innerText = `${data.feelslike_c}`;
    humidity.innerText = `${data.humidity}`;
    windKph.innerText = `${data.wind_kph}`;
};

function showLoader() {
    document.getElementById("loader").style.display = "block";
    document.querySelector(".main-info-container").style.display = "none";
}

function hideLoader() {
    document.getElementById("loader").style.display = "none";
    document.querySelector(".main-info-container").style.display = "block";
}

export { displayWeatherData, showLoader, hideLoader };