import weather from './weather.js';

const dom = (() => {
  async function displayWeather(query) {
    try {
      const cityDOM = document.querySelector('#weather-city');
      const countryDOM = document.querySelector('#weather-country');
      const weatherDOM = document.querySelector('#weather-weather');
      const tempDOM = document.querySelector('#weather-temp');

      const weatherData = await weather.getWeatherData(query);
      const currentCity = weatherData.current.city;
      const currentCountry = weatherData.current.country;
      const currentWeather = weatherData.current.weather;
      const currentTemp = weatherData.current.temp;

      cityDOM.textContent = currentCity;
      countryDOM.textContent = currentCountry;
      weatherDOM.textContent = currentWeather;
      tempDOM.textContent = currentTemp;
    } catch (error) {
      console.log('Failed to query weather data');
      displayError();
    }
  }

  const displayError = () => {
    const cityDOM = document.querySelector('#weather-city');
    const countryDOM = document.querySelector('#weather-country');
    const weatherDOM = document.querySelector('#weather-weather');
    const tempDOM = document.querySelector('#weather-temp');

    cityDOM.textContent = 'Could not retrieve the weather';
    countryDOM.textContent = '';
    weatherDOM.textContent = '';
    tempDOM.textContent = '';
  };

  const submitForm = (e) => {
    e.preventDefault();

    const inputQuery = document.querySelector('#input-query').value;
    if (!inputQuery) {
      alert('Please enter a valid city');
      return;
    }
    displayWeather(inputQuery);
  };

  const init = () => {
    displayWeather('Surrey');
  };

  // event listeners
  const eventListeners = (() => {
    const formQuery = document.querySelector('#form-query');
    formQuery.addEventListener('submit', submitForm);
  })();

  return {
    init,
  };
})();

export default dom;
