import Weather from "./Weather";

const Country = ({
  country
}) => {
  if (country === undefined) {
    return null;
  }
  return (
    <div>
      <h1>
        {country.name} <img src={country.flag} style={{ height: "1.5rem" }} />
      </h1>
      <p>
        Capital: {country.capital.join("; ")}<br />
        Area: {country.area}<br />
        Population: {country.population}<br />
      </p>
      <h3>Languages</h3>
      <ul>
        {country.languages.map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <Weather countryName={country.name} cityName={country.capital[0]} />
    </div>
  );
};

export default Country;
