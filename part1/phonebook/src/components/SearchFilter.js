const SearchFilter = (props) => {
    {props.persons.filter((person) => {
    if (props.searchTerm === "") {
      return person
    } else if (person.name.toLowerCase().includes(props.searchTerm.toLowerCase())) {
      return person
    }
  }).map((person) => {
    return (
        <li key={person.name}> {person.name} {person.number} </li>
    );
  })
  }
}

export default SearchFilter