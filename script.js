const apiKey = "d5de13cc61d0b450450a7164f423c5d0"; 

async function getWeather() {
    const city = document.getElementById("city").value;
    const result = document.getElementById("result");

    if (city === "") {
        result.innerHTML = " Please enter a city name";
        return;
    }

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );

        const data = await response.json();

        if (data.cod === "404") {
            result.innerHTML = " City not found";
            return;
        }

        result.innerHTML = `
            <h3>Weather in ${data.name}</h3>
            🌡 Temperature: ${data.main.temp} °C <br>
            💧 Humidity: ${data.main.humidity}% <br>
            🌥 Condition: ${data.weather[0].description}
        `;
    } 
    catch (error) {
        result.innerHTML = "⚠ Error fetching data";
        console.log(error);
    }
}
