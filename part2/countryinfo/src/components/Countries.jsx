const Countries = ({
  countries,
  handleCountrySelect
}) => {
  if (countries.length > 10) {
    return (
      <div>
        Too many matches, please refine your search
      </div>
    );
  }
  if (countries.length > 1) {
    return (
      <ul>
        {countries.map((country) => (
          <li key={country.id}>
            {country.name} <button onClick={() => handleCountrySelect(country.id)}>show</button>
          </li>
        ))}
      </ul>
    );
  }
  return null;
};

export default Countries;
