import axios from "axios";

const getWeather = (countryName, cityName) => {
  return axios
    .get("https://geocoding-api.open-meteo.com/v1/search", {
      params: {
        name: `${cityName}, ${countryName}`
      }
    })
    .then((response) => {
      const result = response.data.results[0];
      return axios
        .get("https://api.open-meteo.com/v1/forecast", {
          params: {
            latitude: result.latitude,
            longitude: result.longitude,
            current_weather: true
          }
        });
    })
    .then((response) => {
      return response.data;
    });
};

export default { getWeather };
