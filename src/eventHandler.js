import { renderNextDays, renderCurrentWeather } from "./render.js";
import {getWeather} from './weatherApiCall.js';
import { returnedData } from './returnedWeatherData.js'; 

function weatherEventListener() {
    const btn = document.querySelector('#data-btn');
    const display = document.querySelector('#content');

    btn.addEventListener('click', async (e) => {
        e.preventDefault();
    
        const input = document.querySelector('#weather-data');
        const inputValue = input.value.trim();

        display.innerHTML = '';
    
        if (!inputValue) {
            display.innerHTML = `<h4>Please enter a valid location!</h4>`;
            return;
        }
        
        try {
            const weather = await getWeather(inputValue);
            const data = await returnedData(weather);

            const currConditionsEl = await renderCurrentWeather(data);
            const nextDaysEl = renderNextDays(data.daysArr);

            display.appendChild(currConditionsEl);
            display.appendChild(nextDaysEl);
        } catch (error) {
            console.error("Weather fetch failed:", error);
            display.innerHTML = `<h4>Failed to retrieve weather data. Please check the name of the location and try again.</h4>`;
        }   
    })
}

export { weatherEventListener };