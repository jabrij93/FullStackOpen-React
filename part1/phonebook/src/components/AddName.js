const AddName = (props, event) => {
    event.preventDefault()

    const nameObject = {
      name: props.newName,
      number: props.newNumber2
    }

    const isNameExist = (value) => props.persons.some(person => person.name.includes(value))
    
    if (isNameExist(nameObject.name)) {
      alert("name already exist")
    } else {
      props.setPersons(props.persons.concat(nameObject))
      props.setNewName('')
      props.setNewNumber('')
    }
}

export default AddName