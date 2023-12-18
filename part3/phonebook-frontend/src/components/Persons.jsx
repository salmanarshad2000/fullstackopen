import Person from "./Person";

const Persons = ({
  persons,
  searchText,
  handleRemovePerson
}) => {
  return (
    <div>
      {persons
        .filter((person) => searchText === "" || person.name.toLowerCase().includes(searchText.toLowerCase()))
        .map((person) => (
          <Person key={person.id} person={person} handleRemovePerson={handleRemovePerson} />
        ))}
    </div>
  );
};

export default Persons;
