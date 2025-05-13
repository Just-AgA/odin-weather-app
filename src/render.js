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

    
}