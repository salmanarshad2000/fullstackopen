import axios from 'axios'

const getWeather = (country, city) => {
  return axios
    .get('https://geocoding-api.open-meteo.com/v1/search', {
      params: {
        name: `${city}, ${country}`
      }
    })
    .then(response => {
      console.group('grocoding response')
      console.log(response)
      console.groupEnd()
      return axios
        .get('https://api.open-meteo.com/v1/forecast', {
          params: {
            latitude: response.data.results[0].latitude,
            longitude: response.data.results[0].longitude,
            current_weather: true
          }
        })
    })
    .then(x=>{
      console.group("x")
      console.log(x)
      console.groupEnd()
      return x;
    })
}

export default { getWeather }
