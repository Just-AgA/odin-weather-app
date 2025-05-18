import { loadWeatherIcon } from './iconLoader.js';

async function renderCurrentWeather(data) {

    const currConditions = document.createElement('div');
    currConditions.classList.add('temp-div');

    const iconUrl = await loadWeatherIcon(data.icon);

    const img = document.createElement('img');
    img.src = iconUrl;
    img.alt = `Image for ${data.icon}`;
    img.classList.add('weather-icon');

    const tempF = data.temperature;
    const tempC = ((tempF - 32) * 5 / 9).toFixed(1);
    const feelsLikeF = data.feelsLike;
    const feelsLikeC = ((feelsLikeF - 32) * 5 / 9).toFixed(1);

    currConditions.innerHTML = `<h1>Current Conditions:</h1>
                                <h2>
                                    Temperature: 
                                    <span class="temp-value" data-f="${tempF}" data-c="${tempC}" data-unit="F">${tempF}°F</span>,  Feels like: 
                                    <span class="feels-like" data-f="${feelsLikeF}" data-c="${feelsLikeC}" data-unit="F">${feelsLikeF}°F</span>
                                    <button class="toggle-temp">Toggle temperature</button><br>
                                </h2>
                                <h3>Time: ${data.dateTime}</h3>
                                <h3>Conditions: ${data.conditions}</h3>
                                <h3>Sunrise: ${data.sunrise} Sunset: ${data.sunset}</h3>
                                <h3>Windspeed: ${data.windspeed}</h3>
                                <h3>Visibility: ${data.visibility}</h3>
                                <h4>Snow: ${data.snow}</h4>
                                <h4>Max temp: ${((data.daysArr[0].tempmax - 32) * 5 / 9).toFixed(1)}°C</h4>
                                <h4>Min temp: ${((data.daysArr[0].tempmin - 32) * 5 / 9).toFixed(1)}°C</h4>`;

    currConditions.prepend(img);

    // Add event listener to toggle temperatures
    const toggleBtn = currConditions.querySelector('.toggle-temp');
    toggleBtn.addEventListener('click', () => {
        toggleTemperature(currConditions);
    });

    return currConditions;
}

function renderNextDays(daysArr) {
    const numDays = document.createElement('div');
    numDays.classList.add('days-array');

    daysArr.slice(1).forEach(day => {

        const li = document.createElement('li');
        li.innerHTML = `<h4>Date: ${day.datetime}</h4>
                        <h4>Max. Temp: ${((day.tempmax - 32) * 5 / 9).toFixed(1)}°C Min. Temp: ${((day.tempmin - 32) * 5 / 9).toFixed(1)}°C</h4>
                        <h4>Conditions: ${day.conditions}</h4>
                        <h4>Humidity: ${day.humidity}</h4>`;

        numDays.appendChild(li);
    });

    return numDays;
}

function toggleTemperature(container) {
    const tempSpan = container.querySelector('.temp-value');
    const feelsLikeSpan = container.querySelector('.feels-like');

    const currentUnit = tempSpan.dataset.unit;
    const newUnit = currentUnit === 'F' ? 'C' : 'F';

    tempSpan.textContent = `${tempSpan.dataset[newUnit.toLowerCase()]}°${newUnit}`;
    feelsLikeSpan.textContent = `${feelsLikeSpan.dataset[newUnit.toLowerCase()]}°${newUnit}`;

    tempSpan.dataset.unit = newUnit;
    feelsLikeSpan.dataset.unit = newUnit;
}

export { renderCurrentWeather, renderNextDays };