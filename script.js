const apiKey = "04fef086ba472574d5169386c7ca4d30";

function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  if (!city) {
    alert("Please enter a city name.");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then((data) => {
      const weather = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>🌡️ Temperature: ${data.main.temp}°C</p>
        <p>💧 Humidity: ${data.main.humidity}%</p>
        <p>🌬️ Wind: ${data.wind.speed} m/s</p>
        <p>☁️ Condition: ${data.weather[0].description}</p>
      `;
      document.getElementById("weatherResult").innerHTML = weather;
    })
    .catch((error) => {
      document.getElementById("weatherResult").innerHTML = `<p style="color:red;">${error.message}</p>`;
    });
}
