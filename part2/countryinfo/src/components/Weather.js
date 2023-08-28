import { useState,useEffect } from 'react'
import weatherService from '../services/weather';

const Weather = ({
  country
}) => {
  const [weatherData, setWeatherData] = useState(null)
  useEffect(() => {
    if (country.capital instanceof Array) {
      weatherService
        .getWeather(country.name.common, country.capital[0])
        .then(weatherData => {
          setWeatherData(weatherData)
        })
    }
  }, [])


  return (
    <h3>Weather</h3>
  )
}

export default Weather
