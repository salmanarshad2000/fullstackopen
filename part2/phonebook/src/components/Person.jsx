const Person = ({
  person,
  handleRemovePerson
}) => {
  return (
    <div>
      {person.name} {person.number} <button onClick={() => handleRemovePerson(person.id)}>delete</button>
    </div>
  );
};

export default Person;
