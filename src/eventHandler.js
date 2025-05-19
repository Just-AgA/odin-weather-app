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
            display.innerHTML = <h4>Please enter a valid location!</h4>;
            return;
        }
        
         
    })
}

export { weatherEventListener };