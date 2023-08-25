const Country = ({
  country
}) => {
  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>
        Capital: {country.capital instanceof Array ? country.capital.join('; ') : '(unknown)'}<br />
        Area: {country.area}
      </p>
      <h3>Languages</h3>
      <ul>
        {Object.entries(country.languages).map(([code, name]) => <li key={code}>{name}</li>)}
      </ul>
      <div>
        <img src={country.flags.png} />
      </div>
    </div>
  )
}

export default Country
