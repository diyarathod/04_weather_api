

const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'd7429cb108msh1dc00b2b97fe818p198476jsn7ff7490baad6',
        'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather = (city) => {
    cityname.innerHTML = city
    fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            cloud_pct.innerHTML = response.cloud_pct
            max_temp.innerHTML = response.max_temp
            min_temp.innerHTML = response.min_temp
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
            temp.innerHTML = response.temp
            wind_speed.innerHTML = response.wind_speed
            humidity.innerHTML=response.humidity
            wind_degrees.innerHTML=response.wind_degrees
            feels_like.innerHTML=response.feels_like
        })
        .catch(error => console.error(error));
}

submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Delhi")


