import Weather from './Weather'
const Country = ({
  country
}) => {
  
  return (
    <div>
      <h1>
        {country.name.common} <img src={country.flags.png} style={{ height: "1.5rem" }} />
      </h1>
      <p>
        Capital: {country.capital instanceof Array ? country.capital.join('; ') : '(unknown)'}<br />
        Area: {country.area}<br />
        Population: {country.population}<br />
      </p>
      <h3>Languages</h3>
      <ul>
        {Object.entries(country.languages).map(([code, name]) => (
          <li key={code}>{name}</li>
        ))}
      </ul>
      <Weather country={country}/>
    </div>
  )
}

export default Country
