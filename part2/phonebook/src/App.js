import { useState, useEffect } from 'react'
import personService from './services/persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchText, setSearchText] = useState('')
  useEffect(() => {
    personService
      .getAll()
      .then(persons => {
        setPersons(persons)
      })
  }, [])
  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value)
  }
  const handleNewNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNewNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleCreatePerson = (event) => {
    event.preventDefault()
    const selectedPerson = persons.find(person => person.name.toLowerCase() === newName.toLowerCase())
    if (selectedPerson) {
      if (window.confirm(`${newName} is already present in phonebook\n\nUpdate the phone number?`) === false) {
        return
      }
      personService
        .update(selectedPerson.id, { ...selectedPerson, number: newNumber })
        .then(updatedPerson => {
          setPersons(persons.map(person => person.id === selectedPerson.id ? updatedPerson : person))
          setNewName('')
          setNewNumber('')
        })
    } else {
      personService
        .create({ name: newName, number: newNumber })
        .then(createdPerson => {
          setPersons(persons.concat(createdPerson))
          setNewName('')
          setNewNumber('')
        })
    }
  }
  const handleRemovePerson = (event) => {
    const selectedId = Number(event.target.value)
    personService
      .remove(selectedId)
      .then(() => {
        setPersons(persons.filter(person => person.id !== selectedId))
      })
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        searchText={searchText}
        handleSearchTextChange={handleSearchTextChange}
      />
      <h3>Add a new</h3>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handleNewNameChange={handleNewNameChange}
        handleNewNumberChange={handleNewNumberChange}
        handleCreatePerson={handleCreatePerson}
      />
      <h3>Numbers</h3>
      <Persons
        persons={persons}
        searchText={searchText}
        handleRemovePerson={handleRemovePerson}
      />
    </div>
  )
}

export default App;
