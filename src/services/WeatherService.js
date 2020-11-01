const apiKey = process.env.VUE_APP_WEATHER_API_KEY

export async function WeatherApi(data, requestType = 'weather') {
    return await fetch(
        `https://api.openweathermap.org/data/2.5/${requestType}?appid=${apiKey}&q=${
            data.location
        }&units=${data.unit}${requestType == 'forecast' ? '&cnt=40' : ''}`
    ).then(res => res.json())
}
