import Country from './Country'

const Countries = ({
  countries,
  searchText,
  handleSearchTextChange
}) => {
  if (countries === null || searchText === '') {
    return null
  }
  const filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(searchText.toLowerCase()))
  if (filteredCountries.length > 10) {
    return (
      <div>
        Too many matches, please refine your search
      </div>
    )
  }
  if (filteredCountries.length > 1) {
    return (
      <ul>
        {filteredCountries.map(country => (
          <li key={country.cca3}>
            {country.name.common} <button value={country.name.common} onClick={handleSearchTextChange}>show</button>
          </li>
        ))}
      </ul>
    )
  }
  if (filteredCountries.length === 1) {
    return (
      <div>
        <Country country={filteredCountries[0]} />
      </div>
    )
  }
  return null
}

export default Countries
