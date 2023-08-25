import Country from './Country'

const Countries = ({
  countries,
  searchText
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
  return (
    <div>
      {filteredCountries.map(country => <Country key={country.cca3} country={country} />)}
    </div>
  )
}

export default Countries
