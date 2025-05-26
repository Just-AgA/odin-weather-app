async function getWeather(location) {
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=TSL63LZF6KHQW8345LDPZLNGT`, {
            mode: 'cors'
        });
        const data = await response.json();
        console.log(data);
        return data;    
    } catch (error) {
        console.log('The request could not be fulfilled',error);
    }
    
}

export { getWeather };