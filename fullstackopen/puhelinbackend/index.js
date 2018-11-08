const express = require('express')
const app = express()
const morgan = require('morgan')

const bodyParser = require('body-parser')

app.use(bodyParser.json())

const cmorgan = morgan(function (tokens, req, res) {
  return [
    tokens.method(req, res),
    JSON.stringify(req.body),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms'
  ].join(' ')
})
app.use(cmorgan)




let persons = [
    {
      "name": "Arto Hellas",
      "number": "040-123456",
      "id": 1
    },
    {
      "name": "Martti Tienari",
      "number": "040-123456",
      "id": 2
    },
    {
      "name": "Arto Järvinen",
      "number": "040-123456",
      "id": 3
    },
    {
      "name": "Lea Kutvonen",
      "number": "040-123456",
      "id": 4
    }
  ]

app.get('/api/persons', (req, res) => {
  res.json(persons)
})

app.get('/api/persons/:id', (req, res) => {
  const person = persons.find(person => person.id === Number(req.params.id))
  if (person) {
    res.json(person)
  } else {
    res.status(404).end()
  }
})

const generateId = () => {
  return Math.floor(Math.random()*10000000000)
}

app.post('/api/persons', (request, response) => {
  const body = request.body

  if (body.name === undefined || body.number === undefined) {
    return response.status(400).json({error: 'name or number missing'})
  } else if (persons.find(person => person.name === body.name)) {
  	return response.status(400).json({error: 'name exists'})
  }

  const person = {
    name: body.name,
	number: body.number,
    id: generateId()
  }

  persons = persons.concat(note)

  response.json(person)
})

app.delete('/api/persons/:id', (req, res) => {
  persons = persons.filter(person => person.id === Number(req.params.id))
  response.status(204).end()
})

app.get('/info', (request, response) => {
  response.send('<p>puhelinluettelossa ' + persons.length + ' henkilön tiedot</p>'+
  				'<p>' + new Date()+ '</p>')
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
