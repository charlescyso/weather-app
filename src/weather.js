const weather = (() => {
  const APIKey = 'e285b30befd26328ea0acf71efd28e09';

  async function getWeatherData(query) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${APIKey}`
      );
      const data = await response.json();
      const weatherData = {
        current: {
          city: data.name,
          country: data.sys.country,
          weather: data.weather[0].main,
          temp: data.main.temp,
        },
      };
      console.log('Successfuly fetched weather data');
      return weatherData;
    } catch (error) {
      console.log('Failed to fetch weather data');
    }
  }
  return {
    getWeatherData,
  };
})();

export default weather;
