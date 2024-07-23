const currentTemp = document.querySelector('.current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const forecastList = document.querySelector('.forecast-list');

const url = `https://api.openweathermap.org/data/2.5/weather?lat=45.783&lon=-108.501&units=imperial&appid=4d23c65439b334a7e02d566898f757af`;
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=45.783&lon=-108.501&units=imperial&appid=4d23c65439b334a7e02d566898f757af';


async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}

async function fetchForecast() {
    try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayForecast(data) {
    const forecastList = document.querySelector('.forecast-list');
    forecastList.innerHTML = '';

    for (let i = 0; i < 3; i++) {
        const temp = data.list[i].main.temp;
        const forecastItem = document.createElement('li');
        forecastItem.innerHTML = `${temp}&deg;F`;
        forecastList.appendChild(forecastItem);
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('SRC', iconsrc);
    weatherIcon.setAttribute('alt', data.weather[0].description);
    captionDesc.textContent = `${desc}`;

    fetchForecast();
}

apiFetch();