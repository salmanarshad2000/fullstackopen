import { useState, useEffect } from 'react'
import Filter from './components/Filter'

const App = () => {
  const [searchText, setSearchText] = useState('')
  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value)
  }
  return (
    <div>
      <Filter
        searchText={searchText}
        handleSearchTextChange={handleSearchTextChange}
      />
    </div>
  )
}

export default App
