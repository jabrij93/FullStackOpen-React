import { useState, useEffect } from 'react'
import personService from './services/persons'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([])

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
      personService
        .create(nameObject)
        .then(response => {
          setPersons(persons.concat(response.data))
          setNewName('')
          setNewNumber('')
        })
      }
  }

  useEffect(() => {
    personService
      .getAll()
      .then(response=> {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'person')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleDelete = (id) => {
    const newPerson = persons.filter((person) => person.id === id)
    const newPersonName = newPerson[0]?.name

    if (newPersonName && window.confirm(`Do you want to delete ${newPersonName} ?`)) {
      personService
        .delete(id)
        setPersons(newPerson)
    }
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
      }).map((person, id) => {
        return (
        <Person key={person.id} person={person}  deleteButton={()=>handleDelete(person.id)} text='Delete' />
      );
      })
      }
      </ul>
    </div>
  )
}

export default App