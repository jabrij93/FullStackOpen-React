const AddName = (event, newName, newNumber, persons, setPersons, setNewName, setNewNumber) => {
    event.preventDefault()

    const nameObject = {
      name: newName,
      number: newNumber
    }

    const isNameExist = (value) => persons.some(person => person.name.includes(value))
    
    if (isNameExist(nameObject.name)) {
      alert("name already exist")
    } else {
      setPersons(persons.concat(nameObject))
      setNewName('')
      setNewNumber('')
    }
}

export default AddName