// widget.js
var WeatherScreen = document.getElementById("w1");
if (navigator.geolocation) {
    console.log(navigator.geolocation.getCurrentPosition(showPosition));
}
else {
    console.log("geolocation is not supported")
}
async function WeatherGet(lat,lon) {
    let url = "https://api.open-meteo.com/v1/forecast?latitude="+lat+"&longitude="+lon+"&current=temperature_2m,weather_code&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch"

    try {
        let response = await fetch(url)
        if (response.status === 400) {
            WeatherScreen.innerHTML = "City Not Found";
            return;
        }
        if (!response.ok) throw new Error();
        return await response.json()

    } catch {
        //document.body.innerHTML = "<h1 style='text-align:center'>No Internet</h1><p style='text-align:center'>we have trouble connecting to our server, sorry for the inconvenience.<p>"
    }

}
function showPosition(position) {
    console.log(position)
    WeatherGet(position.coords.latitude,position.coords.longitude).then(data => {
    if (!data) {
        return;
    }
    WeatherScreen.innerHTML = "The weather is: " + data.current.temperature_2m + " °F and code: " + data.current.weather_code;
    if (data.current.weather_code == 0) {
        WeatherScreen.innerHTML += "- Sunny! ☀️";
        WeatherScreen.style.backgroundColor = "#ffe74d";
    }
    if (data.current.weather_code == 1) {
        WeatherScreen.innerHTML += "- Mostly Clear 🌤️";
        WeatherScreen.style.backgroundImage = "linear-gradient(to right, #ffe74d, grey)";
    }
    if (data.current.weather_code == 2) {
        WeatherScreen.innerHTML += "- Somewhat Cloudy ⛅ ";
    }
    if (data.current.weather_code == 61||data.current.weather_code == 63||data.current.weather_code == 65) {
        WeatherScreen.innerHTML += "- Rainy 🌧️ ";
        WeatherScreen.style.backgroundColor = "lightblue"
    }

    if (data.current.weather_code == 71||data.current.weather_code == 73||data.current.weather_code == 75) {
        WeatherScreen.innerHTML += "- Slight, Moderate, or Snowfall"
        WeatherScreen.style.backgroundColor = "white"
    }
    if (data.current.weather_code == 95) {
        WeatherScreen.innerHTML += "- Slight/Moderate Thunderstorms"
    }
    console.log(data.current.temperature_2m)
});
}
