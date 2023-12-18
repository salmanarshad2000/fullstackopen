import { useState, useEffect } from "react";
import personService from "./services/persons";
import Filter from "./components/Filter";
import Notification from "./components/Notification";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchText, setSearchText] = useState("");
  const [notification, setNotification] = useState(null);
  useEffect(() => {
    personService
      .getAll()
      .then((persons) => {
        setPersons(persons);
      });
  }, []);
  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };
  const handleNewNameChange = (event) => {
    setNewName(event.target.value);
  };
  const handleNewNumberChange = (event) => {
    setNewNumber(event.target.value);
  };
  const handleCreatePerson = (event) => {
    event.preventDefault();
    const selectedPerson = persons.find((person) => person.name.toLowerCase() === newName.toLowerCase());
    if (selectedPerson) {
      if (window.confirm(`${newName} is already present in phonebook\n\nUpdate the phone number?`) === false) {
        return;
      }
      personService
        .update(selectedPerson.id, { ...selectedPerson, number: newNumber })
        .then((updatedPerson) => {
          setPersons(persons.map((person) => person.id !== selectedPerson.id ? person : updatedPerson));
          setNotification({ error: false, message: `Updated ${newName}` });
          setTimeout(() => {
            setNotification(null);
          }, 5000);
          setNewName("");
          setNewNumber("");
        })
        .catch((error) => {
          setNotification({ error: true, message: `personService.update failed: ${error.message}` });
          setTimeout(() => {
            setNotification(null);
          }, 5000);
        });
    } else {
      personService
        .create({ name: newName, number: newNumber })
        .then((createdPerson) => {
          setPersons(persons.concat(createdPerson));
          setNotification({ error: false, message: `Created ${newName}` });
          setTimeout(() => {
            setNotification(null);
          }, 5000);
          setNewName("");
          setNewNumber("");
        })
        .catch((error) => {
          setNotification({ error: true, message: `personService.create failed: ${error.message}` });
          setTimeout(() => {
            setNotification(null);
          }, 5000);
        });
    }
  };
  const handleRemovePerson = (id) => {
    const selectedPerson = persons.find((person) => person.id === id);
    if (window.confirm(`${selectedPerson.name} will be removed from phonebook\n\nProceed?`) === false) {
      return;
    }
    personService
      .remove(selectedPerson.id)
      .then(() => {
        setPersons(persons.filter((person) => person.id !== selectedPerson.id));
        setNotification({ error: false, message: `Removed ${selectedPerson.name}` });
        setTimeout(() => {
          setNotification(null);
        }, 5000);
      })
      .catch((error) => {
        setNotification({ error: true, message: `personService.create failed: ${error.message}` });
        setTimeout(() => {
          setNotification(null);
        }, 5000);
      });
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        searchText={searchText}
        handleSearchTextChange={handleSearchTextChange}
      />
      <h3>Add a new</h3>
      <Notification notification={notification} />
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
  );
};

export default App;
