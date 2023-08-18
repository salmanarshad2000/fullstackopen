const Persons = ({
  persons,
  searchText
}) => {
  console.log(persons, searchText)
  return (
    <div>
      {persons
        .filter(person => searchText === '' || person.name.toLowerCase().includes(searchText.toLowerCase()))
        .map(person => (<div key={person.name}>{person.name} {person.number}</div>))}
    </div>
  )
}

export default Persons
