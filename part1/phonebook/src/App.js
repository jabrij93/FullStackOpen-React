import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '012-3456789', id: 1 },
    { name: 'Ada Lovelace', number: '013-4567890', id: 2 },
    { name: 'Dan Abramov', number: '011-1234567', id: 3 },
    { name: 'Mary Poppendieck', number: '016-5556789', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState("")

  const addName = (event) => {
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


  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2> Phonebook </h2>
      <input type="text" placeholder="Search..." onChange= {(event) => setSearchTerm(event.target.value)} />

      <h2> Add Info </h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          phonenumber: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit"> add </button>
        </div>
      </form>

      <h2> Numbers </h2>

      <ul>
      {persons.filter((person) => {
        if (searchTerm === "") {
        return person
      } else if (person.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return person
      }
      }).map((person) => {
        return (
        <li key={person.name}> {person.name} {person.number} </li>
      );
      })
      }
      </ul>
    </div>
  )
}

export default App