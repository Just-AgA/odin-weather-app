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