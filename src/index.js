// import scripts
import dom from './dom.js';
import weather from './weather.js'; // For testing, import into dom.js later
// import styles
import 'normalize.css';
import './style.scss';

async function displayWeather() {
  try {
    const cityDOM = document.querySelector('#weather-city');
    const countryDOM = document.querySelector('#weather-country');
    const weatherDOM = document.querySelector('#weather-weather');
    const tempDOM = document.querySelector('#weather-temp');

    const weatherData = await weather.getWeatherData();
    const currentCity = weatherData.current.city;
    const currentCountry = weatherData.current.country;
    const currentWeather = weatherData.current.weather;
    const currentTemp = weatherData.current.temp;

    cityDOM.textContent = currentCity;
    countryDOM.textContent = currentCountry;
    weatherDOM.textContent = currentWeather;
    tempDOM.textContent = currentTemp;
  } catch (error) {
    console.log('Failed to get current weather data');
  }
}

displayWeather();
