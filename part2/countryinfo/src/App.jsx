import { useState, useEffect } from "react";
import countryService from "./services/countries";
import Filter from "./components/Filter";
import Countries from "./components/Countries";
import Country from "./components/Country";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedId, setSelectedId] = useState("");
  useEffect(() => {
    countryService
      .getAll()
      .then((data) => {
        const countries = data.map((country) => {
          return {
            id: country.cca3,
            name: country.name.common,
            area: country.area,
            population: country.population,
            flag: country.flags.png,
            languages: country.languages instanceof Object ? Object.values(country.languages) : [],
            capital: country.capital instanceof Array ? country.capital : []
          };
        });
        setCountries(countries);
      })
      .catch((error) => {
        console.log(`countryService.getAll failed: ${error.message}`);
      });
  }, []);
  const handleCountryFilter = (event) => {
    setSearchText(event.target.value);
    setSelectedId("");
  };
  const handleCountrySelect = (id) => {
    setSelectedId(id);
  };
  const filteredCountries = countries.filter((country) => country.name.toLowerCase().includes(searchText.toLowerCase()));
  const selectedCountry = filteredCountries.length === 1 ? filteredCountries[0] : countries.find((country) => country.id === selectedId);
  return (
    <div>
      <Filter
        searchText={searchText}
        handleCountryFilter={handleCountryFilter}
      />
      <Countries
        countries={filteredCountries}
        handleCountrySelect={handleCountrySelect}
      />
      <Country
        country={selectedCountry}
      />
    </div>
  );
};

export default App;
