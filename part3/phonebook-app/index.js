const express = require("express")
const morgan = require("morgan")

const app = express()

morgan.token("post-body", (req, res) => JSON.stringify(req.body))

app.use(express.static("public_html"))
app.use(express.json())
app.use(morgan(":method :url :status :res[content-length] - :response-time ms :post-body"))

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

app.get("/api/persons", (request, response) => {
  response.json(persons)
})

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(person => person.id === id)
  if (person === undefined) {
    response.status(404).json({ error: "person not found" })
    return
  }
  response.json(person)
})

app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(person => person.id === id)
  if (person === undefined) {
    response.status(404).json({ error: "person not found" })
    return
  }
  persons = persons.filter(person => person.id !== id)
  response.status(204).end()
})

app.post("/api/persons", (request, response) => {
  const tmpPerson = request.body
  if (!tmpPerson.name) {
    response.status(400).json({ error: "name is missing" })
    return
  }
  if (!tmpPerson.number) {
    response.status(400).json({ error: "number is missing" })
    return
  }
  const person = persons.find(person => person.name.toLowerCase() === tmpPerson.name.toLowerCase())
  if (person) {
    response.status(400).json({ error: "name must be unique" })
    return
  }
  const newPerson = {
    id: Math.floor(Math.random() * 1_000_000) + 1,
    name: request.body.name,
    number: request.body.number
  }
  persons = persons.concat(newPerson)
  response.status(201).json(newPerson)
})

app.get("/info", (request, response) => {
  response.send(`<p>Phonebook has info for ${persons.length}<br>${new Date()}</p>`)
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
