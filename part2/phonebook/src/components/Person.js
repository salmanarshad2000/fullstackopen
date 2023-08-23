const Person = ({
  person,
  handleRemovePerson
}) => {
  return (
    <div>
      {person.name} {person.number} <button value={person.id} onClick={handleRemovePerson}>delete</button>
    </div>
  )
}

export default Person
