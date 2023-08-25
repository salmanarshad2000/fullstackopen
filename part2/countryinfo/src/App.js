import { useState, useEffect } from 'react'
import countryService from './services/countries'
import Filter from './components/Filter'
import Countries from './components/Countries'

const App = () => {
  const [countries, setCountries] = useState(null)
  const [searchText, setSearchText] = useState('')
  useEffect(() => {
    countryService
      .getAll()
      .then(countries => {
        setCountries(countries)
      })
  }, [])
  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value)
  }
  return (
    <div>
      <Filter
        searchText={searchText}
        handleSearchTextChange={handleSearchTextChange}
      />
      <Countries
        countries={countries}
        searchText={searchText}
      />
    </div>
  )
}

export default App
