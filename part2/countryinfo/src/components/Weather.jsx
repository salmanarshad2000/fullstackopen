import { useState, useEffect } from "react";
import weatherService from "../services/weather";

const Weather = ({
  countryName,
  cityName
}) => {
  const [weatherData, setWeatherData] = useState(null);
  useEffect(() => {
    if (cityName === undefined) {
      return;
    }
    weatherService
      .getWeather(countryName, cityName)
      .then((data) => {
        setWeatherData(data.current_weather);
      })
      .catch((error) => {
        setWeatherData(null);
        console.log(`weatherService.getWeather failed: ${error.message}`);
      });
  }, [cityName, countryName]);
  if (weatherData === null) {
    return null;
  }
  return (
    <>
      <h3>Weather in {cityName}</h3>
      <ul>
        <li>temperature: {weatherData.temperature} &deg;C</li>
        <li>windspeed: {weatherData.windspeed} Km/h</li>
        <li>winddirection: {weatherData.winddirection}&deg;</li>
      </ul>
    </>
  );
};

export default Weather;
