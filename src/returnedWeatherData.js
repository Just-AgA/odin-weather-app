async function returnedData(data) {
    if(!data) {
        return `No weather data could be retrieved`;
    }

    const conditions = data.currentConditions.conditions;
    const feelsLike = data.currentConditions.feelslike;
    const humidity = data.currentConditions.humidity;
    const dateTime = data.currentConditions.datetime;
    const snow = data.currentConditions.snow;
    const sunrise = data.currentConditions.sunrise;
    const sunset = data.currentConditions.sunset;
    const temperature = data.currentConditions.temp;
    const visibility = data.currentConditions.visibility;
    const windspeed = data.currentConditions.windspeed;
    const daysArr = data.days;
    const icon = data.currentConditions.icon;

    return { conditions, feelsLike, humidity, dateTime, snow, sunrise, sunset, temperature, visibility, windspeed, daysArr, icon };
}

export { returnedData };