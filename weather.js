document.getElementById('searchButton').addEventListener('click', async function() {
    const location = document.getElementById('locationInput').value.trim();
    if (location) {
        try {
            const apiKey = '7150721ba55c4ef45392f1c42728a754';
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            displayWeatherData(data);
        } catch (error) {
            console.error('Error fetching weather data:', error);
            alert('Failed to fetch weather data');
        }
    } else {
        alert('Please enter a location');
    }
});

function displayWeatherData(data) {
    const locationName = data.name;
    const weatherDescription = data.weather[0].description;
    const temperature = `${Math.round(data.main.temp)}°C`;
    const humidity = `Humidity: ${data.main.humidity}%`;

    document.getElementById('locationName').innerText = locationName;
    document.getElementById('weatherDescription').innerText = weatherDescription;
    document.getElementById('temperature').innerText = temperature;
    document.getElementById('humidity').innerText = humidity;
}
