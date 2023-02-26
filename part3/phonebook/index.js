const express = require('express')
const app = express()
app.use(express.json())

let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

const date = new Date()
let toString = date.toString()
let info = [`Phonebook has info for ${persons.length} people` , toString ]

app.get('/', (request, response) => {
  response.send('<h1>Phonebook Exercise 3.1 - 3.6 !</h1>')
})

app.get('/api/persons', (request, response) => {
  response.json(persons)
})

app.get('/info', (request, response) => {
    response.json(info)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person=> person.id === id)
  
    if (person) {
      response.json(person)
    } else {
      response.status(404).end()
    }
})

const generateId = () => {
    const randomId = persons.length > 0 
        ? Math.floor(Math.random() * 200) 
        : 0
    return randomId
}

app.post('/api/persons', (request, response) => {
    const body = request.body
    const existingPerson = persons.find(person=> person.name === body.name)

    if (!body.name || !body.number) {
        return response.status(400).json({ 
          error: 'content missing' 
        })
    } else if (existingPerson) {
        return response.status(400).json({
            error: 'name must be unique'
        })
    }
    
    const person = {
        id: generateId(),
        name: body.name,
        number: body.number
    }

    persons = persons.concat(person)
    response.json(person)
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)
  
    response.status(204).end()
})

const PORT = 3002
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})