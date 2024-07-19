const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=4d23c65439b334a7e02d566898f757af';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}

apiFetch();

/*
function displayResults(data) {
    currentTemp.innerHTML = `${data.___}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${___}.__`;
    let desc = data.weather[0].___;
    weatherIcon.setAttribute('__', ____);
    weatherIcon.setAttribute('__', ____);
    captionDesc.textContent = `${desc}`;
}
*/