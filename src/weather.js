const weather = (() => {
  const APIKey = 'e285b30befd26328ea0acf71efd28e09';

  async function getWeatherData() {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=surrey&appid=${APIKey}`
      );
      const data = await response.json();
      console.log('Succesfully fetched weather data');
      const weatherData = {
        current: {
          city: data.name,
          country: data.sys.country,
          weather: data.weather[0].main,
          temp: data.main.temp,
        },
      };
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
