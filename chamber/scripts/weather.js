const apiKey = "db39a8da72da725e18a494c220ba9ed1";
const city = "Nigeria";
const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`;

const weatherData = document.getElementById("weather-data")
const forecastInfo = document.getElementById("forecast-info");

async function fetchWeatherData() {
    try {
        let response = await fetch(url);
        
        if (!response.ok) {
            throw new Error("Can't fetch data from resource")
        }

        let value = await response.json();
        console.log(value)

        // Convert Sunrise
        let sunriseDate = new Date(value.city.sunrise * 1000);
        let sunriseTime = sunriseDate.toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"});

        // Convert sunset
        let sunsetDate = new Date(value.city.sunset * 1000);
        let sunsetTime = sunsetDate.toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"});

        let today = value.list[0]
        
        let figcaption = document.createElement("figcaption");
        figcaption.innerHTML = `
            <p>${Math.round(today.main.temp)}°F</p>
            <p>${today.weather[0].description}</p>
            <p><strong>High:</strong> ${Math.round(today.main.temp_max)}°F</p>
            <p><strong>Low:</strong> ${Math.round(today.main.temp_min)}°F</p>
            <p><strong>Humidity:</strong> ${today.main.humidity}%</p>
            <p><strong>Sunrise:</strong> ${sunriseTime}</p>
            <p><strong>Sunset:</strong> ${sunsetTime}</p>
        `;

        weatherData.appendChild(figcaption);

        let dailyTemps = {};

        value.list.forEach(item => {
            let date = new Date(item.dt * 1000);
            let dayName = date.toLocaleDateString("en-US", { weekday: "long" });

            if (!dailyTemps[dayName]) {
                dailyTemps[dayName] = [];
            }
            dailyTemps[dayName].push(item.main.temp);
        });

        let forecastDays = Object.keys(dailyTemps).map(day => {
            let maxTemp = Math.round(Math.max(...dailyTemps[day]));
            return `${day}: ${maxTemp}°F`;
        });

        forecastDays = forecastDays.slice(0, 3);

        // Step 4: Display
        let div = document.createElement("div");
        
        forecastDays.forEach(day => {
            let p = document.createElement("p");
            p.textContent = day;

            div.appendChild(p)
        })
        forecastInfo.appendChild(div);
    } catch(error) {
        console.error(error)
    }
}

fetchWeatherData();